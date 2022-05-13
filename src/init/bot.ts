import { Telegraf } from 'telegraf'

const bot: Telegraf = new Telegraf(process.env.TELEGRAM_API_TOKEN)

export { bot }
