import { useState } from 'react';
import data from './data.js'


const App = () => {

  const[people,setPeople] = useState(data)
  return(
    <main>
    <div className='container'>
      <h4>Five birthdays today</h4>
      
    {people.map(person=>
      <div key={person.name}>
        <img src={person.image} alt="" />
        <h4>{person.name}</h4>
        <p>{person.age}</p>
        </div>
    )}
    
    </div>
    </main>
  )}
  
  
export default App;
