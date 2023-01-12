import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/foodBox';
import AddFoodForm from './components/addFoodForm';


function App() { 
  const [foodArray, setFoodArray] = useState(foods);

  return (
    <div className="App">

    <AddFoodForm foodArray={foodArray} setFoodArray={setFoodArray}/>

    {foodArray.map((food, i) => {
      return (
        <div>
          <FoodBox food={food} />
        </div>
      );
    })}
    </div>
  );
}

export default App;
