import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/foodBox';


function App() { 
  const [foodArray] = useState(foods);

  return (
    <div className="App">
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
