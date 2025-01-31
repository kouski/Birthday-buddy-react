import { useState } from 'react';
import data from './data.js'


const App = () => {

  function handleClick(){
    setPeople([])
  }

  const[people,setPeople] = useState(data)
  return(
    <main>
    <section className='container'>
      <h4 id='title'>{people.length} birthdays today</h4>
      
    {people.map(person=>
      <div key={person.name} className='person'>
        <img src={person.image} alt="" />
        <div>
        <h4>{person.name}</h4>
        <p>{person.age}</p>
        </div>
        
        </div>
        
    )}
    <button  onClick={handleClick} type='button'  className='btn btn-block'>Clear All</button>
    
    </section>
    
    </main>
  )}
  
  
export default App;
