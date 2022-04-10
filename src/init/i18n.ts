import i18next from 'i18next'
import Backend from 'i18next-locize-backend'
import resources from '../locales/index'

const i18n = async (lng: string = 'ru') => {
  await i18next
    .use(Backend)
    .init({
      lng,
      debug: !!process.env.DEV,
      resources
    })
}

export default i18n