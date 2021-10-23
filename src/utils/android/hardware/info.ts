/*
 * @Author: kingford
 * @Date: 2021-10-20 09:04:15
 * @LastEditTime: 2021-10-23 11:56:54
 */
import { isAndroidDevice } from '../index';

export default class Info {
  version: string = '';
  appId: string = '';
  mac: string = '';

  constructor() {
    if (!isAndroidDevice) {
      console.log('device is unable');
      return;
    }
    this.getVersion();
    this.getAppId();
    this.getMac();
  }

  /**
   * @description
   * @return {*}  {string}
   * @memberof hardware
   */
  private getVersion() {
    this.version = android.getVersion();
  }

  /**
   * @description
   * @return {*}  {string}
   * @memberof hardware
   */
  private getAppId() {
    this.appId = android.getAppId();
  }

  /**
   * @description
   * @return {*}  {string}
   * @memberof hardware
   */
  getMac() {
    this.mac = android.getMac();
  }
}

function createInfo() {
  return new Info();
}

export const hardwareInfo = createInfo();
