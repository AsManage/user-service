import { AbstractEntity } from '../abstract';
import { UserPermissionEntity } from '../userPermission';

export class UserRoleEntity extends AbstractEntity {
  private name: string;
  private group: string;
  private permission: UserPermissionEntity[];

  getRoleId() {
    return this.id;
  }

  getRoleName() {
    return this.name;
  }

  getRoleGroup() {
    return this.group;
  }

  getRolePermission() {
    return this.permission;
  }
}
