import { localesData } from '../locale'

export interface Translations {
  description: string;
  projects_description: string;
  skills_description: string;
  contact_me_description: string;
  download_resume: string;
  view_live_prefix: string;
  view_live_link: string;
  not_found_message: string;
  back_to_home: string;
  salutation: string;
}

export type LocalesType = keyof typeof localesData