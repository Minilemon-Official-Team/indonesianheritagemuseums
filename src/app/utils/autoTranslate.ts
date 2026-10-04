import type { LangCode } from './translationConfig';

const GTX_ENDPOINT = 'https://translate.googleapis.com/translate_a/single';

const TARGET_CODE: Record<LangCode, string> = {
  id: 'id',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  ar: 'ar',
  fr: 'fr',
  de: 'de',
  es: 'es',
  zh: 'zh-CN',
  ms: 'ms',
  th: 'th',
  nl: 'nl',
};

const cache = new Map<string, string>();

async function translateOne(text: string, lang: LangCode): Promise<string> {
  const key = `${lang}::${text}`;
  const cached = cache.get(key);
  if (cached !== undefined) return cached;

  try {
    const url =
      `${GTX_ENDPOINT}?client=gtx&sl=auto&tl=${TARGET_CODE[lang]}&dt=t&q=` +
      encodeURIComponent(text);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`translate request failed: ${res.status}`);
    const data = await res.json();
    const segments: unknown = data?.[0];
    if (!Array.isArray(segments)) return text;
    const translated = segments
      .map((segment) => (Array.isArray(segment) ? (segment[0] ?? '') : ''))
      .join('');
    const result = translated || text;
    cache.set(key, result);
    return result;
  } catch {
    return text;
  }
}

export async function translateMany(
  texts: string[],
  lang: LangCode,
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const unique = [...new Set(texts)].filter(Boolean);
  const concurrency = 8;
  let cursor = 0;

  async function worker() {
    while (cursor < unique.length) {
      const text = unique[cursor++];
      result.set(text, await translateOne(text, lang));
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, unique.length) }, worker),
  );
  return result;
}
