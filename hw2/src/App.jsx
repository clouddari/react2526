import "./App.css";
import CartControls from "./Components/CartControls";
import CartStatistics from "./Components/CartStatistics";
import CartSummary from "./Components/CartSummary";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  const [actionsCount, setActionsCount] = useState(0);
  const handleActionsCountChange = (newCount) => {
    setActionsCount(newCount);
  };

  return (
    <>
      <h2>ДЗ 2</h2>
      <CartSummary itemAmount={itemAmount} price={price} />

      <CartControls
        itemAmount={itemAmount}
        setItemAmount={setItemAmount}
        price={price}
        setPrice={setPrice}
        onActionsCountChange={handleActionsCountChange}
      />

      <CartStatistics
        itemAmount={itemAmount}
        price={price}
        actionsCount={actionsCount}
      />
    </>
  );
}

export default App;
