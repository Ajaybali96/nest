import { ApiProperty } from "@nestjs/swagger";

export class savePlant{

    @ApiProperty()
    plantcode:string;

    @ApiProperty()
    plantName:string;

    @ApiProperty()
    Username:string;
}