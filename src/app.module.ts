import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ListsModule } from './lists/lists.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ListsModule,
    UsersModule,
    SeedModule,
    MongooseModule.forRoot('mongodb://localhost:27017/todo-list-nest'),
    CommonModule,
  ],
})
export class AppModule {}
