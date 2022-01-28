import { Module } from '@nestjs/common';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { sectionController } from './section.controller';
    import { sectionService } from './section.service';
    import { section} from './section.entity';

    @Module({
      imports: [TypeOrmModule.forFeature([section])],
      controllers: [sectionController],
      providers: [sectionService],
    })
    export class sectionModule {}