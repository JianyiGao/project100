(function() {
  angular.module('Project100')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'SeniorService'];

function MainController($scope, SeniorService){
  $scope.createSenior = createSenior;

  function createSenior(newSenior){
    SeniorService.create(newSenior);
    $scope.newSenior = '';
  }

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });


}

}());
