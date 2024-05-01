import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./pages/products/product";
import NotFound from "./pages/NotFound/NotFound";
import ProductSinglePage from "./pages/products/productSingle";
import HeaderTopBar from "./components/Layout/AppBar";
import Cart from "./pages/cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <HeaderTopBar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/:productId">
            <ProductSinglePage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
