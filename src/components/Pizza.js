import React from "react";

function Pizza( { pizza, setCurrentPizza, setPizzaFormState } ) {

  function updateCurrentPizza() {
    setCurrentPizza( pizza )
    setPizzaFormState( { topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian } )
  }

  return (
    <tr>
      <td>{ pizza.topping }</td>
      <td>{ pizza.size }</td>
      <td>{ pizza.vegetarian ? "Yes" : "No" }</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={ updateCurrentPizza }>
          Edit Pizza
        </button>
      </td>
    </tr>
  );

}

export default Pizza;
