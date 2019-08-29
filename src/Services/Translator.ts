export type Locale = 'en' | 'es' | 'fr' | 'pt'

export interface TranslatorInterface {
    translate (originalLocale: Locale, destinationLocale: Locale, value: string): string
}

export class Translator implements TranslatorInterface {
    translate (originalLocale: Locale, destinationLocale: Locale, value: string): string {
        return `NOT IMPLEMENTED. FROM: ${originalLocale} , TO: ${destinationLocale}, String ${value}`
    }
}
