import "./main.scss";
import { Buttons } from "./components/button/button";

const add123 = (a, b) => a + b;
const root = document.querySelector("#root");

root.insertAdjacentHTML("beforeend", Buttons());

const res = add123(222, 3);
console.log("Helloasda");

// Шахматная доска

// let even = '# # # # # # # # ';
// let odd = ' # # # # # # # #';

// for (let i = 0; i < 8; i++){
//     if ( i % 2 == 0) console.log(even);
//     else console.log(odd);
// }
for (let i = 0; i < 8; i++) {
  if (i % 2 == 0) {
    let even;
    for (even = " #"; even.length < 16; even += " #") {
      if (even.lenght < 16) concontinue;
    }
    console.log(even);
  } else {
    let odd;
    for (odd = "# "; odd.length < 16; odd += "# ") {
      if (odd.lenght < 16) concontinue;
    }
    console.log(odd);
  }
}

// // Сотка

// let num
// do {
//     num = +prompt('Введите число больше 100', '')
// } while ( num <= 100 && num)

// // Анкета

// let lastName,
//     firstName,
//     middleName,
//     age,
//     sex,
//     pension;

// do {
//     lastName = prompt('Ваша фамилия?', '');
// } while (lastName.length < 1 || lastName.typeof === Number);

// do {
//     firstName = prompt('Ваше имя?', '');
// } while (firstName.length < 1 || firstName.typeof === Number);

// do {
//     middleName = prompt('Ваше отчество?', '');
// } while (middleName.length < 1 || middleName.typeof === Number);

// do {
//     age = +prompt('Сколько Вам полных лет?', '');
// } while (age ==  '');

//  if (confirm('Вы мужчина?', '') == true){
//     sex = 'Мужской'
// } else {
//     sex = 'Женский'
// } ;

// if (age < 60){
//     pension = 'Нет'
// } else {
//     pension = 'Да'
// }

// alert(`Ваше ФИО: ${lastName} ${firstName} ${middleName}\n
// Вам полных лет: ${age}\n
// Ваш пол:  ${sex}` +
// `\nЧерез 5 лет Вам будет` + ' ' +(age + 5) +
// `\nПенсия: ${pension}`);
