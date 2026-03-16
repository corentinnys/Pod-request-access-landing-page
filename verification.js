$('.input-group > button').on('click', function(event) {
    event.preventDefault();
   const value =$(this).siblings('input').val().trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $input = $('#email');
    const $error = $('#emailError');

    $error.text('').addClass('hidden');
    $input.removeClass('input-error');

    if (!value) {
        $error.text('Oops! Please add your email').removeClass('hidden');
        $input.addClass('input-error').focus();
        $('.error').css('display','block');
        return;
    }

    if (!regex.test(value)) {
        $error.text('Oops! Please check your email').removeClass('hidden');
        $input.addClass('input-error').focus();
        $('.error').css('display','block');
        return;
    }

    // success message can be inline or a non-blocking toast — avoid alerts
    $error.text('Successfully subscribed!').removeClass('hidden');
    $('.error').css('display','block');

    $input.removeClass('input-error')


});