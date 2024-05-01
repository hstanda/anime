import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import CartTotal from "../products/CartTotal";
// import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Container } from "@material-ui/core";

function HeaderTopBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Box className="topBarOuter">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {<Link to="/"> Anime</Link>}
            </Typography>
            <SearchBar />

            <CartTotal />
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default HeaderTopBar;
