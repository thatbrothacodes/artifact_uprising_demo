export default (sequelize, types) => {
    return sequelize.define('User', {
        id: {
          type: types.UUID,
          primaryKey: true,
          defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        email: {
            type: types.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: types.STRING,
            allowNull: false,
            validate: {
                len: [8, 32]
            }
        },
        firstName: {
            type: types.STRING,
            allowNull: false
        },
        lastName: {
            type: types.STRING,
            allowNull: false
        },
        middleName: {
            type: types.STRING
        },
        createdAt: {
            field: 'createDate',
            type: types.DATE
        },
        updatedAt: {
            field: 'modifiedDate',
            type: types.DATE
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: true
    });
}
