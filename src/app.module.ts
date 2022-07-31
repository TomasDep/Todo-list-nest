import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ListsModule } from './lists/lists.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ListsModule, UsersModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
