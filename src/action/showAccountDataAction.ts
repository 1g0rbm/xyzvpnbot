import { t } from 'i18next'
import { Context, Markup } from 'telegraf'
import User from '../models/User'

const showAccountData = async (ctx: Context) => {
  const user = await User.findOne({
    where: { 
      id: ctx.from.id,
    }
  })

  const buttons = [
    [t('button.show_vpn_account_data')],
    user.hasVpn() ? [t('button.show_vpn_instructions')] : null,
  ].filter(line => !!line)

  const keyboard = Markup
    .keyboard(buttons)
    .resize()

  ctx.replyWithHTML(
    t(
      'message.account_data',
      {
        login: user.username,
        password: user.password,
        common_key: process.env.VPN_COMMON_KEY,
        ip_address: process.env.VPN_IP
      }
    ),
    keyboard
  )
}

export default showAccountData
