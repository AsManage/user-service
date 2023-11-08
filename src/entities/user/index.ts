import { AbstractEntity } from '../abstract';
import { UserRoleEntity } from '../userRole';
import {
  VAccountStatus,
  VAddress,
  VContactInfo,
  VGender,
  VIdentityCard,
  VUserName,
  VWorkingPosition,
} from './valueObject';

export class UserEntity extends AbstractEntity {
  userName: VUserName;
  identityCard: VIdentityCard;
  address: VAddress;
  workingPosition: VWorkingPosition;
  gender: VGender;
  contactInfo: VContactInfo;
  status: VAccountStatus;
  userRole: UserRoleEntity;

  getUserId() {
    return this.id;
  }
}
