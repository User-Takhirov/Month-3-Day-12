/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////probellarni olib tashlash
// let a = "werwerw wer werwd csfds fd";

// const x = () => {
//   let res = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== " ") {
//       res += a[i];
//     }
//   }
//   return res;
// };
// let result = x(a);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let str = "lOrem loRem lorem";
// const x = (value) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (value[i] == value[i].toLowerCase() && value[i] !== " ") {
//       newStr += value[i] + value[i + 1].toUpperCase();
//       i+=1
//     }   else {
//       newStr += value[i];
//     }
//   }
//   return newStr;
// };

// console.log(x(str));

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\//\\//\\//\\//
// textdan unli harflarni topish

// let str = "lorem";
// const x = (str) => {
//   let arr = ["a", "i", "o", "u", "e"];
//   let count = 0;
//   for (let i of str) {
//     const value = arr.find((item) => item == i.toLowerCase());
//     if (value) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(x(str));

////////////////////////////////////////////////////////////////
//hw
//1
// array ichidagi katta va kichik sonlrni topib beradigan funksiya
// let arr = [89, 100, 12, 45, 32, 76];
// const x = (arr) => {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return { max, min };
// };
// console.log(x(arr));

//2
// array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chirish
//2dan katta bolgan sonlarniu push qilish
// let arr = [9, 1, 3, 6, 2];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 2) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

//3
//toq va juft sonlarni topish
// let arr = [2, 6, 4, 5, 9];
// let juft = [];
// let toq = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     juft.push(arr[i]);
//   } else {
//     toq.push(arr[i]);
//   }
// }
// console.log("juft",juft);
// console.log("toq",toq);

//4
//sonlarning qiymatini hisoblash
// function x(arr) {
//   let newArr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     newArr += arr[i];
//   }
//   return newArr;
// }
// let arr = [10, 5, 3, 2];
// console.log(x(arr));

//5
// function value(obj) {
//   return Object.values(obj)
// }

// function keys(obj) {
//   return Object.keys(obj)
// }

// let obj = { name: 'Muhammadali', age: 20, id: 3 }

// console.log(value(obj));
// console.log(keys(obj));
