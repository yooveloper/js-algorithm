/**
 * [ A를 #으로 ]
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#' 으로 바꾸어 출력하는 프로그램을 작성하세요.
 * 
 * ▣ 입력설명
    첫 번째 줄에 문자열이 입력된다.
  ▣ 출력설명
    첫 번째 줄에 바뀐 단어를 출력한다.

  ▣ 입력예제 1
    BANANA
  ▣ 출력예제 1
    B#N#N#
 */

let word = 'BANANA';

// for문 방식
function solution1(word) {
  let answer = '';
  for (let str of word) {
    if ('A' === str) answer += '#';
    else answer += str;
  }
  return answer;
}

// replaceAll 방식 ( ECMA2022 부터 사용 가능 )
function solution2(word) {
  let answer = word.replaceAll('A', '#');

  return answer;
}

// replace + 정규표현식 방식
function solution3(word) {
  let answer = word.replace(/A/g, '#');

  return answer;
}

console.log(solution3(word));
