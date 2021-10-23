import React from "react";
import BoardGrid from "./BoardComponents/BoardGrid";
import Footer from "./Footer";
import TopBar from "./TopBar";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

function Boards() {
  // const history = useHistory();
  // const { signout } = useAuth();
  // const clickHandler = (event) => {
  //   event.preventDefault();
  //   signout();
  //   history.push("/signout");
  // };

  return (
    <div className="bg-gray-800 h-screen w-full">
      <TopBar />
      <BoardGrid />
      <Footer />
    </div>
  );
}

export default Boards;
