import { useContext, useRef } from "react";
import { todoItemContext } from "../store/ContextApi";

function InputTodoItem() {
  const { addNewItem } = useContext(todoItemContext);
  const addTodoRef = useRef();
  const dueDateRef = useRef();

  const submitAddItem = (event) => {
    event.preventDefault();
    let itemName = addTodoRef.current.value;
    let itemDate = dueDateRef.current.value;
    addNewItem(itemName, itemDate);

    addTodoRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <>
      <form
        className="space-x-4 mt-4 w-auto flex justify-between"
        onSubmit={submitAddItem}
      >
        <input
          className="border p-1 rounded text-xs w-full"
          ref={addTodoRef}
          type="text"
          placeholder="Add item here"
        />
        <input
          className="border p-1 rounded text-xs w-full"
          type="date"
          ref={dueDateRef}
        />
        <button className="px-2 py-1 rounded text-xs bg-blue-600 text-white">
          Add
        </button>
      </form>
    </>
  );
}

export default InputTodoItem;
