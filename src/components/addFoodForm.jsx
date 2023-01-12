import { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm (props){
    const { foodArray, setFoodArray } = props;

    const [newFoodName, setNewFoodName] = useState("");
    const [newFoodCalories, setNewFoodCalories] = useState("");
    const [newFoodServings, setNewFoodServings] = useState("");
    const [newFoodImage, setNewFoodImage] = useState("");

    const handleName = (event) => setNewFoodName(event.target.value);
    const handleCalories = (event) => setNewFoodCalories(event.target.value);
    const handleServings = (event) => setNewFoodServings(event.target.value);
    const handleImage = (event) => setNewFoodImage(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {
            name: newFoodName,
            calories: newFoodCalories,
            image: newFoodImage,
            servings: newFoodServings,
        };

        const newFoodArray = [newFood, ...foodArray];

        setFoodArray(newFoodArray);

        setNewFoodName("");
        setNewFoodCalories("");
        setNewFoodImage("");
        setNewFoodServings("");
    };

    return (
        <form>
            <label>Name</label>
            <Input 
            type="text" 
            placeholder='Name' 
            value={newFoodName}    
            onChange={handleName}             
            />
            <label>Calories</label>
            <Input 
            type="number" 
            placeholder='Calories' 
            value={newFoodCalories} 
            onChange={handleCalories}                
            />
            <label>Servings</label>
            <Input 
            type="number" 
            placeholder='Servings' 
            value={newFoodServings} 
            onChange={handleServings}                
            />
            <label>Image URL</label>
            <Input 
            type="text" 
            placeholder='https://tenor.com/es/view/rick-astly-rick-rolled-gif-22755440' 
            value={newFoodImage} 
            onChange={handleImage}                
            />

            <Button type="submit" onClick={handleSubmit}>Add Food</Button>
        </form>
    )
}

export default AddFoodForm;