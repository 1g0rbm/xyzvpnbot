import { bot } from './init'
import logger from './utils/loggger/logger'
import { t } from 'i18next'
import i18n from './init/i18n';
import startAction from './action/startAction';
import helpAction from './action/helpAction'
import createAccountAction from './action/createAccountAction'
import showAccountData from './action/showAccountDataAction';

const run = async () => {
  logger.info('Applocation is running')
  logger.info(process.env.TELEGRAM_WEBHOOK_URL)
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
    
    bot.hears(t('button.create_vpn_account'), createAccountAction)
    bot.hears(t('button.show_vpn_account_data'), showAccountData)

    bot.launch({
      webhook: {
        domain: process.env.TELEGRAM_WEBHOOK_URL,
        port: Number(process.env.TELEGRAM_PORT)
      }
    })
  
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
  } catch(e) {
    logger.fatal(e)
  }
}

run()