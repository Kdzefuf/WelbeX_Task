import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Input from "../components/UI/Input/Input.jsx";
import Button from "../components/UI/Button/Button.jsx";
import UserSignIn from "../API/UserSignIn.js";
import classes from '../styles/Sign.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const tryLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await UserSignIn.login(username, password); // Используем метод UserSignIn.login

      if (response) {
        alert('Вход успешно выполнен!');
        window.location.assign('/');
        setUsername('');
        setPassword('');
      } else {
        alert('Имя или пароль введены неправильно.');
      }
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      alert('Имя пользователя или пароль введены неправильно.');
    }
  };

  return (
    <div className="page">
      <Header Header="sighFormHeader" isAccordion={false} isLogo={true} isProfileLink={false} />
      <form onSubmit={tryLogin} className={classes.signInForm}>
        <h1 className={classes.title}>Войти</h1>
        <p className={classes.descr}>Еще нет учетной записи? <a className={classes.link} href="/register">Зарегистрироваться</a></p>
        <Input
          placeholder="имя пользователя"
          currentClass="formInput"
          value={username}
          onChange={changeUsername}
          required={true}
          id="username"
        />
        <Input
          type="password"
          placeholder="Пароль"
          currentClass="formInput"
          value={password}
          onChange={changePassword}
          required={true}
          id="password"
        />
        <Button type="submit" placeholder="Войти" currentClass="formButton" />
      </form>
    </div>
  );
}

export default Login;