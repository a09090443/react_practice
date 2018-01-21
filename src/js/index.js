import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/base.scss';
import Timer from '../components/Timer';
import TodoApp from '../components/TodoApp';
import Menu from '../components/Menu';

// ReactDOM.render(<App name="Mark" />, document.getElementById('app'));
// ReactDOM.render(<Timer />, document.getElementById('app'));
// ReactDOM.render(<TodoApp />, document.getElementById('app'));
ReactDOM.render(<Menu />, document.getElementById('app'));