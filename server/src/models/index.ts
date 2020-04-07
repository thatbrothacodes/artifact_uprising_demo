import { Sequelize, DataTypes } from 'sequelize';
import BillingAddress from './billingAddress';
import Order from './order';
import OrderItem from './orderItem';
import Product from './product';
import User from './user';
import ShippingAddress from './shippingAddress';

const sequelize = new Sequelize(
    'QueenandSlim', // database
    'API_QUEEN_AND_SLIM', // username
    'P@ssw0rd!', // password
    {
      host: (process.env.NODE_ENV) ? 'postgres': 'localhost',
      dialect: 'postgres',
      port: (process.env.NODE_ENV) ?  5432 : 5000
    },
);

export default {
    Sequelize,
    sequelize,
    BillingAddress: BillingAddress(sequelize, DataTypes),
    Order: Order(sequelize, DataTypes),
    OrderItem: OrderItem(sequelize, DataTypes),
    Product: Product(sequelize, DataTypes),
    ShippingAddress: ShippingAddress(sequelize, DataTypes),
    User: User(sequelize, DataTypes)
};
