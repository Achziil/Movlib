class MovieSource {
   static searchMovies(keyword) {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=c721d2ddf5e72845a3691e3321764a2f&query=${keyword}`)
         .then((response) => {
            return response.json();
         })
         .then((responseJson) => {
            if (responseJson.results) {
               return Promise.resolve(responseJson.results);
            } else {
               return Promise.reject(`${keyword} is not found`);
            }
         });
   }
}
export default MovieSource;
