import {useState} from 'react';
import Input from './Components/Input';
import PopisKoktela from './Components/PopisKoktela'

export default function App() {
const[cocktailList, setcocktailList]=useState([])


const handleCocktailInfo =(kokteli)=>{
if(kokteli!=null)
setcocktailList(kokteli.drinks)
 

}

  return (
    <div >
      <Input onCocktailInfo={handleCocktailInfo}/>
      
      {cocktailList.map((koktel)=>
        <PopisKoktela name={koktel.strDrink} type={koktel.strAlcoholic}  key={koktel.idDrink}/>)}
    </div>
  );
}


