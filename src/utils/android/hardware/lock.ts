/*
 * @Author: kingford
 * @Date: 2021-10-20 09:04:15
 * @LastEditTime: 2021-10-26 15:40:10
 */
import { asyncToAndroid } from '../core';

class Locker {
  constructor() {}

  getStatus(section: string, port: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'getLockStatus', args: [section, port] }, resolve, reject);
    });
  }

  getAllStatus() {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'getAllLockStatus', args: [] }, resolve, reject);
    });
  }

  open(section: number, port: number) {
    return this.setLock(section, port, true);
  }

  openAll(section: number) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'setAllLockStatus', args: [section, true] }, resolve, reject);
    });
  }

  private setLock(section: number, port: number, status: boolean) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'setLockStatus', args: [section, port, status] }, resolve, reject);
    });
  }
}

function createLocker() {
  return new Locker();
}

export const locker = createLocker();
