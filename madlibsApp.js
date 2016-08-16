angular.module('MadlibsApp', ['ngAnimate'])
  .controller('MadlibsCtrl', function($scope){
     var ml = this;

     ml.fields = {
      'name' : { ph: 'name', value: ''},
      'dirty_task' : { ph: 'Dirty Task', value: ''},
      'obnoxious_celebrity' : {  ph: 'Obnoxious celebrity', value: ''},
      'job_title' : { ph: 'Job title', value: ''},
      'celebrity' : { ph: 'Celebrity', value: ''},
      'huge_number' : { ph: 'Huge number', value: '', type: "number" },
      'tedious_task' : { ph: 'Tedious task', value: ''},
      'useless_skill' : { ph: 'Useless skill', value: ''},
      'adjective': { ph: 'Adjective', value: ''}
    }

   ml.genders = [
      { "name": "Male"   , subj: "he",  obj: "him", reflx: "himself", poss: "his",  poss2: "his" },
      { "name": "Female" , subj: "she", obj: "her", reflx: "herself", poss: "hers", poss2: "her" },
      { "name": "Neuter" , subj: "it",  obj: "it",  reflx: "itself",  poss: "its",  poss2: "its" },
      { "name": "Neutral", subj: "ey",  obj: "em",  reflx: "emself",  poss: "eirs", poss2: "eir" }
    ]
  
   ml.gender = ml.genders[0];
   ml.view = 'form';

   ml.submit = function() {
     ml.view = 'madlib';
   }


   ml.reset = function() {
     ml.view = 'form';
     ml.fields = { 'name' : { ph: 'name', value: ''},
      'dirty_task' : { ph: 'Dirty Task', value: ''},
      'obnoxious_celebrity' : {  ph: 'Obnoxious celebrity', value: ''},
      'job_title' : { ph: 'Job title', value: ''},
      'celebrity' : { ph: 'Celebrity', value: ''},
      'huge_number' : { ph: 'Huge number', value: '', type: "number" },
      'tedious_task' : { ph: 'Tedious task', value: ''},
      'useless_skill' : { ph: 'Useless skill', value: ''},
      'adjective': { ph: 'Adjective', value: ''}}
   }

  });
