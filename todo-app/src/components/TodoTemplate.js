import React from "react";
// import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      {/* content 안에 todo content를 담아줌. */}
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
