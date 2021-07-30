import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reportes } from './reporte.entity';
import { ReportesController } from './reportes.controller';
import { ReportesService } from './reportes.service';


@Module({
  imports: [TypeOrmModule.forFeature([Reportes]) ],
  controllers: [ReportesController],
  providers: [ReportesService]
})
export class ReportesModule {}
