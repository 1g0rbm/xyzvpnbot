import { t } from 'i18next'
import { Context, Markup } from 'telegraf'
import { User as TelegramUser } from 'telegraf/typings/core/types/typegram'
import User, { UserInstance } from '../models/User'
import _ from 'lodash'

const startAction = async (ctx: Context) => {
  const user = await findOrCreateUser(ctx.from)

  const buttons = [
    user.hasVpn() ? [t('button.show_vpn_account_data')] : [t('button.create_vpn_account')]
  ]

  const keyboard = Markup
    .keyboard(buttons)
    .oneTime()
    .resize()

    const replyMessage = !user.hasVpn() ?
      t('message.geetings_for_new') :
      t('message.geetings_for_old', {
        login: user.username,
        password: user.password,
        common_key: process.env.VPN_COMMON_KEY,
        ip_address: process.env.VPN_IP
      })

  ctx.replyWithHTML(replyMessage, keyboard)
}

const findOrCreateUser = async (telegramUser: TelegramUser): Promise<UserInstance> => {
  const [user] = await User.findOrCreate({
    where: { 
      id: telegramUser.id,
    }
  })

  user.username = getUsername(telegramUser)
  user.firstName = telegramUser.first_name
  user.lastName = telegramUser.last_name

  await user.save()

  return user
}

function getUsername(telegramUser: TelegramUser): string {
  if (telegramUser.username) {
    return telegramUser.username
  }

  if (telegramUser.first_name) {
    return telegramUser.first_name
  }

  if (telegramUser.last_name) {
    return telegramUser.last_name
  }

  return telegramUser.id.toString()
}

export default startAction
