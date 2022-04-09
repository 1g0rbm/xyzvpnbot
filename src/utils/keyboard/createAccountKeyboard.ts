import { Markup } from 'telegraf'

const CREATE_ACCOUNT_BUTTON = '🕳️ Get vpn account 🐇'

const createAccountKeyboard = Markup
  .keyboard([
    ['🕳️ Get vpn account 🐇']
  ])
  .oneTime()
  .resize()

export {
  createAccountKeyboard,
  CREATE_ACCOUNT_BUTTON
}
