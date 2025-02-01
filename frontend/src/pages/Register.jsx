import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Input from "../components/UI/Input/Input.jsx";
import Button from "../components/UI/Button/Button.jsx";
import UserSignUp from "../API/UserSignUp.js";
import classes from '../styles/Sign.module.css';

/**
 * Компонент Register отвечает за регистрацию пользователя.
 * Он включает в себя поля для ввода электронной почты, имени пользователя и пароля, а также кнопку регистрации.
 * После успешной регистрации пользователь перенаправляется на домашнюю страницу.
 *
 * @returns {JSX.Element} - Представление компонента Register в формате JSX.
 */
function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Обновляет состояние электронной почты с помощью введенного значения.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения.
   */
  const changeEmail = (e) => { setEmail(e.target.value) };

  /**
   * Обновляет состояние имени пользователя с помощью входного значения.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения. 
   */
  const changeUsername = (e) => { setUsername(e.target.value) };

  /**
   * Обновляет состояние пароля в соответствии с введенным значением.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения. 
   */
  const changePassword = (e) => { setPassword(e.target.value) };

  /**
   * Управляет отправкой регистрационной формы.
   * Предотвращает отправку формы по умолчанию,
   * отправляет запрос на регистрацию в API регистрации пользователя,
   * и отображает соответствующие оповещения на основе ответа.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Событие отправки формы.
   */
  const tryReg = async (e) => {
    e.preventDefault();

    try {
      const response = await UserSignUp.register(email, username, password);

      if (response) {
        alert('Регистрация прошла успешно!');
        window.location.assign('/');
      } else {
        alert('Ошибка при регистрации, попробуй еще раз');
      }
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      alert('Ошибка при регистрации');
    }
  };

  return (
    <div className="page">
      <Header Header="sighFormHeader" isAccordion={false} isLogo={true} isProfileLink={false} />
      <form onSubmit={tryReg} className={classes.signInForm}>
        <h1 className={classes.title}>Регистрация</h1 >
        <p className={classes.descr}>Уже есть учетная запись? <a className={classes.link} href="/login">Войти в систему</a></p>
        <Input type="email" placeholder="Адрес электронной почты" currentClass="formInput" value={email} onChange={changeEmail} required={true} id="email" />
        <Input type="text" placeholder="Имя пользователя" currentClass="formInput" value={username} onChange={changeUsername} required={true} id="username" />
        <Input type="password" placeholder="Пароль" currentClass="formInput" value={password} onChange={changePassword} required={true} id="password" />
        <Button type="submit" placeholder="Зарегистрироваться" currentClass="formButton" />
      </form>
    </div>
  )
}


export default Register;