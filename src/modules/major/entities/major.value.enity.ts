import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MajorEntity } from "./major.entity";
import { MajorAttributeEntity } from "./major.attribute.entity";


@Entity({name:'MajorAttributeValues'})
export class MajorAttributeValueEntity {
    @PrimaryGeneratedColumn()
    value_id: number;

    @Column({nullable: false})
    value: string;

    // FK: entity
    @ManyToOne(() => MajorEntity, (major) => major.major_attribute_values, {
        eager: true,
    }) //
    @JoinColumn({ name: 'major_id' })
    major: MajorEntity;

    // FK: attribute
    @ManyToOne(
        () => MajorAttributeEntity, 
        (major_attribute) => major_attribute.major_attribute_values, {
        eager: true,
    }) 
    @JoinColumn({ name: 'major_attribute_id' })
    major_attribute: MajorAttributeEntity;



}