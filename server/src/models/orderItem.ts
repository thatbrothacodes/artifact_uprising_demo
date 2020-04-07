export default (sequelize, types) => {
    return sequelize.define('OrderItem', {
        orderId: {
          type: types.UUID,
          primaryKey: true,
          defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        quantity: {
            type: types.INTEGER,
            allowNull: false
        },
        productId: {
            type: types.UUID,
            allowNull: false
        },
        description: {
            type: types.STRING,
            allowNull: false
        },
        price: {
            type: types.DECIMAL,
            allowNull: false
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    });
}
