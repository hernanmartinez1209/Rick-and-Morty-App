import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({url}) => {
    //Hacer una petición a la API
    const [resident, setResident] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])
    
console.log(resident)

  return (
    <div className='cart__hijo'>
    
        <header>
            <img className='img__cart' src={resident?.image} alt="" />
            <div className='status__cart'>
                <div className='circle'></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <ul className='section__ul'>
                <li><span>Specie:</span>{resident?.species}</li>
                <li><span>Origin:</span>{resident?.origin.name}</li>
                <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </section>
   
    </div>
  )
}

export default CardResident