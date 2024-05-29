import React from "react";
import Button from "@mui/material/Button";
import useLocalStorageState from "use-local-storage-state";

const AddToCart = ({ product, addToCart }) => {
  const [cart, setCart] = useLocalStorageState("cart", []);

  const initializedCart = cart || [];

  ///cart handler
  const handleAddToCart = () => {
    const existingItemIndex = initializedCart.findIndex(
      (item) => item.mal_id === product.mal_id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...initializedCart];
      updatedCart[existingItemIndex].count++;
      setCart(updatedCart);
    } else {
      setCart([...initializedCart, { ...product, count: 1 }]);
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
