import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class UserAnswer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  user_id!: string;

  @Column()
  question_id!: string;

  @Column()
  selected_option!: string;

  @Column()
  is_correct!: boolean;

  @CreateDateColumn()
  answered_at!: Date;
}
