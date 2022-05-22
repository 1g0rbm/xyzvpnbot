import { bot, config } from './init'
import logger from './utils/loggger/logger'
import { t } from 'i18next'
import i18n from './init/i18n'
import startAction from './action/startAction'
import helpAction from './action/helpAction'
import createAccountAction from './action/createAccountAction'
import showAccountData from './action/showAccountDataAction'
import instructionAction from './action/instructionAction'

const run = async () => {
  await i18n()

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
  bot.hears(t('button.show_vpn_instructions'), instructionAction)

  bot.launch({
    webhook: {
      domain: process.env.TELEGRAM_WEBHOOK_URL ?? null,
      hookPath: process.env.TELEGRAM_WEBHOOK_PATH ?? null,
      port: Number(process.env.TELEGRAM_PORT)
    }
  })

  bot.catch((err, ctx) => {
    ctx.reply(t('message.user_error_template'))

    for (let adminId of config.adminIds) {
      ctx.telegram.sendMessage(adminId, t('message.admin_error_template', { message: err }))
    }

    logger.error(err)
  })

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

run()
