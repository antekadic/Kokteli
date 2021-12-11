import React from'react';
import {useState} from 'react';

export default function Input({onCocktailInfo}) {
  
  const [koktelIme, setKoktelIme]= useState('')
  const [data, setData]=useState(null)

let url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const changeValue=(e) =>{
  let novoIme = e.target.value;
  setKoktelIme( novoIme);
  console.log(e.target.value);
}

const handleSubmit =(e)=>{
e.preventDefault();
console.log(koktelIme);
let getUrl= url + koktelIme;
  fetch(getUrl)
        .then(response => response.json())
        .then(cocktailData => setData(cocktailData),
        onCocktailInfo(data))
        // console.log(data) 
  }

  return (
    <div >
      <input type='text' id='koktel' value={koktelIme} onChange={changeValue}></input>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}