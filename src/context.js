import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const MIN = 1;
const MAX = 100;
const CHECKOUT_INTERVAL = 1000;

const AppProvider = ({ children }) => {
  const [items, setItems] = useState("1");

  const handleChange = (e) => {
    const value = Math.max(MIN, Math.min(MAX, Number(e.target.value)));
    setItems(value);
  };

  const [queue, setQueue] = useState({
    customers: [],
    totalItems: 0,
  });

  const checkout = (e) => {
    e.preventDefault();
    setQueue((prevQueue) => {
      return {
        customers: [...prevQueue.customers, items],
        totalItems: prevQueue.totalItems + items,
      };
    });
  };
  useEffect(() => {
    console.log("EFFECT");
    const timeout = setTimeout(() => {
      if (queue.totalItems === 0) {
        clearTimeout(timeout);
        return;
      }
      setQueue((prevQueue) => {
        const newQueue = prevQueue.customers.map((items, index) =>
          index === 0 ? items - 1 : items
        );
        if (newQueue[0] === 0) newQueue.shift();
        return {
          customers: newQueue,
          totalItems: Math.max(prevQueue.totalItems - 1, 0),
        };
      });
    }, CHECKOUT_INTERVAL);
    console.log(timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [queue.customers[0]]);

  return (
    <AppContext.Provider value={{ items, handleChange, checkout, queue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
