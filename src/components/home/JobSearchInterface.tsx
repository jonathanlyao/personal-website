export function JobSearchInterface() {
  return (
    <div
      className="job-interface"
      role="img"
      aria-label="Low-fidelity Job Search OS interface showing side navigation, a job description analyzer, an unscored fit review, and matched evidence."
    >
      <div className="job-interface__topbar">
        <span className="job-interface__brand">
          <i aria-hidden="true" />
          Job Search OS
        </span>
        <span className="job-interface__window-controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="job-interface__body">
        <aside aria-hidden="true">
          <strong>Workspace</strong>
          <span className="is-active">Job Analyzer</span>
          <span>Import Inbox</span>
          <span>Tracker</span>
          <span>Profile</span>
        </aside>
        <div className="job-interface__main">
          <div className="job-interface__heading">
            <div>
              <span>ANALYSIS / 01</span>
              <strong>Job Analyzer</strong>
            </div>
            <span>Local workspace</span>
          </div>
          <div className="job-interface__panels">
            <div className="job-interface__input">
              <span>JOB DESCRIPTION</span>
              <div>
                <i />
                <i />
                <i />
                <i />
              </div>
              <button type="button" disabled>
                Analyze Fit
              </button>
            </div>
            <div className="job-interface__score">
              <span>FIT SCORE</span>
              <div>
                <strong>—</strong>
                <small>Review</small>
              </div>
            </div>
            <div className="job-interface__evidence">
              <span>MATCHED EVIDENCE</span>
              <div>
                <i />
                <i />
                <i />
                <i />
              </div>
              <small>Human review required</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
