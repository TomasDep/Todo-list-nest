import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid} from 'uuid';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []

  create(createUserDto: CreateUserDto): User {
    const { username } = createUserDto;

    const user: User = {
      id: uuid(),
      username,
      createAt: new Date().getTime()
    };

    this.users.push(user);

    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(user => user.id === id);

    if (!user)
      throw new NotFoundException(`User with id '${ id }' not found`);

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    let userDB = this.findOne(id);

    this.users = this.users.map(user => { 
      if (user.id === id) {
        userDB.updateAt = new Date().getTime();
        userDB = { ...userDB, ...updateUserDto, }
        return userDB;
      }
      return user;
    });

    return userDB;
  }

  remove(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  public fillListsWithSeedData(users: User[]) {
    this.users = users;
  }
}
