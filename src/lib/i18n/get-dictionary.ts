
import type { Language } from './config'

// We need to import the JSON files directly to ensure they are bundled
import ja from './ja.json'
import en from './en.json'

const dictionaries = {
  ja: () => Promise.resolve(ja),
  en: () => Promise.resolve(en),
}

export const getDictionary = async (locale: Language) => dictionaries[locale]?.() ?? dictionaries.ja()
