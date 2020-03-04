import React, { useState, memo } from "react";

export const TodoItem = memo(({ item, onDelete, onUpdate }) => {
  const [editable, setEditable] = useState(false);
  const [checked, setChecked] = useState(item.done);
  const [value, setValue] = useState(item.value);

  const toggleEdit = () => {
    setEditable(edit => !edit);
  };

  const handleCancel = () => {
    setChecked(item.done);
    setValue(item.value);
    setEditable(false);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };
  const handleSave = () => {
    onUpdate({
      ...item,
      value,
      done: checked
    });
    setEditable(false);
  };

  console.log("Render Todo Item");
  return (
    <li>
      <input
        disabled={!editable}
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <input
        disabled={!editable}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {editable ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
});
