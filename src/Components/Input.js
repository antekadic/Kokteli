import React from'react';
import {useState} from 'react';

export default function Input({onCocktailInfo}) {
  
  const [koktelIme, setKoktelIme]= useState({ime:''})
  const [data, setData]=useState(null)

let url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const changeValue=(e) =>{
  setKoktelIme(prev => ({ ...prev, ime: e.target.value }))
  console.log(koktelIme.ime)
}

const handleSubmit =(e)=>{
e.preventDefault();
let getUrl= url + koktelIme.ime;
  fetch(getUrl)
        .then(response => response.json())
        .then(cocktailData => setData(cocktailData))
        // console.log(data)
        onCocktailInfo(data)
  }

  return (
    <div >
      <input type='text' id='koktel' value={koktelIme.ime} onChange={changeValue}></input>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}