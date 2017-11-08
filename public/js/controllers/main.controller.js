(function () {
  angular.module('Project100')
    .controller('MainController', MainController)
    .directive('multiselect', MultiSelectDirective);
    
    MainController.$inject = ['$scope', 'StudentService'];
    
    function MainController($scope, StudentService){
      $scope.students = StudentService.get();
      $scope.createStudent = createStudent;
      $scope.deleteStudent = deleteStudent;
      $scope.editStudent = editStudent;
      $scope.saveStudent = saveStudent;
      $scope.filters = {};

    $scope.$watch(function(){
      return StudentService.get();
    }, function(){
      $scope.students = StudentService.get();
    });
 
   function createStudent(newStudent){
     StudentService.create(newStudent);
     $scope.newStudent = '';
   }
 
   function deleteStudent(index, student){
     StudentService.delete(index, student);
   }
 
   function editStudent(student){
     student.isBeingEdited = true;
   }
 
   function saveStudent(index, student){
     StudentService.update(index, student);
     student.isBeingEdited = false;
   }


    $scope.$on('selected-values', function (event, values) {
      var key = Object.keys(values)[0];
      $scope.filters[key] = values[key];
      var skills = [];
      for (var k in $scope.filters) {
        if ($scope.filters.hasOwnProperty(k) && $scope.filters[k]) {
          for (var i = 0; i < $scope.filters[k].length; i++) {
            skills.push($scope.filters[k][i]);
          }
        }
      }
      $scope.students = $scope.students.map(student => {
        student.isSelected = false;
        for (var i = 0; i < student.skills.length; ++i)
          if (skills.includes(student.skills[i].replace(/\s+/g, '-').toLowerCase())) student.isSelected = true;
        return student;
      });
      if ($scope.students.filter(student => student.isSelected).length <= 0)
        $scope.students = $scope.students.map(student => {
          student.isSelected = true;
          return student;
        });
      $scope.$apply();
    });
  }

}());

function MultiSelectDirective() {
  return {
    restrict: 'A',
    link: function (scope, element, attributes) {
      $(element).multiselect({
        nonSelectedText: attributes.type,
        nSelectedText: attributes.type,
        allSelectedText: attributes.type,

        templates: { // Use the Awesome Bootstrap Checkbox structure
          li: '<li><div class="checkbox"><label></label></div></li>'
        }
      });
      $(element).on("change", function () {
        scope.$emit('selected-values', { [attributes.type]: $(element).val() })
      })
    }
  }
}