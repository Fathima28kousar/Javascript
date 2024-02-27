import ReactDOM  from 'react-dom'
import React from 'react';

const rootElement = document.querySelector('#root');
// header
const header = (
  <header>
    <div className="header-wrapper">
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Instructor: Asabeneh Yetayeh</p>
    <small>Date: Oct 1, 2020</small>
    </div>
  </header>
)

// main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{''}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </div>
  </main>
)

// footer
const footer = (
  <footer>
  <div className="footer-wrapper">
    <p>Copyright 2020</p>
  </div>
  </footer>
)

// app

const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
)

ReactDOM.render(app,rootElement);