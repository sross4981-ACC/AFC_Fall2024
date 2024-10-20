import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Results() {
  
const navigate = useNavigate();
  const VITE_TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
    const location = useLocation();
    const searchData = location.state?.query || ""; 
const [movies, setMovies] = useState([]);
const [data, setData] = useState(null);
console.log(searchData)
useEffect(() => {
    if(searchData) {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {query: searchData, include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
            }
          };
          
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              setData(response.data)
              let movieArray = response.data.results.map((cards:any) => {
                return <MovieCard movie={cards}/>
            })
              setMovies(movieArray)
                if(response.data.total_results == 0){
              navigate('/error')
                }
              })
            .catch(function (error) {
              console.error(error);
              navigate('/error')
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

