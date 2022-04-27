import { t } from 'i18next'
import { Context, Markup } from 'telegraf'
import User from '../models/User'

const showAccountData = async (ctx: Context) => {
  const user = await User.findOne({
    where: { 
      id: ctx.from.id,
    }
  })

  const keyboard = Markup
    .keyboard([[t('button.show_vpn_account_data')]])
    .oneTime()
    .resize()

  ctx.replyWithHTML(
    t(
      'message.account_data',
      {
        login: user.username,
        password: user.password,
        common_key: 'common_key',
      }
    ),
    keyboard
  )
}

export default showAccountData
