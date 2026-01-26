
const movieRow = document.getElementById("movieRow");

function scrollMovies(direction) {
  const scrollAmount = 250;
  movieRow.scrollLeft += direction * scrollAmount;
}