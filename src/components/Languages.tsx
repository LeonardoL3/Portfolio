import { useContext } from 'react'
import { TranslationContext } from '../contexts/TranslationContext'

export const Languages = () => {
	const { language, setLanguage } = useContext(TranslationContext)

	return (
		<div className="text-black dark:text-white text-sm flex gap-2">
			{(['pt', 'en', 'es'] as const).map(lang => (
				<button
					key={lang}
					onClick={() => setLanguage(lang)}
					className={`transition-opacity ${language === lang ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-75'}`}
				>
					[ {lang} ]
				</button>
			))}
		</div>
	)
}
