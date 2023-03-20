import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const MIN = 1;
const MAX = 100;
const CHECKOUT_INTERVAL = 1000;
const initialQueues = Array(5).fill([]);
const initialTotals = Array(5).fill(0);

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(1);

  const handleChange = (e) => {
    const value = Math.max(MIN, Math.min(MAX, Number(e.target.value)));
    setItems(value);
  };

  const [queues, setQueues] = useState(initialQueues);
  const [totals, setTotals] = useState(initialTotals);

  const findBestQueue = () => {
    const queueItems = [];

    queues.forEach((queue) => {
      queueItems.push(queue.reduce((sum, val) => sum + val, 0));
    });
    console.log({ queueItems });
    const min = Math.min(...queueItems);
    return queueItems.indexOf(min);
  };
  const addToQueue = (e) => {
    e.preventDefault();
    const bestQueue = findBestQueue();

    setQueues((prevQueue) => {
      return prevQueue.map((queue, index) =>
        index !== bestQueue ? queue : [...queue, items]
      );
    });
  };

  const removeFromQueue2 = (queueNumber) => {
    const queue = queues[queueNumber];
    const timeout = setTimeout(() => {
      setQueues((prevQueue) => {
        const newQueue = [...prevQueue[queueNumber]];
        newQueue[0] -= 1;
        if (newQueue[0] === 0) newQueue.shift();
        return prevQueue.map((queue, index) => {
          if (index !== queueNumber) return queue;
          if (queue[0] === 0) return;
          else return newQueue;
        });
      });
    }, CHECKOUT_INTERVAL);
    return timeout;
  };
  const removeFromQueue = (queueNumber) => {
    const timeout = setTimeout(() => {
      setQueues((prevQueue) => {
        return prevQueue.map((queue, index) =>
          index !== queueNumber
            ? queue
            : [queue[0] - 1, ...queue.slice(1)].filter((items) => items !== 0)
        );
      });
    }, CHECKOUT_INTERVAL);
    return timeout;
  };
  return (
    <AppContext.Provider
      value={{ items, handleChange, addToQueue, queues, removeFromQueue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
