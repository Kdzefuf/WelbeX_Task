import React, { useState } from "react";
import classes from '../styles/PostsContent.module.css'
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import Posts from "./Posts";

function PostsContent() {
  const [searchValue, setSearchValue] = useState('')

  const searchInput = (e) => { setSearchValue(e.target.value) }
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