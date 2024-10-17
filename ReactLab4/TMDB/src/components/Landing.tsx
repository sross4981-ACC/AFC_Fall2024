import {useState} from 'react'
import NowPlaying from './NowPlaying'


export default function Landing(){

    const [page, setPage] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => {
    setPage(true)
    setButton(false)
  } 





return(
    <>
    {button &&<h1>Welcome to the Landing Page</h1>}
    {button && <button onClick={handleClick}>Now Playing</button>}
    {page && <NowPlaying />}
    </>
)
}