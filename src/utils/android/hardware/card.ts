/*
 * @Author: kingford
 * @Date: 2021-10-20 09:46:56
 * @LastEditTime: 2021-10-23 11:26:50
 */

// 读卡器
class Card {
  read() {
    android.addCardReaderListener((message: string) => console.log(message));
  }
  remove() {
    android.removeCardReaderListener((message: string) => console.log(message));
  }
  clear() {
    android.removeAllCardReaderListener();
  }
}

function createCard() {
  return new Card();
}

export const defCard = createCard();
