export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export type ResumeExperience = {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  employmentType?: string;
  bullets: readonly string[];
};

export type ResumeAdditionalExperience = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ResumeProject = {
  title: string;
  startDate: string;
  endDate: string;
  technologies: readonly string[];
  bullets: readonly string[];
  githubUrl?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  graduationDate: string;
};

export type CertificationItem = {
  title: string;
  expires?: string;
  credentialUrl?: string;
};

export type ResumeData = {
  name: string;
  professionalTitle: string;
  location: string;
  email: string;
  emailHref: string;
  linkedinUrl: string;
  githubUrl: string;
  lastUpdated: string;
  resumePdfUrl?: string;
  summary: string;
  skills: readonly SkillGroup[];
  experience: readonly ResumeExperience[];
  additionalExperience: readonly ResumeAdditionalExperience[];
  projects: readonly ResumeProject[];
  education: readonly EducationItem[];
  certifications: readonly CertificationItem[];
};
