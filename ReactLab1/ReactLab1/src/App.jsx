import Greeting from './components/Greeting'
import CardContainer from './components/CardContainer'
import UserCard from './components/UserCard'

let arr = [
  {
      name: "Bob",
      age: 30
  },
  {
      name: "Charlie",
      age: 35
  },
  {
      name: "Alice",
      age: 25
  }
]
const Sorter = (arr) => {
  return arr.sort((a,b ) => a.age - b.age);
  }

  arr = Sorter(arr);


const App = () => {
  return(
    <div>
      <Greeting name={name}/> 
      <CardContainer>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>
              <UserCard name = {item.name} age = {item.age}/>
              </li>
          ))}
          </ul>
     </CardContainer> 
      </div>
  )
}

export default App;