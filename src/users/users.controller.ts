import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  public findAll(@Query() paginationDto: PaginationDto) {
    console.log({ paginationDto });
    return this.usersService.findAll(paginationDto);
  }

  @Get(':id')
  public findOne(@Param('id', ParseMongoIdPipe) id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  public remove(@Param('id', ParseMongoIdPipe) id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
