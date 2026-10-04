import { useTranslationContext } from './context/TranslationContext';
import { LANGUAGES } from './utils/translationConfig';

export type UiLang = 'id' | 'en' | 'zh';

// The authored page dictionaries cover Indonesian, English, and Chinese.
// The remaining supported locales use the shared UI translator while keeping
// Indonesian as a safe render fallback if a translation is unavailable.
export function useUiLang(): UiLang {
  const { currentLang } = useTranslationContext();
  return currentLang === 'en' ? 'en' : currentLang === 'zh' ? 'zh' : 'id';
}

// Keep the UI selector in lockstep with the 12-language content/audio setup.
export const UI_LANGUAGES = LANGUAGES;
