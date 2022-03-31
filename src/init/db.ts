import { Dialect, Sequelize } from 'sequelize'

type dbConfigType = {
  username: string,
  password: string,
  database: string,
  host: string,
  port: number,
  dialect: Dialect
}

const dbConfig: dbConfigType = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres'
}

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
  }
)

export { Sequelize, sequelize }
