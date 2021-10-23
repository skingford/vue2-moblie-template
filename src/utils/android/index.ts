/*
 * @Author: kingford
 * @Date: 2021-10-20 11:01:32
 * @LastEditTime: 2021-10-23 11:19:49
 */
import isMobile from "ismobilejs";

export const isAndroidDevice =
  isMobile(window.navigator).android.device && window.android;
