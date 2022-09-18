import { useRouter } from 'next/router'
import { createContext, ReactNode, useMemo } from 'react'
import { localesData } from '../locale'
import { Translations, LocalesType } from '../types/translations'

interface LocaleProviderProps {
  children: ReactNode
}

interface TranslationContext {
	t: Translations
}


export const TranslationContext = createContext({} as TranslationContext)

export const TranslationProvider = ({children}: LocaleProviderProps) => {

	const { locale } = useRouter()

	const t = localesData[locale as LocalesType]

	/* const value = useMemo(() => {
		return {
			t
		}
	}, [locale])*/

	return (
		<TranslationContext.Provider value={{t}}>
			{children}
		</TranslationContext.Provider>
	)
}