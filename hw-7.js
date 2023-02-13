// // Задание 1
// let str = "стРОка";
// str = str.toUpperCase(str);
// console.log(str);

// // Задание 2
// const products2 = ["Хлеб", "Молоко", "Коровка", "Мол"];
// const search2 = "мол";

// function searchStart(a, b) {
//   let finish = [];
//   a.forEach((el) => {
//     if (el.toLowerCase().startsWith(b.toLowerCase())) {
//       finish.push(el);
//     }
//   });
//   return finish;
// }

// console.log(searchStart(products2, search2));

// // Задание 3
// let a = 32.58884;
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));

// // Задание 4
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// // Задание 5
// function random() {
//   return Math.round(Math.random() * 9 + 1);
// }

// console.log(random());

// // Задание 6
// function getRandomArrNumbers(a) {
//   c = [];
//   let b = Math.floor(a / 2);
//   for (let i = 0; i < b; i++) {
//     let d = Math.round(Math.random() * a);
//     c.push(d);
//   }
//   return c;
// }

// console.log(getRandomArrNumbers(7));

// // Задание 7
// function randomNumber(a,b) {
//     let c = Math.round(Math.random() * Math.abs(a-b)+Math.min(a,b));
//     return c;
// }

// console.log(randomNumber(7,4));

// // Задание 8
// const months = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];

// let myDate = new Date();

// let fullDate =
//   myDate.getDate() +
//   " " +
//   months[myDate.getMonth()] +
//   " " +
//   myDate.getFullYear();

// console.log(fullDate);

// // Задание 9
// const months = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];

// let currentDate = new Date();

// currentDate.setDate(currentDate.getDate() + 73);

// let fullDate9 =
//   currentDate.getDate() +
//   " " +
//   months[currentDate.getMonth()] +
//   " " +
//   currentDate.getFullYear();

// console.log(fullDate9);

// // Задание 10
// const months = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];
// const days = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];
// let myDate10 = new Date();
// let minute = myDate10.getMinutes();
// let second = myDate10.getSeconds();
// if (minute < 10) { 
// 	minute = "0" + minute; 
// }
// if (second < 10) {
// 	second = "0" + second; 
// }
// let fullDate10 = [
//     "Дата: " + myDate10.getDate() + " " + months[myDate10.getMonth()] + " " + myDate10.getFullYear(),
//    "Время: " + myDate10.getHours() + ":" + minute + ":" + second
// ];

// fullDate10.forEach((el) => {
//     console.log(el);
//   });


// Задание 11


