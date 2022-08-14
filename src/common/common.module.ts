import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  exports: [AxiosAdapter],
  providers: [AxiosAdapter],
})
export class CommonModule {}
