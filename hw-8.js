// // Задание 1:
// const arr = [4, 8, 7, 13, 12];

// function getSum (arr) {
//     sum = 0;
//     arr.forEach(el=> {
//         sum+=el;
//     });
//     return sum;
// }

// function getMult(arr) {
//     mult = 1;
//     arr.forEach(el=> {
//         mult*=el;
//     });
//     return mult;
// }

// function getResult(callback, arr) {
//     console.log(callback(arr));
// }

// getResult(getSum, arr)



// // Задание 2:
// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function backSort(a,b) {
//     if (a.age<b.age) return -1;
//     if (a.age>b.age) return 1;
//     return 0
// }

// users.sort(backSort);
// console.log(users);



// // Задание 3:
// const arr = [1, '4', false, 9, 'two'];

// function reverseArr(arr) {
//     arr.reverse();
//     return arr;
// }

// function toNumberArr(arr) {
//     arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!isNaN(+arr[i])) {
//             arrNew.push(+arr[i]);
//         } 
//     };
//     return arrNew;
// }

// function each(arr, callb) {
//     console.log(callb(arr));
// }

// each(arr, reverseArr);
// each(arr, toNumberArr);



// // Задание 4:
// function date30sec() {
//     let date = new Date();
//     console.log(date);
// }

// let timeId = setInterval(date30sec, 3000);
// setTimeout(() => {clearInterval(timeId); console.log('30 секунд прошло');}, 30000);



// Задание 5:
function calling() {
    console.log('Звоню!');
};

function beeps(callb) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callb();
    }, 1000);
}

function talk() {
   
    setTimeout(() => {
        console.log('Разговор')
    }, 1000);
}

calling();
beeps(talk);

