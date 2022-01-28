import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post,Put , ConflictException, NotFoundException, NotImplementedException } from '@nestjs/common';
import { sectionService } from './section.service';
import { ApiTags } from '@nestjs/swagger';
import { sectiondto, Updatesectiondto} from '../../dto/section.dto';

@ApiTags('section')
@Controller('section')
export class sectionController {
    constructor( private sectionService: sectionService) {}

    @Get()
    async getAllPlants() {
        try{
        const section = await this.sectionService.getAllsection();
        return {
            status: true,
            message: 'section fetched successfully',
            section
        };
    } catch (error){
        throw new NotImplementedException({
            status:false,
            message: 'method not implemented'
        });
    }
    
    }

    @Get(':sectionCode')
    async getsectionBysectionCode(@Param('sectionCode') sectionCode: string) {
        try{
            const section = await this.sectionService.getsectionBysectionCode(sectionCode);
            return {
                status: true,
                message: 'section fetched successfully',
                section,
            };
        } catch (error){
            throw new NotFoundException({
                status:false,
                message:'section not found'
            });
        }
    }

    @Post()
    async savesection(@Body() data: sectiondto) {
        try{
        const section = await this.sectionService.savesection(data);
        return {
            status: true,
            message: 'section created successfully',
            section,
        };
    } catch (error){
        
            throw new ConflictException({
                status:false,
                message:'section already exists'
            });
        
    }
       
   }

    @Post('sectionCode')
    async activateOrDeactivatesectionBysectionCode(
        @Param('sectionCode') sectionCode: string,
        @Body() data: sectiondto,
        ){
            try{
            await this.sectionService.activateOrDeactivatesectionBysectionCode(sectionCode,data);
            return {
                status: true,
                message: 'section updated successfully',
            };
        }  catch (error){
            throw new ConflictException({
                status:false,
                message:'boolean value are accepted'
            });
        }
        }

    @Patch('edit/:sectionCode')
    async editsection(@Param('sectionCode') sectionCode:string , @Body() data:Updatesectiondto){
            try{
        await this.sectionService.editsection(sectionCode, data);
        return{
            status: true,
            message:'section edited successfully'
        } ;
    } catch (error){
        throw new NotFoundException({
            status:false,
            message:'section not found'
        });
    }
    }

    @Delete('/delete/:sectionCode')
    async deletesection(@Param('sectionCode') sectionCode: string) {
        try{
       await this.sectionService.deletesection(sectionCode);
        return {
            status: true,
            message: 'section deleted successfully',
        };
    } catch(error){
        throw new NotFoundException({
            status:false,
            message:'section not found'
        });
    }
    }
    
}