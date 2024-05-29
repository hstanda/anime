import axios from "axios";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchBar() {
  console.log(
    " process.env.REACT_APP_BASE_URL",
    process.env.REACT_APP_BASE_URL
  );
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const setSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchProductHandler(value);
  };

  // get all products
  const searchProductHandler = async (e) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}anime?q=${e}&order_by=title&sort=asc&limit=10`
      );
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    setUserData([]);
  }, [location.pathname]); // Trigger effect when route changes

  const handleResultClick = () => {
    setSearchTerm(""); // Clear search term when a result is clicked
  };

  return (
    <>
      <div className="searchBarOuter">
        <div>
          <input
            style={{ border: "2px solid gray" }}
            type="text"
            onChange={(e) => setSearch(e)}
            value={searchTerm} // Bind search term value to input
          />
        </div>

        <div className="searchResult">
          {searchTerm && userData.length > 0 && (
            <ul>
              {userData.map((value, index) => (
                <li key={index} onClick={handleResultClick}>
                  <Link to={`/products/${value.mal_id}`}>{value.title}</Link>
                </li>
              ))}
            </ul>
          )}

          {searchTerm && userData.length === 0 && ""}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
