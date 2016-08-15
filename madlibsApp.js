angular.module('madlibsApp', [])
  .controller('madlibsCtrl', function($scope){
    $scope.fields = {
      'male_name' : { ph: 'male name', value: ''},
      'dirty_task' : { ph: 'Dirty Task', value: ''},
      'obnoxious_celebrity' : {  ph: 'Obnoxious celebrity', value: ''},
      'job_title' : { ph: 'Job title', value: ''},
      'celebrity' : { ph: 'Celebrity', value: ''},
      'huge_number' : { ph: 'Huge number', value: ''},
      'tedious_task' : { ph: 'Tedious task', value: ''},
      'useless_skill' : { ph: 'Useless skill', value: ''},
      'adjective': { ph: 'Adjective', value: ''}
    }
  });
