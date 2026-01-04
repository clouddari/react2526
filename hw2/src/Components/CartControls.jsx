import { useState } from "react";

export default function CartControls({
  itemAmount,
  onAdd,
  onRemove,
  onClear,
  onActionsCountChange,
}) {
  const [_actionsCount, setActionsCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(100);

  const incrementActionsCount = () => {
    setActionsCount((prev) => {
      const next = prev + 1;
      onActionsCountChange(next);
      return next;
    });
  };

  const handleIncrement = () => {
    onAdd(itemPrice);
    incrementActionsCount();
  };

  const handleDecrement = () => {
    if (itemAmount === 0) return;

    onRemove(itemPrice);
    incrementActionsCount();
  };

  const handleClear = () => {
    if (itemAmount === 0) return;

    onClear();
    incrementActionsCount();
  };

  const handlePriceInput = (e) => {
    const value = +e.target.value;
    if (Number.isFinite(value) && value > 0) setItemPrice(value);
  };

  return (
    <div className="cart-controls">
      <div className="btns">
        <button onClick={handleIncrement}>Add Item (+{itemPrice}₴)</button>
        <button onClick={handleDecrement} disabled={itemAmount === 0}>
          Remove Item (-{itemPrice}₴)
        </button>
        <button onClick={handleClear} disabled={itemAmount === 0}>
          Clear Cart
        </button>
      </div>

      <input
        type="number"
        min="1"
        onBlur={handlePriceInput}
        placeholder="set price"
      />
    </div>
  );
}
