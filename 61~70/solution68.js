const bus = ["12:30", "13:20", "14:13"];
const time = "12:40";

function solution(bus, time) {
  let answer = [];
  time = time.split(":").map(Number);
  time = time[0] * 60 + time[1];

  for (let i in bus) {
    let busTime = bus[i].split(":").map(Number);
    busTime = busTime[0] * 60 + busTime[1];

    if (busTime < time) {
      // 버스가 이미 지나간 경우
      answer.push("지나갔습니다.");
    } else {
      // 남은 시간을 출력해줘야 하는 경우 (버스가 아직 안 지나간 경우)
      // 남은 시간을 구하기 위해 계산
      let hour = parseInt((busTime - time) / 60);
      let minute = parseInt((busTime - time) % 60);
      // padStart로 2자리수를 0으로 채워주기
      answer.push(
        String(hour).padStart(2, 0) +
          "시간 " +
          String(minute).padStart(2, 0) +
          "분"
      );
    }
  }

  return answer;
}

console.log(solution(bus, time));
