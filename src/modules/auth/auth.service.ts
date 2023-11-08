import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthInfoEntity } from 'src/orms';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthInfoEntity)
    private authRepository: Repository<AuthInfoEntity>,
  ) {}

  findAll(): Promise<AuthInfoEntity[]> {
    return this.authRepository.find();
  }

  findOne(id: number): Promise<AuthInfoEntity | null> {
    return this.authRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.authRepository.delete(id);
  }
}
