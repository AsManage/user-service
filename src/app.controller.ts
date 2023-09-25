import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CommonRequest } from './interfaces/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appSrv: AppService) {}

  @MessagePattern({ cmd: 'common-pattern' })
  async commonPattern(request: CommonRequest) {
    const { action, entity, payload } = request;
    const FUNCTION = {
      'GET-LIST': () => this.appSrv.getList(payload, entity),
      'GET-ONE': () => this.appSrv.getOne(payload, entity),
      'GET-BY-IDS': () => this.appSrv.getByIds(payload, entity),
      'GET-LIST-PAGING': () => this.appSrv.getListPaging(payload, entity),
      UPDATE: () => this.appSrv.update(payload, entity),
      SAVE: () => this.appSrv.save(payload, entity),
    };

    return await FUNCTION[action]();
  }
}
