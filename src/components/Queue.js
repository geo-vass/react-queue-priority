import React from "react";
import { useGlobalContext } from "../context";

const Queue = () => {
  const { queue } = useGlobalContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="queue front" key={0}>
        {queue.customers.length ? (
          <div className="customer">{queue.customers[0]}</div>
        ) : (
          ""
        )}
      </div>
      {queue.customers.map((customer, index) => {
        if (index > 0)
          return (
            <div className="queue back" key={index}>
              <div className="customer">{customer}</div>
            </div>
          );
      })}
    </div>
  );
};

export default Queue;
