import React, { useState, memo } from "react";

export const AddForm = memo(({ onAdd }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      id: Math.random().toString(),
      value,
      done: false
    });
    setValue("");
  };

  console.log("Render Add Form");
  return (
    <form onSubmit={handleSubmit}>
      <input autoFocus value={value} onChange={onChange} placeholder="Todo" />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
});
