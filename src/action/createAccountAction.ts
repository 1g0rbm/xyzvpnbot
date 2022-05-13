import { t } from 'i18next'
import { Context, Markup } from 'telegraf'
import { createVpnUser } from '../utils/api/vpnServerApi'
import generatePassword from '../utils/generatePassword'
import User, { UserStatus } from '../models/User'

const createAccountAction = async (ctx: Context) => {
  const {username, password} = await createVpnUser(ctx.from.username, generatePassword(8))

  const user = await User.findOne({
    where: { 
      id: ctx.from.id,
    }
  })

  user.status = UserStatus.HAVE_VPN
  user.password = password

  await user.save()

  const keyboard = Markup
    .keyboard([[t('button.show_vpn_account_data')]])
    .oneTime()
    .resize()

  ctx.replyWithHTML(
    t(
      'message.new_account',
      {
        login: user.username,
        password: user.password,
        common_key: 'common_key',
      }
    ),
    keyboard
  )
}

export default createAccountAction
