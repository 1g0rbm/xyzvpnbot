import dotenv from 'dotenv'

dotenv.config()

import { Sequelize, sequelize, dbConfig } from './db'
import { bot } from './bot'
import i18n from './i18n'
import { config } from './config'

export {
  Sequelize,
  sequelize,
  dbConfig,
  bot,
  i18n,
  config
}
