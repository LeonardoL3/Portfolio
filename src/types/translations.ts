import { localesData } from '../locale'

export interface Translations {
  description: string;
  projects_description: string;
  salutation: string;
  nav_home: string;
  nav_skills: string;
  nav_contact: string;
}

export type LocalesType = keyof typeof localesData