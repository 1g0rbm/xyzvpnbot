import axios from 'axios'
import { bot } from './init'
import { URL } from 'url'
import User from './models/User'
import logger from './utils/loggger/logger';
import { apiAuth, createVpnUser } from './utils/api/vpnServerApi';
import generatePassword from './utils/generatePassword';

try {
  bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)
  
    // Using context shortcut
    ctx.leaveChat()
  })
  
  bot.start(async (ctx) => {
    const { message: { from } } = ctx
    const user = await User.findOrCreate({
      where: { 
        id: from.id,
        username: from.username,
        firstName: from.first_name,
        lastName: from.last_name,
      }
    })
  
    const username = from.first_name ?? from.username
  
    ctx.reply(`Hi, ${username}\nType "/create_account" and get your VPN credentials`)
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
  
  bot.command('create_account', async (ctx) => {
    const {username, password} = await createVpnUser(ctx.from.username, generatePassword(8))
  
    ctx.reply(`Your vpn account credentials: login: ${username}, password: ${password}`)
  })

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
} catch(e) {
  logger.fatal(e)
}
