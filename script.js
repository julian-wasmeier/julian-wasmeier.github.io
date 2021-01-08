const button = document.querySelector("#changebutton");
const body = document.querySelector("body");
const rgbTextElement = document.createElement("p");
const rgbTextContainer = document.querySelector("#rbgContainer");
rgbTextContainer.style.visibility = "hidden";

const selection = ["red", "blue", "yellow"];

const changeColor = (event) => {
  event.preventDefault();
  body.style.backgroundColor = randomRgbGen();
  rgbTextElement.id = "rbgText";
  rgbTextElement.innerHTML = randomRgbGen();
  rgbTextContainer.appendChild(rgbTextElement);
  rgbTextContainer.style.visibility = "visible";
};

const randomRgbGen = () => {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);

  const rgbValue = `rgb(${num1}, ${num2}, ${num3})`;
  return rgbValue;
};

console.log(randomRgbGen());

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
