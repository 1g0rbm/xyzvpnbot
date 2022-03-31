import { bot } from './init'
import User from './models/User';

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

  ctx.reply(`Hi, ${username}`)
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

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))