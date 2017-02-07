
angular.module('studentApp', ['ui.router']);
.config(function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('/', {
  template : '<ul><li ng-repeat="school">{{student.name}}</li><ul>',
  controller : 'studentCtrl',

 });
 $urlRouterProvider.otherwise('/');

 })    ;



  





