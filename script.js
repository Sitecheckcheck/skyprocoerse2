// Задание 1;
const minNumber = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Задание 2
function anEvenNumber() {
  let userNumber = Number(prompt("Введите число"));
  if (userNumber % 2 == 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

// Задание 3.1
function consolSquared(userNumber) {
  console.log(userNumber ** 2);
}

// Задание 3.2
function returnSquared(userNumber) {
  return userNumber ** 2;
}

// Задание 4
const hello = () => {
  let userAge = Number(prompt('Сколько вам лет?'));
  if (userAge < 0) {
    alert('Вы ввели неправильное значение');
  } else if (userAge < 13) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}

// Задание 5
const isNumber = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
};

// Задание 6
function cubeNumber() {
  let a = prompt("введите число");
  if (!isNaN(a)) {
    b = a ** 3;
    c = `${a} в кубе равняется ${b}`;
    return c;
  } else {
    return "Переданный параметр не является числом";
  }
};

// Задание 7
function buttonGame() {
  let month = prompt("Введите номер месяца");
  if (!isNaN(month)) {
    if (month == 12 || month == 1 || month == 2) {
      console.log("Зима");
    } else if (month == 3 || month == 4 || month == 5) {
      console.log("Весна");
    } else if (month == 6 || month == 7 || month == 8) {
      console.log("Лето");
    } else if (month == 9 || month == 10 || month == 11) {
      console.log("Осень");
    } else if (month == null) {
      console.log("отмена игры");
    } else {
      alert("Нет такого месяца");
      buttonGame();
    }
  } else {
    alert("Необходимо ввести число");
    buttonGame();
  }
}
