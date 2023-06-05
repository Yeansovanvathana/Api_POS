import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('int')
  price: number;

  @Column('int')
  min_stock: number;

  @Column('int')
  max_stock: number;

  @Column()
  barcode: string;
  //For Foreign Key of catagorie
  @Column('int')
  category_id: number;
}
