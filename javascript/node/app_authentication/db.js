import Sequelize from "sequelize";

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
});

try {
    await db.authenticate();
    console.log("connection has established sucessfully.")
} catch (error) {
    console.error("Unable to connect to the database: ", error)
}

export default {
    db,
    Sequelize,
}