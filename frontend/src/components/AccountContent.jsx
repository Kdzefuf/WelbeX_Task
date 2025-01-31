import React, { useEffect, useState } from "react";
import GetUserInfo from "../API/GetUserInfo";
import classes from '../styles/AccountContent.module.css';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import profile from '../images/profile.svg'
import PutUserData from "../API/PutUserData";

function AccountContent() {
    const [forChange, setForChange] = useState([]);
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const change = async (e) => {
        e.preventDefault();
        const changes = [];

        changes.push((username !== userData.nickname && username !== "") ? username : userData.username);
        changes.push((email !== userData.email && email !== "") ? email : userData.email);
        changes.push((password !== userData.password && password !== "") ? password : userData.password);
        console.log(changes);

        if (changes.length === 0) {
            alert("Поля не изменены, попробуйте еще раз");
        } else {
            setForChange(changes);

            const storedUserData = JSON.parse(localStorage.getItem('userData'));
            if (await PutUserData.updateUser(storedUserData.token, changes)) {
                alert('Данные изменились')
                fetchUserData(storedUserData.token);
            } else {
                alert('Ошибка при изменении данных')
            }


            setUsername('');
            setEmail('');
            setPassword('');
        }
    };

    const fetchUserData = async (token) => {
        const data = await GetUserInfo.getUserInfo(token);
        setUserData(data);
        fetchInputData(data);
    };

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            fetchUserData(storedUserData.token);
        }
    }, []);

    const handleUsernameChange = (event) => { setUsername(event.target.value); };
    const handleEmailChange = (event) => { setEmail(event.target.value); };
    const handlePasswordChange = (event) => { setPassword(event.target.value); };

    const [inputUsername, setInputUsername] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const fetchInputData = usersPlaceholder => {
        setInputUsername(usersPlaceholder);
        setInputEmail(usersPlaceholder);
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.title} >{`Профиль`}</h2>
            <div className={classes.avatarWrapper}>
                <label className={classes.imgPenWrapper}>
                    <img className={classes.imgProfile} src={profile} alt="Аватарка" />
                </label>
            </div>

            <form className={classes.changeForm} onSubmit={change}>
                <div className={classes.labelGroup}>
                    <h3 className={classes.labelTitle}>Имя пользователя<sup>*</sup></h3>
                    <Input placeholder={inputUsername.username} type="text" currentClass="profileInput" value={username} onChange={handleUsernameChange} required={false} />
                </div>
                <div className={classes.labelGroup}>
                    <h3 className={classes.labelTitle}>Адрес электронной почты<sup>*</sup></h3>
                    <Input placeholder={inputEmail.email} type="email" currentClass="profileInput" value={email} onChange={handleEmailChange} required={false} />
                </div>
                <div className={classes.labelGroup}>
                    <h3 className={classes.labelTitle}>Пароль<sup>*</sup></h3>
                    <Input type="password" currentClass="profileInput" value={password} onChange={handlePasswordChange} required={false} />
                </div>
                <div className={classes.labelGroup}>
                    <a className={classes.back} href="/" >На главную</a>
                    <Button type="submit" currentClass="saveButton">Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default AccountContent;