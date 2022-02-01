$('#form-register').submit(function(e) {

    let errores= '';

    if (($('#pass').val())== '' || ($('#pass2').val())== '' || ($('#user').val()) == '') {
        errores = '<p class="errores">Por favor complete todos los campos</>';
        $('#commit-register').html(errores);
        e.preventDefault();
    } else {
        if (($('#pass').val()) !== ($('#pass2').val())) {
            errores = '<p class="errores">Las contraseñas no coinciden</>';
            $('#commit-register').html(errores);
            e.preventDefault();
        } else {
        const postData = {
            user: $('#user-register').val(),
            pass: $('#pass').val()
        };
    
        $.post('register.php', postData, function (response) {
            
            if (response == 'false') {
                errores = '<p class="errores">El usuario ya existe, intente con otro</>';
                $('#commit-register').html(errores);
            }else{
            $('#form-register').trigger('reset');
            alert('Usuario generado (o degenerado) con éxito');
            $('#commit-register').html('');
            $(location).attr('href','../index.php');}
        });
        e.preventDefault();
    }}
    
});
