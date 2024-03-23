

const fetch = require("node-fetch");

const Card = (makale) => {
  const cardSide = document.createElement("div");
  cardSide.classList.add("card");

  const headlineSide = document.createElement("div");
  headlineSide.classList.add("headline");
  headlineSide.textContent = makale.anabaslik;

  cardSide.appendChild(headlineSide);

  const authorSide = document.createElement("div");
  authorSide.classList.add("author");

  const imgSide = document.createElement("div");
  imgSide.classList.add("img-container");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", makale.yazarFoto);
  imgSide.appendChild(imgEl);

  authorSide.appendChild(imgSide);

  const spanElement = document.createElement("span");
  spanElement.textContent = makale.yazarAdi + " tarafından";
  authorSide.appendChild(spanElement);

  cardSide.appendChild(authorSide);

  return cardSide;
};

const cardEkleyici = async (secici) => {
  const cardsContainer = document.querySelector(secici);

  try {
    const res = await fetch("http://localhost:5001/api/makaleler");
    if (!res.ok) {
      throw new Error("HTTP error, status = " + res.status);
    }
    const data = await res.json();

    const { makaleler } = data;

    for (const key in makaleler) {
      const array = makaleler[key];
      array.forEach((el) => {
        const card = Card(el);
        cardsContainer.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { Card, cardEkleyici };  