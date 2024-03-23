const fetch = require("node-fetch");

const Tablar = (konular) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  konular.forEach(konu => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = konu;
    topicsDiv.appendChild(tabDiv);
  });

  return topicsDiv;
}

const tabEkleyici = (secici) => {
  fetch("http://localhost:5001/api/konular")
    .then(response => response.json())
    .then(data => {
      const konular = data.konular;
      const tabs = Tablar(konular);
      const targetElement = document.querySelector(secici);

    
        targetElement.appendChild(tabs);
      
    })
}

export { Tablar, tabEkleyici };
