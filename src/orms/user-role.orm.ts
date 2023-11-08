import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('user_role')
export class UserRoleOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'group',
    nullable: false,
  })
  group: string;
}
