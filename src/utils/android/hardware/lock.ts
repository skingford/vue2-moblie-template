/*
 * @Author: kingford
 * @Date: 2021-10-20 09:04:15
 * @LastEditTime: 2021-10-23 11:26:32
 */
import { LockerStatus } from '../types/hardware';

class Locker {
  constructor() {}

  /**
   * @description: 获取锁状态
   * @param {string} section
   * @param {string} port
   * @return {*}  {LockerStatus}
   * @memberof hardware
   */
  getLockStatus(section: string, port: string): LockerStatus {
    return android.getLockStatus(section, port);
  }

  /**
   * @description: 开关锁
   * @param {string} section
   * @param {string} port
   * @param {boolean} status
   * @return {*}  {LockerStatus}
   * @memberof hardware
   */
  setLock(section: string, port: string, status: boolean): LockerStatus {
    return android.setLock(section, port, status);
  }
}

function createLocker() {
  return new Locker();
}

export const defLocker = createLocker();
