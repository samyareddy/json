 var app = angular.module('studentApp');
 app.factory('studentFactory', function($q, studentService) {
 var factory={};
 var map = {};
 function get(k){
	  return map[k];
	}
    factory.getStudentFactory = function() {
    	
        var deferred = $q.defer();
        studentService.getSchoolInfo().then(
         function(successInfo) {
             console.log(successInfo.data)





 
 
    for(var i=0; i< successInfo.data.length; i++){
   		console.log(successInfo.data[i].school_name)	
   		var data = get(successInfo.data[i].school_name);
   		if(data){
   			data.push(successInfo.data[i]);
   			map[successInfo.data[i].school_name] = data;
   		} else{
   			var array = [];
   			array.push(successInfo.data[i])
   			map[successInfo.data[i].school_name] = array;
   		}
    }
 console.log(map)

             deferred.resolve(map);
         },
         function(errorInfo) {
              deferred.reject([]);
         });
    return deferred.promise;
    }

    return factory;
   
    

 });