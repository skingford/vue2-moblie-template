/*
 * @Author: kingford
 * @Date: 2021-10-20 09:13:05
 * @LastEditTime: 2021-10-26 15:55:47
 */
export enum LockerStatus {
  LOCK = 0,
  UNLOCK = 1,
  TIMEOUT = -1,
  OTHER = -2,
}

export enum LockerStatusText {
  LOCK = '开',
  UNLOCK = '关',
  TIMEOUT = '串口通讯超时',
  OTHER = '其它异常',
}
