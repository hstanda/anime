import { Container, Grid, Typography } from "@material-ui/core";
import productApi from "../../services/product";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/products/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const response = await productApi.getAllProduct();
      const productsArray = Object.values(response.data);
      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container maxWidth="lg" className="singlePageOuter">
      <Typography variant="h4" className="text-3xl font-bold mb-8">
        Anime Products
      </Typography>
      <Grid container spacing={4} className="product-column">
        {products.length > 0 ? (
          products[1].map((anime, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="product-collunm"
            >
              <ProductCard anime={anime} />
            </Grid>
          ))
        ) : (
          <Typography className="loader" variant="body1">
            Loading...
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Products;
