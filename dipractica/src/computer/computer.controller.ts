import { Controller,Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiscoService } from 'src/disco/disco.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuSerive: CpuService,
    private discoService: DiscoService,
  ) {}


  @Get()
  run(){
    return [
      this.cpuSerive.compute(1,2),
      this.discoService.getData()
    ]
  }
}
