import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  id: number;
  categoryId: number;
  name: string;
  amount: number;
  price: number;
  description: string;
}
