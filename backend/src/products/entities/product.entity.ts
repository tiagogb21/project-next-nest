import {
  Column,
  DataType,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { Category } from 'src/categories/entities/category.entity';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'SET NULL',
  })
  categoryId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(10, 2).UNSIGNED.ZEROFILL,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING(3000),
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  @CreatedAt
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  @UpdatedAt
  updatedAt: Date;
}
