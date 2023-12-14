
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeepPartial, ManyToOne, OneToMany } from "typeorm"
import { BaseEntity } from "../base/base.entity"


@Entity({name:'Categories'})
export class CategoryEntity extends BaseEntity { 
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({nullable: false})
    category_name: string

    @Column()
    description: string

    // @OneToMany(() =>CategoryDetailEntity, (category_detail) => category_detail.category)
    // category_detail: CategoryDetailEntity
}
    