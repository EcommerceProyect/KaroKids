const {Datatypes} = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Users', {
    id:{
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: Datatypes.STRING,
        allowNull: false
    },
    last_name:{
        type: Datatypes.STRING,
        allowNull: false
    },
    email:{
        type: Datatypes.STRING,
        allowNull: false
    },
    password:{
        type: Datatypes.STRING,
        allowNull: false
    },
    registration_type:{
        type: Datatypes.STRING,
        allowNull: false
    }
   })
}