import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { categoriesProviders } from './categories.provider';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoriesProviders],
})
export class CategoriesModule {}
