(function () {
  angular.module('Project100')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'SeniorService'];

function MainController($scope, SeniorService){
  $scope.seniors = SeniorService.get();
  $scope.createSenior = createSenior;
  $scope.deleteSenior = deleteSenior;
  $scope.editSenior = editSenior;
  $scope.saveSenior = saveSenior;

  $scope.$watch(function(){
     return SeniorService.get();
   }, function(){
     $scope.seniors = SeniorService.get();
   });
  function createSenior(newSenior){
    SeniorService.create(newSenior);
    $scope.newSenior = '';
  }
  function deleteSenior(index, senior){
    SeniorService.delete(index, senior);
  }
  function editSenior(senior){
    senior.isBeingEdited = true;
  }
  function saveSenior(index, senior){
    SeniorService.update(index, senior);
    senior.isBeingEdited = false;
  }
  // $('.grid').masonry({
  //   // options
  //   itemSelector: '.grid-item',
  //   columnWidth: 200
  // });



  }

}());
