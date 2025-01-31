import React from "react";
import classes from "./Button.module.css";

/**
 * Кастомный компонент кнопки.
 * Поддерживает различные типы кнопок, текст внутри кнопки, дополнительные CSS-классы для стилизации и вложенные элементы через `props.children`.
 * Если переданы и `placeholder`, и `children`, приоритет отдается `children`.
 * 
 * @component
 * @param {Object} props - Свойства, передаваемые в компонент.
 * @param {('button'|'submit'|'reset')} [props.type='button'] - Тип кнопки: "button" (по умолчанию), "submit" для отправки формы, или "reset" для сброса значений полей формы.
 * @param {string} props.placeholder - Текст, отображаемый внутри кнопки (используется, если `children` не передан).
 * @param {string} props.currentClass - Название CSS-класса для применения стилизации к кнопке.
 * @param {Function} [props.onClick] - Обработчик события клика для кнопки.
 * @param {React.ReactNode} [props.children] - Вложенные элементы, которые будут отрисованы внутри кнопки.
 * @returns {JSX.Element} Возвращает JSX-разметку кнопки с заданными свойствами.
 */
function Button(props) {
  const { currentClass, children, placeholder, type, onClick, onSubmit } = props;

  // Обработка нескольких классов
  const classNames = currentClass ? currentClass.split(' ').map(className => classes[className] || className).join(' ') : '';

  return (
    <button
      className={classNames}
      type={type || 'button'}
      onClick={onClick || onSubmit}
    >
      {children || placeholder}
    </button>
  );
}

export default Button;
