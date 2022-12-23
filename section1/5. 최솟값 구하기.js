/**
  [ 최솟값 구하기 ]
  7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
  ▣ 입력설명
  첫 번째 줄에 7개의 수가 주어진다.
  ▣ 출력설명
  첫 번째 줄에 가장 작은 값을 출력한다.

  ▣ 입력예제 1
    5 3 7 11 2 15 17
  ▣ 출력예제 1
    2
 */

let numbers = [5, 3, 7, 11, 2, 15, 17];

// for 문 방식
function solution(numbers) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  answer = min;
  return answer;
}

// Math.min 내장함수 + spread operator 를 활용한 방식
function solution2(numbers) {
  let answer = Math.min(...numbers);
  return answer;
}

console.log(solution2(numbers));
