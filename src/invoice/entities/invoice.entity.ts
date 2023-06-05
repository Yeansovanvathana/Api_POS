import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal")
  total: number;

  @Column({type: 'boolean', default: false})
  is_paid: boolean;
  //For Foreign Key of user
  @Column()
  user_id: number;
}
