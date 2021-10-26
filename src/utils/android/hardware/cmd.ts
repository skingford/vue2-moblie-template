/*
 * @Author: kingford
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-26 16:05:01
 */

import { asyncToAndroid } from '../core';

class Command {
  constructor() {}

  sendSerialCmd(cmd: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'sendSerialCmd', args: [cmd] }, resolve, reject);
    });
  }
}

function createCmd() {
  return new Command();
}

export const cmd = createCmd();
