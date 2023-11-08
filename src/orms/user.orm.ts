import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('user')
export class UserOrm extends AbstractOrm {
  @Column({
    name: 'first_name',
    nullable: true,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: true,
  })
  lastName: string;

  @Column({
    name: 'id_card',
    nullable: true,
  })
  idCard: string;

  @Column({
    name: 'handover_date',
    nullable: true,
  })
  handoverDate: string;

  @Column({
    name: 'location',
    nullable: true,
  })
  location: string;

  @Column({
    name: 'city',
    nullable: true,
  })
  city: string;

  @Column({
    name: 'province',
    nullable: true,
  })
  province: string;

  @Column({
    name: 'country',
    nullable: true,
  })
  country: string;

  @Column({
    name: 'working_position',
    nullable: true,
  })
  workingPosition: string;

  @Column({
    name: 'phone_number',
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    name: 'is_phone_nr_verified',
    nullable: true,
  })
  isPhoneNrVerified: boolean;

  @Column({
    name: 'email',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'is_email_verified',
    nullable: true,
  })
  isEmailVerified: string;

  @Column({
    name: 'gender',
    nullable: true,
  })
  gender: string;

  @Column({
    name: 'status',
    nullable: true,
  })
  status: string;

  @Column({
    name: 'role_id',
    nullable: true,
  })
  roleId: string;
}
