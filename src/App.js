import './App.css';
import foods from "./foods.json";
import { useState } from 'react';


function App() { 
  const [foodArray, setFoodArray] = useState(foods);

  return (
    <div className="App">
    {foodArray.map((eachFood, i) => {
      return (
        <div>
        <p> {eachFood.name} </p>
        <img src={eachFood.image} alt={eachFood.name} width="200px" />
      </div>
      );
    })}
    </div>
  );
}

export default App;
