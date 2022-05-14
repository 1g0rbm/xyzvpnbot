import { t } from 'i18next'
import { Context, Markup } from 'telegraf'

const instructionAction = async (ctx: Context) => {
  ctx.reply(
    t('message.instructions'),
    {
      reply_markup: {
        inline_keyboard: [
          [{text: t('label.instruction_windows'), url: 'https://telegra.ph/Nastrojka-VPN-na-Windows-03-31'}],
          [{text: t('label.instruction_android'), url: 'https://telegra.ph/Nastrojka-VPN-na-Android-05-06'}],
        ]
      }
    }
  )
}

export default instructionAction
