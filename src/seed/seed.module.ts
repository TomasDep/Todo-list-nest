import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ListsModule } from 'src/lists/lists.module';
import { UsersModule } from 'src/users/users.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ListsModule, UsersModule, CommonModule],
})
export class SeedModule {}
