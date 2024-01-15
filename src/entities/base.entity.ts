import { timeTransformer } from 'src/utils/transformer-type-orm';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    transformer: timeTransformer,
  })
  createdAt: number;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    transformer: timeTransformer,
  })
  deletedAt: number;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    transformer: timeTransformer,
  })
  updatedAt: number;

  @Column({
    nullable: true,
    name: 'created_by',
  })
  createdBy: number;

  @Column({
    nullable: true,
    name: 'updated_by',
  })
  updatedBy: number;

  @Column({
    nullable: true,
    name: 'deleted_by',
  })
  deletedBy: number;

  @Generated('uuid')
  @Column({
    type: 'uuid',
  })
  code: string;
}
