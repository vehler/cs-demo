import { Product } from "src/products/products.models";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class InventoryDTO {
    public id: number;
    public product_id: number;
    public quantity: number;
    public color: string;
    public size: string;
    public weight: number;
    public price_cents: number;
    public sale_price_cents: number;
    public cost_cents: number;
    public sku: string;
    public length: number;
    public width: number;
    public height: number;
    public note: string;
}

@Entity()
export class Inventory  extends BaseEntity  {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public product_id: number;
    @Column()
    public quantity: number;
    @Column()
    public color: string;
    @Column()
    public size: string;
    @Column()
    public weight: number;
    @Column()
    public price_cents: number;
    @Column()
    public sale_price_cents: number;
    @Column()
    public cost_cents: number;
    @Column()
    public sku: string;
    @Column()
    public length: number;
    @Column()
    public width: number;
    @Column()
    public height: number;
    @Column()
    public note: string;

    @ManyToOne(() => Product, product => product.inventory)
    @JoinColumn({name: 'product_id'})
    public product: number;
}