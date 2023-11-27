import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import { useSelector } from "react-redux";

const App = () => {

  const state = useSelector(store=>store.AUTH)
  console.log(state)


  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
