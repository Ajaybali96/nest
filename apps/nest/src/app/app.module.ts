import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Plant } from './Plant/plant.entity';
import { section } from './Section/section.entity';
import { plantModule } from './Plant/plant.module';
import { sectionModule } from './Section/section.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ajay1996',
      database: 'pms',
      entities:[Plant , section],
      autoLoadEntities: true,
      synchronize: true,
    }), plantModule , sectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
