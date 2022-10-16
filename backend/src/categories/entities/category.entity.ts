import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

@Table
export class Category extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  slug: string;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  status: number;

  @HasMany(() => Product)
  products: Product[];
}
