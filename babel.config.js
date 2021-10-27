/*
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-27 14:41:56
 */
module.exports = {
  presets: [
    // "@vue/cli-plugin-babel/preset",
    ['@vue/app', { useBuiltIns: 'entry' }],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
  ],
};
