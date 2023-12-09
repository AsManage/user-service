import {
  In,
  Not,
  IsNull,
  Between,
  MoreThanOrEqual,
  LessThanOrEqual,
  Repository,
} from 'typeorm';
import * as moment from 'moment';

export const findOperatorParser = (data) => {
  const dataParser = data?.where ? data?.where : data;
  Object.keys(dataParser).map((itm) => {
    if (dataParser[itm] && dataParser[itm].type) {
      const { type, value } = dataParser[itm];
      switch (type) {
        case 'in':
          dataParser[itm] = In(value);
          break;
        case 'notin':
          dataParser[itm] = Not(In(value));
          break;
        case 'isnull':
          dataParser[itm] = IsNull();
          break;
        case 'between':
          const { from, to } = value;
          dataParser[itm] = Between(from, to);
          break;
        case 'moreThanOrEqual':
          dataParser[itm] = MoreThanOrEqual(value);
          break;
        case 'lessThanOrEqual':
          dataParser[itm] = LessThanOrEqual(value);
          break;
      }
    }
  });
  return dataParser;
};
export const startDateOfMonthOrDefault = (objData: any = {}) => {
  const { startDate, endDate } = objData;
  const currentTime = new Date();
  const defaultStartDate = moment(startDate || currentTime)
    .startOf('month')
    .format('YYYY-MM-DD 00:00:00');
  const defaultEndDate = moment(endDate || currentTime)
    .endOf('month')
    .format('YYYY-MM-DD 23:59:59');
  return {
    startDate: defaultStartDate,
    endDate: defaultEndDate,
  };
};
export const getListPagingByEntity = async (
  data: any,
  repository: Repository<any>,
) => {
  const { pagination, query, order, filter } = data;
  const limit = pagination?.limit;
  const skip = pagination?.page - 1 > 0 ? (pagination?.page - 1) * limit : 0;
  let conditions = query ? query : {};
  if (filter?.startDate && filter?.endDate) {
    conditions = {
      ...conditions,
      createdAt: Between(filter.startDate, filter.endDate),
    };
  }
  conditions = findOperatorParser(conditions);
  const result = await repository.findAndCount({
    where: conditions,
    take: pagination?.limit,
    skip,
    order,
  });
  return { total: result[1], result: result[0] };
};

export const filterObject = (data, field = []) => {
  const filterData = {};
  const newData = !field.length ? Object.keys(data) : field;
  newData.forEach((element) => {
    data[element] != null &&
      data[element] != undefined &&
      (filterData[element] = data[element]);
  });
  return filterData;
};

export const startDateOfMonth = (date: any = null) => {
  return moment(date || new Date())
    .startOf('month')
    .format('YYYY-MM-DD 00:00:00');
};
