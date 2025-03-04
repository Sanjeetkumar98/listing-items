import { useContext } from "react";
import AddTodoItem from "./AddTodoItem";
import { todoItemContext } from "../store/ContextApi";

function AddTodoItems({ onDeleteItem }) {
  const { todoItems } = useContext(todoItemContext);

  return (
    <div>
      {todoItems.map((item, index) => (
        <div key={index}>
          <AddTodoItem
            itemName={item.itemName}
            itemDueDate={item.dueDate}
            onDeleteItem={onDeleteItem}
          />
        </div>
      ))}
    </div>
  );
}

export default AddTodoItems;
