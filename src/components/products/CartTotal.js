import React from "react";
import useLocalStorageState from "use-local-storage-state";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const [cart = []] = useLocalStorageState("cart");

  // Calculate total items
  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <>
      <div className="cartOut">
        <Link to="/cart">
          <ShoppingCartIcon />{" "}
          <Typography variant="span"> {getTotalCartItems()}</Typography>{" "}
        </Link>
      </div>
    </>
  );
};

export default CartTotal;
