import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'created_at',
    nullable: false,
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    nullable: true,
    default: null,
  })
  updatedAt: Date | null;

  @Column({
    name: 'deleted_at',
    nullable: true,
    default: null,
  })
  deletedAt: Date | null;

  @Column({
    name: 'created_by',
    nullable: false,
  })
  createdBy: Date;

  @Column({
    name: 'updated_by',
    nullable: true,
    default: null,
  })
  updatedBy: Date | null;

  @Column({
    name: 'deleted_by',
    nullable: true,
    default: null,
  })
  deletedBy: Date | null;
}
