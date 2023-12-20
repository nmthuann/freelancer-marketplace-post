import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

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

    @PrimaryColumn('date')
    begin_at: Date;

    @Column({ nullable: false })
    unit_price: number;

    // @Column()
    // user_id: Date;

    @CreateDateColumn({
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;
}