function filterCards(clickedButton, category) {
  const cards = document.querySelectorAll(".card-item");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  clickedButton.classList.add("active");

  cards.forEach((card) => {
    const description = card.querySelector(".description").textContent;
    if (category === "All" || description === category) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}
