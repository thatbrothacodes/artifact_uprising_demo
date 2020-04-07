
export default (sequelize, types) => {
    return sequelize.define('ShippingAddress', {
        id: {
          type: types.UUID,
          primaryKey: true,
          defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        userId: {
            type: types.UUID,
            allowNull: false
        },
        name: {
            type: types.STRING
        },
        cardNumber: {
            type: types.INTEGER,
            allowNull: false
        },
        cvv: {
            type: types.UUID,
            allowNull: false
        },
        isDefault: {
            type: types.BOOLEAN,
            allowNull: false
        },
        streetAddress: {
            type: types.STRING,
            allowNull: false
        },
        streetAddress2: {
            type: types.STRING,
            allowNull: false
        },
        city: {
            type: types.STRING,
            allowNull: false
        },
        state: {
            type: types.STRING,
            allowNull: false
        },
        postalCode: {
            type: types.STRING,
            allowNull: false
        },
        expirationDate: {
            type: types.DATE,
            allowNull: false
        },
        createDate: {
            type: types.DATE,
            defaultValue: types.NOW,
            allowNull: false
        },
        modifiedDate: {
            type: types.DATE,
            defaultValue: types.NOW,
            allowNull: false
        },
        createdBy: {
            type: types.STRING,
            allowNull: false,
        },
        modifiedBy: {
            type: types.STRING
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    });
}
