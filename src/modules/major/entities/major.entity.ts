import { CategoryEntity } from "src/modules/category/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MajorAttributeValueEntity } from "./major.value.enity";
import { PostEntity } from "src/modules/post/entities/post.entity";


@Entity({name:'Majors'})
export class MajorEntity {
    @PrimaryGeneratedColumn()
    major_id: number

    @Column({nullable: false})
    major_name: string


    @ManyToOne(() => CategoryEntity, (category) => category.majors, {
        eager: true,
    }) //
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;


    @OneToMany(
        () => MajorAttributeValueEntity,
        (major_attribute_value) => major_attribute_value.major,
    )
    major_attribute_values: MajorAttributeValueEntity[];


    @OneToMany(() => PostEntity, (post) => post.major)
    posts: PostEntity[];
}