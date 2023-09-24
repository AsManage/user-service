import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth_info')
export class AuthInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'token',
    nullable: false,
  })
  token: string;

  @Column({
    name: 'created_at',
    nullable: false,
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    nullable: true,
    default: null,
  })
  updatedAt: Date | null;

  @Column({
    name: 'deleted_at',
    nullable: true,
    default: null,
  })
  deletedAt: Date | null;

  @Column({
    name: 'created_by',
    nullable: false,
  })
  createdBy: Date;

  @Column({
    name: 'updated_by',
    nullable: true,
    default: null,
  })
  updatedBy: Date | null;

  @Column({
    name: 'deleted_by',
    nullable: true,
    default: null,
  })
  deletedBy: Date | null;
}
