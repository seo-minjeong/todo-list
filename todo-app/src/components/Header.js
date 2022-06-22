import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">T</h1>
      <h2 className="logo_text">Todo List</h2>
      <div className="login_wrap">
        <p className="login">로그인</p>
        <p className="join">회원가입</p>
      </div>
    </header>
  );
};

export default Header;
