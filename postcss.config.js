/*
 * @Author: kingford
 * @Date: 2021-10-22 16:30:35
 * @LastEditTime: 2021-10-27 15:37:11
 */

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
