import { Controller, Param, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { USERS_REPOSITORY } from 'src/data/constant';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: typeof User,
  ) {}

  create(userData: CreateUserDto) {
    return this.usersRepository.create({ ...userData });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findByPk<User>(id);
  }

  update(id: number, UserData: UpdateUserDto) {
    return this.usersRepository.update(
      { ...UserData },
      {
        where: {
          id: id,
        },
      },
    );
  }

  remove(@Param('id') id: string) {
    return this.usersRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
