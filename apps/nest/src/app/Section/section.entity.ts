
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Plant } from "../Plant/plant.entity";

@Entity()
@Unique(['sectionCode'])
export class section{
    @PrimaryGeneratedColumn('uuid', {
        name:'Id'
    })
    Id : string;
    
    @Column()
    sectionCode:string;

    @Column()
    sectionName:string;
    
    @Column()
    createdUser:string;
    
    @Column()
    updatedUser:string;
    
    @Column()
    plantCode:string;

    @ManyToOne(type =>Plant , plant => plant.section)
    plant:Plant[];
}

