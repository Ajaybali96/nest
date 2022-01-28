import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post,Put , ConflictException, NotFoundException, NotImplementedException } from '@nestjs/common';
import { plantService } from './plant.service';
import { ApiTags } from '@nestjs/swagger';
import { savePlant, Updatedto, Statusdto } from '../../dto/plant.dto';

@ApiTags('plant')
@Controller('plant')
export class plantController {
    constructor( private plantService: plantService) {}

    @Get()
    async getAllPlants() {
        try{
        const plant = await this.plantService.getAllPlants();
        return {
            status: true,
            message: 'Plants fetched successfully',
            plant
        };
    } catch (error){
        throw new NotImplementedException({
            status:false,
            message: 'method not implemented'
        });
    }
    
    }

    @Get(':plantCode')
    async getplantByplantCode(@Param('plantCode') plantCode: string) {
        try{
            const plant = await this.plantService.getPlantByPlantCode(plantCode);
            return {
                status: true,
                message: 'Plant fetched successfully',
                plant,
            };
        } catch (error){
            throw new NotFoundException({
                status:false,
                message:'plant not found'
            });
        }
    }

    @Post()
    async savePlant(@Body() data: savePlant) {
        try{
        const plant = await this.plantService.savePlant(data);
        return {
            status: true,
            message: 'Plant created successfully',
            plant,
        };
    } catch (error){
        
            throw new ConflictException({
                status:false,
                message:'plant already exists'
            });
        
    }
       
   }

    @Post('plantCode')
    async activateOrDeactivateplantByplantCode(
        @Param('plantCode') plantCode: string,
        @Body() data: Statusdto,
        ){
            try{
            await this.plantService.activateOrDeactivateplantByplantCode(plantCode,data);
            return {
                status: true,
                message: 'Plant status updated successfully',
            };
        }  catch (error){
            throw new ConflictException({
                status:false,
                message:'boolean value are accepted'
            });
        }
        }

    @Patch('edit/:plantCode')
    async editPlant(@Param('plantCode') plantCode:string , @Body() data:Updatedto){
            try{
        await this.plantService.editPlant(plantCode, data);
        return{
            status: true,
            message:'plant edited successfully'
        } ;
    } catch (error){
        throw new NotFoundException({
            status:false,
            message:'plant not found'
        });
    }
    }

    @Delete('/delete/:plantCode')
    async deletePlant(@Param('plantCode') plantCode: string) {
        try{
       await this.plantService.deletePlant(plantCode);
        return {
            status: true,
            message: 'Plant deleted successfully',
        };
    } catch(error){
        throw new NotFoundException({
            status:false,
            message:'plant not found'
        });
    }
    }
    
}