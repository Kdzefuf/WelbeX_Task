import React, { useState } from "react";
import classes from '../styles/PostsContent.module.css'
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import Posts from "./Posts";

/**
 * Эта функция представляет собой основную область содержимого приложения,
 * содержащую строку поиска, позволяющую пользователям перейти на страницу "добавить запись",
 * и список записей.
 *
 * @function PostsContent
 * @returns {JSX.Element} - Представление в формате JSX компонента содержимого сообщений.
 */
function PostsContent() {
  const [searchValue, setSearchValue] = useState('')

  /**
   * Обновляет состояние значения поиска с помощью входного значения.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения.
   */
  const searchInput = (e) => { setSearchValue(e.target.value) }

  /**
   * Предотвращает отправку формы по умолчанию и перенаправляет на страницу "добавить сообщение".
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Событие отправки формы.
   */
  const forSearch = (e) => {
    e.preventDefault();
    window.location.assign('/addPost')
  }

  return (
    <div className={classes.container}>
      <div className={classes.PostsContent}>
        <h1 className={classes.title}>Напиши свой пост</h1>
        <form className={classes.searchBar} onSubmit={forSearch}>
          <Input
            type="text"
            placeholder=""
            required={false}
            value={searchValue}
            onChange={searchInput}
            currentClass="searchBar"
          />
          <Button
            type="submit"
            currentClass="searchBar"
            placeholder="Написать"
          />
        </form>
      </div>
      <Posts />
    </div>
  )
}


export default PostsContent;