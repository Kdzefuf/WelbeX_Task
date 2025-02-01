import React, { useState } from "react";
import classes from "../styles/AddPost.module.css";
import Header from "../components/Header";
import Button from '../components/UI/Button/Button';
import AddPostAPI from "../API/AddPost";
import buttonImg from "../images/download.svg"

/**
 * Компонент "Добавить запись" отвечает за предоставление пользователям возможности создавать новую запись в блоге.
 * Он включает в себя форму для ввода темы, содержания и необязательного файла изображения.
 * Данные формы отправляются на сервер для обработки и хранения.
 *
 * @returns {JSX.Element} - Визуализированный компонент AddPost.
 */
function AddPost() {
    const [formData, setFormData] = useState({
        topic: "",
        content: "",
        file: null
    });

    /**
     * Обрабатывает отправку формы, отправляя данные формы на сервер.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - Событие отправки формы.
     */
    const tryAsk = async (e) => {
        e.preventDefault();

        const formToSend = new FormData();
        formToSend.append("token", JSON.parse(localStorage.getItem('userData')).token);
        formToSend.append("title", formData.topic);
        formToSend.append("content", formData.content);
        const file = formData.file;
        formToSend.append("file", file ? file : null);
        try {
            const responce = await AddPostAPI.addPost(formToSend);
            if (responce) {
                alert('Пост успешно создан');
                window.location.assign(`/blog`);
            }
        } catch (error) {
            alert("Произошла ошибка при отправке вопроса. Попробуйте еще раз");
        }
    };

    /**
     * Обрабатывает изменения в полях ввода и соответствующим образом обновляет состояние данных формы.
     *
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Событие изменения входных данных.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    /**
     * Обрабатывает выбор файла для изображения публикации и соответствующим образом обновляет состояние данных формы.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Событие выбора файла.
     */
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevState) => ({
            ...prevState,
            file: file,
        }));
    };

    return (
        <div className="page">
            <Header Header="header" isProfileLink={true} />
            <div className={classes.content}>
                <h2 className={classes.title}>Напиши свой пост</h2>
                <form onSubmit={tryAsk} className={classes.form}>
                    <div className={classes.formGroup}>
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            className={classes.fileInput}
                        />
                    </div>
                    {/* Поле для поста */}
                    <label className={classes.label}>
                        Тема поста
                        <textarea
                            type="text"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            required
                            className={`${classes.addPost} ${classes.moders1}`}
                        />
                    </label>

                    {/* Поле для текста поста */}
                    <label className={classes.label}>
                        Текст поста
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
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
