angular.module('MadlibsApp', [])
  .controller('MadlibsCtrl', function(){
     var ml = this;

     ml.fields = {
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

   ml.gender_words = [
      ["he", "him", "himself", "his", "his"],
      ["she", "her", "herself", "hers", "her"],
      ["it", "it", "itself", "its", "its"],
      ["ey", "em", "emself", "eirs", "eir"]
    ]

    ml.gender_index = 1;

    [ ml.subjective, 
      ml.objective, 
      ml.reflexive, 
      ml.possessive,
      ml.possessive2 ] = ml.gender_words[0]

    ml.genderSwap = function(){
      [ ml.subjective, 
        ml.objective, 
        ml.reflexive, 
        ml.possessive,
        ml.possessive2 ] = ml.gender_words[ml.gender_index++ % ml.gender_words.length];
    }
  });
