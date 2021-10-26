/*
 * @Author: kingford
 * @Date: 2021-10-26 19:53:53
 * @LastEditTime: 2021-10-26 20:00:35
 */
import { asyncToAndroid } from '../core';

class File {
  read(path: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'readFile',
          args: [path],
        },
        resolve,
        reject
      );
    });
  }

  readPage(path: string, pageIndex: number, pageSize: number) {
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'writeFile',
          args: [path, pageIndex, pageSize],
        },
        resolve,
        reject
      );
    });
  }

  write(path: string, content: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid(
        {
          method: 'writeFile',
          args: [path, content],
        },
        resolve,
        reject
      );
    });
  }
}

function createFiles() {
  return new File();
}

export const file = createFiles();
