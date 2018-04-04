import React, { Component } from 'react';
import '../styles/navigation.css';
import logo from '../images/iBan-logo.png';

export default () => (
  <nav className="header__nav">
    <div className="header__nav-content">
      <div className="header__logo-container">
        <img src={logo} alt="iBAN logo" className="header__logo" />
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-menu-item menu-dropdown">
          <a href="#">
            Productos
            <i className="material-icons header__menu-arrow-down">
              keyboard_arrow_down
            </i>
          </a>
        </li>
        <li className="header__nav-menu-item">
          <a href="#">Plan Amigo</a>
        </li>
        <li className="header__nav-menu-item menu-dropdown">
          <a href="#">
            Nosotros
            <i className="material-icons header__menu-arrow-down">
              keyboard_arrow_down
            </i>
          </a>
        </li>
        <li className="header__nav-menu-item">
          <a className="btn btn--clear" href="#">
            Calculadora de Préstamos
          </a>
        </li>
        <li className="header__nav-menu-item">
          <a className="btn btn--solid" href="#">
            Solicitar Préstamo
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
