
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeepPartial, ManyToOne, OneToMany } from "typeorm"
import { BaseEntity } from "../../base/base.entity"
import { MajorEntity } from "../../major/entities/major.entity"


@Entity({name:'Categories'})
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({nullable: false})
    category_name: string

    @Column()
    description: string;

    /**
     * Kỹ thuật: Nested Set Model 
     * (1, 'Electronics', 1, 10),
     * (2, 'Mobile Phones', 2, 5),
     * (3, 'Laptops', 6, 9),
     * (4, 'Smartphones', 3, 4),
     * (5, 'Gaming Laptops', 7, 8);
     */
    @Column({ nullable: false })
    left_value: number;

    @Column({ nullable: false })
    right_value: number;

    @OneToMany(
        () => MajorEntity,
        (major) => major.category,
        // {onDelete: "RESTRICT"}
    )
    majors: MajorEntity[];
}
    