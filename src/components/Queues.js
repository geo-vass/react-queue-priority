import React from "react";
import Queue from "./Queue";

const Queues = () => {
  return (
    <div className="">
      <h2>Queues</h2>
      <div className="grid grid-cols-2 gap-4 ">
        <Queue />
      </div>
    </div>
  );
};

export default Queues;
