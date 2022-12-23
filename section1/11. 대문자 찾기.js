/**
 * [ 대문자 찾기 ] 
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 * 
  ▣ 입력설명
  첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
  ▣ 출력설명
  첫 줄에 대문자의 개수를 출력한다.

  ▣ 입력예제 1
    KoreaTimeGood

  ▣ 출력예제 1
    3
 */

let str = 'KoreaTimeGood';

// toUpperCase 함수 사용
function solution(str) {
  let answer = 0;

  for (let s of str) {
    if (s === s.toUpperCase()) answer++;
  }

  return answer;
}

// 아스키 코드 사용
function solution2(str) {
  let answer = 0;
  for (let s of str) {
    if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) answer++;
  }
  return answer;
}

console.log(solution2(str));

/**
 * 외워두면 좋은 꿀팁 !
 * 아스키코드로
 * 대문자는 65 부터 90 까지고
 * 소문자는 97부터 122 까지다.
 */
