import { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios';
import Table from './component/Table'

function App() {
  const [showTable, setShowTable] = useState(false);
  const [people, setPeople] = useState([]);
  const SWAPI = 'https://swapi.dev/api/people';
  
  const handleSubmit = () => {
    setShowTable(true)
  }
  const handleReset = () => {
    setShowTable(false)
  }
  const options = {
    method: 'Get',
    url: SWAPI,
  }
  useEffect(() => {
axios
  .request(options)
  .then(function (response) {
    // console.log(response.data.results)
    setPeople(response.data.results)
    // console.log({people})
  })
  .catch(function(error){
    console.log(error)
  })
}, []);
console.log(people[1]);

  return (
    <>
    <p> Hello </p>
    <button onClick={handleReset}>Delete Table</button>
    <button onClick={handleSubmit}>Create Table</button>
      {showTable && <div> <Table people={people} /> </div> }
    </>
  )
}

export default App
