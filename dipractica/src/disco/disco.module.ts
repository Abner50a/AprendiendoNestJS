import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiscoService } from './disco.service';

@Module({
  imports: [PowerModule],
  providers: [DiscoService],
  exports: [DiscoService]
  

})
export class DiscoModule {}
