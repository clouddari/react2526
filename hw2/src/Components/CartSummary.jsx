export default function CartSummary({itemAmount, price}) {
  return (
    <div className="cart-sum">
      <p>Cart total: {price} UAH </p>
      <p>Total Items: {itemAmount}</p>
    </div>
  );
}
