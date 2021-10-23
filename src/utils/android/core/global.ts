/*
 * @Author: kingford
 * @Date: 2021-10-23 16:53:38
 * @LastEditTime: 2021-10-23 16:55:43
 */
window.key = 0;
window.callback_success = [];
window.callback_fail = [];

window.asyncToJs = function (jsResult: any, id: number) {
  console.log(id);
  console.log(JSON.stringify(jsResult));

  let status = jsResult.code;

  if (status == 0) {
    setTimeout('callback_success[' + id + '](' + JSON.stringify(jsResult) + ')', 0);
  } else {
    setTimeout('callback_fail[' + id + '](' + JSON.stringify(jsResult) + ')', 0);
  }
};
