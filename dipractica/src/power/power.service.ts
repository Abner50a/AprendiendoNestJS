import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  darEnergia(watts: number){
    console.log(`Energia : ${watts}`)
  }
}
