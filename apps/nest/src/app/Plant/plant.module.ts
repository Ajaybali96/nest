import { Module } from '@nestjs/common';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { plantController } from './plant.controller';
    import { plantService } from './plant.service';
    import { Plant} from './plant.entity';

    @Module({
      imports: [TypeOrmModule.forFeature([Plant])],
      controllers: [plantController],
      providers: [plantService],
    })
    export class plantModule {}