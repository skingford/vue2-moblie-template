/*
 * @Author: kingford
 * @Date: 2021-10-26 15:48:14
 * @LastEditTime: 2021-10-26 16:27:38
 */

import { asyncToAndroid } from '../core';
import { parseDesc } from './tool';
import { DynamicField } from '../types/common';

class Crud {
  insert(table: string, data: DynamicField) {
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'insertData',
          args: [table, JSON.stringify(data)],
        },
        resolve,
        reject
      );
    });
  }
  remove(table: string, where: string) {}
  update(table: string, data: any, where: string) {}
  select(desc: any) {
    const args = parseDesc(desc);
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'queryData',
          args: [
            args['tableName'],
            args['fields'],
            args['selection'],
            args['selectionArgs'],
            args['sortOrder'],
          ],
        },
        resolve,
        reject
      );
    });
  }
}

function createCrud() {
  return new Crud();
}

export const crud = createCrud();
