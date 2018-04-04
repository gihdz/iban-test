import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header header">
          <div className="top-header">
            <div className="top-header-content">
              <span className="header__phone">
                <i className="material-icons top-header-icon">local_phone</i>
                <span className="top-header-text">829-547-0135</span>
              </span>

              <span className="header__mail">
                <a
                  href="mailto:hola@ibanonline.com"
                  className="top-header-mail-link"
                >
                  <i className="material-icons top-header-icon">
                    local_post_office
                  </i>
                  <span className="top-header-text">hola@ibanonline.com</span>
                </a>
              </span>
            </div>
          </div>
          <Navigation />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
