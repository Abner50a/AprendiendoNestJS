import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiscoService {
  constructor(private powerService: PowerService){
  }

  getData() {
    console.log('Dar energia de 20 watts')
    this.powerService.darEnergia(20)
    return 'data'
  }

}
