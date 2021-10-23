import React from "react";
import TopBar from "../TopBar";
import BoardLists from "./BoardListComponents/BoardLists";
import BoardStatus from "./BoardListComponents/BoardStatus";

function Board() {
  return (
    <div className="bg-gray-800 h-screen w-full">
      <TopBar />
      <BoardStatus />
      <BoardLists />
    </div>
  );
}

export default Board;
