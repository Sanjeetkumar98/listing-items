import { useContext } from "react";
import { todoItemContext } from "../store/ContextApi";

function AddTodoItem({ itemName, itemDueDate }) {
  const { deleteItem } = useContext(todoItemContext);
  return (
    <div className="flex justify-between mt-3 space-x-3 text-xs">
      <div className="w-full text-start">{itemName}</div>
      <div className="w-full text-start ml-3">{itemDueDate}</div>
      <button
        className="px-2 py-1 bg-red-500 text-white rounded w-auto"
        onClick={() => deleteItem(itemName)}
      >
        Delete
      </button>
    </div>
  );
}

export default AddTodoItem;
