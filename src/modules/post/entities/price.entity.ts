import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { PackageEntity } from "./package.entity";

/**
 * 1. package_id (PK)
 * 4. begin_at (PK)
 * 3. user_id
 * 4. price
 * 5. modified_at
 */
@Entity({ name: 'Prices' }) 
export class PriceEntity {
    @PrimaryColumn()
    package_id: number;

    @PrimaryColumn('datetime')
    begin_at: Date;

    @Column({ nullable: false })
    unit_price: number;

    // @Column()
    // user_id: Date;

    // Bảng packages có khóa ngoại tham chiếu đến bảng posts
    @ManyToOne(() => PackageEntity, { onUpdate: 'CASCADE' }) 
    @JoinColumn({ name: 'package_id' })
    package: PackageEntity;


    @CreateDateColumn({
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;
}