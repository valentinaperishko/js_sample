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
//     car.isEngineOn ? console.log("You can go!") : console.log("Engine is off");
    
    
    
//   },

//   speedOn(n) {
//     car.isEngineOn ? car.speed += n : console.log('Turn your engine on!');
//     car.isEngineOn ? console.log(`Speed is increased on ${n}, current speed is ${car.speed}!`) : console.log('Turn your engine on!');
    
//   },
 
//   speedOff(n) {
// car.isEngineOn ? car.speed -= n : console.log("Your speed starts to decrease!");
// car.isEngineOn ? console.log(`Speed is decreased on ${n}, current speed is ${car.speed}!`) : console.log("Your speed starts to decrease!");

//   },
  
//   lightsToggle() {

// car.isLightOn = !car.isLightOn;
// // console.log(car.isLightOn);
// car.isLightOn === car.isEngineOn ? console.log("Lights are on!") : console.log("Lights are off");

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

// 1. Написать функцию, которая из списка официантов(массив объектов) выбирает официантов, которые  есть на смене по свойству isPresent: true; и записывает их всех в массив, который хранится в переменной presentWorkers = []. 
// Пример: 
// console.log(presentWorkers); // [{name: "Ann", isPresent: true, tables: [], tips: 0}, {name: "Bob", isPresent: true, tables: [], tips: 0}]


const waiters = [
  {
      name: "Ann",
      isPresent: true,
      tables: [],
      tips: 0
  },
  {
      name: "Nick",
      isPresent: false,
      tables: [],
      tips: 0
  },
  {
      name: "Carrol",
      isPresent: true,
      tables: [],
      tips: 0
  },
  {
      name: "Jack",
      isPresent: false,
      tables: [],
      tips: 0
  },
  {
      name: "Berry",
      isPresent: false,
      tables: [],
      tips: 0
  },
  {
      name: "Jim",
      isPresent: true,
      tables: [],
      tips: 0
  },
];
const presentWorkers = [];

const chooseWaiter = function(worker) {
  for(let waiter of waiters) {


    if(waiter.isPresent) {
      waiters[waiter] = presentWorkers[worker];
      console.log(waiters);
      console.log(presentWorkers);
    } 
  }
  return presentWorkers;
} 

chooseWaiter(presentWorkers);
console.log(presentWorkers);

// Написать ф-цию, которая принимает два параметра (список столиков, список официантов на смене) распределяет все столики в кафе - tables, между всеми официантами, которые есть на смене и перезаписывает в свойство каждому столику, имя официанта, который его обслуживает, и официанту, в свою очередь, в свойство tabeles, перезаписывает все номера столиков, которые он обслуживает на этой смене - функция ничего не возвращает, а перезаписывает объекты в массивах 
// Пример: 
// console.log(presentWorkers); // [{name: "Ann", isPresent: true, tables: [1, 3, 6, 7], tips: 0}, {name: "Bob", isPresent: true, tables: [2, 4, 5, 8], tips: 0}] 

// console.log(tables); // [{tabel: 1, service: "Ann"}, {tabel: 2, service: "Bob"}, {tabel: 3, service: "Ann"}, ... ] 
const tables = [
  {
      table: 1,
      service: "",
  },
  {
      table: 2,
      service: "",
  },
  {
      table: 3,
      service: "",
  },
  {
      table: 4,
      service: "",
  },
  {
      table: 5,
      service: "",
  },
  {
      table: 6,
      service: "",
  },
  {
      table: 7,
      service: "",
  },
  {
      table: 8,
      service: "",
  },
];
// const giveMeTable = function(table, waiter) {
//   for(let waiter of waiters){

//   }

// }

// console.log(tables)
// console.log(presentWorkers);











