import { Markup } from 'telegraf'
import { t } from 'i18next'

let showAccountButton = null
const getShowAccountButton = () =>  {
  if (showAccountButton === null) {
    showAccountButton = t('button.show_vpn_account_data')
  }

  return showAccountButton
}

const getShowAccountKeyboard = () => {
  const keyboard = Markup
    .keyboard([
      [getShowAccountButton()]
    ])
    .resize()

  return keyboard
}

export { getShowAccountButton, getShowAccountKeyboard }
