/*
 * @Author: kingford
 * @Date: 2021-10-26 19:53:53
 * @LastEditTime: 2021-10-28 14:19:33
 */

class Files {
  read(path: string) {
    return new Promise((resolve, reject) => {
      android.readFile(path, resolve, reject);
    });
  }

  readPage(path: string, pageIndex: number, pageSize: number) {
    return new Promise((resolve, reject) => {
      android.readFile(path, pageIndex, pageSize, resolve, reject);
    });
  }

  write(path: string, content: string) {
    return new Promise((resolve, reject) => {
      android.writeFile(path, content, resolve, reject);
    });
  }
}

function createFiles() {
  return new Files();
}

export const file = createFiles();
