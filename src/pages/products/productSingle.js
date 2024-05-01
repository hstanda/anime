import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Typography, CircularProgress } from "@mui/material";
import productApi from "../../services/product";
import AddToCart from "../../components/products/AddToCart";

const ProductSinglePage = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  // get product data
  const getSingleProduct = async () => {
    try {
      const response = await productApi.getSingleProduct(productId);
      if (response.status === 200) {
        setProductData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
    setLoading(false); // Set loading to false after response or error
  };

  useEffect(() => {
    getSingleProduct();
  }, [productId]);

  return (
    <div className="mt-28">
      <Container maxWidth="md" sx={{ py: 8 }}>
        {loading ? (
          <CircularProgress />
        ) : productData ? (
          <Paper
            elevation={3}
            sx={{ p: 6, display: "flex", gap: 6 }}
            className="p-5 single-product-row"
          >
            <div style={{ flex: "none", width: "50%" }}>
              <img
                src={productData.images?.jpg?.image_url}
                alt={productData.title}
                width={500}
                height={500}
              />
            </div>
            <div style={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                {productData.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Score: <span>{productData.score}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Ranked #<span>{productData.rank}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Popularity: #<span>{productData.popularity}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Members: <span>{productData.members}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Airing: <span>{productData.airing}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Studio: <span>{productData.studio}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Episodes: <span>{productData.episodes}</span>
              </Typography>
              <br />
              <AddToCart
                product={productData}
                addToCarts={AddToCart}
                className="mt-32"
              />
            </div>
          </Paper>
        ) : (
          <Typography variant="body1" align="center">
            No product data found
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default ProductSinglePage;
