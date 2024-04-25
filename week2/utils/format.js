export const formatValue = (value) => {
  let converted = "";
  value
    .split("")
    .reverse()
    .forEach((char, idx) => {
      // 가격 배열을 거꾸로 순회하며 3번째마다 "," 추가
      if (idx % 3 === 0 && idx !== 0) {
        converted += "," + char;
        return;
      }
      converted += char;
    });

  return converted.split("").reverse().join("");
};
