import { createContext, ReactNode, useEffect, useState } from 'react'
import { localesData } from '../locale'
import { Translations, LocalesType } from '../types/translations'

interface LocaleProviderProps {
  children: ReactNode
}

interface TranslationContext {
	t: Translations
	language: 'pt' | 'en' | 'es'
	setLanguage: (lang: 'pt' | 'en' | 'es') => void
}

const STORAGE_KEY = 'language'
const DEFAULT_LANG = 'en' as const

export const TranslationContext = createContext({} as TranslationContext)

export const TranslationProvider = ({ children }: LocaleProviderProps) => {
	const [language, setLanguageState] = useState<'pt' | 'en' | 'es'>(DEFAULT_LANG)

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY) as 'pt' | 'en' | 'es' | null
		if (stored && stored in localesData) {
			setLanguageState(stored)
		}
	}, [])	

	const setLanguage = (lang: 'pt' | 'en' | 'es') => {
		localStorage.setItem(STORAGE_KEY, lang)
		setLanguageState(lang)
	}

	const t = localesData[language as LocalesType]

	return (
		<TranslationContext.Provider value={{ t, language, setLanguage }}>
			{children}
		</TranslationContext.Provider>
	)
}
