import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const ProductCard = ({ anime }) => {
  const truncateProductDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  };

  return (
    <Card className="max-w-xs">
      <Link to={`/products/${anime.mal_id}`}>
        <CardMedia
          component="img"
          height="200"
          image={anime.images?.jpg?.image_url || "placeholder_image_url"}
          alt={anime.title}
        />
        <CardContent>
          <Typography variant="h6" component="h2" className="productTitle">
            {anime.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {truncateProductDescription(anime.synopsis, 100)}{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {anime.score}
          </Typography>
        </CardContent>
      </Link>
      <AddToCart product={anime} addToCarts={AddToCart} />
    </Card>
  );
};

export default ProductCard;
