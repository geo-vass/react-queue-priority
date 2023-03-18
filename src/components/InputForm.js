import React, { useState } from "react";

const InputForm = () => {
  const [items, setItems] = useState("1");
  const min = 1;
  const max = 100;

  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setItems(value);
  };
  return (
    <form className="flex items-center gap-4 w-[50%]">
      <div className="relative z-0 w-full mb-6 group flex flex-col">
        <label for="items">Number of Items (1-100)</label>
        <input
          type="number"
          id="items"
          min={min}
          max={max}
          onChange={(e) => handleChange(e)}
          value={items}
          required
        />
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm "
      >
        Checkout
      </button>
    </form>
  );
};

export default InputForm;
