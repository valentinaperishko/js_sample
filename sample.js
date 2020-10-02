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


let car = {
  speed: 0,
  speedOn() {
    
  },
  speedOff
  color: black,
  isEngineOn: true,
  engineToggle
  isLightOn: true,
  lightsToggle,

}
