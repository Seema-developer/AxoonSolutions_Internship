 const hideButtons = document.querySelectorAll(".hideBtn");
    const cards = document.querySelectorAll(".card");
    const showAllBtn = document.getElementById("showAll");

    hideButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        cards[index].style.display = "none";
      });
    });

    showAllBtn.addEventListener("click", () => {
      cards.forEach(card => {
        card.style.display = "block";
      });
    });