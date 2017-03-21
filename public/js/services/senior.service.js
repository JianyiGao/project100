(function() {
  angular.module('Project100')
        .factory('SeniorService', SeniorService);

  SeniorService.$inject = ['$http'];

  function SeniorService($http){
    init();
    var seniors = [];

    return {
      get: getAllSeniors,
      create: createOneSenior,
      update: updateOneSenior,
      delete: deleteOneSenior
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

    // // function ability to select current senior
    // function selectSenior(senior) {
    //   this.senior = senior;
    // }

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

    function updateOneSenior(index, updatedSenior){
      $http.put('/seniors/', updatedSenior._id, updatedSenior)
            .then(function(response){
              seniors.splice(index, 1, updatedSenior);
            })
            .catch(function(){
              console.log(err);
            });
    }
    function deleteOneSenior(index, deletedSenior){
      $http.delete('/seniors/', deletedSenior._id)
          .then(function(){
            seniors.splice(index, 1);
          })
          .catch(function(){
            console.log(err);
          });
    }
  }
}());
