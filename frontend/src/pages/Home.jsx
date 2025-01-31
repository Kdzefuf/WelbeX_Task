import React, { useState } from "react";
import Header from "../components/Header.jsx";
import classes from '../styles/PostsContent.module.css'
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

function Home() {
    const [searchValue, setSearchValue] = useState('')

    const searchInput = (e) => { setSearchValue(e.target.value) }
    const forSearch = (e) => {
        e.preventDefault();

        window.location.assign('/addPost')
    }

    return (
        <div className="page">
            <Header Header='header' isProfileLink={true} />
            <div className={classes.container}>
                <div className={classes.PostsContent}>
                    <h1 className={classes.title}>Напишите свой пост</h1>
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
                            placeholder="Написать пост"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;