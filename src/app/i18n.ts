import { useTranslationContext } from './context/TranslationContext';

export type UiLang = 'id' | 'en' | 'zh';

// The site's translation context tracks 12 languages; the page UI
// supports three. Anything outside en/zh falls back to Indonesian.
export function useUiLang(): UiLang {
  const { currentLang } = useTranslationContext();
  return currentLang === 'en' ? 'en' : currentLang === 'zh' ? 'zh' : 'id';
}

export const UI_LANGUAGES = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
] as const;
