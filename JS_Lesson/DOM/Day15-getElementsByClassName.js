// document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[2]);

// items[2].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName();
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[0].textContent = 'Hello';

// lis = Array.from(lis);

// console.log(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hey`;
// });

// document.querySelectorAll()

const items = document.querySelector('ul.collection li.collection-item');

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

console.log(liEven);

liOdd.forEach(function(li, index) {
  li.style.background = 'purple';
});

for(let i = 0; i < liEven; i++) {
  liEven[i].style.background = 'cyan';
}

liEven.forEach(function(li, index) {
  li.style.background = 'cyan';
});