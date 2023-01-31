const text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptates.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex doloremque expedita quibusdam nostrum officiis ratione sapiente dolorum similique!",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione ea ipsum recusandae!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptates.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione vel.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex doloremque expedita quibusdam nostrum officiis ratione sapiente dolorum similique!",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione ea ipsum recusandae!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptates.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione vel.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
];

let bubble = document.querySelectorAll("#text-box");

for (let i = 0; i < text.length; i++) {
  if (i % 2 == 0) {
    bubble[i].textContent = text[i];
  } else {
    bubble[i].textContent = text[i];
  }
}

for (let j = 0; j < text.length / 2; j++) {
  let stkImg = document.querySelectorAll("#stk-img");
  let imgSrcDft = "assets/img/lc-molkky.svg";
  let imgSrcR =
    "assets/img/lc-molkky.svg 1200w, assets/img/lc-molkky-resp.svg 760w";
  stkImg[j].innerHTML =
    `<img src="${imgSrcDft}"` +
    ` srcset="${imgSrcR}"` +
    ` title="Molkky players" alt="Case ${
      j + 1
    } - lorem ipsum" />`;
}
