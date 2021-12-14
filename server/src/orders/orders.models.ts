import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class OrderDTO {
    public id: number;
    public product_id: number;
    public street_address: string;
    public apartment: string;
    public city: string;
    public state: string;
    public country_code: string;
    public zip: string;
    public phone_number: string;
    public email: string;
    public name: string;
    public order_status: string;
    public payment_ref: string;
    public transaction_id: string;
    public payment_amt_cents: number;
    public ship_charged_cents: number;
    public ship_cost_cents: number;
    public subtotal_cents: number;
    public total_cents: number;
    public shipper_name: string;
    public payment_date: Date;
    public shipped_date: Date;
    public tracking_number: string;
    public tax_total_cents: number;
    public created_at: Date;
    public updated_at: Date;
}

@Entity({name: 'orders'})
export class Order  extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public product_id: number;
    @Column()
    public street_address: string;
    @Column()
    public apartment: string;
    @Column()
    public city: string;
    @Column()
    public state: string;
    @Column()
    public country_code: string;
    @Column()
    public zip: string;
    @Column()
    public phone_number: string;
    @Column()
    public email: string;
    @Column()
    public name: string;
    @Column()
    public order_status: string;
    @Column()
    public payment_ref: string;
    @Column()
    public transaction_id: string;
    @Column()
    public payment_amt_cents: number;
    @Column()
    public ship_charged_cents: number;
    @Column()
    public ship_cost_cents: number;
    @Column()
    public subtotal_cents: number;
    @Column()
    public total_cents: number;
    @Column()
    public shipper_name: string;
    @Column()
    public payment_date: Date;
    @Column()
    public shipped_date: Date;
    @Column()
    public tracking_number: string;
    @Column()
    public tax_total_cents: number;
    @CreateDateColumn()
    public created_at: Date;
    @UpdateDateColumn()
    public updated_at: Date;
}