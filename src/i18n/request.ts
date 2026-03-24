import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  // Cast the dynamic import to a specific shape to satisfy the linter
  const messagesModule = (await import(`../../messages/${locale}.json`)) as {
    default: IntlMessages;
  };

  return {
    locale,
    messages: messagesModule.default,
  };
});