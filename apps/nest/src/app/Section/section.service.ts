import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { section } from "./section.entity";
import { sectiondto , Updatesectiondto } from '../../dto/section.dto';

@Injectable()
export class sectionService {
    constructor(
        @InjectRepository(section)
        private readonly sectionRepository: Repository<section>
    ){}

   async getAllsection() {
        return await this.sectionRepository.find();
    }

    async getsectionBysectionCode(sectionCode: string) {
        const section = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if(!section){
            throw new NotFoundException('section not found');
        }
        return section; 
    }

    async savesection(data: sectiondto) {
        const section = this.sectionRepository.create(data);
       
        await this.sectionRepository.save(data);
        return section;           
    }

    async activateOrDeactivatesectionBysectionCode(sectionCode:string , data:sectiondto) {
        const section = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!section) {
            throw new NotFoundException('section not found');
        }
        await this.sectionRepository.update({ sectionCode },data );
        return await this.sectionRepository.findOne({ sectionCode });
    }

    async editsection(sectionCode:string, data: Updatesectiondto) {
        const editedsection = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!editedsection) {
            throw new NotFoundException('section doesnot exist');
        }
        await this.sectionRepository.update({ sectionCode }, data);
        return await this.sectionRepository.findOne({ sectionCode });
    }

    async deletesection(sectionCode: string) {
        const plant = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!section) {
            throw new NotFoundException('section not found');
        }
        await this.sectionRepository.delete({ sectionCode });
        return { deleted: true };
    }
}