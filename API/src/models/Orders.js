const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Orders", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: "La fecha de la orden debe ser una fecha válida.",
        },
      },
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 255], 
          msg: "La dirección de envío debe tener entre 5 y 255 caracteres.",
        },
      },
    },
    totalAmmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          args: true,
          msg: "El monto total debe ser un decimal válido",
        },
        min: {
          args: [0],
          msg: "El monto total debe ser igual o mayor a cero.",
        },
      },
    },
  });
};
