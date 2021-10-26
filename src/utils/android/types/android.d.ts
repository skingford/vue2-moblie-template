/*
 * @Author: kingford
 * @Date: 2021-10-11 10:01:34
 * @LastEditTime: 2021-10-26 16:05:15
 */
let android: any;

interface Window {
  android: any;
  key: number;
  callback_success: any[];
  callback_fail: any[];
  asyncToJs: (jsResult: any, id: number) => void;
}
