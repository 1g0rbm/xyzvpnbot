import dotenv from 'dotenv'

dotenv.config()

import { Sequelize, sequelize, dbConfig } from './db'
import { bot } from './bot'

export {
  Sequelize,
  sequelize,
  dbConfig,
  bot
}
