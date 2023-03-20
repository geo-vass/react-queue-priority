import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Queue = ({ queue, index }) => {
  const { removeFromQueue } = useGlobalContext();

  useEffect(() => {
    if (queue.length === 0) return;
    const timeout = removeFromQueue(index);
    return () => {
      clearTimeout(timeout);
    };
  }, [queue[0]]);
  return (
    <div className="flex flex-col gap-4">
      <div className="queue front w-full" key={0}>
        {queue.length ? <div className="customer">{queue[0]}</div> : ""}
      </div>
      {queue.map((items, index) => {
        if (index > 0)
          return (
            <div className="queue back w-full" key={index}>
              <div className="customer">{items}</div>
            </div>
          );
      })}
    </div>
  );
};

export default Queue;
