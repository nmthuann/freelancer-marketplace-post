import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PostEntity } from './post.entity'; // Giả sử bạn đã định nghĩa PostEntity

@Entity('Packages')
export class PackageEntity {
    @PrimaryGeneratedColumn()
    package_id: number;

    @Column({ length: 50,  nullable: false})
    package_name: string;

    @Column()
    caption: string;

    @Column({ length: 255 })
    revision: string;

    @Column({ nullable: false })
    delivery_day: number;

    @Column({ nullable: false })
    unit_price: number;

    // Bảng packages có khóa ngoại tham chiếu đến bảng posts
    @ManyToOne(() => PostEntity, { onUpdate: 'CASCADE' }) 
    @JoinColumn({ name: 'post_id' })
    post: PostEntity;
}
