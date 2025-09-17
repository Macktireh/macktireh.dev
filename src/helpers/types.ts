export type PageType<T = any> = {
  data: T[];
  start: number;
  end: number;
  total: number;
  currentPage: number;
  size: number;
  lastPage: number;
  url: {
    current: string;
    prev: string | undefined;
    next: string | undefined;
    first: string | undefined;
    last: string | undefined;
  };
};

export type PersonalCV = {
  name: string;
  title: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  articles: string;
};

export type ProjectCV = {
  name: string;
  title: string;
  description: string;
  demo: string | null;
  github: string | null;
  image: string;
};

export type SkillsCV = {
  category: string;
  projects: ProjectCV[];
};

export type ExperiencesCV = {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
};

export type OpenSource = {
  name: string;
  description: string;
  pypi: string;
  github: string;
};

export type EducationCV = {
  degree: string;
  institution: string;
  year: string;
  logo: string;
  type: string;
};

export type CV = {
  personal: PersonalCV;
  about: string;
  skills: SkillsCV[];
  experiences: ExperiencesCV[];
  openSource: OpenSource[];
  education: EducationCV[];
};
