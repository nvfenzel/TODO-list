$('#form-login').submit(function(e) {
    let errores = '';
    const postData = {
        user: $('#user-login').val(),
        pass: $('#pass-login').val()
    };

    $.post('login.php', postData, function (response) {
        if (response == 'false') {
            errores = '<p class="errores">Alguno de los datos es incorrecto</p>';
            $('#commit-login').html(errores);
        } else {
        $('#commit-login').html('');
        $('#form-login').trigger('reset');
        $(location).attr('href','../index.php');
    }
    });
    e.preventDefault();
});

