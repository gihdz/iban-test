import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import '../styles/calculator.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const style = { width: '100%', marginBottom: 8 };
class Calculator extends Component {
  state = {
    amount: 1000000,
    minAmount: 1000,
    maxAmount: 2500000,
    months: 60,
    maxMonths: 120,
    minMonths: 1,
    interest: 2.5
  };

  changeRange = action => {
    const { maxAmount, minAmount } = this.state;
    let amount = this.state.amount;
    switch (action) {
      case 'add':
        if (amount + 100 > maxAmount) {
          amount = maxAmount;
        } else amount += 100;
        this.setState({ amount });
        break;
      case 'substract':
        if (amount - 100 < minAmount) {
          amount = minAmount;
        } else amount -= 100;
        this.setState({ amount });
        break;
    }
  };
  changeRangeMonth = action => {
    const { maxMonths, minMonths } = this.state;
    let months = this.state.months;
    switch (action) {
      case 'add':
        if (months + 1 > maxMonths) {
          months = maxMonths;
        } else months += 1;
        this.setState({ months });
        break;
      case 'substract':
        if (months - 1 < minMonths) {
          months = minMonths;
        } else months -= 1;
        this.setState({ months });
        break;
    }
  };

  onChangeInterest = e => {
    this.setState({ interest: e.target.value });
  };

  render() {
    const {
      minAmount,
      maxAmount,
      amount,
      months,
      maxMonths,
      minMonths,
      interest
    } = this.state;
    const realInterest = parseFloat(interest) / 100;
    // const total = amount + realInterest;

    const feeD1 = amount * (Math.pow(1 + realInterest, months) * realInterest);
    const feeD2 = Math.pow(1 + realInterest, months) - 1;

    const fee = Math.trunc((amount / 0.65 - amount) / months + feeD1 / feeD2);
    return (
      <div className="calculator">
        <div className="calculator__content clearfix">
          <h3 className="calculator__title">
            Consigue hasta RD$ 2,500,000 con iBAN
          </h3>
          <div className="calculator__calcs">
            <div className="calculator__amount">
              <div className="calculator__input clearfix">
                <span className="calculator__input-label">
                  ¿Cuanto necesitas?
                </span>
                <span className="calculator__input-box">
                  <span className="calculator__input-placeholder">
                    RD$ {amount}
                  </span>
                </span>
              </div>
              <div className="calculator__input-range">
                <span className="calculator__input-range-icon-container">
                  <i
                    onClick={() => this.changeRange('substract')}
                    className="material-icons calculator__input-range-icon"
                  >
                    remove_circle_outline
                  </i>
                </span>
                <div className="calculator__slider">
                  <Slider
                    style={style}
                    trackStyle={{
                      backgroundColor: '#00ff7b',
                      height: 10,
                      borderRadius: 0
                    }}
                    handleStyle={{
                      borderColor: '#F5F5F5',
                      height: 28,
                      width: 28,
                      marginLeft: -14,
                      marginTop: -9,
                      backgroundColor: '#F5F5F5'
                    }}
                    railStyle={{
                      backgroundColor: '#7D7D7D',
                      height: 3,
                      marginTop: 3
                    }}
                    value={amount}
                    min={minAmount}
                    max={maxAmount}
                    onChange={val => this.setState({ amount: val })}
                  />
                </div>
                <span className="calculator__input-range-icon-container">
                  <i
                    onClick={() => this.changeRange('add')}
                    className="material-icons calculator__input-range-icon"
                  >
                    add_circle_outline
                  </i>
                </span>
              </div>
            </div>
            <div className="calculator__time">
              <div className="calculator__input clearfix">
                <span className="calculator__input-label">
                  ¿Para cuanto tiempo?
                </span>
                <span className="calculator__input-box">
                  <span className="calculator__input-placeholder">
                    {months} meses
                  </span>
                </span>
              </div>
              <div className="calculator__input-range">
                <span className="calculator__input-range-icon-container">
                  <i
                    onClick={() => this.changeRangeMonth('substract')}
                    className="material-icons calculator__input-range-icon"
                  >
                    remove_circle_outline
                  </i>
                </span>
                <div className="calculator__slider">
                  <Slider
                    style={style}
                    trackStyle={{
                      backgroundColor: '#00ff7b',
                      height: 10,
                      borderRadius: 0
                    }}
                    handleStyle={{
                      borderColor: '#F5F5F5',
                      height: 28,
                      width: 28,
                      marginLeft: -14,
                      marginTop: -9,
                      backgroundColor: '#F5F5F5'
                    }}
                    railStyle={{
                      backgroundColor: '#7D7D7D',
                      height: 3,
                      marginTop: 3
                    }}
                    value={months}
                    min={minMonths}
                    max={maxMonths}
                    onChange={val => this.setState({ months: val })}
                  />
                </div>
                <span className="calculator__input-range-icon-container">
                  <i
                    onClick={() => this.changeRangeMonth('add')}
                    className="material-icons calculator__input-range-icon"
                  >
                    add_circle_outline
                  </i>
                </span>
              </div>
            </div>
            <div className="calculator__calc-inputs">
              <div className="input-group">
                <div>
                  <label htmlFor="interest">Interes</label>
                </div>
                <input
                  onChange={this.onChangeInterest}
                  type="number"
                  value={interest}
                />
              </div>
              <div className="input-group">
                <div>
                  <label>Cuota</label>
                </div>
                <input type="text" value={fee} disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
