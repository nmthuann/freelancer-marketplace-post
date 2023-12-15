import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImageEntity } from "./image.entity";
import { MajorEntity } from "src/modules/major/entities/major.entity";
import { PackageEntity } from "./package.entity";
import { ReviewEntity } from "src/modules/review/review.entity";

@Entity({name: 'Posts'})
export class PostEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    post_id: string;

    @Column({nullable: false})
    title: string; //  => post name

    @Column({nullable: false})
    seller: string;

    @Column({nullable: false})
    description: string;

    @Column()
    FAQ: string


    @OneToMany(() => ImageEntity, (image) => image.post)
    //@JoinColumn({name: 'image_id'})
    images?: ImageEntity[];


    // MAJOR (FK)
    @ManyToOne(() => MajorEntity, (major) => major.posts, {
        eager: true,
    }) //
    @JoinColumn({ name: 'major_id' })
    major: MajorEntity;


    // PACKAGE (FK)
    @OneToMany(() => PackageEntity, (pkg) => pkg.post)
    packages?: PackageEntity[];

    // REVIEW (FK)
    @OneToMany(() => ReviewEntity, (review) => review.post)
    //@JoinColumn({name: 'image_id'})
    reviews?: ReviewEntity[];
    
}