/*
 * @Author: kingford
 * @Date: 2021-10-26 15:48:14
 * @LastEditTime: 2021-10-28 11:09:17
 */
import { DynamicField } from '../types/common';

class Crud {
  createTable(tableName: string, struct: DynamicField, unique: string[]) {
    return new Promise((resolve, reject) => {
      android.initNormalTable(tableName, struct, unique, resolve, reject);
    });
  }

  createShadowTable(
    tableName: string,
    struct: DynamicField,
    unique: string[],
    shadowType: string,
    objectKey: string
  ): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.initNormalTable(tableName, struct, unique, shadowType, objectKey, resolve, reject);
    });
  }

  insert(tableName: string, data: DynamicField): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.insertData(tableName, data, resolve, reject);
    });
  }

  remove(query: any): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.delData(query, resolve, reject);
    });
  }

  update(query, data: DynamicField): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.updateData(query, data, resolve, reject);
    });
  }

  select(query): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.queryData(query, resolve, reject);
    });
  }
}

function createCrud() {
  return new Crud();
}

export const crud = createCrud();
