import dotenv from 'dotenv'

dotenv.config()

import { Sequelize, sequelize } from './db'
import { bot } from './bot'

export {
  Sequelize,
  sequelize,
  bot
}
