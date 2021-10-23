import React from "react";
import BoardList from "./BoardList";

function BoardLists() {
  return (
    <div className="h-5/6 w-min-full px-8 py-8 text-white">
      <div className="h-full w-full flex flex-row gap-x-3 overflow-x-auto">
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
      </div>
    </div>
  );
}

export default BoardLists;
