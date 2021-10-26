/*
 * @Author: kingford
 * @Date: 2021-10-26 20:23:59
 * @LastEditTime: 2021-10-26 20:31:37
 */
import { asyncToAndroid } from '../core';

class MQTT {
  constructor() {}

  send(msg: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'publicMqttMessage', args: [msg] }, resolve, reject);
    });
  }

  add(msg: string) {
    return new Promise((resolve, reject) => {
      asyncToAndroid({ method: 'addMqttMessageListener', args: [msg] }, resolve, reject);
    });
  }
}

function createMQTT() {
  return new MQTT();
}

export const mqtt = createMQTT();
