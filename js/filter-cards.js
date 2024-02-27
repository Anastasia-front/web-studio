function filterCards(category) {
  const cards = document.querySelectorAll(".card-item");
  cards.forEach((card) => {
    const description = card.querySelector(".description").textContent;
    if (category === "All" || description === category) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Initial display
filterCards("All");
