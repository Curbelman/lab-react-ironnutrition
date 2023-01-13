import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const { food, foodArray, setFoodArray } = props;
    const totalCalories = food.calories*food.servings;

    const deleteFood = (deletedFood) => {
        const reducedFoods = foodArray.filter((foodItem) => {
          return foodItem.name !== deletedFood;
        });
        setFoodArray(reducedFoods);
      }
    
    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} alt={food.name} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {totalCalories} </b> kcal
          </p>
          <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;