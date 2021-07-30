import { Module } from '@nestjs/common';
import { TypeOrmModule  } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReportesModule } from './reportes/reportes.module';
import { Usuarios } from './usuarios/usuarios.entity';
import { Reportes } from './reportes/reporte.entity';


@Module({
  imports: [TypeOrmModule.forRoot(
  {  type: 'sqlite',
      database: 'db.sqlite',
      entities: [Usuarios,Reportes],
      synchronize: true
}

  ),UsuariosModule, ReportesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
