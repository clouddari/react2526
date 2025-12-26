import { useState } from "react";

export default function CartControls({
  itemAmount,
  setItemAmount,
  price,
  setPrice,
  onActionsCountChange,
}) {
  const [actionsCount, setActionsCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(100);

  const handleIncrement = () => {
    setItemAmount(itemAmount + 1);
    setPrice(price + itemPrice);

    const next = actionsCount + 1;
    setActionsCount(next);
    onActionsCountChange(next);
  };

  const handleDecrement = () => {
    if (itemAmount === 0) return;

    const nextItemAmount = itemAmount - 1;

    if (nextItemAmount <= 0) {
      setItemAmount(0);
      setPrice(0);

      const next = actionsCount + 1;
      setActionsCount(next);
      onActionsCountChange(next);
      return;
    }

    const nextPrice = price - itemPrice;

    setItemAmount(nextItemAmount);
    setPrice(nextPrice);

    const next = actionsCount + 1;
    setActionsCount(next);
    onActionsCountChange(next);
  };

  const clearCart = () => {
    if (itemAmount === 0) return;
    setItemAmount(0);
    setPrice(0);

    const next = actionsCount + 1;
    setActionsCount(next);
    onActionsCountChange(next);
  };

  const handlePriceInput = (e) => {
    +e.target.value > 0 ? setItemPrice(+e.target.value) : null;
  };

  return (
   <div className="cart-controls">
      <div className="btns">
        <button onClick={handleIncrement}>Add Item</button>
        <button onClick={handleDecrement}>Remove Item</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>

      <input type="number" onBlur={handlePriceInput} placeholder="set price" />
    </div>
  );
}
