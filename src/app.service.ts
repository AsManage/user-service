import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthInfoEntity } from './orms';
import { findOperatorParser, getListPagingByEntity } from './utils/common';
import { isEmpty } from 'lodash';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AuthInfoEntity)
    private authRepo: Repository<AuthInfoEntity>,
  ) {}
  private AM_USER = {
    AUTH_INFO: this.authRepo,
  };

  async getOne(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_USER[entity];
    return await repository(entity).findOne(parsePayload);
  }

  async getByIds(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_USER[entity];
    return await repository(entity).findByIds(parsePayload);
  }

  async getList(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_USER[entity];
    return await repository.find(parsePayload);
  }

  async getListPaging(payload?: any, entity?: string) {
    const repository = this.AM_USER[entity];
    return await getListPagingByEntity(payload, repository);
  }

  async update(payload?: any, entity?: string) {
    const repository = this.AM_USER[entity];
    const { conditions, data, id } = payload;
    findOperatorParser(conditions);
    const updateData = Object.assign(
      data,
      !isEmpty(id) ? { updatedAt: new Date(), updatedBy: id } : {},
    );
    const result = await repository.update(conditions, updateData);
    if (!result.affected) {
      return {
        status: 404,
        message: 'NOT_FOUND',
      };
    }
    return this.getOne(conditions, entity);
  }
  async save(payload?: any, entity?: string) {
    const repository = this.AM_USER[entity];
    const { checkExisted, data } = payload;
    if (isEmpty(checkExisted)) {
      return await repository.save({
        ...payload,
        createdAt: new Date(),
        createdBy: payload.id,
      });
    }
    const existed = await this.getOne(checkExisted, entity);
    if (!isEmpty(existed)) {
      return {
        status: 400,
        message: 'BAD_REQUEST',
      };
    }
    return await repository.save({
      ...data,
      createdAt: new Date(),
      createdBy: data.id,
    });
  }
}
