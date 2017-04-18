// (function() {
//   angular.module('Project100')
//         .filter('name', NameFilter);
//
//   NameFilter.$inject = [];
//
//   function NameFilter(){
//     return function(seniorsArray){
//
//       var out = [];
//
//       angular.forEach(seniorsArray, function(senior){
//         var firstLetter = senior.name[0].toLowerCase();
//         if (firstLetter === 'w'){
//           out.push(senior)
//         }
//       });
//       return out;
//     }
//
//   }
// }());
