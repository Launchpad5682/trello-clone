import React from "react";
import AvatarProfile from "../GlobalComponents/AvatarProfile";

function BoardCard() {
  return (
    <div className="w-80 h-56 bg-indigo-900 rounded-2xl flex-col">
      <img
        src="https://images.unsplash.com/photo-1633113090205-cc1ac795b5f9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="test"
        className="w-full h-4/6 p-2 rounded-2xl"
      />
      <div className="px-2">
        <p>Saurabh's Board</p>
        <div className="flex">
          <AvatarProfile />
          <AvatarProfile />
          <AvatarProfile />
          <p className="self-center">5+ more</p>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
