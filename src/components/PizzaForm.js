import React from "react";
import APIUrl from "./APIUrl";

function PizzaForm( { allPizzas, setPizzas, currentPizza, pizzaFormState, setPizzaFormState } ) {

  function updatePizzaFormState( pizzaFormChangeEvent ) {
    const updatedPizzaFormState = { ...pizzaFormState };
    if ( pizzaFormChangeEvent.target.name === "vegetarian" ) {
      updatedPizzaFormState[ "vegetarian" ] = pizzaFormChangeEvent.target.value === "Vegetarian" ? true : false;
    } else {
      updatedPizzaFormState[ pizzaFormChangeEvent.target.name ] = pizzaFormChangeEvent.target.value;
    }
    setPizzaFormState( updatedPizzaFormState );
  }

  function updatePizza( updateEvent ) {
    updateEvent.preventDefault();
    fetch( `${ APIUrl }/${ currentPizza.id }`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( pizzaFormState )
    } ).then( response => response.json() ).then( updatedPizza => {
      const updatedPizzas = [ ...allPizzas.filter( pizza => pizza.id !== updatedPizza.id ), updatedPizza ];
      setPizzas( updatedPizzas.sort( ( thisPizza, thatPizza ) => thisPizza.id - thatPizza.id ) );
    } );
  }

  return (
    <form onSubmit={ updatePizza }>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={ pizzaFormState.topping }
            placeholder="Pizza Topping"
            onChange={ updatePizzaFormState }
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={ pizzaFormState.size } onChange={ updatePizzaFormState }>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={ pizzaFormState.vegetarian }
              onChange={ updatePizzaFormState }
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={ !pizzaFormState.vegetarian }
              onChange={ updatePizzaFormState }
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );

}

export default PizzaForm;
