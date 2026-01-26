
const movieRow = document.getElementById("movieRow");

function scrollMovies(direction) {
  const scrollAmount = 250;
  movieRow.scrollLeft += direction * scrollAmount;
}

document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  });
});
