import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import useLocalStorageState from "use-local-storage-state";
import { Container, Typography } from "@material-ui/core";

const Cart = () => {
  const [cart = [], setCart] = useLocalStorageState("cart");

  useEffect(() => {}, []);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);
    }
  };

  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" className="text-3xl font-bold mb-8">
        Cart{" "}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={`${row.images.jpg.image_url}`}
                    width="50px"
                    height="50px"
                    alt={row.title}
                  />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDecrement(index)}>-</Button>
                  {row.count}
                  <Button onClick={() => handleIncrement(index)}>+</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Cart;
