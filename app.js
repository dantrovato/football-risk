function movePlayer(team) {
  const main = document.querySelector("main");
  main.addEventListener("click", (event) => {
    event.target.closest("div").classList.add("highlight");
    console.log(9);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const leftDice = document.querySelector("#leftDice");
  const leftThrow = document.querySelector("#leftThrow");
  leftThrow.addEventListener("click", () => {
    const number = Math.floor(Math.random() * 6) + 1;
    leftDice.textContent = `You can move any player upto ${number} squares.\nClick on one of your dudes`;
    movePlayer("blue");
  });
});
