import React from "react";
import { HiPlusSm } from "react-icons/hi";
import BoardCard from "./BoardCard";

function BoardGrid() {
  return (
    <div className="h-5/6 w-full bg-gray-800 flex flex-col items-center py-8 text-white">
      <div className="w-10/12 h-full bg-gray-900 rounded-2xl shadow-3xl flex-col">
        <div className="flex h-20 justify-between items-center px-10 py-5 rounded-t-2xl text-lg">
          <p>All Boards</p>
          <button className="bg-green-600 flex items-center justify-evenly w-20 rounded-lg h-10">
            <HiPlusSm className="text-2xl" /> Add
          </button>
        </div>
        <div className="overflow-y-auto grid grid-cols-4 gap-x-24 gap-y-8 h-5/6 w-full rounded-b-2xl px-10 py-10">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </div>
    </div>
  );
}

export default BoardGrid;
