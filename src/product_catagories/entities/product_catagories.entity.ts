import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCatagories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
