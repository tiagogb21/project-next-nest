import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { usersProviders } from './users/users.provider';

@Module({
  imports: [ProductsModule, CategoriesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, UsersService, ...usersProviders],
})
export class AppModule {}
