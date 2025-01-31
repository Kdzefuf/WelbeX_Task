import React from "react";
import classes from './Logo.module.css'

import logo from '../../../images/Logo.svg'
/**
 * Функциональный компонент, который отображает логотип со ссылкой на блог.
 *
 * @function Logo
 * @returns {JSX.Element} - Элемент JSX, представляющий логотип со ссылкой.
 */
function Logo() {
  return (
    <a href='/blog' className={classes.logo}>
      <img className={classes.logoImg} src={logo} />
      Blog
    </a>
  )
}


export default Logo;