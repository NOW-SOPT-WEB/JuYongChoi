import { CARD_LIST } from "../store/store";

export const getRandomNumber = (count) => {
  const list = [];
  while (list.length < count) {
    /* 랜덤으로 난이도 별 어떤 이미지 선택할지 번호 뽑기 */
    const randomNumber = Math.floor(Math.random() * 9 + 1);
    if (!list.includes(randomNumber)) {
      list.push(randomNumber);
    }
  }

  while (list.length < count * 2) {
    /* 뽑아진 이미지 중, 다시 랜덤으로 1개씩 더 추가하기 */
    const randomNumber = Math.floor(Math.random() * 9 + 1);
    if (!list.includes(randomNumber)) continue;
    if (list.filter((num) => num === randomNumber).length < 2) {
      list.push(randomNumber);
    }
  }

  return list;
};

export const getRandomList = (count) => {
  // 랜덤 수에 맞는 img를 포함한 객체요소를 배열로 갖는 리스트 반환 함수
  const numList = getRandomNumber(count);

  return numList.map((num, idx) => {
    const card = CARD_LIST.find((card) => card.id === num);
    return {
      ...card,
      id: idx,
      cardId: num,
    };
  });
};
