import { DataTypes, Model, } from 'sequelize'
import { sequelize } from '../init'

interface UserInterface {
  id: number,
  username: string,
  firstName: string,
  lastName: string
}

interface UserInstance extends Model<UserInterface>, UserInterface {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true
    },
  }
)

export default User