import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';

export default function Results() {
    const location = useLocation();
    const searchData = location.state?.query || ""; 
const [movies, setMovies] = useState([]);
console.log(searchData)

useEffect(() => {
    if(searchData) {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {query: searchData, include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2MzZGE2OTVmYTM3MmI3YmU4ZjQxMTAyMGZmYzNkZiIsIm5iZiI6MTcyOTA5NzY1MC4yMTQwNjYsInN1YiI6IjY2ZmQ1NzRhYmFlMzgzYzEwY2QwNzdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IBIAk_bcWwJBT6Q9kB_g1SiJXM5XRF0vBS4IYmakoPk'
            }
          };
          
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              let movieArray = response.data.results.map((cards:any) => {
                return <MovieCard movie={cards}/>
              })
              setMovies(movieArray)
            })
            .catch(function (error) {
              console.error(error);
            });
    }
}, [searchData])


  


return (
<>
<div id='movie-container'>
{movies}
</div>
</>
)
}

