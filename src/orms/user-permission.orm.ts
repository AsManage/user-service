import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('user_permission')
export class UserPermissionOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    nullable: false,
  })
  description: string;
}
