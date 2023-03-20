import React, { useState } from "react";
import { useGlobalContext } from "../context";

const InputForm = () => {
  const { items, handleChange, addToQueue } = useGlobalContext();

  return (
    <form
      className=" items-center gap-4 w-[50%]"
      onSubmit={(e) => addToQueue(e)}
    >
      <label htmlFor="items">Number of Items (1-100)</label>
      <div className="relative z-0 w-full mb-6 group flex gap-4 ">
        <input
          type="number"
          id="items"
          onChange={(e) => handleChange(e)}
          value={items}
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm "
        >
          Checkout
        </button>
      </div>
    </form>
  );
};

export default InputForm;
