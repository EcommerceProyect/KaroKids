const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Sizes", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 10],
                message: "El nombre del tamaño debe tener entre 1 y 10 caracteres",
            },
        },
    });
}