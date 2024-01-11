export type Folders = {
  folder: "skills" | "projects";
};

export interface Detail {
  name: string;
  url: string;
}

export interface ProjectDetail extends Detail {
  description: string;
  demoLink: string;
  githubLink: string;
  demoId: string;
  demoPassword: string;
}

export interface ImageProp {
  files: File;
}

export interface SkillProps {
  skills: Detail[];
  addNewSkill: (folder: Folders, data: Detail) => void;
  removeSkill: (folder: Folders, name: Detail) => void;
}

export interface NewSkillProps {
  addNewSkill: (folder: Folders, data: Detail) => void;
}

export interface ShowSkillsProps {
  skills: Detail[];
  removeSkill: (folder: Folders, name: Detail) => void;
}

export interface ProjectProps {
  projects: ProjectDetail[];
  addProject: (folder: Folders, data: ProjectDetail) => void;
  removeProject: (folder: Folders, name: ProjectDetail) => void;
}

export interface AddProject {
  addProjects: (folder: Folders, data: ProjectDetail) => void;
}

export interface ShowProject {
  projects: ProjectDetail[];
  removeProject: (folder: Folders, name: ProjectDetail) => void;
}
