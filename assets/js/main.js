$(document).ready(function () {
    console.log('hello querry');
    $('.videoCover').click(function () {
        $('#whyVideo').trigger('play');
        $(this).css('display', 'none');

    })
    $('#whyVideo').click(function () {
        $(this).trigger('pause');
        $('.videoCover').css('display', 'flex');
    })
    // faq 
    $('.faqQuestion').click(function () {
        let faq = $(this).attr('data-faq');
        $('#faq'+faq).toggle('faq-show');
    })




    $('#playlist').click(function () {
        if ($('#playlistIcon').attr('class') == 'ms-3 fas fa-plus') {
            $('#playlistIcon').removeClass('fa-plus');
            $('#playlistIcon').addClass('fa-minus');
            $('.videoList').css('display', 'block')

        } else {
            $('#playlistIcon').removeClass('fa-minus');
            $('#playlistIcon').addClass('fa-plus');
            $('.videoList').css('display', 'none')
        }

    })

    $('#toggleEye').click(function () {
        if ($(this).attr('class') == 'fas fa-eye') {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            console.log($('#Password').attr('type'));;
            $('#Password').attr('type', 'text')
        } else {
            $('#Password').attr('type', 'password')
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
        }

    })
    $('#toggleEye2').click(function () {
        if ($(this).attr('class') == 'fas fa-eye') {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#Password2').attr('type', 'text')
        } else {
            $('#Password2').attr('type', 'password')
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
        }

    })
    $('#toggleEye3').click(function () {
        if ($(this).attr('class') == 'fas fa-eye') {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#lpass').attr('type', 'text')
        } else {
            $('#lpass').attr('type', 'password')
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
        }

    })

    // sign up validation 

    $('#Email').on('change', function () {
        isEmail()
    })

    function isEmail() {
        let email = $('#Email').val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let r = emailReg.test(email);
        if (!r) {
            $('#emailAlert').text('Enter a Valid Emial');
        } else {
            $('#emailAlert').text('');
        }
        return r;
    }




    //   password validation 
    $('#Password').on('change', function () {
        checkStrength()
    })

    function checkStrength() {
        let a = false;
        let b = false;
        let c = false;
        let d = false;
        let password= $('#Password').val();
        
        if (password.length >= 6) a = true;
        // If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) b = true;
        // If it has numbers and characters, increase strength value.
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) c = true;
        // If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) d = true;
        if (a & b & c &d) {
            // console.log('password Strong');
            $('#passwordAlert').text('');
            return true;
        }else{
            // console.log('password Week');
            $('#passwordAlert').text('Enter A valid Password');
            return false;
        }
    }

    $('#Password2').on('change', function name() {
        checkPass()
    })

    // confirm password 
    function checkPass() {
        let pass = $('#Password').val();
        let pass2 = $('#Password2').val();
        let match = false;
        if (pass != pass2) {
            $('#cpassAlert').text('Password are not Matched');
        }else{
            $('#cpassAlert').text('')
            match = true;
        }
        return match;
    }

    $("#signup_form").on("submit", function(){
        // return false;
        if (isEmail() & checkStrength() & checkPass()) {
            console.log('all clear');
            return true;
        }else{
            console.log('not all clear');
            return false;
        }
      })





})