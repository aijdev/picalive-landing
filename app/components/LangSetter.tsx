"use client";

import { useEffect } from "react";

/**
 * Sets `<html lang>` for localized routes on the client. Static export renders
 * one root `<html lang="en">`; Google reads hreflang (not this attribute) for
 * language targeting, but assistive tech benefits from the correct lang, so we
 * update it after hydration for the `/xx/` subtree.
 */
export function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
