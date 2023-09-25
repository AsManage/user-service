import { Entity, Column } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('auth_info')
export class AuthInfoEntity extends AbstractEntity {
  @Column({
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'token',
    nullable: false,
  })
  token: string;
}
