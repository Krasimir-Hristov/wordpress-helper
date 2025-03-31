import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Наръчник за работа с Divi WordPress Builder</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Начало</Link>
          </li>
          <li>
            <Link to='/installation'>Инсталация</Link>
          </li>
          <li>
            <Link to='/basic-usage'>Основна употреба</Link>
          </li>
          <li>
            <Link to='/modules'>Модули</Link>
          </li>
          <li>
            <Link to='/layouts'>Шаблони</Link>
          </li>
          <li>
            <Link to='/customization'>Персонализация</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
