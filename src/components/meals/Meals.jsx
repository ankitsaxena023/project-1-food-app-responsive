import CardContainer from "../meals-cards/CardContainer";
import "./meals.css";

const Meals = () => {
  return (
    <div className="mealsContainer">
      <h1 className="mealsHeading">popular meals</h1>
      <CardContainer />
    </div>
  );
};

export default Meals;
