import { Column, Entity } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('user_permission_role_mapping')
export class UserPermissionRoleMappingOrm extends AbstractOrm {
  @Column({
    name: 'role_id',
    nullable: false,
  })
  roleId: number;

  @Column({
    name: 'permission_id',
    nullable: false,
  })
  permissionId: number;
}
