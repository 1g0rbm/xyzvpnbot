import { t } from 'i18next'
import { Context, Markup } from 'telegraf'
import { createVpnUser } from '../utils/api/vpnServerApi'
import generatePassword from '../utils/generatePassword'
import User, { UserStatus } from '../models/User'

const createAccountAction = async (ctx: Context) => {
  ctx.replyWithHTML(t('message.account_creating'))

  const user = await User.findOne({
    where: { 
      id: ctx.from.id,
    }
  })

  const { password } = await createVpnUser(user.username, generatePassword(8))

  user.status = UserStatus.HAVE_VPN
  user.password = password

  await user.save()

  const keyboard = Markup
    .keyboard([
      [t('button.show_vpn_account_data')],
      [t('button.show_vpn_instructions')]
    ])
    .resize()

  const msg = [
    t(
      'message.new_account',
      {
        login: user.username,
        password: user.password,
        common_key: process.env.VPN_COMMON_KEY,
        ip_address: process.env.VPN_IP
      }
    ),
    t('message.help')
  ]

  ctx.replyWithHTML(
    msg.join('\n\n'),
    keyboard
  )
}

export default createAccountAction
