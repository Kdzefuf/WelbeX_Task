import React, { useState, useEffect } from "react";
import classes from "../styles/AddPost.module.css";
import Button from '../components/UI/Button/Button';
import PutPostData from "../API/PutPostData";

/**
 * Функциональный компонент для обновления записи в блоге.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Object} props.post - Объект записи в блоге.
 * @param {Function} props.onClose - Функция обратного вызова, которая будет вызвана при закрытии формы обновления.
 *
 * @returns {JSX.Element} - Представление в формате JSX компонента Update Post.
 */
function UpdatePost({ post, onClose }) {
    const [topic, setTopic] = useState(post.title || ""); // Заполняем исходным заголовком
    const [postText, setPostText] = useState(post.content || ""); // Заполняем исходным текстом

    /**
     * Обрабатывает отправку формы для обновления публикации.
     *
     * @param {Event} e - Событие отправки формы.
     */
    const tryUpdate = async (e) => {
        e.preventDefault();

        const formData = {
            title: topic,
            content: postText
        };

        if (Boolean(formData.title) && Boolean(formData.content)) {
            try {
                const response = await PutPostData.updatePost(post.id, formData);
                if (response) {
                    alert('Пост успешно обновлен');
                    onClose();
                    window.location.assign(`/blog`);
                }
            } catch (error) {
                alert("Произошла ошибка при обновлении поста. Попробуйте еще раз");
            }
        } else {
            alert('Одно из полей пустое, введите корректные значения');
        }
    };

    return (
        <form onSubmit={tryUpdate} className={classes.form}>
            {/* Поле для темы поста */}
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

            <div className={classes.buttons}>
                <Button type="submit" currentClass="formButton">
                    Сохранить изменения
                </Button>
                <Button type="button" currentClass="formButton" onClick={onClose}>
                    Отмена
                </Button>
            </div>
        </form>
    );
}

export default UpdatePost;

