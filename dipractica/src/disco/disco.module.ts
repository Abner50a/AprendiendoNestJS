import { Module } from '@nestjs/common';
import { DiscoService } from './disco.service';

@Module({
  providers: [DiscoService]
})
export class DiscoModule {}
