/*
 * @Author: kingford
 * @Date: 2021-10-11 10:01:34
 * @LastEditTime: 2021-10-23 11:58:25
 */
let android: any;

interface Window {
  android: any;
  key: number;
  callback_success: any[];
  callback_fail: any[];
  asyncToJs: (jsResult: any, id: number) => void;
}
