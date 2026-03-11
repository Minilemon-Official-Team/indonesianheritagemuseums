import { useTranslationContext } from '../../context/TranslationContext';
import { LangCode } from '../../utils/translationConfig';

export function ContentLanguageSwitcher() {
    const { currentLang, setLanguage, languages, isLoading } = useTranslationContext();
    const current = languages.find(l => l.code === currentLang);

    return (
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow border border-gray-200">
            <span className="text-lg">{current?.flag}</span>
            <span className="text-sm font-semibold text-gray-600">🔊</span>
            <select
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value as LangCode)}
                disabled={isLoading}
                className="text-sm font-medium text-gray-800 bg-transparent border-none cursor-pointer focus:outline-none"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.label}
                    </option>
                ))}
            </select>
            {isLoading && <span className="text-xs text-amber-500 animate-pulse">•••</span>}
        </div>
    );
}

