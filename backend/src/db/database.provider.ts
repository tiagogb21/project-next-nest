import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE } from 'src/data/constant';
import { Product } from 'src/products/entities/product.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'shopping-cart',
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
