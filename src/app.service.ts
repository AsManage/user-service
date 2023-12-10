import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { findOperatorParser, getListPagingByEntity } from './utils/common';
import { isEmpty } from 'lodash';
import { UserPermissionOrm, UserRoleOrm } from './orms';
import { UserPermissionRoleMappingOrm } from './orms/user-role-permission-mapping.orm';
import { UserInfoOrm } from './orms/user.orm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserPermissionOrm)
    private userPermissionRepo: Repository<UserPermissionOrm>,
    @InjectRepository(UserPermissionRoleMappingOrm)
    private userPermissionRoleMappingRepo: Repository<UserPermissionRoleMappingOrm>,
    @InjectRepository(UserRoleOrm)
    private userRoleRepo: Repository<UserRoleOrm>,
    @InjectRepository(UserInfoOrm)
    private userInfoRepo: Repository<UserInfoOrm>,
  ) {}
  private AM_USER = {
    USER_PERMISSION: this.userPermissionRepo,
    USER_PERMISSION_ROLE_MAPPING: this.userPermissionRoleMappingRepo,
    USER_ROLE: this.userRoleRepo,
    USER_INFO: this.userInfoRepo,
  };

  async getOne(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_USER[entity];
    return await repository.findOne({ where: parsePayload });
  }

  async getByIds(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_USER[entity];
    return await repository.findByIds(parsePayload);
  }

  async getList(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_USER[entity];
    return await repository.find({ where: parsePayload });
  }

  async getListPaging(payload?: any, entity?: string) {
    const repository = this.AM_USER[entity];
    return await getListPagingByEntity(payload, repository);
  }

  async delete(payload?: any, entity?: string) {
    const repository = this.AM_USER[entity];
    return await repository.delete({ ...payload });
  }

  async update(payload?: any, entity?: string) {
    const repository = this.AM_USER[entity];
    const { conditions, data, id } = payload;
    const conditionParser = findOperatorParser(conditions);
    const updateData = Object.assign(
      data,
      id ? { updatedAt: new Date(), updatedBy: id } : {},
    );
    const result = await repository.update(conditionParser, updateData);
    if (!result.affected) {
      return {
        status: 404,
        message: 'NOT_FOUND',
      };
    }
    return repository.findOne({ where: conditionParser }, entity);
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
    const existed = await repository.findOne({ where: checkExisted }, entity);
    console.log(checkExisted);
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
