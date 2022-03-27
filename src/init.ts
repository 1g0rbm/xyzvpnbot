import dotenv from 'dotenv'
import { Telegraf } from 'telegraf'
import { Sequelize } from 'sequelize'

type initAppReturnType = {
  bot: Telegraf,
  sequelize: Sequelize,
}

const init = (): void => {
  dotenv.config()
}

export const initApp = (): initAppReturnType => {
  init()

  const bot: Telegraf = new Telegraf(process.env.TELEGRAM_API_TOKEN)
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      dialect: 'postgres'
    }
  )

  return {
    bot,
    sequelize
  }
}

export const initCliConfig = () => {
  init()

  return {
    dbConfig: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres'
    }
  }
}
