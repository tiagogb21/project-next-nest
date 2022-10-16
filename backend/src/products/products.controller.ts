import { Controller, Param, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { PRODUCTS_REPOSITORY } from 'src/data/constant';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private productsRepository: typeof Product,
  ) {}

  create(productData: CreateProductDto) {
    return this.productsRepository.create({ ...productData });
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.findAll<Product>();
  }

  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findByPk<Product>(id);
  }

  update(id: number, productData: UpdateProductDto) {
    return this.productsRepository.update(
      { ...productData },
      {
        where: {
          id: id,
        },
      },
    );
  }

  remove(@Param('id') id: string) {
    return this.productsRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
