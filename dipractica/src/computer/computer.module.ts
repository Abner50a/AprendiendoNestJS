import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiscoModule } from 'src/disco/disco.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [DiscoModule, CpuModule],
  controllers: [ComputerController]
 
})
export class ComputerModule {}
