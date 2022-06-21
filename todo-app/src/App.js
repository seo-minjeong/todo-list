import React, { useState, useRef, useCallback } from "react";
import Header from "./components/Header";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  // 내가 작성한 todo list data
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  // 삭제 함수
  const onRemove = useCallback(
    (id) => {
      // id를 파라미터로 받아와서 같은 id를 가진 항목을 todos 배열에서 지우는 함수.
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // 수정 함수
  // 특정 id를 가지고 있는 객체의 checked 값을 반전시켜줌.
  // 불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 이렇게 map을 사용.
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          // ! map을 사용한 이유
          // todo.id와 현재 파라미터 id가 같을때 새로운 객체를 생성하지만 값이 다를땐 처음 그대로 반환.
          // 그래서 배열에서 변화가 필요한 원소만 업데이트 되고 나머지는 그대로 남아있게 되는것.
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기.
  // 이 함수에서는 새로운 객체를 만들때 마다 id 값에 1씩 더해주어야 한다.
  // 현재 작성된 리스트 값이 3까지 있기 때문에 id: 3 이후로 추가.
  // useRef를 사용하는 이유? -> id 값은 렌더링되는 정보가 아닌 단순히 새로운 항목 생성을 해서 참조되는 값이기 때문.
  const nextId = useRef(4);

  // 이 함수는 컴포넌트의 성능을 아낄 수 있도록 useCallback으로 감싸줌.
  // <중요> props로 전달해야 할 함수를 만들때는 useCallback을 사용하여 함수를 감싸기
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 사용자가 입력한 값을 저장하여 todo 객체에 추가한다.
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <>
      <Header />
      <main className="main">
        <article className="left">hi</article>
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
