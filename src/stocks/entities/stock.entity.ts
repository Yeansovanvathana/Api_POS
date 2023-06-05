import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stocks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  quantity: number;

  @Column()
  type: string;
  //For Foreign Key of product  
  @Column('int')
  product_id: number;
}
