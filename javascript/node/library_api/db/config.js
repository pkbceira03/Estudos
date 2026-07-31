import { Sequelize } from "sequelize";

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./db/database.sqlite",
});

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Enable to connect to the database: ", error.message);
}

export default {
    Sequelize,
    db
}
