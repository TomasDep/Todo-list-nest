import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { ListsModule } from './lists/lists.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './common/config/env.config';
import { JoiValidationSchema } from './common/config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ListsModule,
    UsersModule,
    SeedModule,
    MongooseModule.forRoot(process.env.MONGODB),
    CommonModule,
  ],
})
export class AppModule {}
