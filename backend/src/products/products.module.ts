import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.provider';
import { CategoriesService } from 'src/categories/categories.service';
import { categoriesProviders } from 'src/categories/categories.provider';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ...productsProviders,
    CategoriesService,
    ...categoriesProviders,
  ],
})
export class ProductsModule {}
