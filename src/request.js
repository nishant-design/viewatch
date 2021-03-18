const ApiKey = "fdf927bf3e3c8d2088cc6814e17b44dd";

const requests = {
    fetchVieWatchOriginals : `/discover/tv?api_key=${ApiKey}&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${ApiKey}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${ApiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${ApiKey}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${ApiKey}&with_genres=99 `,
}

export default requests;