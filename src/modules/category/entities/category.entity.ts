
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { MajorEntity } from "../../major/entities/major.entity"
import { AbstractBaseEntity } from "src/modules/base/base.abstract.entity";


@Entity({name:'Categories'})
export class CategoryEntity extends AbstractBaseEntity {
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({nullable: false})
    category_name: string

    @Column({nullable: true, default: ""})
    description?: string;

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
    