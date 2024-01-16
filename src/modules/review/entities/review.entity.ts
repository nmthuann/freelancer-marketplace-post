import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PostEntity } from '../../post/entities/post.entity';
import { AbstractBaseEntity } from 'src/modules/base/base.abstract.entity';



/**
 * customer
 * rating
 * feedback
 * 
 */
@Entity({ name: 'Reviews' }) // Set the table name explicitly (optional)
export class ReviewEntity extends AbstractBaseEntity { //
    @PrimaryGeneratedColumn()
    review_id: number;

    @Column({nullable: false})
    buyer: string;

    @Column({nullable: false, type: 'int'})
    rating: number;

    @Column({nullable: false})
    feedback: string;

    @Column()
    image_url: string;

    @ManyToOne(() => PostEntity, (post) => post.reviews, {
        eager: true,
    }) //
    @JoinColumn({ name: 'post_id' })
    post: PostEntity;
}