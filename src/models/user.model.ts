import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserModel {
  constructor(@InjectRepository(UserEntity) private readonly userRes: Repository<UserEntity>) {}
}
