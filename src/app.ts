import { bot } from './init'
import User, { UserInstance, UserStatus } from './models/User'
import logger from './utils/loggger/logger'
import { createVpnUser } from './utils/api/vpnServerApi'
import generatePassword from './utils/generatePassword'
import { createAccountKeyboard, CREATE_ACCOUNT_BUTTON } from './utils/keyboard/createAccountKeyboard'
import { showAccountCredentialsKeyboard } from './utils/keyboard/showAccountCredentials'

try {
  bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)
  
    // Using context shortcut
    ctx.leaveChat()
  })

  bot.start(async (ctx) => {
    const { message: { from } } = ctx
    const [user] = await User.findOrCreate({
      where: { 
        id: from.id,
        username: from.username,
        firstName: from.first_name,
        lastName: from.last_name,
      }
    })

    const keyboard = user.status === UserStatus.DO_NOT_HAVE_VPN 
      ? createAccountKeyboard
      : showAccountCredentialsKeyboard

    ctx.reply(`Hi, ${user.username}`, keyboard)
  })
  
  bot.help((ctx) => {
    ctx.reply('Help message will be here')
  })
  
  bot.command('vpn', async (ctx) => {
    ctx.reply('VPN settings will be here')
  })
  
  bot.launch({
    webhook: {
      domain: process.env.TELEGRAM_WEBHOOK_URL,
      port: Number(process.env.TELEGRAM_PORT)
    }
  })

  bot.hears(CREATE_ACCOUNT_BUTTON, async (ctx) => {
    const {username, password} = await createVpnUser(ctx.from.username, generatePassword(8))

    const user = await User.findOne({
      where: { 
        id: ctx.from.id,
      }
    })

    user.status = UserStatus.HAVE_VPN

    await user.save()

    const messageText = [
      'Your vpn account credentials: ',
      `login: <b>${username}</b>`,
      `password: <b>${password}</b>`
    ]

    ctx.replyWithHTML(
      messageText.join('\n'),
      showAccountCredentialsKeyboard
    )
  })

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
} catch(e) {
  logger.fatal(e)
}
