import * as Localization from "expo-localization"
import i18n from "i18n-js"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { I18nManager } from "react-native"

// if English isn't your default language, move Translations to the appropriate language file.
import en, { Translations } from "./en"
import ar from "./ar"
import ko from "./ko"
import fr from "./fr"
import he from "./he"
import ru from "./ru"
import es from "./es"
import bg from "./bg"


i18n.fallbacks = true
/**
 * we need always include "*-US" for some valid language codes because when you change the system language,
 * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
 * if you change to another language and then return to English language code is now "en-US".
 */
i18n.translations = { ar, en, "en-US": en, ko, fr, he, ru, es, bg }

const setLanguage = async () => {
  const locale = await AsyncStorage.getItem("Language");

  if (!locale) {
    const deviceLocale = Localization.locale;
    AsyncStorage.setItem("Language", deviceLocale);
    i18n.locale = deviceLocale
  } else {
    i18n.locale = locale
  }
}

setLanguage();

// handle RTL languages
export const isRTL = Localization.isRTL
I18nManager.allowRTL(isRTL)
I18nManager.forceRTL(isRTL)

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text
