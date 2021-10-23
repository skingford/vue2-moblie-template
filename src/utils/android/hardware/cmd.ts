/*
 * @Author: kingford
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-23 11:24:40
 */
import { successFunc, failFunc } from '../types/hardware';

class Cmd {
  constructor() {}

  /**
   *
   * @description: 发送串口指令
   * @param {string} cmd
   * @param {successFunc} success
   * @param {failFunc} fial
   * @return {*}
   * @memberof hardware
   */
  sendSerialCmd(cmd: string, success: successFunc, fial: failFunc) {
    return android.sendSerialCmd(cmd, [success, fial]);
  }

  run(cmd: string, success: successFunc, fial: failFunc) {
    return android.sendSerialCmd(cmd, [success, fial]);
  }
}

function createCmd() {
  return new Cmd();
}

export const defCmd = createCmd();
