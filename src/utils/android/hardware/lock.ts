/*
 * @Author: kingford
 * @Date: 2021-10-20 09:04:15
 * @LastEditTime: 2021-10-28 09:41:53
 */

class Locker {
  constructor() {}

  getStatus(section: number, port: number, timeout: number = 10) {
    return new Promise((resolve, reject) => {
      android.getLockStatus(section, port, resolve, reject, timeout);
    });
  }

  getAllStatus(timeout: number = 10) {
    return new Promise((resolve, reject) => {
      android.getAllLockStatus(resolve, reject, timeout);
    });
  }

  open(section: number, port: number, timeout: number = 10) {
    return new Promise((resolve, reject) => {
      android.setLockStatus(section, port, resolve, reject, timeout);
    });
  }

  openAll(section: number, timeout: number = 10) {
    return new Promise((resolve, reject) => {
      android.setAllLockStatus(section, resolve, reject, timeout);
    });
  }
}

function createLocker() {
  return new Locker();
}

export const locker = createLocker();
