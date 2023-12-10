import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_permission_group')
export class UserPermissionGroupOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;
}
