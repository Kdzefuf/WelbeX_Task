import React, { useEffect, useState } from "react";
import classes from './Post.module.css'
import Button from "../Button/Button";
import DeletePost from "../../../API/DeletePost";
import UpdatePost from "../../UpdatePost";
import GetUserInfo from "../../../API/GetUserInfo";

/**
 * Функциональный компонент, представляющий собой публикацию в приложении для социальных сетей.
 *
 * @function Post
 * @param {object} props - Свойства, передаваемые компоненту.
 * @param {string} props.title - Название поста.
 * @param {string} props.content - Содержание поста.
 * @param {string} props.date - Дата, когда был создан пост.
 * @param {string} props.avatar - URL-адрес аватара пользователя.
 * @param {string} props.userId - Идентификатор пользователя, создавшего запись.
 * @param {string} props.currentClass - Класс CSS для поста.
 * @param {string} props.key - Уникальный ключ для поста.
 * @returns {JSX.Element} - Представление поста в формате JSX.
 */
function Post(props) {
  const [user, setAuthor] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const date = new Date(props.date);
  const formattedDate = formatDate(date);

  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const currentUserToken = JSON.parse(localStorage.getItem('userData')).token;

    GetUserInfo.getUserId(currentUserToken)
      .then((userId) => {
        setCurrentUserId(userId);
      })
      .catch((error) => {
        console.error('Ошибка при получении ID пользователя:', error);
      });
  }, []);

  useEffect(() => {
    setAuthor(props.userId)
  }, []);

  const tryDelete = async (e) => {
    e.preventDefault();

    try {
      console.log(props.id);
      const responce = await DeletePost.deletePost(props.id);
      if (responce) {
        alert('Пост удален');
        window.location.assign(`/blog`);
      }
    } catch (error) {
      alert("Произошла ошибка при отправке вопроса. Попробуйте еще раз");
    }
  };

  const tryEdit = (e) => {
    e.preventDefault();
    setIsEditing(true); 
  };

  const closeEdit = () => {
    setIsEditing(false);  
  };

  return (
    <li className={classes[props.currentClass]} key={props.key}>
      {isEditing ? (
        <UpdatePost 
          post={props} 
          onClose={closeEdit}
        />
      ) : (
        <>
          <img className={classes.avatar} src={props.avatar} alt="аватар профиля пользователя" />
          <div className={classes.content}>
            <div className={classes.titleContainer}>
              <h3 className={classes.title}>{props.title}</h3>
              <p className={classes.title}> {formattedDate} </p>
            </div>
            <p className={classes.descr}> {props.content} </p>
          </div>
          {currentUserId === props.userId && (
            <div className={classes.actions}>
              <button className={classes.editButton} onClick={tryEdit}>Изменить</button>
              <button className={classes.deleteButton} onClick={tryDelete}>Удалить</button>
            </div>
          )}
        </>
      )}
    </li>
  )
}


function formatDate(date) {
  const formattedDate = [
    String(date.getDate()).padStart(2, '0'),
    String(date.getMonth() + 1).padStart(2, '0'),
    date.getFullYear()
  ].join('-');

  const formattedTime = [
    String(date.getHours()).padStart(2, '0'),
    String(date.getMinutes()).padStart(2, '0'),
    String(date.getSeconds()).padStart(2, '0')
  ].join(':');

  const result = `${formattedDate} ${formattedTime}`;
  return result;
}

export default Post;