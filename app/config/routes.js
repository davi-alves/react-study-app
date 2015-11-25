var React = require('react');
var RouterRouter = require('react-router');

var IndexRoute = RouterRouter.IndexRoute;
var Route = RouterRouter.Route;

var Main = require('../components/Main');
var Home = require('../components/Home');


module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
  </Route>
);
