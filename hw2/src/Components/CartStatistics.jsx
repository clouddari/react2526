export default function CartStatistics({ itemAmount, price, actionsCount }) {
  return (
    <>
      <h2>Cart stats:</h2>
      <h3>Total items: {itemAmount}</h3>
      <h3>Total price: {price}</h3>
      <h3>Total actions: {actionsCount}</h3>
    </>
  );
}
