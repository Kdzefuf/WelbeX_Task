import React, { useEffect, useState } from "react";
import classes from './ProfileLink.module.css';
import GetUserInfo from "../../../API/GetUserInfo";
import profile from '../../../images/profile.svg';
/**
 * Компонент ссылки профиля пользователя.
 * Отображает либо ссылку на профиль пользователя, если он вошел в аккаунт,
 * либо две ссылки: "Войти" и "Зарегистрироваться", если пользователь не авторизован.
 * 
 * @component
 * @returns {JSX.Element} Возвращает JSX-разметку с ссылкой на профиль для авторизованного пользователя 
 * или ссылками "Войти" и "Зарегистрироваться" для неавторизованного пользователя.
 */
function ProfileLink() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    // Получаем данные пользователя из localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      // Проверяем наличие email, чтобы определить, авторизован ли пользователь
      setIsAuthenticated(!!parsedData);
    }
    const fetchUserInfo = async () => {
      try {
        const data = await GetUserInfo.getUserInfo(JSON.parse(userData).token);

        if (data) {
          setAvatar(data.photo ? `http://localhost:3500/uploads/${data.photo}` : profile);
        }
      }
      catch (error) {
      }
    };
    fetchUserInfo()
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <a href="/profile" className={classes.profile}>
          <img src={avatar} className={classes.profileimg} alt="Фото профиля" />
        </a>
      ) : (
        <div className={classes.authLinks}>
          <a href="/login" className={classes.linkSignIn}>Войти</a>
          <a href="/register" className={classes.linkSignUp}>Зарегистрироваться</a>
        </div>
      )}
    </>
  );
}

export default ProfileLink;