const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Sizes",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING(10),
            allowNull: false,
            unique:true,
            validate: {
                len: {
                    args: [1,10],
                    msg: "La longitud del nombre debe tener entre 1 y 10 caracteres"
                },
                notEmpty:{
                    args:true,
                    msg: "El campo no puede estar vacío"
                }
            }
        }
    })}