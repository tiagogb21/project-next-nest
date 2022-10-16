import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: number;
}
