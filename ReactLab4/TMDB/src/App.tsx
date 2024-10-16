import './App.css'
import {useState} from 'react'
import axios from 'axios';
import Bar from './components/Bar'
import MovieCard from './components/MovieCard';
import createTheme from './components/ThemeMovie'
import { ThemeProvider } from '@emotion/react';

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const handleClick = () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2MzZGE2OTVmYTM3MmI3YmU4ZjQxMTAyMGZmYzNkZiIsIm5iZiI6MTcyODQwNTY0NC44MjIzMDIsInN1YiI6IjY2ZmQ1NzRhYmFlMzgzYzEwY2QwNzdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2b5UHVQayA3rqs4km48kL6rsG_2jvHjGJQiSFfE96rQ'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      setNowPlaying(response.data.results)
      console.log(nowPlaying)
      let movieArray = response.data.results.map((props) => {
        return <MovieCard movie={props}/>
      })
      setNowPlaying(movieArray)
    })
    .catch(function (error) {
      console.error(error);
    });
    
  }
    

  return (
    <>
    <ThemeProvider theme={createTheme}></ThemeProvider>
    <Bar />
    <button type='submit' onClick={handleClick}>Now Playing</button>
    <div id='movie-container'>
    {nowPlaying}
    </div>
    </>
  )
}

export default App
