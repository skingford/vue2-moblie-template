/*
 * @Author: kingford
 * @Date: 2021-10-26 20:23:59
 * @LastEditTime: 2021-10-28 11:11:50
 */

class MQTT {
  constructor() {}

  send(topic: string, msg: string, qos: number, retained: boolean): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.publicMqttMessage(topic, msg, qos, retained, resolve, reject);
    });
  }

  sendOtO(msg: string, timeout: number = 10): Promise<ResponseResult> {
    return new Promise((resolve, reject) => {
      android.publicInterMessage(msg, timeout, resolve, reject);
    });
  }

  add(): Promise<ResponseResult> {
    return new Promise((resolve) => {
      android.addMqttMessageListener(resolve);
    });
  }
}

function createMQTT() {
  return new MQTT();
}

export default createMQTT();
