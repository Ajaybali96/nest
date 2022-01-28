import { ApiProperty } from "@nestjs/swagger";
import {IsUUID, Length, Matches} from "class-validator";

export class savePlant{

    @ApiProperty({required : true})
    @IsUUID()
     readonly barcodeId: string;

    @ApiProperty({required : true})
    @Length(1,5,{ message:'more than 5 characters are not allowed'})
    @Matches(/([A-Z])/,{message:'Only Alphabets are allowed'})
    plantCode: string;

    @ApiProperty({ required: true })
    @Length(5, 30, { message: 'More than 30 chars are not allowed' })
    plantName: string;

    @ApiProperty({ required: true })
    @Length(5, 20, { message: 'More than 20 chars are not allowed' })
    createdUser: string;

    @ApiProperty({ required: true })
    @Length(5, 20, { message: 'More than 20 chars are not allowed' })
    updatedUser: string;

    @ApiProperty({ default: true })
    isActive: boolean;
}

export class Updatedto {
    @ApiProperty({ required: true })
    plantName: string;

    @ApiProperty({ required: true })
    updatedUser: string;
}

export class Statusdto {
    
    @ApiProperty({ default: true })
    isActive: boolean;
}
