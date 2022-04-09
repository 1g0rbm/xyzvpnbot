import { DataTypes, Model, } from 'sequelize'
import { sequelize } from '../init'

enum UserStatus {
  DO_NOT_HAVE_VPN = 'do_not_have_vpn',
  HAVE_VPN = 'have_vpn',
  HAVE_SUBSCRIPTION = 'have_subscription',
  FRIEND = 'friend'
}

interface UserInterface {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
  status: UserStatus
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
    status: {
      type: DataTypes.STRING,
      defaultValue: UserStatus.DO_NOT_HAVE_VPN,
      allowNull: false
    }
  }
)

export { UserStatus, UserInstance }

export default User