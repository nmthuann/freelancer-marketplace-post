import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MajorAttributeValueEntity } from "./major.value.enity";


@Entity({name:'MajorAttributes'})
export class MajorAttributeEntity {
    @PrimaryGeneratedColumn()
    major_attribute_id: number

    @Column({nullable: false})
    major_attribute_name: string;

    
    @OneToMany(
        () => MajorAttributeValueEntity,
        (major_attribute_value) => major_attribute_value.major_attribute,
    )
    major_attribute_values: MajorAttributeValueEntity[];
}