export interface VUserName {
  firstName: string;
  lastName: string;
}

export interface VIdentityCard {
  idCart: string;
  handoverDate: Date;
  handoverAddress: VAddress;
}

export interface VAddress {
  location: string;
  city: string;
  province: string;
  country: string;
}

export interface VContactInfo {
  phoneNumber: string;
  isPhoneNrVerified: boolean;
  email: string;
  isEmailVerified: boolean;
}

export enum VAccountStatus {
  archived = 'ARCHIVED',
  active = 'ACTIVE',
  other = 'OTHER',
}
export enum VWorkingPosition {
  accountingOfficer = 'ACCOUNTING_OFFICER',
}

export enum VGender {
  male = 'MALE',
  female = 'FEMALE',
  other = 'OTHER',
}
