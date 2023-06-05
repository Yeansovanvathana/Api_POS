import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  before_supply: number;

  @Column('float')
  after_supply: number;
  //For Foreign Key of product
  @Column('int')
  product_id: number;
  //For Foreign Key of stock
  @Column('int')
  stock_id: number;
  //For Foreign Key of catagories
  @Column('int')
  catagory_id: number;
}
