// Translation Configuration for Indonesian Heritage Museum
// All audio and translations served from Cloudflare R2 + Workers

export const R2_BASE_URL = 'https://pub-135a7545edfc4289af5e9373bf26a44b.r2.dev';
export const WORKER_API = 'https://translation-worker.dtopengkingdom.workers.dev';

export const LANGUAGES = [
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ms', label: 'Melayu', flag: '🇲🇾' },
    { code: 'th', label: 'ภาษาไทย', flag: '🇹🇭' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
] as const;

export type LangCode = typeof LANGUAGES[number]['code'];

// Convert zone name to safe R2/API key
export function toZoneKey(zoneName: string): string {
    return zoneName
        .toLowerCase()
        .replace(/[()&]/g, '')
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '_');
}

// Build R2 audio URL — ALL 12 languages including Indonesian use R2
export function buildAudioUrl(langCode: LangCode, zoneName: string): string {
    const zoneKey = toZoneKey(zoneName);
    return `${R2_BASE_URL}/audio/${langCode}/${zoneKey}.mp3`;
}

// Build translation API URL
export function buildTranslationUrl(langCode: LangCode, zoneName: string): string {
    const zoneKey = toZoneKey(zoneName);
    return `${WORKER_API}/api/translations/${langCode}/${zoneKey}`;
}

