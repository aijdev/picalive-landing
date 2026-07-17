/**
 * Static dictionary loader. Every locale is imported at build time (there is no
 * server at runtime for the static export), so `getDictionary` is a synchronous
 * map lookup with no dynamic import.
 */

import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { pt } from "./dictionaries/pt";
import { de } from "./dictionaries/de";
import { ja } from "./dictionaries/ja";
import { fr } from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { en, es, pt, de, ja, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
