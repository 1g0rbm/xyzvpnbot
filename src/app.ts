import { initApp } from './init'

const { bot, sequelize } = initApp()

bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using context shortcut
  ctx.leaveChat()
})

bot.on('text', (ctx) => {
  console.log(ctx)
  // Explicit usage
  ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
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