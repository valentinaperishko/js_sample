// const invoice = 100
// const stock = 100
// let message = "Заказ оформлен, с вами свяжется менеджер"

// message = invoice < 100 ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно товаров!"
// console.log(message)

// message = invoice === 100 ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно товаров!"
// console.log(message)

// message = invoice === 150 ? "На складе недостаточно товаров!" : "Заказ оформлен, с вами свяжется менеджер"
// console.log(message)

// let message = "Добро пожаловать!"
// const ADMIN_PASSWORD = "abcd"
// const userPassword = prompt("Give me a password")
// console.log(userPassword)

// if (userPassword !== null) {
//   if (ADMIN_PASSWORD === userPassword) {
//     alert(message)
//   } else {
//     message = "Доступ запрещен, неверный пароль!"
//     alert(message)
//   }
// } else {
//   message = "Отменено пользователем!"
//   alert(message)
// }

// console.log(1 && 2)

// let led = 1
// let electricity = 1

// if (led && electricity) {
//   console.log("LIGHT")
// } else {
//   console.log("NO LIGHT")
// }

// console.log(0 || null)

// const person = {
//   license: true,
//   money: "+++",
//   alcohol_level: false,
//   age: 15,
// }
// if ((person.age >= 18 && person.age <= 90) || person.money === "+++") {
//   console.log("YOU CAN GO")
// } else {
//   console.log("YOU CAN NOT")
// }

// let input = prompt("Enter your data")

// let age = prompt("Enter your age")

// let name = prompt("Enter your name")

// console.log(typeof input)
// console.log(typeof age)
// console.log(typeof name)

// console.log(!isNaN("yo"))

// console.log(isNaN("tu"))

// const userPassword = "jqueryismyjam"
// const ADMIN_PASSWORD = "jqueryismyjam"
// let message = "Добро пожаловать!"
// const CANCELED_BY_USER = "Отменено пользователем!"
// const ACCESS_IS_ALLOWED = "Добро пожаловать!"
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!"
// if (ADMIN_PASSWORD === userPassword) {
// } else if (ADMIN_PASSWORD === null) {
//   message = CANCELED_BY_USER
// } else if (!ADMIN_PASSWORD);
// {
//   message = ACCESS_DENIED
// }
// console.log(message)

// const ADMIN_PASSWORD = "jqueryismyjam"
// const userPassword = "jqueryismyjam"
// let message = "Добро пожаловать!"

// if (userPassword !== null) {
//   if (ADMIN_PASSWORD === userPassword) {
//     console.log(message)
//   } else {
//     message = "Доступ запрещен, неверный пароль!"

//   }
// } else {
//   message = "Отменено пользователем!"

// }
// console.log(message)

// const ADMIN_PASSWORD = "jqueryismyjam"
// const userPassword = "jqueryismyjam"
// const CANCELED_BY_USER = "Отменено пользователем!"
// const ACCESS_IS_ALLOWED = "Добро пожаловать!"
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!"
// let message

// // Write code under this line

// if (ADMIN_PASSWORD === userPassword) {
//   message = ACCESS_IS_ALLOWED
// } else if (ADMIN_PASSWORD === null) {
//   message = CANCELED_BY_USER
// } else if (ADMIN_PASSWORD !== userPassword) {
//   message = ACCESS_DENIED
// }
// console.log(message)

// const orderPieces = prompt("how much?")
// const credits = 23580
// const pricePerDroid = 3000
// const CANCELED_BY_USER = "Отменено пользователем!"
// const ACCESS_DENIED = "Недостаточно средств на счету!"

// let totalPrice = orderPieces * pricePerDroid
// let balanceCredit = credits - totalPrice
// let message

// if (orderPieces === null) {
//   message = CANCELED_BY_USER
// } else if (credits >= totalPrice) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED
// }
// console.log(message)

// const countryName = prompt("Country")

// const CANCELED_BY_USER = "Отменено пользователем!"
// const NO_DELIVERY = "В выбранную страну доставка недоступна."
// const CHINA = "Китай"
// const AUSTRALIA = "Австралия"
// const INDIA = "Индия"
// const JAMAICA = "Ямайка"
// let message
// let price = 0
// let country
// if (countryName === null) {
//   message = CANCELED_BY_USER
// } else {
//   country = countryName[0].toUpperCase + countryName.slice([1].toLowerCase)
//   switch (country) {
//     case CHINA:
//       price = 100
//       break
//     case AUSTRALIA:
//       price = 170
//       break
//     case INDIA:
//       price = 80
//       break
//     case JAMAICA:
//       price = 120
//       break
//     default:
//       console.log(NO_DELIVERY)
//   }
// }
// if (price > 0) {
//   price === country
//   message = `Доставка в ${country} будет стоить ${price} кредитов`
// }

// console.log(message)

// const countryName = prompt("КитаЙ")

// const CANCELED_BY_USER = "Отменено пользователем!"
// const NO_DELIVERY = "В выбранную страну доставка недоступна."
// const CHINA = "Китай"
// const AUSTRALIA = "Австралия"
// const INDIA = "Индия"
// const JAMAICA = "Ямайка"
// let message
// let price = 0
// let country
// if (countryName === null) {
//   message = CANCELED_BY_USER
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase
//   switch (country) {
//     case CHINA:
//       price = 100
//       break
//     case AUSTRALIA:
//       price = 170
//       break
//     case INDIA:
//       price = 80
//       break
//     case JAMAICA:
//       price = 120
//       break
//     default:
//       message = NO_DELIVERY
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`
// }

// console.log(message)

// const arr = [1, 2, 3, 4, 5]
// console.log(arr.length === 0)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// const arr2 = []
// for (let i = 0; i < 10; i++) {
//   arr2[i] = i + 1
// }
// console.log(arr2)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let el of arr) {
//   if (el === 5) {
//     console.log(el)
//     break
//   }
//   console.log(el)
// }

// function checkForSpam(str) {
//   "use strict"
//   const message = str.toLowerCase().toUpperCase()
//   if () {
//   }
// }

// console.log(checkForSpam("Latest technology news")) // false

// console.log(checkForSpam("JavaScript weekly newsletter")) // false

// console.log(checkForSpam("Get best sale offers now!")) // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")) // true

// function reduceArray(array) {
//   'use strict';
//   let total = 0;

//   for (let i = 0; i > array.length; i += 1) {
//     if (array) {
//       return total;
//     }; if else return 0;
//     }
//   }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

//

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   return login.length >= min && login.length <= max
// }

// function isLoginUnique(allLogins, login) {
//   // Write code under this line
//   return !allLogins.includes(login)
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = "Логин успешно добавлен!"
//   const REFUSAL = "Такой логин уже используется!"
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов"
//   let message
//   // Write code under this line
//   if (!isLoginValid(login)) {
//     message = ERROR
//   } else if (!isLoginUnique(allLogins, login))) {
//     message = REFUSAL
//   } else {
//     message = SUCCESS
//     allLogins.push(login)
//   }
//   return message
// }
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]

// console.log(addLogin(logins, "Ajax"))
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"))
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"))
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"))
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// }

// console.log(hotel.name) // Resort Hotel
// console.log(hotel["name"]) // Resort Hotel

// hotel.name = "Coastline Resort"
// console.log(hotel.name) // Coastline Resort
// console.log(hotel["name"]) // Coastline Resort

// hotel["name"] = "Stardust Hotel"
// console.log(hotel.name) // Stardust Hotel
// console.log(hotel["name"]) // Stardust Hotelconst hotel = {

//! --- Создание объекта ---
// example ---------------------
// task ------------------------
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число;

// const card = {
//   products: [],
//   amount: 5,
//   sum: 20,
// };
// console.log(card);

//! --- Доступ к свойствам ---
// example ---------------------
// task ------------------------
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: false,
// };

// // let message;
// const isOnline = () =>
//   user.isOnline ? 'Пользователь находится в сети' : 'Пользователь не в сети';
// //   if (user.isOnline) {
// //     message = 'Пользователь находится в сети';
// //     return message;
// //   } else {
// //     message = 'Пользователь не в сети';
// //   }
// //   return message;
// // };
// console.log(isOnline());

// console.log(user.name);
// console.log(user.age);
// console.log(user.status);
// console.log(user['name']);
// console.log(user['age']);
// console.log(user['status']);

// // Выведите в консоль элементы с ключами 'name', 'age', 'status' двумя способами:
// //     через квадратные скобки;
// //     как свойство объекта.
// //  Если пользователь активный (isOnline) выведите в консоль
// // "Пользователь находится в сети" иначе "Пользователь не в сети"

// 1. написать функцию, которая принимает строку "Фамилия Имя" и возвращает объект
// в котором имя и фамилия яявляются отдельными свойствами: {name: "Имя", lastName: "Фамилия"}

// const getName = (str, id) => {
//   const arr = str.split(' ');

//   const userObject = {
//     name: arr[1],
//     lastName: arr[0],
//   };
//   userObject.id = id;

//   return userObject;
// };

// const collaborators = [
//   'Мельникова Ксения',
//   'Иванова София',
//   'Буракшаева Юлия',
//   'Фурсова Елизавета',
//   'Сапсай Иван',
//   'Богословский Артем',
//   'Самбикина Юлия',
// ];

// const getStuff = collaborators => {
//   let id = 0;
//   const arr = [];
//   for (const item of collaborators) {
//     id += 1;
//     const userObject = getName(item, id);

//     console.log(userObject);

//     console.log(item);

//     arr.push(userObject);
//     console.log(arr);
//   }
// }

// 3. Написать функцию, которая выбирает пользователя по id записывает ему в объект
// свойства из объекта с рабочим отделом, должностью и зарплатой на этой должности типа:
// {department: "Отдел продаж", position: "Торговый представитель", salary: 10000}

// const workInfo = [
//   {
//     id: 1,
//     name: 'Oleksandr',
//     lastName: 'Oleksandrov',
//   },
//   {
//     id: 1,
//     name: 'Petro',
//     lastName: 'Petrov',
//   },
//   {
//     id: 1,
//     name: 'Ivan',
//     lastName: 'Ivanov',
//   },
//   {
//     id: 1,
//     name: 'Artem',
//     lastName: 'Artemov',
//   },
//   {
//     id: 1,
//     name: 'Oles',
//     lastName: 'Olesov',
//   },
//   {
//     id: 1,
//     name: 'Taras',
//     lastName: 'Tarasov',
//   },
//   {
//     id: 1,
//     name: 'Salem',
//     lastName: 'Salemov',
//   },
// ];

// const workPositions = [
//   {
//     id: 1,
//     department: 'Отдел продаж',
//     position: 'Торговый представитель',
//     salary: 10000,
//   },
//   {
//     id: 2,
//     department: 'Отдел аналитики',
//     position: 'Аналитик систем',
//     salary: 50000,
//   },
//   {
//     id: 3,
//     department: 'Отдел рекламы',
//     position: 'Маркетолог',
//     salary: 25000,
//   },
//   {
//     id: 4,
//     department: 'Отдел продаж',
//     position: 'Супервайзер',
//     salary: 18000,
//   },
//   {
//     id: 5,
//     department: 'Отдел рекламы',
//     position: 'Мерчендайзер',
//     salary: 10000,
//   },
//   {
//     id: 6,
//     department: 'Отдел логистики',
//     position: 'Водитель-экспедитор',
//     salary: 15000,
//   },
//   {
//     id: 7,
//     department: 'Бухгалтерия',
//     position: 'Главный бухгалтер',
//     salary: 20000,
//   },
// ];

// const idChoose = () => {
//   const arr = [];
//   for 
// }

// const findBestEmployee = function (employees) {
  
//   // Write code under this line
//   let value = 0;
//   let name = "";
//   for(const key in employees) {
//     if(employees[key] > value) {
//       value = employees[key];
//       name = key;
      
//     }

    
//   }
//   return `${name}`;
//   console.log(value, name);
// };


// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }; 
// console.log(findBestEmployee(developers)); 
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// }; 
// console.log(findBestEmployee(supports)); 
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// console.log(findBestEmployee(sellers)); 
// // 'lux'  


//  function calculateTotalPrice (array, prop) {
  
//   // Write code under this line
//   let total = 0;
//   const arr = [];
//   for(const item of arr) {
// //     if(item === name){
// //       total = price * quantity;
// //     }
// //      }

// // return total;
//     }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ]; 

// console.log(calculateTotalPrice(products, 'Радар'));  
// // 9080

// console.log(calculateTotalPrice(products, 'Сканер')); 
// // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400

// console.log(calculateTotalPrice(products, 'Дроид')); 
// // 2800


// let car = {
//   speed: 0,
//   color: 'black',
//   isEngineOn: false,
//   isLightOn: false,
  
//   engineToggle() {
//     car.isEngineOn = !car.isEngineOn;

//     // console.log(car.isEngineOn);
//     car.isEngineOn ? console.log("You can go!") : console.log("Engine is off!");
//     if(car.isLightOn && !car.isEngineOn) {
//       car.lightsToggle();
//     }
//     if(!car.isEngineOn) {
//       car.speedOff(car.speed)
//     }
    
    
//   },

//   speedOn(n) {
//     car.isEngineOn ? car.speed += n : console.log('Turn your engine on!');
//     car.isEngineOn ? console.log(`Speed is increased on ${n}, current speed is ${car.speed}!`) : console.log('Turn your engine on!');
    
//   },
 
//   speedOff(n) {
// car.isEngineOn ? car.speed -= n : console.log("Your speed starts to decrease!"); 
// car.speed -= n;
// console.log(car.speed);

// car.isEngineOn ? console.log(`Speed is decreased on ${n}, current speed is ${car.speed}!`) : console.log("Your speed starts to decrease!");

//   },
  
//   lightsToggle() {
// if(!car.isEngineOn && !car.isLightOn) {
//   console.log("You can not switch on the light!");

// return;
// }
// car.isLightOn = !car.isLightOn;
// // console.log(car.isLightOn);
// car.isLightOn ? console.log("Lights are on!") : console.log("Lights are off!");

//   },
// }
// car.engineToggle();
// car.lightsToggle();
// car.speedOn(10);
// car.speedOn(100);
// car.speedOff(50);
// car.engineToggle();
// car.lightsToggle();
// car.engineToggle();
// car.speedOn(40);
// car.lightsToggle();

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
  
//   clientCounter += 1;
//   console.log(clientCounter);
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);


// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   // console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

// // join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   console.log("It is a red fruit!");
// }

// Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined

// a, b, c это параметры
// const add = function(a, b, c) {
//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result); // 6

// // 5, 10, 15 это аргументы
// console.log(add(5, 10, 15)); // 30

// const count = function(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     // console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1

// const sum = function() {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15

// console.log(add(1, 2, 3));


// function add(a, b, c) {
//   return a + b + c;
// }

// function print(str) {
//   console.log(str);
  
// }

// Вот поэтому мы используем let или const

// console.log(value); // undefined
//  value = 5;

// if (true) {
//   console.log(value); // 5
//    value = 10;
//   console.log(value); // 10
// }

// var value = 15;
// console.log(value); // 15

// В каждой области видимости будет создана своя, независимая переменная value

// console.log(value); // ReferenceError: value is not defined
// const value = 5;
// console.log(value); // 5

// if (true) {
//   // console.log(value); // ReferenceError: value is not defined
//   const value = 10;
//   console.log(value); // 10
// }

// console.log(value); // 5

// const add = (...args) => {
//   console.log(args);

// };
// add(1, 2, 3); 
// // [1, 2, 3]

// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

// const key = 'person';
// const getKey = function() {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log(key, hotel[key]);
// }

// /*
//  * Value: "Resort Hotel"
//  * Value: 5
//  * Value: 100
//  */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
// console.log(Object.keys(hotel));

// console.log(Object.values(hotel));
// console.log(Object.entries(hotel));

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }
// /*
//  * Value: Resort Hotel
//  * Value: 5
//  * Value: 100
//  */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// console.log(Object.entries(hotel));

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// /*
//  * name: Resort Hotel
//  * stars: 5
//  * capacity: 100
//  */

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(houses === copyOfHouses); // false - разные ссылки

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(completeHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const houses = [...firstBatch, ...secondBatch];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']


// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя операцию spread
// const d = { ...a, ...b };

// console.log(d); // {x: 0, y: 2, z: 3}

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };

// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// const lion = { hasTail: true, legs: 4 };
// const eagle = { canFly: true };

// const chimera = { ...lion, ...eagle };

// console.log(chimera); // {hasTail: true, legs: 4, canFly: true}

// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// const add = function(value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, undefined

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name = 'hotel', stars = 3, status = 'empty' } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, "empty"
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;

// console.log(hotelName, stars, hotelStatus);
// // "Resort Hotel", 5, "empty"

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name, ...rest } = hotel;

// console.log(name); // "Resort Hotel"
// console.log(rest); // {stars: 5, capacity: 100}

// const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);
// // Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(`Red: ${red}, Colors: ${colors}`);
// // Red: 200, Colors: [255, 100]

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // Blue: 255



// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня. 
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте


// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];


// let total = 0;

// const stonesToCount = function(array, str) {
// for(const stone of stones) {
// if(stone.name === str) {
// total += stone.price * stone.quantity;
// }
//   }
//   return total;
// } 
// console.log(stonesToCount(stones, "Изумруд"));
// console.log(stonesToCount(stones, "Бриллиант"));

// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
// const workers = [
//     {name:'Alex', salary: 100, isActive: true },
//     {name:'Rita', salary: 80, isActive: false },
//     {name:'John', salary: 100, isActive: true },
//     {name:'Derek', salary: 200, isActive: false }
// ]

// const fireWorker = function() {
//   for(let worker of workers) {
//     console.log(worker);
//     if(worker.isActive && worker.salary >= 100) {
//       console.log("You are fired");
//     } else console.log("Continue working!");
//   }
// }
// fireWorker()

// 1. Написать функцию, которая из списка официантов(массив объектов) выбирает официантов, 
// которые  есть на смене по свойству isPresent: true; и записывает их всех в массив, 
// который хранится в переменной presentWorkers = []. 
// Пример: 
// console.log(presentWorkers); 
// [{name: "Ann", isPresent: true, tables: [], tips: 0}, 
// {name: "Bob", isPresent: true, tables: [], tips: 0}]


// const waiters = [
//   {
//       name: "Ann",
//       isPresent: true,
//       tables: [],
//       tips: 0
//   },
//   {
//       name: "Nick",
//       isPresent: false,
//       tables: [],
//       tips: 0
//   },
//   {
//       name: "Carrol",
//       isPresent: true,
//       tables: [],
//       tips: 0
//   },
//   {
//       name: "Jack",
//       isPresent: false,
//       tables: [],
//       tips: 0
//   },
//   {
//       name: "Berry",
//       isPresent: false,
//       tables: [],
//       tips: 0
//   },
//   {
//       name: "Jim",
//       isPresent: true,
//       tables: [],
//       tips: 0
//   },
// ];


// const chooseWaiter = function(waiters) {
//   const presentWorkers = [];
//   for(let waiter of waiters) {


//     if(waiter.isPresent) {
//       presentWorkers.push(waiter);

//     } 
//   }
//   return presentWorkers;
// } 

// console.log(chooseWaiter(waiters));

// // // Написать ф-цию, которая принимает два параметра (список столиков, 
// // // список официантов на смене) распределяет все столики в кафе - tables, 
// // // между всеми официантами, которые есть на смене и перезаписывает в свойство 
// // // каждому столику, имя официанта, который его обслуживает, и официанту, в свою очередь, 
// // // в свойство tabeles, перезаписывает все номера столиков, которые он обслуживает на этой 
// // // смене - функция ничего не возвращает, а перезаписывает объекты в массивах 
// // // Пример: 
// // // console.log(presentWorkers); 
// // // [{name: "Ann", isPresent: true, tables: [1, 3, 6, 7], tips: 0}, 
// // // {name: "Bob", isPresent: true, tables: [2, 4, 5, 8], tips: 0}] 

// // console.log(tables); 
// // [{tabel: 1, service: "Ann"}, 
// // {tabel: 2, service: "Bob"}, 
// // {tabel: 3, service: "Ann"}, 
// // ... ] 
// const tables = [
//   {
//       table: 1,
//       service: "",
//   },
//   {
//       table: 2,
//       service: "",
//   },
//   {
//       table: 3,
//       service: "",
//   },
//   {
//       table: 4,
//       service: "",
//   },
//   {
//       table: 5,
//       service: "",
//   },
//   {
//       table: 6,
//       service: "",
//   },
//   {
//       table: 7,
//       service: "",
//   },
//   {
//       table: 8,
//       service: "",
//   },
// ];

// const presentWorkers = chooseWaiter(waiters);

// const giveMeTable = function(tables, waiters) {
// const amount = waiters.length;

// for(let i = 0; i < tables.length; i++){

// let waiterNumber = i % amount;
// let waiterTables = waiters[waiterNumber].tables;
// let tableNumber = tables[i].table;
// tables[i].service = waiters[waiterNumber].name;

// waiterTables = [...waiterTables, tableNumber];

//   }
// }

// giveMeTable(tables, presentWorkers);

// console.log(tables)
// console.log(presentWorkers);

// // 3. Написать функцию getOrder(table, dishId, num), которая принимает номер столика, 
// // id блюда(меню с блюдами внешняя переменная из глобальной области видимости) 
// // и кол-во данных блюд в заказе. добавляет в объекте столика, свойство currentOrder 
// // - объект со свойствами, где ключ - id блюда, значение ключа - кол-во этих блюд в 
// // текущем заказе
// // Пример: currentOrder: {capuchino: 2, napoleon: 2, zavarnoe: 1},




// const askName = function(msg) {
//   let name = prompt("What is your name?");
//   console.log(msg + name);
// }

// const greeting = function(callback) {
//   let msg = "My name is: "
//   callback(msg);
// }
// greeting(askName);

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
    
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
    
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
  
//     accum = cb(add(element));
//     accum = cb(mult(element));
//     accum = cb(sub(element));
   
//   }
//   return accum;
// }

// const arr  = [1,2,3,4,5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// const printValue = function(value) {
//   console.log(value);
// };

// const prettyPrint = function(value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// const filter = function(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount);

// const bar = function() {
//   console.log('bar');
// };

// const baz = function() {
//   console.log('baz');
// };

// const foo = function() {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();

// const makeShef = function(name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

// const tellName = function() {
//   let firstName = Olya;
//   let surname = Petrenko;
// const giveAge = function() {
//   console.log(firstName, surname);
// }
// giveAge()
// }
// tellName()

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   const act =  action(itemName);
//   const msg =  `Invoking action on ${itemName}`;
//   return {act, msg};
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory)  // Write code in this line
// );

// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']


// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory)  // Write code in this line
// );

// const arrayRemove = [...inventory.items];


// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;


// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function(callback) {
//   /*
//    * Во время вызова fn, callback будет ссылкой
//    * на функцию showThis объекта hotel.
//    * Ее вызов происходит в глобальном контексте,
//    * про hotel она ничего не знает.
//    * Соответственно this не будет ссылаться на hotel
//    */
//   callback();
// };

// // Передается ссылка на функцию а нее ее вызов
// fn(hotel.showThis); // window или undefined

// const hotel = {
//   name: 'Resort hotel',
//   showThis: function showThis() {
//     /*
//      * Контекст для стрелки сохраняется
//      * и передается из внешней области видимости
//      */
//     const context = this;

//     const fn = function fn() {
//       // А тут используется
//       console.log('this in fn: ', context);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}



// const sumNumber = function(a) {
//   return function add(b) {
//     console.log(a + b);
//   }
// }
// sumNumber(-3)(5);


// const counter = function(n) {
//   let state = n;
  
//   const onDecrement = function(n) {
//       state -= n;
//       console.log(state);
//   }
//   const onIncrement = function(n) {
//       state += n;
//       console.log(state);
//   }
//   return {onDecrement, onIncrement}
//   }
//   // counter() === {
//   //     onDecrement: <fn>,
//   //     onIncrement: <fn>
//   //     }
//   // counter().onIncrement();
//   // counter().onIncrement();
//   // counter().onIncrement();
//   let counterA = counter(10);
//   counterA.onIncrement(2);
//   counterA.onIncrement(10);
//   counterA.onIncrement(500);
//   counterA.onDecrement(500);
//   let counterB = counter(600);
//   counterB.onDecrement(20);
//   counterB.onDecrement(300);
//   counterB.onDecrement(2);
//   counterB.onDecrement(1);
//   console.log(counter());

// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//    return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log(this.step);
// return this;
//   }
// };

// let stepper = {...ladder};
// console.log(stepper);



// const moveStepper = function() {
// this.step += 3;
// this.up().up().up();

// return this;
// }

// let contextStepper = moveStepper.bind(stepper);
// let contextLadder = moveStepper.bind(ladder);
// console.log(contextStepper());
// console.log(contextLadder());

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было 
// сделать по цепочке, например так:
// ladder.up().up().up().showStep().down().down().showStep();
// ladder.down().down().down().showStep();
// stepper.up().up().showStep();
// moveStepper.call(ladder);
// ladder.showStep();

// let obj = contextStepper.down().down().showStep();
// console.log(obj === stepper);
// stepper.showStep();
// stepper.down().down().down().showStep();

// let money = 85;
// // Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// let cars = [
// {name:'ferrari', cost: 100},
// {name:'lambo', cost: 90},
// {name:'bmw', cost: 80},
// {name:'subaru', cost: 60}
// ]
// let arr = [];
// for (let car of cars) {
//   if(car.cost < money) {
    
//     arr.push(car);
//   }
// }
// console.log(arr);

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") {
//     ok.call(user); 
//   }
//   else fail.call(user);
  
// }

// let user = {
//   name: 'Вася',
//   loginOk() {
//     // console.log(this);
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };


// askPassword(user.loginOk, user.loginFail);

// const a = askPassword.bind(user, user.loginOk, user.loginFail);
// console.log(a);

// const CarCreator = function(name, model, type, color) {
// this.name = name;
// this.model = model;
// this.type = type;
// this.color = color;
// this.pi = 3.14;
// this.presentation = function () {
// console.log(`${this.name}, ${this.color}`)
// }
// this.soldTo = function(name) {
//   console.log(`${this.name} was sold to ${name}`)
// }
// }
// let ferrari = new CarCreator('Ferrari', '487', 'coupe', 'red');
// let bmw = new CarCreator('BMW', '487', 'coupe', 'red');
// ferrari.presentation();
// bmw.presentation();
// ferrari.maxSpeed = 420;
// console.log(ferrari);
// console.log(bmw);
// ferrari.soldTo('Vasya');

// const Account = function(login, email) {
//   this.login = login;
//   this.email = email;

// }
//   Account.prototype.getInfo = function() {
//    return `${this.login} : ${this.email}`;
//   }



// console.log(typeof Account.prototype.getInfo);
// // 'function'

//  const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// // 'login : Mangozedog, email: mango@dog.woof'

//  const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.

// let statistics = {
//     soldGenaral: 0,
//     soldTshirts: 0,
//     soldJackets: 0
// }

// const ItemToSale = function (size, type, color) {
// this.size = size;
// this.type = type;
// this.color = color;
// }

// ItemToSale.prototype.saveToStatistics = function () {
//   statistics.soldGenaral++;
//   switch(this.type) {
//     case "tshirt":
//       statistics.soldTshirts++;
//       break;
//     case "jacket":
//       statistics.soldJackets++;
//       break;
//     default:
//       console.log("The item doesn't exist!");
//   }
// }

// const tshirt = new ItemToSale("xxxl", "tshirt", "blue");
// tshirt.saveToStatistics();
// console.log(statistics);
// const jacket = new ItemToSale("xs", "jacket", "black");
// jacket.saveToStatistics();
// console.log(statistics);
// const shit = new ItemToSale("m", "shit", "brown");
// shit.saveToStatistics();
// console.log(statistics);

// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

// let statistics = {
//   allVotes: 0,
// }

// const CreateVoter = function(name) {
//   this.name = name;
  
//   this.vote = function(presidentName) {
//   if(!(this.name in statistics)) {
//   statistics.allVotes += 1;
//   statistics[this.name] = presidentName;
//   console.log(`${this.name} : ${presidentName}`);
//   } else console.log("You can not vote anymore!!!");
// }
// }

// const Total = function(name) {
// this.name = name;
// this.value = 0;
// this.counter = function () {
//   this.value += 1;
// }
// }


// let voter = new CreateVoter("Vasya");
// voter.vote("Biden");
// let voter2 = new CreateVoter("Ivan");
// voter2.vote("Trump");
// let voter3 = new CreateVoter("Dima");
// voter3.vote("Trump");
// voter3.vote("Biden");
// let president = new Total("Biden");
// president.counter();
// console.log(president);

// class User {
//   constructor(name, age, followers){
//    this.name = name;
//     this.age = age;
//     this.followers = followers;
//   } 
//     getInfo() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    
//   }
//  }

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); 
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// // 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(goods) {
//   this.items = goods;
   
   
//   }

// getItems() {
//   return this.items;
// }
//    addItem(item) {
//      return this.items.push(item); 
//      }
   
//    removeItem(item) {
//      for(let el of this.items) {
//      if(item === el){
//       let index = this.items.indexOf(item);
//       this.items.splice(index, 1);
     
//      }
//     }
//      }
//    }
  
  
// console.log(typeof Storage);
// // 'function'

// const goods = [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */
// storage.addItem('Пролонгер');
// console.log(storage.getItems());
// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */
// storage.removeItem("1111")
// console.log(storage.getItems());

// class StringBuilder {
//   constructor(str) {
//   this._value = str; 
  
//   }
//   get value() {    
//   return this._value;  
//   } 
//   append(str) {
//    return str += this._value; 
//   }
//   prepend(str) {
//   return this._value += str;   
//   }
//   pad(str) {
//          str = this.append();
//          str = this.prepend();
// }
// }

// console.log(typeof StringBuilder);
// // 'function'


// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// const fn = function (a) {
// a = 5;  
// }
// console.log(a);

// class Car {
  /*
   * Добавь `статический` метод 
   * `getSpecs(car)`, который принимает 
   * объект-машину как параметр 
   * и возвращает шаблонную строку 
   * со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   */
  // constructor() {}

  /*
   * Добавь геттер и сеттер 
   * для свойства `price`, который будет 
   * работать с свойством цены автомобиля.
   * 
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с 
   * подчеркиванием. См. ниже пример 1.
   */

  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
  // turnOn() {}

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать 
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
  // turnOff() {}

  /*
   * Этот метод должен добавлять 
   * к свойству `speed` полученное
   * значение, при условии, 
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
  // accelerate(value) {}

  // class Car {
  //   // Write code under this line
  //    static getSpecs(car){
  //     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${true}, distance: ${car.distance}, price: ${car._price} ` 
      
  //    }
  //    constructor({maxSpeed, price}) {
  //      this.speed = 0;
  //      this._price = price;
  //      this.maxSpeed = maxSpeed;
  //      this.isOn = false;
  //      this.distance = 0;
      
  //    }

  //    get price() {
  //      return this._price;
  //    }
  //    set price(value) {
  //      this._price = value;
  //    }

  //    turnOn() {
  //      this.isOn = true;
  //    }
  //    turnOff() {
  //      this.isOn = false;
  //      this.speed = 0;
  //    }

  //    accelerate(value) {
  //     if(this.speed + value <= this.maxSpeed){ 
  //     this.speed = this.speed + value;
  //     }
  //     else this.speed = this.maxSpeed;
  //   }

  //    decelerate(value) {
  //      if (this.speed - value > 0) {
  //      this.speed = this.speed - value;
  //      }
  //      else this.speed = 0;
       
  //    }

  //    drive(hours) {
  //      if(this.isOn) {
  //        this.distance += hours * this.speed
  //      }
      
  //    }
  //  }
    
  //  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  //  mustang.turnOn();
  //  mustang.accelerate(50);
  //  mustang.drive(2);
  //  console.log(mustang);
   
   
  //  console.log(Car.getSpecs(mustang));
  //  // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
  //  mustang.decelerate(20);
  //  mustang.drive(1);
  //  mustang.turnOff();
   
  //  console.log(Car.getSpecs(mustang));
  //  // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
  //  console.log(mustang.price); // 2000
  //  mustang.price = 4000;
  //  console.log(mustang.price); // 4000
   
  // const dirtyMultiply = (array, value) => {
  //   for (let i = 0; i < array.length; i += 1) {
  //     array[i] = array[i] * value;
  //   }
  // };
  
  // const numbers = [1, 2, 3, 4, 5];
  
  
  // dirtyMultiply(numbers, 2);
  
  // // Произошла мутация исходных данных
  // console.log(numbers); // [2, 4, 6, 8, 10]
  
  // const pureMultiply = (array, value) => {
  //   const result = [];
  
  //   for (let i = 0; i < array.length; i += 1) {
  //     result.push(array[i] * 2);
  //   }
  
  //   return result;
  // };
  
  // const numbers = [1, 2, 3, 4, 5];
  // const doubledNumbers = pureMultiply(numbers, 2);

  
  
  // // Не произошло мутации исходных данных
  // console.log(numbers); // [1, 2, 3, 4, 5]
  
  // // Функция вернула новый массив с измененными данными
  // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  
//   const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);


// const users = ["Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ]  
// // Write code under this line
// const getUserNames = users.map(users => user.name)

// console.log(getUserNames(users));


//  let users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "brown",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   }
// ] 

// const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color);


// console.log(getUsersWithEyeColor(users, 'blue'));
const users =  [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// const getUsersWithGender = (array, gender) => array.filter(user => user.gender === gender)
// .map(({name}) => name);

// console.log(getUsersWithGender(users, 'male'));

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value, 0);

// console.log(summ); // 15

// const getInactiveUsers = array => array.filter(({isActive}) => !isActive);

// console.log(getInactiveUsers(users));

// Получи объект пользователя (не массив) по уникальному значению свойства email.

// Используй деструктурирующее присваивание для параметра функции ({email}) без пробелов и переносов на новую строку.

// const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));


// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age).

// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => min <= age && age >= max)   
//  .map(({name, email}) => ({name, email}));  


// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// const calculateTotalBalance = array => array.reduce((total, {balance}) => total += balance, 0);

// console.log(calculateTotalBalance(users)); 

// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.

// Используй деструктурирующее присваивание для параметра функции {friends}и ({name}) без пробелов и переносов на новую строку



// const getUsersWithFriend = (array, friendName) => array.filter(({friends}, {name}) => friends.includes(friendName) === name).map(({friends}, {name}) => friends, name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]


// Некая сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Дополнительно, гамбургер можно посыпать приправой (+ 15 тугриков, 0 калорий) и полить майонезом (+ 20 тугриков, + 5 калорий). Напиши программу, расчиытвающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

// Код должен быть защищен от ошибок. Представь, что твоим классом будет пользоваться другой программист. Если он передает неправильный тип гамбургера, например, или неправильный вид добавки, должно выбрасываться исключение (ошибка не должна молча игнорироваться).

// Написанный класс должен соответствовать следующему jsDoc описанию (то есть содержать указанные методы, которые принимают и возвращают данные указанного типа и выбрасывают исключения указанного типа. Комментарии ниже можно скопировать в свой код):

/* Класс, объекты которого описывают параметры гамбургера.
@constructor
@param size Размер @param stuffing Начинка
@throws {HamburgerException} При неправильном использовании /
function Hamburger(size, stuffing) { ... }



/ Размеры, виды начинок и добавок /
Hamburger.SIZE_SMALL = ...
Hamburger.SIZE_LARGE = ...
Hamburger.STUFFING_CHEESE = ...
Hamburger.STUFFING_SALAD = ...
Hamburger.STUFFING_POTATO = ...
Hamburger.TOPPING_MAYO = ...
Hamburger.TOPPING_SPICE = ...

/* Добавить добавку к гамбургеру. Можно добавить несколько
добавок, при условии, что они разные.
@param topping Тип добавки @throws {HamburgerException} При неправильном использовании
*/
// Hamburger.prototype.addTopping = function (topping) ...

/* Убрать добавку, при условии, что она ранее была
добавлена.
@param topping Тип добавки @throws {HamburgerException} При неправильном использовании
*/
// Hamburger.prototype.removeTopping = function (topping) ...

/* Получить список добавок.
@return {Array} Массив добавленных добавок, содержит константы
Hamburger.TOPPING_
*/
// Hamburger.prototype.getToppings = function () ...

/* Узнать размер гамбургера
*/
// Hamburger.prototype.getSize = function () ...

/* Узнать начинку гамбургера
*/
// Hamburger.prototype.getStuffing = function () ...

/* Узнать цену гамбургера
@return {Number} Цена в тугриках /
Hamburger.prototype.calculatePrice = function () ...

/* Узнать калорийность
@return {Number} Калорийность в калориях /
Hamburger.prototype.calculateCalories = function () ...

/* Представляет информацию об ошибке в ходе работы с гамбургером.
Подробности хранятся в свойстве message. @constructor
*/
// function HamburgerException (...) { ... }

// const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName)) .map(({name}) => name);


// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]


// const getNamesSortedByFriendsCount = (array) => {
//   const newArr = [...array];
//   return newArr.sort((a, b) => a.friends.length - b.friends.length)
//   .map(({name}) => name);
// };

// console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = (array) => array.reduce((acc, el) => {
  acc.concat(el.skills);
  return acc;
  
}, [])
console.log(el.skills)
.filter ((item, index) => {
  el[skills].indexOf(item) === index
console.log(users);
})

.sort((a, b) => a.skills.length > b.skills.length);

// console.log(getSortedUniqueSkills(users));