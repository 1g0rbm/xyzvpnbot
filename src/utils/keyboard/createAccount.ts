import { Markup } from 'telegraf'
import { t } from 'i18next'

let createAccountButton = null
const getCreateAccountButton = () =>  {
  if (createAccountButton === null) {
    createAccountButton = t('button.create_vpn_account')
  }

  return createAccountButton
}

const getCreateAccountKeyboard = () => {
  const keyboard = Markup
    .keyboard([
      [getCreateAccountButton()]
    ])
    .oneTime()
    .resize()

    return keyboard
}

export { getCreateAccountButton, getCreateAccountKeyboard }
