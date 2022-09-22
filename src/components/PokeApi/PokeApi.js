import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokeApi.css'

const PokeApi = () => {

    const [apiInfo, setApiInfo] = useState([])

       useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
        .then((resp) => {
            const data = resp.data;
            setApiInfo(data.results)
        })
       }, []);

       console.log(apiInfo)

    return (
        <div className='pokeApi'>
            <h1>5 Pokemons</h1>
            <div>{apiInfo.map((e) =>
             <p key={e.name}>{e.name}</p>
             )}
             </div>
        </div>
    )
}

export default PokeApi