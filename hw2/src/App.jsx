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

  const addItem = (itemPrice) => {
    setItemAmount((prev) => prev + 1);
    setPrice((prev) => prev + itemPrice);
  };

  const removeItem = (itemPrice) => {
    setItemAmount((prevCount) => {
      if (prevCount <= 0) return 0;

      const nextCount = prevCount - 1;

      if (nextCount === 0) {
        setPrice(0);
      } else {
        setPrice((prevPrice) => Math.max(0, prevPrice - itemPrice));
      }
      return nextCount;
    });
  };

  const clearCart = () => {
    setItemAmount(0);
    setPrice(0);
  };

  return (
    <>
      <h2>ДЗ 2</h2>
      <CartSummary itemAmount={itemAmount} price={price} />

      <CartControls
        itemAmount={itemAmount}
        onAdd={addItem}
        onRemove={removeItem}
        onClear={clearCart}
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
