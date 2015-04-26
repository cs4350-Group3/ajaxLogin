$(document).ready(function() {
    $(document).bind('keypress', function(e) {
        if (e.keyCode == 13) {
            $('#btn').trigger('click');
        }
    });
    $('#btn').click(function() {
        uname = $("input[name='username']").val();
        pword = $("input[name='password']").val();
        var jsonRequestBody = '{"username": "' + uname + '", "password":"' + pword + '"}';
        postJson(jsonRequestBody, 'auth');
    });
    $('.register').click(function() {
        uname = $("#regUName").val();
        email = $("input[name='email']").val();
        fName = $("input[name='fName']").val();
        lName = $("input[name='lName']").val();
        pword = $("#regPWord").val();
        twitName = $("input[name='twitter_username']").val();
        var jsonRequestBody = '{"username": "' + uname + '", "email":"' + email + '", "fName":"' + fName + '", "lName":"' + lName + '", "password":"' + pword + '", "twitter_username":"' + twitName + '"}';
        postJson(jsonRequestBody, 'register');
    });

    function postJson(jsonRequestBody, endPoint) {
        $.post("http://localhost:8080/api/" + endPoint, jsonRequestBody).done(function(data) {
            var obj = jQuery.parseJSON(data);
            $('.result').html("<h4>" + obj.message + ": " + obj.name + "</h4>")
            console.log("Data Loaded: " + data);
        });
    }
    $('#trigger').click(function() {
        modal.classList.add('open');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
    });
    $('#close').click(function() {
        modal.classList.remove('open');
        document.body.removeChild(overlay);
    });
});