import React, { useContext } from "react";
import data from "../assets/data";
import Product from "../component/Product";
import { AuthContext } from "../Authentication/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext) ;
  console.log(auth)
  return (
    <div>
      <Product />
    </div>
  );
};

export default Home;
