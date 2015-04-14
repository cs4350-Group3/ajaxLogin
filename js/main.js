$('#btn').click(function(){
    uname = $("input[name='username']").val();
    pword = $("input[name='password']").val();

    var jsonRequestBody = '{"username": "' + uname + '", "password":"' + pword + '"}';

    $.post( "http://localhost:8080/api/auth", jsonRequestBody)
        .done(function( data ) {
            var obj = jQuery.parseJSON(data);
            $('.result').html("<h1>" + obj.message + ": " + uname + "</h1>")
            console.log( "Data Loaded: " + data );
    });
});

var trigger = document.getElementById('trigger');
var close 	= document.getElementById('close');
var modal 	= document.getElementById('modal');

trigger.onclick = function() {
  modal.classList.add('open');
  var overlay = document.createElement('div');
	overlay.classList.add('overlay');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);
}

close.onclick = function() {	   
  modal.classList.remove('open');
  document.body.removeChild(overlay);
}