document.querySelectorAll(".navigationbar__list__item").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    window.setTimeout(() => {
      document
        .querySelector(button.attributes.href.value)
        .scrollIntoView({ behavior: "smooth" });
    }, 450);
    document
      .querySelector(".navigationbar__pokeball")
      .animate([{ transform: "rotate(0)" }, { transform: "rotate(360deg) " }], {
        duration: 400,
        easing: "ease-in-out"
      });
  });
});

fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807)}`)
  .then(res => res.json())
  .then(res => {
    const name = document.createElement("div");
    name.classList.add(".navigationbar__pokemon__name");
    name.innerText = res.name;

    const sprite = document.createElement("img");
    sprite.classList.add(".navigationbar__pokemon__sprite");
    sprite.src = res.sprites.front_default;
    sprite.addEventListener("mouseenter", event => {
      sprite.src = res.sprites.back_default;
    });
    sprite.addEventListener("mouseleave", event => {
      sprite.src = res.sprites.front_default;
    });

    document.querySelector(".navigationbar__pokemon").appendChild(sprite);
    document.querySelector(".navigationbar__pokemon").appendChild(name);

    // console.log(res);
  });
