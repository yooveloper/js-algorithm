/**
 * [ 큰 수 출력하기 ]
 * 
 * N(1<=N<=100)개의 정수를 입력받아,
 * 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
  ▣ 입력설명
  첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
  ▣ 출력설명
  자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

  ▣ 입력예제 1
  6
  7 3 9 5 6 12
  ▣ 출력예제 1
  7 9 6 12
 */

let arr = [7, 3, 9, 5, 6, 12];

function solution(arr) {
  let answer = [arr[0]]; // 조건이 첫 번쨰 수는 무조건 출력한다 이므로 초기에 배열에 값할당해줌

  // 0번째 index는 제외하고 탐색하면 되니까 i는 1부터 시작
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      // i번째가 i번쩌 전거보다 크면 넣어주면 되니까 i - 1
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution(arr));
