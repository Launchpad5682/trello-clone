import React from "react";
import { HiPlusSm } from "react-icons/hi";
import BoardCard from "./BoardCard";

function BoardGrid() {
  return (
    <div className="h-5/6 w-full bg-gray-800 flex flex-col items-center py-8 text-white">
      <div className="w-10/12 h-full bg-gray-900 rounded-2xl border-solid border-gray-500 border-2 shadow-2xl flex-col">
        <div className="flex h-1/6 justify-between items-center px-4 py-5 rounded-t-2xl bg-blue-900 text-lg">
          <p>All Boards</p>
          <button className="bg-green-600 flex items-center justify-evenly w-20 rounded-lg h-10">
            <HiPlusSm className="text-2xl" /> Add
          </button>
        </div>
        <div className="overflow-y-auto grid grid-cols-4 gap-x-14 gap-y-8 bg-pink-900 h-5/6 w-full rounded-b-2xl px-4 py-10">
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
