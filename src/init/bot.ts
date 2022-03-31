import { Telegraf } from 'telegraf'

interface Bot extends Telegraf {}

const bot: Telegraf = new Telegraf(process.env.TELEGRAM_API_TOKEN)

export { bot }