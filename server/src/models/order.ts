export default (sequelize, types) => {
    return sequelize.define('Order', {
        id: {
          type: types.UUID,
          primaryKey: true,
          defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        userId: {
            type: types.UUID,
            allowNull: false
        },
        tip: {
            type: types.DECIMAL,
            allowNull: false
        },
        total: {
            type: types.DECIMAL,
            allowNull: false
        },
        createDate: {
            type: types.DATE,
            defaultValue: types.NOW,
            allowNull: false
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    });
}
