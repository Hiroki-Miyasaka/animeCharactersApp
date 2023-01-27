// import sequelize from './sequelize.js';
// import { DataTypes } from 'sequelize';


// const CharacterInfo = sequelize.define('characters', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     characterName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//         allowNull: false
//         // public_id:{
//         //     type: DataTypes.STRING,
//         //     allowNull: false
//         // },
//         // url: {
//         //     type: DataTypes.STRING,
//         //     allowNull: false
//         // }
//     }
//     // image: {
//     //     type: DataTypes.STRING,
//     //     allowNull: false
//     // }
// });

// sequelize.sync().then(() => {
//     console.log("User table created successfully");
// }).catch((err) => {
//     console.log("Unable to create table: ", err);
// })

// export default CharacterInfo;