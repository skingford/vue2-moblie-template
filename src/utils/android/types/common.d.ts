/*
 * @Author: kingford
 * @Date: 2021-10-26 16:05:33
 * @LastEditTime: 2021-10-28 11:07:21
 */

export interface DynamicField {
  [key: string]: unknown;
}

export interface ResponseResult {
  code: number;
  result: string;
}
