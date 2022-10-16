import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { PRODUCTS_REPOSITORY } from 'src/data/constant';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private productsRepository: typeof Product,
    private categoriesService: CategoriesService,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.findAll<Product>();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findByPk<Product>(id);

    if (!product) {
      throw new HttpException('Product not found.', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  async create(createProductDto: any): Promise<Product> {
    await this.categoriesService.findOne(createProductDto.categoryId);
    const product = await this.productsRepository.create(createProductDto);
    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.categoriesService.findOne(updateProductDto.categoryId);
    const product = await this.findOne(id);
    await this.productsRepository.update(updateProductDto, {
      where: { id: id },
    });
    return product;
  }

  async remove(id: number): Promise<Product> {
    const product = await this.findOne(id);
    await this.productsRepository.destroy({ where: { id: id } });
    return product;
  }
}
