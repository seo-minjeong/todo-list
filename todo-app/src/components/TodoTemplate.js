import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children, props }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <b>All Task ✏️</b>
        <div className="add_btn_wrap">
          <button type="button" className="add_btn">
            Add Tasks
          </button>
        </div>
      </div>
      {/* content 안에 todo content를 담아줌. */}
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
