"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = "[data-reveal]";
const architectureSelector = "[data-architecture-sequence]";
const architectureStepSelector = "[data-architecture-step]";
const architectureStepDelay = 220;
const architectureSettleDelay = 440;

function completeArchitectureSequence(element: HTMLElement) {
  element.classList.remove("is-sequencing");
  element.classList.add("is-sequence-complete");
  element
    .querySelectorAll<HTMLElement>(architectureStepSelector)
    .forEach((step) => step.classList.remove("is-active"));
}

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let revealObserver: IntersectionObserver | null = null;
    let architectureObserver: IntersectionObserver | null = null;
    let architectureTimers: number[] = [];

    function clearArchitectureTimers() {
      architectureTimers.forEach((timer) => window.clearTimeout(timer));
      architectureTimers = [];
    }

    function disconnectObservers() {
      revealObserver?.disconnect();
      architectureObserver?.disconnect();
      revealObserver = null;
      architectureObserver = null;
      clearArchitectureTimers();
    }

    function revealCurrentHashTarget() {
      const targetId = window.location.hash.slice(1);

      if (!targetId) {
        return;
      }

      let decodedTargetId = targetId;
      try {
        decodedTargetId = decodeURIComponent(targetId);
      } catch {
        // Use the raw fragment when a malformed escape sequence is present.
      }

      const target = document.getElementById(decodedTargetId);
      const revealElement = target?.closest<HTMLElement>(revealSelector);
      revealElement?.classList.add("is-reveal-visible");
    }

    function startArchitectureSequence(element: HTMLElement) {
      if (
        element.classList.contains("is-sequencing") ||
        element.classList.contains("is-sequence-complete")
      ) {
        return;
      }

      const steps = Array.from(
        element.querySelectorAll<HTMLElement>(architectureStepSelector),
      );

      if (steps.length === 0) {
        completeArchitectureSequence(element);
        return;
      }

      element.classList.add("is-sequencing");

      steps.forEach((step, index) => {
        architectureTimers.push(
          window.setTimeout(() => {
            step.classList.add("is-active");
          }, index * architectureStepDelay),
        );
      });

      architectureTimers.push(
        window.setTimeout(
          () => completeArchitectureSequence(element),
          (steps.length - 1) * architectureStepDelay +
            architectureSettleDelay,
        ),
      );
    }

    function configureMotion() {
      disconnectObservers();

      const revealElements = Array.from(
        document.querySelectorAll<HTMLElement>(revealSelector),
      );
      const architectureElements = Array.from(
        document.querySelectorAll<HTMLElement>(architectureSelector),
      );

      if (motionPreference.matches) {
        revealElements.forEach((element) =>
          element.classList.add("is-reveal-visible"),
        );
        architectureElements.forEach(completeArchitectureSequence);
        root.classList.add("motion-ready");
        return;
      }

      revealElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const isAlreadyVisible =
          bounds.bottom > 0 && bounds.top < window.innerHeight * 0.86;

        if (isAlreadyVisible) {
          element.classList.add("is-reveal-visible");
        }
      });
      revealCurrentHashTarget();

      root.classList.add("motion-ready");

      if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) =>
          element.classList.add("is-reveal-visible"),
        );
        architectureElements.forEach(completeArchitectureSequence);
        return;
      }

      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-reveal-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0,
        },
      );

      revealElements.forEach((element) => {
        if (!element.classList.contains("is-reveal-visible")) {
          revealObserver?.observe(element);
        }
      });

      architectureObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            observer.unobserve(entry.target);
            startArchitectureSequence(entry.target as HTMLElement);
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.15,
        },
      );

      architectureElements.forEach((element) => {
        if (!element.classList.contains("is-sequence-complete")) {
          architectureObserver?.observe(element);
        }
      });
    }

    configureMotion();
    motionPreference.addEventListener("change", configureMotion);
    window.addEventListener("hashchange", revealCurrentHashTarget);

    return () => {
      motionPreference.removeEventListener("change", configureMotion);
      window.removeEventListener("hashchange", revealCurrentHashTarget);
      disconnectObservers();
    };
  }, [pathname]);

  return null;
}
