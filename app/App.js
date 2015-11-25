var React = require('react');
var Router = require('react-router').Router;
var DOM = require('react-dom');

var routes = require('./config/routes');

DOM.render(<Router>{routes}</Router>, document.getElementById('app'));
