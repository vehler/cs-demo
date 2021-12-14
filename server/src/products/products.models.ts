import { Inventory } from "src/inventory/inventory.models";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class ProductDTO {
    public id: number;
    public product_name: string;
    public description: string;
    public style: string;
    public brand: string;
    public created_at: Date;
    public updated_at: Date;
    public url: string;
    public product_type: string;
    public shipping_price: number;
    public note: string;
    public admin_id: number;
}


@Entity({name: 'products'})
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public product_name: string;
    @Column()
    public description: string;
    @Column()
    public style: string;
    @Column()
    public brand: string;
    @CreateDateColumn()
    public created_at: Date;
    @UpdateDateColumn()
    public updated_at: Date;
    @Column()
    public url: string;
    @Column()
    public product_type: string;
    @Column()
    public shipping_price: number;
    @Column()
    public note: string;
    @Column()
    public admin_id: number;

    @OneToMany(() => Inventory, inventory => inventory.product)
    public inventory: Inventory[]

}