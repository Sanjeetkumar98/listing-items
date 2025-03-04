import { useContext } from "react";
import { todoItemContext } from "../store/ContextApi";

function EmptyTodoItem() {
  const { todoItems } = useContext(todoItemContext);

  return (
    todoItems.length === 0 && (
      <div className="text-lg font-semibold mt-6">Enjoy your Day !</div>
    )
  );
}

export default EmptyTodoItem;
