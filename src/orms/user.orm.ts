import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('user_info')
export class UserInfoOrm extends AbstractOrm {
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
