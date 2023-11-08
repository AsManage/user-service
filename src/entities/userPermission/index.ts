import { AbstractEntity } from '../abstract';

export class UserPermissionEntity extends AbstractEntity {
  private name: string;
  private description: string;

  getPermissionId() {
    return this.id;
  }

  getPermissionName() {
    return this.name;
  }

  getDescriptionName() {
    return this.description;
  }
}
