(function() {
  angular.module('Project100')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'SeniorService'];

function MainController($scope, SeniorService){
  $scope.seniors = SeniorService.get();
  $scope.createSenior = createSenior;

  $scope.$watch(function(){
     return SeniorService.get();
   }, function(){
     $scope.seniors = SeniorService.get();
   });
  function createSenior(newSenior){
    SeniorService.create(newSenior);
    $scope.newSenior = '';
  }

  // $('.grid').masonry({
  //   // options
  //   itemSelector: '.grid-item',
  //   columnWidth: 200
  // });


}

}());
