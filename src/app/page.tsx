"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleClickAddTodos = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const handleClickDeleteTodos = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <main>
      {/* 入力欄 */}
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChangeText}
          className="border border-solid"
        />
        <button onClick={handleClickAddTodos}>Add</button>
      </div>
      {/* ToDoを表示 */}
      <div>
        <ul>
          {/* 同じtextを挿入されるエラーが出る and バグの元 */}
          {todos.map((todo, index) => (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => handleClickDeleteTodos(index)}>
                Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
