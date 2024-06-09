$(document).ready(function () {
    $('header').css('background-color', '#ADD8E6');
    $('body').prepend('<button id="darkModeToggle" class="btn btn-secondary" style="margin: 10px;">Toggle Dark Mode</button>');

    $('#darkModeToggle').click(function () {
        $('body').toggleClass('dark-mode');
    });

    $('head').append('<style>.dark-mode { background-color: #323639; color: grey; }</style>');

    $('nav a').click(function (event) {
        alert('You clicked a link: ' + $(this).text());
    });

    $('body').append('<button id="hideFooter" class="btn btn-danger" style="margin: 10px;">Hide Footer</button>');
    $('#hideFooter').click(function () {
        $('footer').toggle();
    });

    $('#toggleSidebar').click(function () {
        $('#sidebar').toggleClass('open');
    });

    $('#updateContent').click(function () {
        $('#contentSection').html('<p>The content has been updated dynamically!</p>');
    });
    

    $('#email').on('input', function () {
        let email = $(this).val();
        let emailFeedback = $('#emailFeedback');
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            emailFeedback.text('Valid email').removeClass('invalid-feedback').addClass('valid-feedback');
        } else {
            emailFeedback.text('Invalid email format').removeClass('valid-feedback').addClass('invalid-feedback');
        }
    });

    $('#myForm').on('submit', function (event) {
        if (!$('#email').val().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
});
