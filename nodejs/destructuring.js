let student = {
  name: "홍길동",
  score: 90,
};

// let name = student.name;
// let score = student.score;

// console.log(name);
// console.log(score);

let { name, score } = student;
console.log(name);
console.log(score);

let arr = [1, 2, 3];

for (const num of arr) {
  console.log(arr);
}

let [a, b, c] = arr;
console.log(`${a},${b},${c}`);

let [i, ...rest] = arr;
console.log(`${i}, ${rest}`);

console.log(arr);
