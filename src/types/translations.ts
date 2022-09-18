import { localesData } from '../locale'

export interface Translations {
  description: string;
  projects: string
}

export type LocalesType = keyof typeof localesData