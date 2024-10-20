import {useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

export default function NowPlaying() {
  const VITE_TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const navigate = useNavigate();
const [nowPlaying, setNowPlaying] = useState([]);
const handleClick = () => {
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
  }
};

axios
  .request(options)
  .then(function (response) {
    setNowPlaying(response.data.results)
    console.log(nowPlaying)
    let movieArray = response.data.results.map((cards:any) => {
      return <MovieCard movie={cards}/>
    })
    setNowPlaying(movieArray)
  })
  .catch(function (error) {
    console.error(error);
      navigate('/error')
  });
  
}
useEffect(() => {
    handleClick();
}, []);
return (
    <>
    <div id='movie-container'>
    {nowPlaying}
    </div>
    </>
  )
}