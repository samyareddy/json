 app.service('studentService',function($http)
  {    
     this.getSchoolInfo = function()
     {

        return $http.get('students.json').success(function(response) {
        console.log(response.data);

    });

     }

});















