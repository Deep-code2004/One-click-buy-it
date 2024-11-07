console.clear();

const elCloth = document.querySelectorAll(".cloth");

[...elCloth].forEach((cloth) => {
  cloth.addEventListener("click", () => {
    [...document.querySelectorAll(".cloth[data-active]")].forEach(
      (el) => delete el.dataset.active
    );

    cloth.dataset.active = true;
  });
});
