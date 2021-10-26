/*
 * @Author: kingford
 * @Date: 2021-10-26 15:48:09
 * @LastEditTime: 2021-10-26 19:01:16
 */

import { asyncToAndroid } from '../core';
import { DynamicField } from '../types/common';

class DBConfig {
  init(name: string, struct: DynamicField, unique: string[]) {
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'initTable',
          args: [
            name,
            JSON.stringify(struct),
            JSON.stringify(unique),
            1,
            '',
            '',
            'false',
            '',
            '',
            '',
          ],
        },
        resolve,
        reject
      );
    });
  }

  initShadow(
    name: string,
    struct: DynamicField,
    unique: string[],
    shadowType: string,
    objectKey: string
  ) {
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'initTable',
          args: [
            name,
            JSON.stringify(struct),
            JSON.stringify(unique),
            1,
            '',
            '',
            'true',
            shadowType,
            objectKey,
            '',
          ],
        },
        resolve,
        reject
      );
    });
  }
}

function createDBConfig() {
  return new DBConfig();
}

export const dbConfig = createDBConfig();
