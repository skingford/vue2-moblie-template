/*
 * @Author: kingford
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-23 17:04:50
 */
import { successFunc, failFunc } from '../types/hardware';
import { asyncToAndroid } from '../core';

class Command {
  constructor() {}

  sendSerialCmd(cmd: string) {
    asyncToAndroid(
      { method: 'sendSerialCmd', args: [cmd] },
      (res: any) => {
        console.log('res:', res);
      },
      (code: any) => {
        console.log('code:', code);
      }
    );
    // return android.sendSerialCmd(cmd, [success, fial]);
  }

  run(cmd: string, success: successFunc, fial: failFunc) {
    return android.sendSerialCmd(cmd, [success, fial]);
  }
}

function createCmd() {
  return new Command();
}

export const cmd = createCmd();
