import Sequelize from 'sequelize'
const sequelize = new Sequelize('db_ap1', 'db_user', '!mnGPwb1974', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        // prevent sequelize from pluralizing table names
        freezeTableName: true,
        // prevent sequelize from adding timestamps column in tables
        //timestamps: false,
    },
    //logging: false,
})

try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database: ', error)
}
