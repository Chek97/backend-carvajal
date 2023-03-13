import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'contacts'})
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    lastName: string;
    
    @Column({ unique: true })
    email: string;
    
    @Column()
    phone: number;
    
    @Column()
    address: string;
    
    @Column()
    role: string;
    
    @Column()
    age: number;
}