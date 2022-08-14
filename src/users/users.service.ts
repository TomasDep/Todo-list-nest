import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.userModel.create(createUserDto);
      return user;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  public findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.userModel.find().limit(limit).skip(offset);
  }

  public async findOne(id: string): Promise<User> {
    const user: User = await this.userModel.findById(id);
    if (!user)
      throw new NotFoundException(
        `User with id '${id}' not found in the database`,
      );
    return user;
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.findOne(id);
    try {
      await user.updateOne(updateUserDto, { new: true });
      return { ...user.toJSON(), ...updateUserDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  public async remove(id: string): Promise<void> {
    const { deletedCount } = await this.userModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new BadRequestException(
        `The user with id '${id}' not found in the database`,
      );
    return;
  }

  private handleExceptions(error: any): void {
    console.error(error);

    if (error.code === 11000)
      throw new BadRequestException(
        `User exists in database ${JSON.stringify(error.keyValue)}`,
      );

    throw new InternalServerErrorException(
      'Sorry an error has occurred, please try again later',
    );
  }
}
