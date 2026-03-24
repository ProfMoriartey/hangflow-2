import type en from "../messages/en.json";

type Messages = typeof en;

declare global {
  // Use the structure of en.json as the master type for all languages
  interface IntlMessages extends Messages {}
}