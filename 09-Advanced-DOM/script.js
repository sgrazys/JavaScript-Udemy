'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
////SELECTING, CREATING AND DELETING ELELEMENTS

// //// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// const header = document.querySelector('.header'); // pasirenkame pagal class
// const allSections = document.querySelectorAll('.section'); // pasirenkam visus elementus su class section, grazina node list'a
// console.log(allSections);

// document.getElementById('section--1'); // pasirenkame eleenta pgl ID

// const allButtons = document.getElementsByTagName('button'); // pasirenkame visus elementus pagal tag'a
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));


// //// creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved funcionality and analytics.';
// message.innerHTML = 'We use cookies for improved funcionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true))

// // header.before(message);
// // header.after(message);

// // // //  Deleting elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   message.remove();

// message.parentElement.removeChild(message);
// })

///////////////////////////////////////
////STYLES, ATTRIBUTES AND CLASSES

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);
// console.log(message.style.color);
// console.log(message.style.width);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).width);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo'

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j'); // pridedam klase
// logo.classList.remove('c', 'j'); // istrinam klase
// logo.classList.toggle('c'); // jeig turi nurodytaklase istrinam, jeigu neturi prideda
// console.log(logo.classList.contains('j')); // not includes like in arrays



///////////////////////////////////////
////TYPE OF EVENTS AND EVENT HANDLERS

// //Mouse enter event

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D')

// }

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 5000)


// // OLD DAYS :) 

// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D')
// // }

// // // Remove event

// // h1.removeEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 5000)

///////////////////////////////////////
////EVENT PROPAGATION: BUBLING IN PRACTICE

// rgb(255,255,255)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //Stop Propogation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);

// });


///////////////////////////////////////
//// DOM TRAVERSING 

const h1 = document.querySelector('h1');

// going downwards: selecting children elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: selecting sublings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

const orderedCount = function (text) {
  // Implement me!


  let uniqueChars = [...new Set(text)];

  return uniqueChars.map((cur, i) => cur === text[i] ? [cur, 1 + 1] : [cur, 1])
}

console.log(orderedCount('abracadabra'));