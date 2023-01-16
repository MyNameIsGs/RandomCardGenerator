/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const cards = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const topElement = document.querySelector(".top");
  const numberElement = document.querySelector(".number");
  const footerElement = document.querySelector(".footer");

  const singleCard = cards[Math.floor(Math.random() * cards.length)];
  const singleNumber = numbers[Math.floor(Math.random() * numbers.length)];

  if (singleCard === "♥" || singleCard === "♦") {
    topElement.style.color = "red";
    footerElement.style.color = "red";
  }
  topElement.innerHTML = singleCard;
  numberElement.innerHTML = singleNumber;
  footerElement.innerHTML = singleCard;

  document.querySelector(".card").classList.add();
};
