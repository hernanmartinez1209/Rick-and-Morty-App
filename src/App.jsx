
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  //Hacer la petición a la API USESTATE, USEEFFECT Y AXIOS

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  
  console.log(searchInput);

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput
    }


    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }
  
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
      <form onSubmit={handleSubmit}>
        <input
          id='idLocation'
          placeholder='Enter another number from 1 to 126' type="text" 
        />
        <button>Search</button>
      </form>
      <LocationInfo location={location} />
      <div>
        {
          location?.residents.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>

  )
}

export default App
