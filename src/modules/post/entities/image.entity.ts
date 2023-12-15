// image.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PostEntity } from './post.entity';


@Entity({ name: 'Images' }) // Set the table name explicitly (optional)
export class ImageEntity {
  @PrimaryGeneratedColumn('uuid')
  image_id: string;

  @ManyToOne(() => PostEntity, (post) => post.images, {
    onUpdate: 'CASCADE',
  })
  post: PostEntity;

  @Column({ nullable: false })
  url: string;
}