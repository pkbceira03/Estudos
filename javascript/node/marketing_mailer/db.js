import Sequelize from 'sequelize';

const db = new Sequelize({
    storage: './database.sqlite',
    dialect: 'sqlite',
});

try {
    await db.authenticate();
    console.log('Connection has been established successfully')
} catch (error) {
    console.log(`Unable to connect to the database: ${error.message}`)
}

const Lead = db.define(
    "Lead",
    {
        email:{
            type: Sequelize.STRING,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        verified:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        lastCampaign:{
            type: Sequelize.STRING
        },
        unsubscribe:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        LastClickedCampaign:{
            type: Sequelize.STRING
        },
    }, 
    {}
);

Lead.sync();

export default Lead;
