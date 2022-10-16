import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/data/constant';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findByPk<User>(id);

    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findByPk<User>(email);

    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async create(createuserDto: any): Promise<User> {
    const user = await this.usersRepository.create(createuserDto);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    await this.usersRepository.update(updateUserDto, {
      where: { id: id },
    });
    return user;
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    await this.usersRepository.destroy({ where: { id: id } });
    return user;
  }
}
