import { PRODUCTS_REPOSITORY } from 'src/data/constant';
import { Product } from './entities/product.entity';

export const productsProviders = [
  {
    provide: PRODUCTS_REPOSITORY,
    useValue: Product,
  },
];
