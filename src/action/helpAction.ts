import { t } from 'i18next'
import { Context, Markup } from 'telegraf'

const helpAction = async (ctx: Context) => {
  ctx.reply('Help message will be here')
}

export default helpAction
