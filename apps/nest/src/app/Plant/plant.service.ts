
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Plant } from "./plant.entity";
import { savePlant , Updatedto , Statusdto } from '../../dto/plant.dto';

@Injectable()
export class plantService {
    constructor(
        @InjectRepository(Plant)
        private readonly plantRepository: Repository<Plant>
    ){}

   async getAllPlants() {
        return await this.plantRepository.find();
    }

    async getPlantByPlantCode(plantCode: string) {
        const plant = await this.plantRepository.findOne({
            where: {
                plantCode: plantCode,
            }
        });
        if(!plant){
            throw new NotFoundException('Plant not found');
        }
        return plant; 
    }

    async savePlant(data: savePlant) {
        const plant = this.plantRepository.create(data);
       
        await this.plantRepository.save(data);
        return plant;           
    }

    async activateOrDeactivateplantByplantCode(plantCode:string , data:Statusdto) {
        const plant = await this.plantRepository.findOne({
            where: {
                plantCode: plantCode,
            }
        });
        if (!plant) {
            throw new NotFoundException('plant not found');
        }
        await this.plantRepository.update({ plantCode },data );
        return await this.plantRepository.findOne({ plantCode });
    }

    async editPlant(plantCode:string, data: Updatedto) {
        const editedPlant = await this.plantRepository.findOne({
            where: {
                plantCode: plantCode,
            }
        });
        if (!editedPlant) {
            throw new NotFoundException('Plant doesnot exist');
        }
        await this.plantRepository.update({ plantCode }, data);
        return await this.plantRepository.findOne({ plantCode });
    }

    async deletePlant(plantCode: string) {
        const plant = await this.plantRepository.findOne({
            where: {
                plantCode: plantCode,
            }
        });
        if (!plant) {
            throw new NotFoundException('Plant not found');
        }
        await this.plantRepository.delete({ plantCode });
        return { deleted: true };
    }
}