import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CATEGORIES_REPOSITORY } from 'src/data/constant';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY)
    private categoriesRepository: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.findAll<Category>();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoriesRepository.findByPk<Category>(id);

    if (!category) {
      throw new HttpException('Category not found.', HttpStatus.NOT_FOUND);
    }

    return category;
  }

  async create(createCategoryDto: any): Promise<Category> {
    return this.categoriesRepository.create(createCategoryDto);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.findOne(id);
    this.categoriesRepository.update(updateCategoryDto, { where: { id: id } });
    return category;
  }

  async remove(id: number): Promise<Category> {
    const category = await this.findOne(id);
    await this.categoriesRepository.destroy({ where: { id: id } });
    return category;
  }
}
