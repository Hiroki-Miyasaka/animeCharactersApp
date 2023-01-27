import sequelize from './sequelize.js';
import { DataTypes } from 'sequelize';
import CharacterInfo from "./character.model.js";

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
User.hasMany(CharacterInfo, {foreignKey: "id"})
CharacterInfo.belongsToMany(User)

sequelize.sync().then(() => {
    console.log('User table created successfully');
}).catch((err) => {
    console.log('Unable to create table: ', err);
})

export default User;