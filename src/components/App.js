import { useEffect, useState } from "react";
import APIUrl from "./APIUrl";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [ pizzas, setPizzas ] = useState( [] );
  const [ currentPizza, setCurrentPizza ] = useState( { topping: "", size: "", vegetarian: true } );
  const [ pizzaFormState, setPizzaFormState ] = useState( { topping: "", size: "", vegetarian: true } );

  useEffect( () => {
    fetch( APIUrl ).then( response => response.json() ).then( setPizzas );
  }, [] );

  // console.log( pizzaFormState );

  return (
    <>
      <Header />
      <PizzaForm
        allPizzas={ pizzas }
        setPizzas={ setPizzas }
        currentPizza={ currentPizza }
        pizzaFormState={ pizzaFormState }
        setPizzaFormState={ setPizzaFormState }
      />
      <PizzaList pizzas={ pizzas } setCurrentPizza={ setCurrentPizza } setPizzaFormState={ setPizzaFormState }/>
    </>
  );

}

export default App;
