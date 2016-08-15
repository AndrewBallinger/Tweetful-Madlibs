angular.module('madlibsApp', [])
  .controller('madlibsCtrl', function($scope){

     $scope.fields = {
      'name' : { ph: 'name', value: ''},
      'dirty_task' : { ph: 'Dirty Task', value: ''},
      'obnoxious_celebrity' : {  ph: 'Obnoxious celebrity', value: ''},
      'job_title' : { ph: 'Job title', value: ''},
      'celebrity' : { ph: 'Celebrity', value: ''},
      'huge_number' : { ph: 'Huge number', value: ''},
      'tedious_task' : { ph: 'Tedious task', value: ''},
      'useless_skill' : { ph: 'Useless skill', value: ''},
      'adjective': { ph: 'Adjective', value: ''}
    }

   $scope.gender_words = [
      ["he", "him", "himself", "his", "his"],
      ["she", "her", "herself", "hers", "her"],
      ["it", "it", "itself", "its", "its"],
      ["ey", "em", "emself", "eirs", "eir"]
    ]

    $scope.gender_index = 1;

    [$scope.subjective, 
     $scope.objective, 
     $scope.reflexive, 
     $scope.possessive
     $scope.possessive2 ] = $scope.gender_words[0]

    $scope.genderSwap = function(){
      [$scope.subjective, 
       $scope.objective, 
       $scope.reflexive, 
       $scope.possessive,
       $scope.possessive2] = $scope.gender_words[$scope.gender_index++ % $scope.gender_words.length];
    }
  });
