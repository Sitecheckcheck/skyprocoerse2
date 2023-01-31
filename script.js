// Задание 1;
for (let hello = 0; hello < 2; hello++) {
  console.log("Привет");
}

// Задание 2
for (let index = 1; index <= 5; index++) {
  console.log(index);
}

// Задание 3
for (let index = 7; index <= 22; index++) {
  console.log(index);
}

// Задание 4
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};

for (const key in obj) {
  console.log(`${key} - зарплата ${obj[key]}`);
}

// Задание 5
let n = 1000;
let i = 1;
while (n >= 50) {
  n /= 2;
  i++;
}
console.log(n);
console.log(i);

// Задание 6
for (let a = 6; a <= 31; a+=7) {
    alert (`Сегодня пятница, ${a}-е число. Необходимо подготовить отчет.`)  
}
