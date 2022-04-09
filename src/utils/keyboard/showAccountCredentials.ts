import { Markup } from 'telegraf'

const SHOW_ACCOUNT_CREDENTIALS_BUTTON = '🗄️ Show account credentials'

const showAccountCredentialsKeyboard = Markup
  .keyboard([
    [SHOW_ACCOUNT_CREDENTIALS_BUTTON]
  ])
  .resize()

export {
  showAccountCredentialsKeyboard,
  SHOW_ACCOUNT_CREDENTIALS_BUTTON
}
