
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeepPartial, ManyToOne, OneToMany } from "typeorm"
import { BaseEntity } from "../base/base.entity"
import { MajorEntity } from "../major/entities/major.entity"


@Entity({name:'Categories'})
export class CategoryEntity extends BaseEntity {  //extends BaseEntity
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({nullable: false})
    category_name: string

    @Column()
    description: string

    @OneToMany(
        () => MajorEntity,
        (major) => major.category,
        // {onDelete: "RESTRICT"}
    )
    majors: MajorEntity[];
}
    