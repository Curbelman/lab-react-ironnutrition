import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/foodBox';
import AddFoodForm from './components/addFoodForm';
import Search from './components/search';


function App() { 
  const [foodArray, setFoodArray] = useState(foods);
  const foodArrayCopy = [...foodArray];
  const [filterTerm, setFilterTerm] = useState("");
  
  let filteredFoods = foodArrayCopy.filter((food) => {
    return food.name.toLowerCase().includes(filterTerm.toLowerCase());
  })

  return (
    <div className="App">

    <Search setFilterTerm={setFilterTerm} />

    <AddFoodForm foodArray={foodArray} setFoodArray={setFoodArray}/>

    {filteredFoods.map((food, i) => {
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
