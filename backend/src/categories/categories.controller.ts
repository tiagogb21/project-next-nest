import { Controller, Param, Inject } from '@nestjs/common';
import { CATEGORIES_REPOSITORY } from 'src/data/constant';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(
    @Inject(CATEGORIES_REPOSITORY)
    private categoriessRepository: typeof Category,
  ) {}

  create(categoriesData: CreateCategoryDto) {
    return this.categoriessRepository.create({ ...categoriesData });
  }

  async findAll(): Promise<Category[]> {
    return this.categoriessRepository.findAll<Category>();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoriessRepository.findByPk<Category>(id);
  }

  update(id: number, categoriesData: UpdateCategoryDto) {
    return this.categoriessRepository.update(
      { ...categoriesData },
      {
        where: {
          id: id,
        },
      },
    );
  }

  remove(@Param('id') id: string) {
    return this.categoriessRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
