import "./App.css";
import HeadingTodo from "./components/HeadingTodo";
import EmptyTodoItem from "./components/EmptyTodoItem";
import InputTodoItem from "./components/InputTodoItem";
import AddTodoItems from "./components/AddTodoItems";
import TodoItemsContextProvider from "./store/ContextApi";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="ml-20 mr-20">
        <HeadingTodo todoName="Todo App" />
        <InputTodoItem />
        <AddTodoItems />
        <EmptyTodoItem />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
