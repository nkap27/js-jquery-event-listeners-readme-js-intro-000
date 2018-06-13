function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('input').on('keydown', function(keyboardkey){
    if(keyboardkey.key === 'G'){
      alert('You have pressed down on G!');
    }
  });
}

$(document).ready(function(){

// call functions here

});
