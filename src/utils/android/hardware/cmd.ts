/*
 * @Author: kingford
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-28 14:21:13
 */

class Command {
  constructor() {}

  // 串口命令
  sendSerial(cmd: string): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.sendSerialCmd(cmd, resolve, reject);
    });
  }

  run(cmd: string): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.run(cmd, resolve, reject);
    });
  }
}

function createCmd() {
  return new Command();
}

export const cmd = createCmd();
