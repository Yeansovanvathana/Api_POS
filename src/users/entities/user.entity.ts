import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @UpdateDateColumn({ nullable: true })
  email_verified_at: Date;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  status: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  role: string;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;

  @CreateDateColumn({ nullable: true })
  created_at: Date;
}
