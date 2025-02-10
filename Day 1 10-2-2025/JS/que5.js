// 5. Rotate String 'w3resource' Periodically
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

let str = 'w3resource';

let arr = str.split('');
let temp = arr[arr.length - 1];
arr.pop();
arr.unshift(temp);

let rotateStr = arr.join('');

console.log(rotateStr); // ew3resourc
