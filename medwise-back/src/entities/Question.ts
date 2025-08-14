import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  discipline!: string;

  @Column()
  topic!: string;

  @Column("text")
  statement!: string;

  @Column("text", { array: true })
  options!: string[];

  @Column()
  correct_option!: string;

  @Column("text", { nullable: true })
  explanation?: string;

  @CreateDateColumn()
  created_a!: Date;
}
