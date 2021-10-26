/*
 * @Author: kingford
 * @Date: 2021-10-20 09:04:15
 * @LastEditTime: 2021-10-26 15:38:26
 */
import { isAndroidDevice } from '../index';

export interface IInfo {
  mac?: string;
  appId?: string;
  webAppVersion?: string;
  appVersion?: string;
  osVersion?: string;
}

export default class Information {
  info: IInfo = {};

  constructor() {
    if (!isAndroidDevice) {
      console.log('device is unable');
      return;
    }
    this.info = this.getInfo();
  }

  getWebAppVersion(): string {
    return android.getVersion();
  }

  getAppId(): string {
    return android.getAppId();
  }

  getMac(): string {
    return android.getMac();
  }

  getAppVersion(): string {
    return android.getAppVersion();
  }

  getOsVersion(): string {
    return android.getOsVersion();
  }

  private getInfo(): IInfo {
    return {
      mac: this.getMac(),
      appId: this.getAppId(),
      webAppVersion: this.getWebAppVersion(),
      appVersion: this.getAppVersion(),
      osVersion: this.getOsVersion(),
    };
  }
}

function createInfo() {
  return new Information();
}

export const info = createInfo();
