import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductInvoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column('float')
  price: number;

  @Column('float')
  total: number;
  //For Foreign Key of product
  @Column('int')
  product_id: number;
  //For Foreign Key of Product invoice
  @Column('int')
  invoice_id: number;
}
