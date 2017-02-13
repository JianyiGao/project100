(function() {
  angular.module('Project100')
        .factory('SeniorService', SeniorService);

  SeniorService.$inject = ['$http'];

  function SeniorService($http){
    init();
    var seniors = [];
    return {
      get: getAllSeniors,
      create: createOneSenior
    };

    function init(){ // this is going to make our first data request upon file load
      $http.get('/seniors')
            .then(function(response){
              seniors = response.data.seniors;
            })
            .catch(function(err){
              console.log(err);
            });
    }
  }
    function getAllSeniors(){
     return seniors;
    }

    function createOneSenior(senior){
      $http.post('/seniors', senior)
          .then(function(response){
            seniors.push(senior);
          })
          .catch(function(err){
            console.log(err);
          });
    }
}());
