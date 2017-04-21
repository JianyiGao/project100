// (function () {
//
// angular.module('Project100')
//       .controller('FilterCtrl', FilterCtrl);
//
// FilterCtrl.$inject = ['$scope', 'SeniorService'];
//
//
// // Functions - Definitions
// function FilterCtrl($scope, SeniorService) {
//   $scope.seniors = SeniorService.get();
//
//   $scope.$watch(function(){
//      return SeniorService.get();
//    }, function(){
//      $scope.seniors = SeniorService.get();
//    });
//
//   // Variables - Private
//   var self = this;
//
//   // Variables - Public
//   self.filter = {};
//   self.seniors = $scope.seniors;
//
//   // Functions - Public
//   self.filterByPillar = filterByPillar;
//   self.getPillars = getPillars;
//
//   // Functions - Definitions
//   function filterByPillar(senior) {
//     return self.filter[senior.pillar] || noFilter(self.filter);
//   }
//
//   function getPillars() {
//     return (self.seniors || []).
//       map(function (senior) { return senior.pillar; }).
//       filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
//   }
//
//   function noFilter(filterObj) {
//     return Object.
//       keys(filterObj).
//       every(function (key) { return !filterObj[key]; });
//   }
// }
//
//   var expectPillarFilter = function(expectedFilter, key) {
//     element.all(by.repeater(key + ' in seniors').column(key + '.adminPillar')).then(function(arr) {
//       arr.forEach(function(wd, i) {
//         expect(wd.getText()).toMatch(expectedFilter[i]);
//       });
//     });
//   };
//
//   it('should search across all fields when filtering with a button', function() {
//     var searchButton = element(by.model('searchButton'));
//     searchButton.clear();
//     searchButton.sendKeys('m');
//     expectFilters('adminPillar = true');
//
//     searchButton.clear();
//     searchButton.sendKeys('76');
//     expectFriendNames(['John', 'Julie'], 'friend');
//   });
//
// }());
