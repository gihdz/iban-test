import React, { Component } from 'react';
import '../styles/navigation.css';
import '../styles/buttons.css';
import logo from '../images/iBan-logo.png';

class Navigation extends Component {
  state = {
    showMobile: false
  };
  showMobileNav = () => {
    this.setState({ showMobile: !this.state.showMobile });
  };
  render() {
    return (
      <nav className="header__nav">
        <div className="header__nav-content">
          <div className="header__logo-container">
            <img src={logo} alt="iBAN logo" className="header__logo" />
          </div>
          <ul className="header__nav-list">
            <li className="header__nav-menu-item menu-dropdown">
              <a className="header__nav-item-link" href="#">
                Productos
                <i className="material-icons header__menu-arrow-down">
                  keyboard_arrow_down
                </i>
              </a>
            </li>
            <li className="header__nav-menu-item">
              <a className="header__nav-item-link" href="#">
                Plan Amigo
              </a>
            </li>
            <li className="header__nav-menu-item menu-dropdown">
              <a className="header__nav-item-link" href="#">
                Nosotros
                <i className="material-icons header__menu-arrow-down">
                  keyboard_arrow_down
                </i>
              </a>
            </li>
            <li className="header__nav-menu-item">
              <a
                className="header__nav-item-link header__nav-item-link--desktop btn btn--clear"
                href="#"
              >
                Calculadora de Préstamos
              </a>
            </li>
            <li className="header__nav-menu-item">
              <a
                className="header__nav-item-link header__nav-item-link--desktop btn btn--solid"
                href="#"
              >
                Solicitar Préstamo
              </a>
            </li>
          </ul>

          <div className="hamburguer-icon" onClick={this.showMobileNav}>
            <div />
            <div />
            <div />
          </div>
          {this.state.showMobile && (
            <div className="header__nav-mobile">
              <ul className="header__nav-list-mobile">
                <li className="header__nav-item-mobile">
                  <a
                    href="#"
                    className="header__nav-item-link header__nav-item-link--mobile"
                  >
                    Productos
                  </a>
                  <ul className="header__mobile-sub-menu">
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Solidario
                      </a>
                    </li>
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Negocio
                      </a>
                    </li>
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Solución
                      </a>
                    </li>
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Vehicular
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header__nav-item-mobile">
                  <a
                    href="#"
                    className="header__nav-item-link header__nav-item-link--mobile"
                  >
                    Plan Amigo
                  </a>
                </li>
                <li className="header__nav-item-mobile">
                  <a
                    href="#"
                    className="header__nav-item-link header__nav-item-link--mobile"
                  >
                    Nosotros
                  </a>
                  <ul className="header__mobile-sub-menu">
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        ¿Quiénes Somos?
                      </a>
                    </li>
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Social
                      </a>
                    </li>
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Contactos
                      </a>
                    </li>
                    <li className="header__sub-menu-item">
                      <a
                        href="#"
                        className="header__nav-item-link header__sub-menu-link-item"
                      >
                        Préstamo Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header__nav-item-mobile">
                  <div className="buttons-container-mobile">
                    <a
                      href="#"
                      className="header__nav-item-link btn btn--clear u-text-center"
                    >
                      Calculadora de Préstamos
                    </a>
                    <a
                      href="#"
                      className="header__nav-item-link btn btn--solid u-text-center"
                    >
                      Solicitar Préstamo
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  }
}
export default Navigation;
