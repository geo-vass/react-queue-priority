import React from "react";
import { useGlobalContext } from "../context";
import Queue from "./Queue";

const Queues = () => {
  const { queues } = useGlobalContext();
  return (
    <div className="">
      <h2>Queues</h2>
      <div className="grid grid-cols-5 gap-4 w-[50%] ">
        {queues.map((queue, index) => (
          <Queue key={index} queue={queue} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Queues;
