import { IMG_BY_NUM } from "../constants";

export const getRandomNumber = (count) => {
  // count만큼의 쌍을 포함한 랜덤갯수 구하는 함수
  const list = [];
  while (list.length < count * 2) {
    const randomNumber = Math.floor(Math.random() * count + 1);
    if (list.filter((num) => num === randomNumber).length < 2) {
      list.push(randomNumber);
    }
  }
  return list;
};

export const getRandomList = (count) => {
  // 랜덤 수에 맞는 img를 포함한 객체요소를 배열로 갖는 리스트 반환 함수
  const list = getRandomNumber(count);

  return list.map((num, index) => ({
    id: index + 1,
    cardId: num,
    img: IMG_BY_NUM[`img${num}`],
    flipped: false,
    matched: false,
  }));
};
