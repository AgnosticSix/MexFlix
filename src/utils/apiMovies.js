const apiUrl = "https://api.themoviedb.org/3";

export function getMovieInfo(path) {
  return fetch(apiUrl + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWI2YjY2OTA4ZDk4OGIzYTEyZjk1MjFlMDA5N2Q5MyIsIm5iZiI6MTczNzI0ODQwNi4yMzMsInN1YiI6IjY3OGM0ZTk2MzU5MDJiMGY5MzZkZjExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OR10m-pAfMyBswjqEdPmB6NheqATh1EK7G1LeEkDct0",
        "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());

}