import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema,
    }])
  ],
  exports: [UsersService],
  providers: [UsersService]
})
export class UsersModule {}
