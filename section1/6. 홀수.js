/**
  [ 홀수 ]
  7개의 자연수가 주어질 때,
  이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
  고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
  예를 들어,
  7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
  이들 중 홀수는 77, 41, 53, 85 이므로 
  그 합은 77 + 41 + 53 + 85 = 256 이 되고,
  41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

  ▣ 입력설명
  첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
  ▣ 출력설명
  첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

  ▣ 입력예제 1
  12 77 38 41 53 92 85
  ▣ 출력예제 1
  256
  41
 */

let numbers = [12, 77, 38, 41, 53, 92, 85];

function solution(numbers) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sum += numbers[i];
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
  }

  return [sum, min];
}

console.log(solution(numbers));
