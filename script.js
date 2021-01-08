const button = document.getElementById("changebutton");
const body = document.querySelector("body");

const selection = ["red", "blue", "yellow"];

const randomRgbGen = () => {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);

  return `rgb(${num1}, ${num2}, ${num3})`;
};
console.log(randomRgbGen());
const changeColor = (event) => {
  event.preventDefault();
  body.style.backgroundColor = randomRgbGen();
};

button.addEventListener("click", changeColor);

const randomColor = () => {
  return selection[Math.floor(Math.random() * selection.length)];
};

// const randomRgbGen = () => {
//   class numPair {
//     constructor() {
//       this.num1 = Math.floor(Math.random() * 3);
//       this.num2 = Math.floor(Math.random() * 6);
//       this.num3 = Math.floor(Math.random() * 6);
//     }
//   }
//   const numPair1 = new numPair();
//   const numPair2 = new numPair();
//   const numPair3 = new numPair();

//   return `rgb:(${numPair1.num1}${numPair1.num2}${numPair1.num3})`;
// };
// console.log(randomColorGen());
