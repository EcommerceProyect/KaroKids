const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Products",{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        creationDate:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        style:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    },{timestamps: false})
}