import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  // @Column({
  //   nullable: false,
  //   unique: true,
  // })
  // email: string;

  @Column({
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    nullable: false,
  })
  password: string;
}
