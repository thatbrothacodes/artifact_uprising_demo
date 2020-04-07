export default (sequelize, types) => {
    return sequelize.define('Product', {
        id: {
          type: types.UUID,
          primaryKey: true,
          defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        name: {
            type: types.STRING,
            allowNull: false
        },
        description: {
            type: types.STRING,
            allowNull: false
        },
        price: {
            type: types.DECIMAL,
            allowNull: false
        },
        imageUrl: {
            type: types.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    });
}
