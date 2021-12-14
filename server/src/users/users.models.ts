import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class UserDTO {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public superadmin: boolean;
    public shop_name: string;
    public remember_token: string;
    public created_at: Date;
    public updated_at: Date;
    public card_brand: string;
    public card_last_four: string;
    public trial_ends_at: Date;
    public shop_domain: string;
    public is_enabled: boolean;
    public billing_plan: string;
    public trial_starts_at: Date;
}

export class UserResponseDTO {
    public id: number;
    public name: string;
    public email: string;
    public shop_name: string;
    public shop_domain: string;
    public is_enabled: boolean;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.shop_name = user.shop_name;
        this.shop_domain = user.shop_domain;
        this.is_enabled = user.is_enabled;
    }
}

@Entity({name: 'users'})
export class User  extends BaseEntity  {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @Column()
    public password_hash: string;
    @Column()
    public password_plain: string;
    @Column()
    public superadmin: boolean;
    @Column()
    public shop_name: string;
    @Column()
    public remember_token: string;
    @CreateDateColumn()
    public created_at: Date;
    @UpdateDateColumn()
    public updated_at: Date;
    @Column()
    public card_brand: string;
    @Column()
    public card_last_four: string;
    @Column()
    public trial_ends_at: Date;
    @Column()
    public shop_domain: string;
    @Column()
    public is_enabled: boolean;
    @Column()
    public billing_plan: string;
    @Column()
    public trial_starts_at: Date;
}