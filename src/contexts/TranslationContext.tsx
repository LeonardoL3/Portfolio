import { useRouter } from 'next/router'
import { createContext, ReactNode, useMemo } from 'react'
import { localesData } from '../locale'
import { Translations, LocalesType } from '../types/translations'

interface LocaleProviderProps {
  children: ReactNode
}

interface TranslationContext {
	t: Translations
	language: 'pt'| 'en'| 'es'
}


export const TranslationContext = createContext({} as TranslationContext)

export const TranslationProvider = ({children}: LocaleProviderProps) => {

	const { locale = 'es' } = useRouter()

	const language = locale as 'pt'| 'en'| 'es'

	const t = localesData[locale as LocalesType]

	return (
		<TranslationContext.Provider value={{t, language}}>
			{children}
		</TranslationContext.Provider>
	)
}