import en from './messages/en.json';
 
type Messages = typeof en;
 
declare global {
  // Use implementation of en.json as the type for all messages
  interface IntlMessages extends Messages {}
}