 var app = angular.module('studentApp', []);
  app.service('studentService',function($http)
  {    
     this.getData = function()
     {

        return $http.get('students.json').success(function(response) {
        console.log(response.data);
    });
     }
});















