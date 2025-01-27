export interface Skill {
  name: string;
  icon: string;
  style: string
  description: string;
}

export interface Client {
  id: number;
  client: string;
  short_description: string;
  project_type: string;
  images: string[];
  problem_description: string;
  solution: string;
  client_website: string;
}