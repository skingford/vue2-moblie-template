/*
 * @Author: kingford
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-26 19:58:40
 */

import { asyncToAndroid } from '../core';

class Command {
  constructor() {}

  sendSerial(cmd: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'sendSerialCmd', args: [cmd] }, resolve, reject);
    });
  }

  run(cmd: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'run', args: [cmd] }, resolve, reject);
    });
  }
}

function createCmd() {
  return new Command();
}

export const cmd = createCmd();
