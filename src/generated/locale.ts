interface Locale {
  readonly label: string;
  readonly code: string;
}

type LocaleKey =
  | "ja-JP"
  | "ko-KR"
  | "en-US"
  | "pt-BR"
  | "fr-FR"
  | "es-ES"
  | "de-DE"
  | "it-IT"
  | "ru-RU"
  | "zh-CN"
  | "en-GB"
  | "pl-PL"
  | "tr-TR"
  | "id-ID"
  | "vi-VN"
  | "th-TH"
  | "ar-SA"
  | "hi-IN"
  | "uk-UA"
  | "nl-NL"
  | "sv-SE"
  | "no-NO"
  | "da-DK";

type Locales = Record<LocaleKey, Locale>;

const locales: Locales = {
  "ja-JP": { label: "日本語", code: "JP" },
  "ko-KR": { label: "한국어", code: "KR" },
  "en-US": { label: "English (US)", code: "US" },
  "pt-BR": { label: "Português (Brasil)", code: "BR" },
  "fr-FR": { label: "Français", code: "FR" },
  "es-ES": { label: "Español", code: "ES" },
  "de-DE": { label: "Deutsch", code: "DE" },
  "it-IT": { label: "Italiano", code: "IT" },
  "ru-RU": { label: "Русский", code: "RU" },
  "zh-CN": { label: "中文 (简体)", code: "CN" },
  "en-GB": { label: "English (UK)", code: "GB" },
  "pl-PL": { label: "Polski", code: "PL" },
  "tr-TR": { label: "Türkçe", code: "TR" },
  "id-ID": { label: "Bahasa Indonesia", code: "ID" },
  "vi-VN": { label: "Tiếng Việt", code: "VN" },
  "th-TH": { label: "ไทย", code: "TH" },
  "ar-SA": { label: "العربية", code: "SA" },
  "hi-IN": { label: "हिन्दी", code: "IN" },
  "uk-UA": { label: "Українська", code: "UA" },
  "nl-NL": { label: "Nederlands", code: "NL" },
  "sv-SE": { label: "Svenska", code: "SE" },
  "no-NO": { label: "Norsk", code: "NO" },
  "da-DK": { label: "Dansk", code: "DK" },
};

export { locales, type Locale, type LocaleKey, type Locales };
