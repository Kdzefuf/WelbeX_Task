import React, { useState } from "react";
import classes from "../styles/AddPost.module.css";
import Header from "../components/Header";
import Button from '../components/UI/Button/Button';
import AddPostAPI from "../API/AddPost";

function AddPost() {
    const [topic, setTopic] = useState("");
    const [postText, setPostText] = useState("");

    // Обработка отправки формы
    const tryAsk = async (e) => {
        e.preventDefault();

        const formData = {
            token: JSON.parse(localStorage.getItem('userData')).token,
            title: topic,
            content: postText,
        };
        if (Boolean(formData.title) & Boolean(formData.content)) {
            try {
                const responce = await AddPostAPI.addPost(formData);
                if (responce) {
                    alert('Пост успешно создан');
                    window.location.assign(`/`);
                }
            } catch (error) {
                alert("Произошла ошибка при отправке вопроса. Попробуйте еще раз");
            }
        }
        else alert('Одно из полей пустое, введи корректные значения');
    };


    return (
        <div className="page">
            <Header Header="header" isProfileLink={true} />
            <div className={classes.content}>
                <h2 className={classes.title}>Напиши свой пост</h2>
                <form onSubmit={tryAsk} className={classes.form}>
                    {/* Поле для поста */}
                    <label className={classes.label}>
                        Тема поста
                        <textarea
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required
                            className={`${classes.addPost} ${classes.moders1}`}
                        />
                    </label>

                    {/* Поле для текста поста */}
                    <label className={classes.label}>
                        Текст поста
                        <textarea
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            required
                            className={`${classes.addPost} ${classes.moders2}`}
                        ></textarea>
                    </label>

                    <Button type="submit" currentClass="formButton">
                        Опубликовать пост
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default AddPost;
