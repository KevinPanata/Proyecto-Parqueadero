import { Module } from '@nestjs/common';
import { VehiculosService } from './vehiqlos.service';
import { VehiculosController } from './vehiqlos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiqlo.entity';
import { Auto } from './entities/auto.entity';
import { Moto } from './entities/moto.entity';
import { Camioneta } from './entities/camioneta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo, Auto, Moto, Camioneta])],
  controllers: [VehiculosController],
  providers: [VehiculosService],
  exports: [VehiculosService],
})
export class VehiculosModule {}