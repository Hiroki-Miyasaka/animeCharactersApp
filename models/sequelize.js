import { Sequelize } from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDiarect = process.env.DB_DIARECT;

console.log(dbName, dbUser, dbPassword, dbHost, dbDiarect);

const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        host: dbHost,
        dialect: dbDiarect
    }
);

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully");
}).catch((err) => {
    console.error("Unable to connect to the database: ", err);
})

export default sequelize;