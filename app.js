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
