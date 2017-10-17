if (!process.env.TMDB_KEY) {
  console.error('Error: no TMDB_KEY environment variable. Exiting.')
  process.exit(1)
}

const mdb = require('moviedb')(process.env.TMDB_KEY);
// const mdb = new MovieDB()

// const GENRES = [
//   28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37
// ]
//
mdb.genreMovieList({}, (err, genres) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const firstGenreId = genres.genres[0].id
  mdb.genreMovies({ id: firstGenreId }, (newErr, movies) => {
    if (newErr) {
      console.error(newErr)
      process.exit(1)
    }
    console.log(movies.results[0])
  })
})
