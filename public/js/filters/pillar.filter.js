// (function() {
//   angular.module('Project100')
//         .filter('bypillars', PillarFilter);
//
//   PillarFilter.$inject = [];
//
//   function PillarFilter(){
//     return function(seniorArray, pillar, subpillarsArray){
//       var out = [];
//       if(!pillar){
//         return seniorArray;
//       } else {
//         angular.forEach(seniorArray, function(senior){
//           if(senior.pillar === pillar){
//             out.push(senior);
//           }
//         });
//       }
//       if(!subpillarsArray){
//         return out;
//       } else {
//         var subOut = [];
//         angular.forEach(out, function(senior){
//           if(contains(subpillarsArray, senior.subpillar)){
//             subOut.push(senior);
//           }
//         });
//         return subOut;
//       }
//
//       return out;
//     }
//   }
//
//   //are all of the elements of firstArray in secondArray?
//   function contains(firstArray, secondArray){
//     var doesContain = true;
//     for(var i = 0; i < firstArray.length; i += 1){
//       var fElement = firstArray[i];
//       for(var j = 0; j < secondArray.length; j += 1){
//         var sElement = secondArray[i];
//         if(fElement === sElement){
//           break;
//         }
//       }
//       doesContain = false;
//       break;
//     }
//
//     return doesContain;
//   }
// }());
