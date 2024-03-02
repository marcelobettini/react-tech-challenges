import { FormEvent, useState, useContext, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoCtx } from "../context/todoContext";

function TodoAdd() {
  const { dispatch } = useContext(TodoCtx);

  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;
    if (description) {
      const newTodo = {
        id: uuidv4(),
        description,
        completed: false,
      };
      dispatch({ type: "ADD_TODO", todo: newTodo });
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        aria-label="new task description"
        placeholder="read a book..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
export default TodoAdd;
