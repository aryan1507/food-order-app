import React, {useState, useRef} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(amountInputRef.current, amountInputRef.current.value);

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit = {submitHandler}>
      <Input
        ref = {amountInputRef}
        label="Quantity :"
        input={{
          id: "amount" + props.id, //form input individuality
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          defaultValue: "0",
        }}
      ></Input>
      <button> + Add</button>
      {!amountIsValid && (<p>Please Enter the Quantity between 1 to 5</p>)}
    </form>
  );
};

export default MealItemForm;
