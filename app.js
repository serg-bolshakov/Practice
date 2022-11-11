/* Ежедневно количество доступных автомобилей в салоне уменьшается в два
раза. Выяснить, на какой день продаж, количество доступных к покупке авто
станет меньше M, если известно, что в первый день продаж всего было N
автомобилей*/

let stockTotal = 17; // кол-во автомобилей в первый день продаж - N
let stockCurrent; //кол-во автомобилей на начало дня
let stockMin = 4; //минимально возможный остаток авто на начало дня - М
let soldCars; //кол-во проданных автомобилей за день
let sellingDays = 0; //количество дней продаж

stockCurrent = stockTotal;

while (stockCurrent > stockMin) {
  stockCurrent = stockCurrent / 2; //кол-во доступных автомобилей уменьшилось в два раза
  sellingDays += 1;
}
//console.log (`${sellingDays}`);
console.log ("На", sellingDays, "-й день продаж количество автомобилей окажется меньше, чем это требуется для нормальной работы" );





//Вывести в консоль заданную строку N раз

let stringText = 'Этот текст нужно вывести в консоль 5 раз';
let counter = 5;
let textIteration = 0;
let message = '';

while (textIteration++ < counter) {
  message += stringText + '.'+'\n';    
 }

 console.log (message); 



// Что выведет комбинация данных логических операторов, и почему?

let result = (null || 0 || "" || undefined);
console.log(result);

/* null || 0 || “” || undefined - ответ: undefined (для вычисления приводим значения к логическому типу)
логическое ИЛИ вычисляет операнды слева направо и возвращает первое True. если все значения false - возвращает значение 
последнего операнда*/

// “яблоко” && true && null && 1 - ответ: null (лигическое "И" возвращает первое ложное значение);

/* 0 || true && “false” || null - ответ: true (приоритет логического "И", выше, чем у "ИЛИ"... строка "false" - это true
далее - слева направо, логическое "ИЛИ", которое возвращает первое true)*/

// 0 && true || “false” && null - ответ: 0 (оператор "И" выводит первое false);

// !0 && !!1 - ответ: 1 (!0 - true, !!1 - true, если все значения true - выводится значение последнего операнда);

/* !(null || !”апельсин” && true) - ответ: "апельсин" (! имеет высший приоритет, !”апельсин” - это false, сравнение "И", возвращает 
первое ложное значение);/*


/* C помощью конструкции switch и переменной, хранящей роль пользователя
 (admin, manager, user …), выводить на экран информацию о пользователе
 (информацию любого типа, роль, дату рождения, любимый напиток и тд). */

const visitorRole = ""; //admin, manager, user

switch (visitorRole) {
  case "admin":
    console.log("Вы - администратор");
    break;
  case "manager":
    console.log("Вы - менеджер");
    break;
  default:
    console.log("Мы вас не знаем!");
    break;
}

/*Реализовать систему рекомендаций для пользователя опираясь на значение
переменной, хранящей значение температуры в градусах Цельсия.*/

let temperatureCelcius = 35;

if (temperatureCelcius < -30) {
  console.log("“Оставайтесь дома!”");
} else if (temperatureCelcius <= -10) {
  console.log("“Сегодня холодно”");
} else if (temperatureCelcius <= 5) {
  console.log("“Не холодно”");
} else if (temperatureCelcius <= 15) {
  console.log("“Тепло”;");
} else if (temperatureCelcius <= 25) {
  console.log("“Очень тепло”");
} else if (temperatureCelcius < 35) {
  console / log("“Жарко”");
} else console.log("“Пекло!”");

/*С помощью условных операторов вывести на 
экран длину наибольшего отрезка из трех данных.*/

let length1 = 100;
let length2 = 40;
let length3 = 50;
let longest;

if (length1 > length2) {
  longest = length1;
} else longest = length2;

if (longest > length3) {
  console.log(longest);
} else console.log(length3);
