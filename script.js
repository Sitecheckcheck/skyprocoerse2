// задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// задание 2
const dateIphone = 1111;
alert(dateIphone);

// задание 3
const nameFirst = 'Danilov';
alert(nameFirst);

// задание 4
let num1 = 10;
let num2 = 2;
alert([num1+num2,num1-num2,num1*num2,num1/num2]);

// задание 5
let result = 2**5;
alert(result);

// задание 6
let a6 = 9;
let b6 = 2;
alert(a6%b6);

// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// задание 8
let age = prompt('Сколько вам лет?');
alert(`Ваш возраст в годах: ${age}`);

// задание 9.0
let user = {
    name: 'Pavel',
    age: 34,
    isAdmin: true
}

// задание 9.1
user['city of residence']='Krasnogorsk';


// задание 9.2
user.age = 28;

// задание 9.3
delete user['city of residence'];

// задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?', 'name, age, isAdmin');
alert(user[info]);

// задание 10
let yourName = prompt('Какое ваше имя?');
alert(`Привет, ${yourName} !`);