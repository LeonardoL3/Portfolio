import { localesData } from '../locale'

export interface Translations {
  description: string;
  projects_description: string;
  salutation: string;
}

export type LocalesType = keyof typeof localesData