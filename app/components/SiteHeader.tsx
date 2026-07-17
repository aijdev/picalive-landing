import { APP_STORE_URL, SITE_NAME } from "../lib/site";
import { type Locale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { Header } from "./Header";

/**
 * Server wrapper that resolves the dictionary for `locale` and passes only the
 * strings the (client) Header needs — keeping translation data off the client.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).common;

  const navItems = [
    { label: t.nav.features, href: localizedPath("/features", locale) },
    { label: t.nav.howItWorks, href: localizedPath("/how-it-works", locale) },
    { label: t.nav.examples, href: localizedPath("/examples", locale) },
    { label: t.nav.faq, href: localizedPath("/faq", locale) },
    { label: t.nav.about, href: localizedPath("/about", locale) },
  ];

  return (
    <Header
      locale={locale}
      navItems={navItems}
      appStore={{
        href: APP_STORE_URL,
        ariaLabel: t.appStoreAria.replace("{name}", SITE_NAME),
        name: t.appStoreName,
      }}
      homeAria={t.homeAria.replace("{name}", SITE_NAME)}
      menuLabels={{ open: t.openMenu, close: t.closeMenu }}
      switcherLabel={t.languageLabel}
    />
  );
}
