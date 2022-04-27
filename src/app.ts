import { bot } from './init'
import User, { UserStatus } from './models/User'
import logger from './utils/loggger/logger'
import { createVpnUser } from './utils/api/vpnServerApi'
import generatePassword from './utils/generatePassword'
import { getCreateAccountButton } from './utils/keyboard/createAccount'
import { getShowAccountKeyboard } from './utils/keyboard/showAccountCredentials'
import i18n from './init/i18n';
import startAction from './action/startAction';
import helpAction from './action/helpAction'

const run = async () => {
  await i18n()

  try {
    bot.command('quit', (ctx) => {
      // Explicit usage
      ctx.telegram.leaveChat(ctx.message.chat.id)
    
      // Using context shortcut
      ctx.leaveChat()
    })

    bot.start(startAction)

    bot.help(helpAction)

    bot.command('vpn', async (ctx) => {
      ctx.reply('VPN settings will be here')
    })
    
    bot.launch({
      webhook: {
        domain: process.env.TELEGRAM_WEBHOOK_URL,
        port: Number(process.env.TELEGRAM_PORT)
      }
    })

    bot.hears(getCreateAccountButton(), async (ctx) => {
      const {username, password} = await createVpnUser(ctx.from.username, generatePassword(8))
  
      const user = await User.findOne({
        where: { 
          id: ctx.from.id,
        }
      })
  
      user.status = UserStatus.HAVE_VPN
      user.password = password
  
      await user.save()
  
      const messageText = [
        'Your vpn account credentials: ',
        `login: <b>${username}</b>`,
        `password: <b>${password}</b>`
      ]
  
      ctx.replyWithHTML(messageText.join('\n'), getShowAccountKeyboard())
    })
  
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
  } catch(e) {
    logger.fatal(e)
  }
}

run()