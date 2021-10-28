/*
 * @Author: kingford
 * @Date: 2021-10-11 10:01:34
 * @LastEditTime: 2021-10-28 11:08:58
 */
let android: any;

interface Window {
  android: any;
  key: number;
  callback_success: any[];
  callback_fail: any[];
  asyncToJs: (jsResult: any, id: number) => void;
}

interface ResponseResult {
  code: number;
  result: string;
}
