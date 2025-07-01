import Cart from "@/component/assignment-2/Cart";
import CartProvider from "@/context/CartContext";

const ShoppingCart = () => {
  return (
    <CartProvider>
      <div className="flex">
      <p className="question">
        Q11. Build a shopping cart application using the useContext hook. Set up
        a context to manage the state of the shopping cart. Create components to
        display products and a shopping cart. Use the useContext hook to access
        the cart state and update it. Allow users to add and remove items from
        the cart. Display the total price of items in the cart.
      </p>
        <Cart />
      </div>
    </CartProvider>
  );
};
export default ShoppingCart;
