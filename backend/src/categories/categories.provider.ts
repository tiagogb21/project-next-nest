import { CATEGORIES_REPOSITORY } from 'src/data/constant';
import { Category } from './entities/category.entity';

export const categoriesProviders = [
  {
    provide: CATEGORIES_REPOSITORY,
    useValue: Category,
  },
];
