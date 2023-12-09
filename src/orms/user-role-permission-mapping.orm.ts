import { Entity, PrimaryColumn } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('user_permission_role_mapping')
export class UserPermissionRoleMappingOrm extends AbstractOrm {
  @PrimaryColumn({
    name: 'role_id',
    nullable: false,
  })
  roleId: string;

  @PrimaryColumn({
    name: 'permission_id',
    nullable: false,
  })
  permissionId: string;
}
