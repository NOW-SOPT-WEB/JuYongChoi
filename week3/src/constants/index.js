import { Theme } from "../styles/theme/theme";

/* 각 LEVEL의 TEXT와 퀴즈(맞춰야 하는 카드 페어) 수 */
export const LEVEL = Object.freeze({
  EASY: {
    QUIZ_COUNT: 5,
    TEXT: "easy",
  },
  NORMAL: {
    QUIZ_COUNT: 7,
    TEXT: "normal",
  },
  HARD: {
    QUIZ_COUNT: 9,
    TEXT: "hard",
  },
});

/* 메인 페이지 상단 배너의 텍스트, 색상, 카운터 박스 색상 */
export const BANNER = Object.freeze({
  TEXT: "SOPT 34TH 랜덤 카드게임",
  COLOR: "#9A61D2",
  COUNTER_BOX_COLOR: Theme.color.white,
});

/* 모달 헤딩 텍스트, 일반 텍스트, 버튼 텍스트 */
export const MODAL_TEXT = Object.freeze({
  HEADING: "성공을 축하드립니다 !!",
  TEXT: "🤔 더 어려운 난이도도 도전 ~ ? 🤔",
  BTN_TEXT: "게임으로 돌아가기",
});

export const CARD_FLIPPED_DURATION = 1000;
