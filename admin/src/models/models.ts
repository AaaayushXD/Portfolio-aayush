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
  gthubLink: string;
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
