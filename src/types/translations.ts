import { localesData } from '../locale'

export interface Translations {
  description: string;
  projects: string;
  salutation: string;
}

export type LocalesType = keyof typeof localesData