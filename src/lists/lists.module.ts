import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { List, ListSchema } from './entities/list.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ListsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: List.name,
        schema: ListSchema,
      },
    ]),
  ],
  exports: [ListsService, MongooseModule],
  providers: [ListsService],
})
export class ListsModule {}
