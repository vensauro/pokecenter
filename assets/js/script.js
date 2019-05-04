const div = document.querySelector("div");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  if (e.srcElement[0].value > 50) {
    div.innerText = `Eu tbm amoo esse pokemon ${e.srcElement[1].value}`;
  } else {
    div.innerText = `Voce é um lixooooooo ${e.srcElement[1].value}`;
  }
});
