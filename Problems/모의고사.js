function solution(answers) {
  const answer1 = createAnswer1(answers);
  const answer2 = createAnswer2(answers);
  const answer3 = createAnswer3(answers);

  let countArr = [];
  let count = 0;
  answer1.forEach((value, index) => {
    if (value === answers[index]) count++;
  });
  countArr.push([1, count]);
  count = 0;

  answer2.forEach((value, index) => {
    if (value === answers[index]) count++;
  });
  countArr.push([2, count]);
  count = 0;

  answer3.forEach((value, index) => {
    if (value === answers[index]) count++;
  });
  countArr.push([3, count]);
  count = 0;

  countArr.sort((a, b) => b[1] - a[1]);

  let myAnswer = [countArr[0][0]];
  for (let i = 1; i < countArr.length; i++) {
    if (countArr[i][1] === countArr[0][1]) myAnswer.push(countArr[i][0]);
  }

  return myAnswer;
}

function createAnswer1(answers) {
  let answer = [];
  for (let i = 0; i < Math.floor(answers.length / 5) + 1; i++) {
    answer.push(1, 2, 3, 4, 5);
  }
  answer = answer.slice(0, answers.length);
  return answer;
}

function createAnswer2(answers) {
  let answer = [];
  for (let i = 0; i < Math.floor(answers.length / 8) + 1; i++) {
    answer.push(2, 1, 2, 3, 2, 4, 2, 5);
  }
  answer = answer.slice(0, answers.length);
  return answer;
}

function createAnswer3(answers) {
  let answer = [];
  for (let i = 0; i < Math.floor(answers.length / 10) + 1; i++) {
    answer.push(3, 3, 1, 1, 2, 2, 4, 4, 5, 5);
  }
  answer = answer.slice(0, answers.length);
  return answer;
}
