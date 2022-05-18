import React from "react";
import { useState } from "react";
import {TodoItem} from './TodoItem'

export const Todo = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
      <div>
        Hello
        <div>
          Todo
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setTodos([...todos, { id: Date.now(), value: value }]);
              setValue("");
            }}
          >
            Add
          </button>
          <div className={StyleSheet.todoList}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    );
};

