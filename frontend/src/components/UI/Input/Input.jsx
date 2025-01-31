import React from "react";
import classes from "./Input.module.css";

/**
 * Кастомный компонент поля ввода.
 * Поддерживает различные типы полей, текст-заполнитель, стилизацию и обработку изменений.
 * 
 * @component
 * @param {Object} props - Свойства, передаваемые в компонент.
 * @param {('checkbox'|'datetime-local'|'email'|'file'|'password'|'radio'|'search'|'text')} [props.type='text'] - Тип поля ввода.
 * @param {string} props.placeholder - Текст-заполнитель внутри поля ввода.
 * @param {string} props.currentClass - Название CSS-классов для стилизации поля (может включать несколько классов через пробел).
 * @param {string} props.value - Значение, отображаемое в поле ввода.
 * @param {Function} props.onChange - Обработчик изменений, вызываемый при изменении значения поля.
 * @param {string} props.id - Уникальный идентификатор элемента для оптимизации обновлений в React.
 * @param {boolean} [props.required=false] - Указывает, является ли поле обязательным для заполнения.
 * @returns {JSX.Element} Возвращает JSX-разметку поля ввода с заданными свойствами.
 */
function Input(props) {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      className={classes[props.currentClass]}
      maxLength="64"
      placeholder={props.placeholder}
      type={props.type || 'text'}
      id={props.id}
      required={props.required}
    />
  );
}

export default Input;
