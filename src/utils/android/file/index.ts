/*
 * @Author: kingford
 * @Date: 2021-10-26 19:53:53
 * @LastEditTime: 2021-10-28 11:10:55
 */

class File {
  read(path: string) {}

  readPage(path: string, pageIndex: number, pageSize: number) {}

  write(path: string, content: string) {}
}

function createFiles() {
  return new File();
}

export const file = createFiles();
