import React, { useReducer, useState, useRef, useCallback } from "react";
import Header from "./components/Header";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  // prevNumbers는 현재 number 값을 가리킵니다.
  const onIncrease = useCallback(
    () => setNumber((prevNumber) => prevNumber + 1),
    []
  );
  // 내가 작성한 todo list data
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  // todo 데이터
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 4; i++) {
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false,
      });
    }
    return array;
  }

  function todoReducer(todos, action) {
    switch (action.type) {
      case "INSERT":
        // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
        return todos.concat(action.todo);
      case "REMOVE":
        return todos.filter((todo) => todo.id !== action.id);
      //{ type: 'REMOVE', id: 1 }
      case "TOGGLE":
        //{ type: 'REMOVE', id: 1 }
        return todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        );
      default:
        return todos;
    }
  }

  return (
    <>
      <Header />
      <main className="main">
        <NavBar className="left" />
        <section className="right">
          <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          </TodoTemplate>
        </section>
      </main>
    </>
  );
};

export default App;
