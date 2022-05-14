import { t } from 'i18next'
import { Context, Markup } from 'telegraf'

const helpAction = async (ctx: Context) => {
  ctx.reply(t('message.help'))
}

export default helpAction
