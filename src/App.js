import {useState} from 'react';
import Input from './Components/Input';
import PopisKoktela from './Components/PopisKoktela'

export default function App() {
const[cocktailList, setcocktailList]=useState([])

const handleCocktailInfo =(kokteli)=>{
  
console.log(kokteli)
 
}

  return (
    <div >
      <Input onCocktailInfo={handleCocktailInfo}/>
      {cocktailList.map((koktel)=>
        <PopisKoktela name={koktel.drinks[0].strDrink} type={koktel.drinks[0].strAlcoholic}  key={koktel.drinks[0].idDrink}/>)}
    </div>
  );
}


