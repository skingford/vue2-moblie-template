/*
 * @Author: kingford
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-23 17:55:32
 */
import { successFunc, failFunc } from '../types/hardware';
import { asyncToAndroid } from '../core';

class Command {
  constructor() {}

  sendSerialCmd(cmd: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'sendSerialCmd', args: [cmd] }, resolve, reject);
    });
  }

  run(cmd: string, success: successFunc, fial: failFunc) {
    return android.sendSerialCmd(cmd, [success, fial]);
  }
}

function createCmd() {
  return new Command();
}

export const cmd = createCmd();
