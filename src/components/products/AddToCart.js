import React from "react";
import Button from "@mui/material/Button";
import useLocalStorageState from "use-local-storage-state";
import { errorMsg, successMsg } from "../../utility/toaster-msg";
const AddToCart = ({ product, addToCart }) => {
  const [cart, setCart] = useLocalStorageState("cart", []);

  const initializedCart = cart || [];

  ///cart handler
  const handleAddToCart = () => {
    const existingItemIndex = initializedCart.findIndex(
      (item) => item.mal_id === product.mal_id
    );

    if (existingItemIndex !== -1) {
      console.log("initializedCart1212", initializedCart);
      const updatedCart = [...initializedCart];
      // updatedCart[existingItemIndex].count++;
      setCart(updatedCart);
      errorMsg(
        "Product is in cart. To add more, increase quantity in cart page."
      );
    } else {
      setCart([...initializedCart, { ...product, count: 1 }]);
      successMsg("Product is added succuessfully in cart");
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
