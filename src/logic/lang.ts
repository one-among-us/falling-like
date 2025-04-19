export type Lang = 'zh_hans' | 'zh_hant' | 'en' | 'ja_jp'
const zhMap = { 'zh-tw': 'zh_hant', 'zh-hk': 'zh_hant', 'zh-sg': 'zh_hans', 'zh-cn': 'zh_hans', 'en': 'en', 'ja-jp': 'ja', 'ja': 'ja'}
export function getLang(): Lang {
  if (typeof window === 'undefined') return 'en'

  // Check if page has the ?lang= query
  // This is added to assist in archiving
  const url = new URL(window.location.href)
  const lang = url.searchParams.get('lang')
  if (lang && (lang == 'zh_hans' || lang == 'zh_hant' || lang == 'en' || lang == 'ja_jp')) return lang

  if (typeof localStorage === 'undefined') return 'en'

  // Language preference set, return
  const pref = localStorage.getItem("lang")
  if (pref && (pref == 'zh_hans' || pref == 'zh_hant' || pref == 'en' || pref == 'ja_jp')) return pref

  // No language preference, infer from user agent
  const langs = navigator.languages.map(it => it.toLowerCase())

  // If user agent contains any langauges starting with en[-]
  const en = langs.filter(it => it.startsWith("en"))
  if (en.length > 0) {
    localStorage.setItem('lang', 'en')
    return 'en'
  }

  const ja = langs.filter(it => it.startsWith("ja"))
  if (ja.length > 0) {
    localStorage.setItem('lang', 'ja_jp')
    return 'ja_jp'
  }
  // If user agent contains any langauges starting with zh-
  const zh = langs.filter(it => it.startsWith("zh-"))
  if (zh.length > 0 && zhMap[zh[0]]) {
    localStorage.setItem('lang', zhMap[zh[0]])
    return zhMap[zh[0]]
  }

  // default
  return 'zh_hans'
}

export function setLang(name: Lang) {
  if (name in zhMap) name = zhMap[name]
  localStorage.setItem('lang', name)
}
