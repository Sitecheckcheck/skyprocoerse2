// // Задание 1
// const numbers1 = [1, 5, 4, 10, 0, 3];
// for (const item of numbers) {
//   if (item1 !== 10) {
//     console.log(item1);
//   } else {
//     console.log(item1);
//     break;
//   }
// }

// // Задание 2
// const numbers2 = [1, 5, 4, 10, 0, 3];
//     console.log(numbers2.indexOf(4));

// // Задание 3
// const numbers3 = [1, 3, 5, 10, 20];
// console.log(numbers3.join(' '));

// // Задание 4
// let array4 = new Array(10);
// for (let item4 = 0; item4 < array4.length; item4++) {
//   array4[item4] = Math.floor(Math.random(0, 11) * 10);
// }

// let array4new = new Array();
// for (const element4 of array4) {
//   if (element4 % 2 === 0) {
//     array4new.push (element4);
//   }
// }

// console.log(array4);
// console.log(array4new);

// // Задание 5
// let array5 = [];
// for (let i = 0; i < 3; i++) {
//   array5[i] = [];
//   for (let j = 0; j < 3; j++) {
//     array5[i][j] = 1;
//   }
// }

// console.log(array5);

// // Задание 6
// let arr6 = [1, 1, 1];
// arr6 = arr6.concat([2, 2, 2]);

// console.log(arr6);

// // Задание 7
// let arr7 = [9, 8, 7, "a", 6, 5];
// let arr7new = [];
// for (let item7 of arr7) {
//   if (!isNaN(item7)) {
//     arr7new.push(item7);
//   }
// }
// arr7new = arr7new.sort();
// console.log(arr7new);

// // Задание 8
// let arr8 = [9, 8, 7, 6, 5];
// let a = Number(prompt("Input number"));
// let search = arr8.includes(a);
// console.log(search);

// // Задание 9
// let a8 = "abcdef";
// a8 = a8.split("");
// a8 = a8.reverse();
// a8 = a8.join("");
// console.log(a8);

// // Задание 10
// let array10 = new Array(6);
// for (let i = 0; i < array10.length; i++) {
//   array10[i] = Math.floor(Math.random(0, 11) * 10);
// }
// let sum10 = 0;
// array10.forEach((el10) => {
//   sum10 += el10;
// });
// let a10 = sum10 / array10.length;

// console.log(array10);
// console.log(a10);

// // Задание 11
// let arr11 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// arr11new = [];
// arr11.forEach((el) => (arr11new = arr11new.concat(el)));

// console.log(arr11);
// console.log(arr11new);

// // Задание 12
// let arr12 = new Array(6);
// for (let i = 0; i < arr12.length; i++) {
//   arr12[i] = Math.floor(Math.random(0, 11) * 10);
// }
// console.log(arr12);

// for (let i = 0; i < arr12.length - 1; i++) {
//   console.log(arr12[i] + arr12[i + 1]);
// }
