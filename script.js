'use strict';

/* let lang = {
   'ru': {
    0:'Понедельник',
    1:'Вторник',
    2:'Среда',
    3:'Четверг',
    4:'Пятница',
    }
};

console.log(lang['ru'][0]); */
//console.log(days['en'][2];

/* let num = 1;

/* if (a > 0 && a < 5) {
    console.log('a = ' + a);
} else {
    console.log('Фиг знает что ......');
}

 */
/*
let result = '';
switch (num) {
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Осень';
        break;
    default:
        console.log('Это незнаю что!!!');
}
console.log(result); */

/* let day = 25;
if (day > 0 && day <= 10) {
    console.log(`Это первая декада месяца : ${day}`);
} else if (day >= 11 && day <= 20) {
    console.log(`Это вторая декада месяца : ${day}`);
} else if (day >= 21 && day <= 31) {
    console.log(`Это третья декада месяца : ${day}`);
} else {
    console.log('Вы ввели не число!!!!!');
} */

/* let str = 'abcde';

if (str[0] == 'a' || str[0] == 'b' && str[0] == 'c') {
    console.log('Yes');
} else {
    console.log('No');
} */

/* let num = '123';
console.log(Number(num[0]) + Number(num[1]) + Number(num[2])); */

/* let num = '123456';
let a = +num[0] + +num[1] + +num[2];
let b = +num[3] + +num[4] + +num[5];
if (+num[0] + +num[1] + +num[2] == +num[3] + +num[4] + +num[5]) {
    console.log('YES');
} else {
    console.log('NO');
}

console.log(a);
console.log(b); */

/* var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); //выведет 1, 2, 3, 4, 5
} */

/* var i = 1;
while (i <= 50) {
    console.log(i + '<br>');
    i++;
} */

/* for(var i = 1;i <= 100; i++){
    console.log(i);
} */

/* let i = 0;

while (i < 100) {
    i++;
    console.log(i);
} */

/* for(var i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
} */

/* var i = 0;
while (i < 100) {
    if (i % 2 == 0)
        console.log(i);
    i++;

} */
/* let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;

}
console.log(sum);*/

/* let sum = 0;
let i = 0;

while(i <= 100 ){
    sum +=i;
    i++;
}
console.log(sum); */
/* let result = 0;
let arr = [1, 2, 3, 4, 5];
for (key of  arr) {
result +=key;
}

 console.log(result); */

/* let arr = [1,2,3,4,5];
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
} */
/*  let sum = 0;
 let arr = [1, 2, 3, 4, 5];
 for (let i = 0; i < arr.length; i++) {
    sum +=arr[i];
 }
 console.log(sum); */

//  var obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'голубой'
// };
// for (let key in obj) {
//     console.log(`Key ${key} property ${obj[key]}`);
// }

// let arr = [2,3,6,8,1,12];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
//     }else{
//         console.log('Warning');
//     }
// }

// let sum = 0;
// let arr = [-1,3,9,23,45,-4,-6];
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] > 0){
//         sum +=arr[i];
//     }
// }
// console.log(sum);
// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] === 5){
//
//         break;
//     }else{
//         console.log('такой ключ есть!!');
//     }
// }

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         break; //выходим из цикла
//     } else {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// console.log(arr.join('-'));// 1-2-3-4-5-6-7-8-9

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for( let key of arr){
//     console.log(`-${key}-`);//-1--2--3--4--5--6--7--8--9-
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for( let i = 0; i < arr.length; i++){
//     console.log('-'+arr[i]+'-');
// }

// let day ={
//     1:'Понедельник',
//     2:'Вторник',
//     3:'Среда',
//     4:'Четверг',
//     5:'Пятница',
//     6:'Суббота',
//     7:'Воскресенье'
// };
// for(let key in day) {
//      console.log(day[key]);
//
// }

// var people = [
//     [ "Daniel",30,"San Francisco",["175 lb"," 6\'0\""] ],
//     [ "Deryl",29,"Seattle",["165 lb"," 5\'9\""] ],
//     [ "Mandie",29,"Seattle",["155 lb"," 5\'8\""] ],
//     [ "Elena",28,"Seattle",["145 lb"," 5\'6\""] ]
// ];
//
// for(var i = 0; i < people.length; i++) {
//     document.write("<br>"+"<b>");
//     for(var j = 0; j < people.length; j++) {
//         document.write(people[i][j]+"<br>");
//     }
// }
//
// let n = 1000;
// let num = 0;
// while(n > 50){
//     n = n / 2;
//     num ++;
//     console.log(n);
// }
// console.log(num);
// var arr = [4, 2, 5, 19, 13, 0, 10];
// var summ = 0;
//
// for(var i = 0; i < arr.length; i++){
//     var cub = Math.pow(arr[i],3);
//     summ = summ + cub;
// }
// var sqrSummCub = Math.sqrt(summ);
// alert(sqrSummCub);

// var sqr = Math.sqrt(379);
// alert('Округляем до целых - ' + Math.round(sqr));
// alert('Округляем до десятых - ' + sqr.toFixed(1));
// alert('Округляем до сотых - ' + sqr.toFixed(2));

// var sqr = Math.sqrt(587);
// var obj = {
//     'floor' : Math.floor(sqr),
//     'ceil' : Math.ceil(sqr)
// }


// alert('Максимальное число ' + Math.max(4,-2,5,19,-130,0,10));
// alert('Минимальное число ' + Math.min(4,-2,5,19,-130,0,10));
// let f = 6;
// let factory = 1;
// while(f > 1){
//     factory = factory * f;
//     f--;
// }
// console.log(factory);
//
// var a = 5;
// var fac = 1;
// for (var i = 1; i <= a; i++) {
//     fac *= i;
// }
// console.log(fac);

// let arr = ['a','b','c','d','e'];
// // // arr.reverse();
// // // console.log(arr);// [ 'e', 'd', 'c', 'b', 'a' ]
// // //
// // // let ar1 = '123545789';
// // // let ar2 = ar1.split('');
// // // console.log(ar2);
// // // ar2.reverse();
// // // console.log(ar2);
// // // let result = ar2.join('"" ');
// // // console.log(result);

// let obj = {
// //     js:'test',
// //     jq: 'hello',
// //     css: 'world'
// // };
// // console.log(Object.keys(obj));

// let str = 'hello!!';
// let result = str[0].toUpperCase()+ str.substr(1);
// console.log(result);

// function func(num){
//     return Math.pow(num,2);
// }
//
// let a = func(3);
// console.log(a);

// function sum(a,b){
//     return console.log(parseInt(a) + parseInt(b));
// }
// sum(15,15);

// function yrav(a,b,c){
//     return console.log((a-b)/c);
// }
// yrav(30,10,2);

// function day(param){
// //     try {
// //         switch(param){
// //             case 1:
// //                 console.log('Понедельник');
// //                 break;
// //             case 2:
// //                 console.log('Вторник');
// //                 break;
// //             case 3:
// //                 console.log('Среда');
// //                 break;
// //             case 4:
// //                 console.log('Четверг');
// //                 break;
// //             case 5:
// //                 console.log('Пятница');
// //                 break;
// //             case 6:
// //                 console.log('Суббота');
// //                 break;
// //             case 7:
// //                 console.log('Воскресенье');
// //                 break;
// //             default:
// //                 console.log('Этого дня недели нет!!!!');
// //                 break;
// //         }
// //
// //     }catch (e) {
// //        alert(e.name);
// //     }
// //
// // }
// // day(1);

// var arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 'c') {
//         console.log('Есть');
//     }
// }

// function func(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 5){
//             return 'Да';
//         }
//     }
//     return 'нет';
// }
//
// let arr = [1,2,3,4,5,6,7];
// console.log(func(arr));

// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= 3; j++) {
//         console.log(i); //выводит '111', потом '222', потом '333' и так далее
//     }
// }

// var str = '';
// for (var i = 0; i < 10; i++) {
//     str = str + 'x';
//     document.write(str + '<br>');
// }

// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(i);
//     }
//     document.write('<br>');
// }
//
// for (var i = 1; i <= 9; i++) {
//     var str = ''; //каждый раз зачищаем строку
//
//     for (var j = 1; j <= i; j++) {
//         str = str + i;
//     }
//     document.write(str + '<br>');
// }

// let str = '';
// // for(let i = 1; i <= 9; i++){
// //     str = str + i;
// // }
// // console.log(str);

// let str = '';
// for(let i = 1; i <= 9; i++){
//     str = str + i;
// }
// let arr1 = str.split('');
// let arr = arr1.reverse();
// let result = arr.join('');
// console.log(result);
// var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// var sum ='';
// for (var i = 0; i < arr.length; i++) {
//     // for (var j = 0; j < arr[i].length; j++) {
//     //     alert(arr[i][j]);
//     // }
//     console.log(arr[i]);
// }

// var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// var sum = '';
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         for (var k = 0; k < arr[i][j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
// console.log(sum);

// var arr = [12, 19, 28, 13, 14, 345];
// // var result = [];
// //
// // for (var i = 0; i < 10; i++) {
// //     if (inRange(arr[i])) {
// //         result.push(arr[i]);
// //     }
// // }
// // console.log(result);
// //
// // function inRange(num) {
// //     var sum = arraySum(getDigits(num));
// //     return sum >= 1 && sum <= 9;
// // }
// //
// // function getDigits(num) {
// //     return String(num).split('');
// // }
// //
// // function arraySum(arr) {
// //     var sum = 0;
// //     for (var i = 0; i < arr.length; i++) {
// //         sum += Number(arr[i]);
// //     }
// //
// //     return sum;
// // }
// var arr = [12, 19, 28, 13, 14, 345];
// var sum1 = 0;
//
// for (var i = 0; i < arr.length; i++) {
//     sum1 = arraySum(arr);
// }
// console.log(sum1);
// function arraySum(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += Number(arr[i]);
//     }
//
//     return sum;
// }
// var arr = [1, 2, 3, -1, -2, -3];
// //
// // function isPositive(num) {
// //     if (num >=0) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }
// //
// // var newArr = [];
// // for (var i = 0; i <= arr.length; i++) {
// //     if (isPositive(arr[i])) {
// //         newArr.push(arr[i]);
// //     }
// // }
// //
// // console.log(newArr);

// function isNumberInRange(num){
//     if(num > 0 && num < 10){
//         return true;
//     }else{
//         return false;
//     }
// }
// let arr = [1,2,43,5,66,77,3,2,444];
// let mass = [];
// for(let i = 0; i < arr.length; i++){
//     if(isNumberInRange(arr[i])){
//        mass.push(arr[i]);
//     }
// }
// console.log(mass);
//
// function getDigitsSum(digit){
//     var sum = 0;
//     digit = String(digit).split('');
//     for (var i = 0; i < digit.length; i++) {
//         sum += Number(digit[i]);
//     }
//
//     return sum;
//
// }
// console.log(getDigitsSum(55));
//
// function years(){
//     var mas = [];
//     var arr =[];
//     for(let i = 1; i < 2020 ;i++){
//         arr.push(i);
//     }
//     for(let j = 1; j < arr.length ;j++){
//         if(getDigitsSum(arr[j]) == 13){
//             mas.push(arr[j]);
//         }
//     }
//
//
//    console.log(mas);
// }
// years();
// // let arr2 = [];
// //
// // for(let i = 1; i < 10+1; i++){
// //     arr2.push(i);
// // }
// // console.log(arr2);
//
// function isEvent(num){
//    num = Math.round(num);
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEvent(6));
//
// function massiv(arr){
//     let mas = [];
//     for(let i = 0; i < arr.length; i++){
//         if(isEvent(arr[i])){
//             mas.push(arr[i]);
//         }
//     }
//   return mas;
// }
// let array =[1,2,3,4.5,5,6,7,8,9.5,10,11.6,12,13,14,15];
// console.log(massiv(array));

// function inArray(value, arr) {
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] == value) {
//         return console.log(arr[i]);
//     }
// }
//
// return false;
// }
//
// var arr = [1, 2, 3, 4, 5];
// console.log(inArray(3, arr)); //выведет 3

// function getDivisors(num) {
// //     var result = [];
// //
// //     for (var i = 1; i <= num; i++) {
// //         if(num % i == 0) {
// //             result.push(num);
// //         }
// //     }
// //
// //     return result;
// // }
// //
// // alert(getDividers(24)); //выведет [1, 2, 3, 4, 6, 12, 24]

// function inArray(value, arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] == value) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// function getIntersection(arr1, arr2) {
//     var result = [];
//
//     for (var i = 0; i < arr1.length; i++) {
//         if(inArray(arr1[i], arr2)) {
//             result.push(arr1[i]);
//         }
//     }
//
//     return result;
// }
//
// console.log(getIntersection([1, 2, 3], [2, 3, 4])); //выведет [2, 3]
// function inArray(value, arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] == value) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
//
// function getDivisors(num) {
//     var result = [];
//
//     for (var i = 1; i <= num; i++) {
//         if(num % i == 0) {
//             result.push(num);
//         }
//     }
//
//     return result;
// }
//
//
// function getIntersection(arr1, arr2) {
//     var result = [];
//
//     for (var i = 0; i < arr1.length; i++) {
//         if(inArray(arr1[i], arr2)) {
//             result.push(arr1[i]);
//         }
//     }
//
//     return result;
// }
//
//
// function getGreatestCommonDivisors(num1, num2) {
//     var divisors = getIntersection(getDivisors(num1), getDivisors(num2)); // ['2', '3', '6']
//     return Number(Math.max.apply(null, divisors));
// }
//
// console.log(getGreatestCommonDivisors(12, 18));

// var global = 'Тест!';
// var text = 'XXXXX';
// function func() {
//     var global = 'Поменялась!';
//     text = 'Victory';
//     console.log(text);//'Поменялась!'
// }
// func();//'Поменялась!'
//
// console.log(text); //выведет 'Тест!'

// var arr = [1, 2, 3, 4, 5];
//
// last(arr);
//
// function last(arr) {
//     document.write(arr.pop() + '<br>'); //выводим последний элемент массива
//
//     if(arr.length != 0) {
//         last(arr); //это рекурсия
//     }
// }

// let mass = [1,2,3,4,5];
//
// function func(arr) {
//     console.log(arr[0]);
//     arr.splice(0, 1);
//     if (arr.length > 0) {
//         func(arr);
//     }
// }
// func(mass);

// for (var i = 1; i <= 100; i++) {
//     document.write(i + '<br>');
// }
//
// for (var i = 2; i < 100; i += 2) {
//     document.write(i + '<br>');
// }

// let str = 'X';
// let arr =[];
// for (let i = 0; i < 10; i++){
//     arr.push(str);
// }
//
// var arr1 = [];
// for (var i = 0; i < 10; i++) {
//     arr1[i] = 'x';
// }
// console.log(arr);
// console.log(arr1);
//
// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr.push(Math.random().toFixed(2));
// }
// console.log(arr);
//
// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);
//
// var arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }
//
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] == 5) {
//         alert('Есть!');
//         break;
//     }}
//
// var arr = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// alert(sum);
//
// var arr = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i] * arr[i];
// }
// alert(sum);
//
// var arr = [1, 2, 3, 7, 6, 9];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// var result = sum / arr.length;
// alert(result);

// function buttonClick() {
// //     var input = document.getElementById('input');
// //     alert(input.value);
// // }
// //
// // function buttonClick() {
// //     var input = document.getElementById('input');
// //     var number = Number(input.value);
// //     var square = number*number;
// //     alert(square);
// // }
// //
// //
// // function buttonClick() {
// //     var input1 = document.getElementById('input1');
// //     var input2 = document.getElementById('input2');
// //     var input1Value = input1.value;
// //     var input2Value = input2.value;
// //     input1.value = input2Value;
// //     input2.value = input1Value;
// // }

// function buttonValue(){
//
// }
//
// function buttonClick1(elem) {
//     elem.value = 'Новый текст кнопки';
// }
// let elem = document.querySelector('#elem');
// console.log(elem.outerHTML);
// function func(){
//     // var input = document.getElementById('input');
//     // input.value ='Привет!';
//     // alert(input.value);
// alert('Привет!');
//
// }
//  function buttonClick(){
//     var input = document.getElementById('input');
//     alert(input.value);
//  }

// function buttonClick(){
//     var input = document.getElementById('input');
//     input.value ='Что то изменил в импуте';
// }

// function buttonClick(){
// //
// //     var img = document.getElementById('foto');
// //     img.src ="obeziana2.jpg";
// // }
// // function func(){
// // var input = document.getElementById('input');
// // input.disabled = true;
// // }
// // function left(){
// //     var img = document.getElementById('fot');
// //     img.src ="obeziana2.jpg";
// // }
// // function rigth(){
// //     var img = document.getElementById('fot');
// //     img.src ="obeziana.jpg";
// // }

// function clickFunction(){
//     var input = document.getElementById('input');
//     input.style.color = 'red';
//     input.style.width =' 200px';
// }
function chislo(){
    var input1 = document.getElementById('input');
    var input2 = document.getElementById('input1');
    input1 = input1.value;
    input2.value = input1 * input1;

}