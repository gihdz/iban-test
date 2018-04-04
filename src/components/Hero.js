import React, { Component } from 'react';
import '../styles/hero.css';
import Calculator from './Calculator';
class Hero extends Component {
  render() {
    return (
      <section className="section-hero">
        <div className="section-hero__content">
          <div className="section-hero__body">
            <h1 className="section-hero__title">
              Una solución a tus asuntos financieros.
            </h1>
            <div className="section-hero__calculator">
              <Calculator />
            </div>
            <div className="section-hero__info">
              <p>
                <i className="material-icons section-hero__check-icon">
                  check_circle
                </i>
                <span className="section-hero__info-text">
                  No necesitas historial crediticio
                </span>
              </p>
              <p>
                <i className="material-icons section-hero__check-icon ">
                  check_circle
                </i>
                <span className="section-hero__info-text">
                  Préstamos con garantía de vivienda
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
