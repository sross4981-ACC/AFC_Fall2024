import './App.css'
import {useState} from 'react'
import Bar from './components/Bar'
import NowPlaying from './components/NowPlaying';

function App() {
  
  const [page, setPage] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => {
  setPage(true)
  setButton(false)
} 
    

  return (
    <>
    <Bar />
    <nav>
    {button && <button onClick={handleClick}>Now Playing</button>}
    {page && <NowPlaying />}
    </nav>
    </>
  )
}

export default App;