
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { section } from "../Section/section.entity";

@Entity()
@Unique(['plantCode'])
export class Plant{
    @PrimaryGeneratedColumn('uuid', {
        name:'barcode_id'
    })
    barcodeId : string;
    
    @Column()
    plantCode:string;

    @Column()
    plantName:string;
    
    @Column()
    createdUser:string;
    
    @Column()
    updatedUser:string;
    
    @Column('boolean', {
        name: 'is_active', default: true
    })
    isActive: boolean;

    @OneToMany(type => section , section => section.plant)
    section: section[];
}

