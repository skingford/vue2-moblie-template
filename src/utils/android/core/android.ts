/*
 * @Author: kingford
 * @Date: 2021-10-23 16:46:38
 * @LastEditTime: 2021-10-23 16:57:06
 */

export function asyncToAndroid(obj: any, success: Function, fail: Function) {
  let id = ++window.key;

  window.callback_success[id] = success;

  window.callback_fail[id] = fail;

  console.log('asyncToAndroid:', JSON.stringify(obj));

  android.receiveAsyncMethod(id, JSON.stringify(obj));
}
