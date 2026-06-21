$(document).ready(function(){
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();


    $('.jarallax').jarallax({
        imgPosition: '50% 50%',
        imgSize: 'cover',
        imgRepeat: 'no-repeat',
    });



    $('.feature_slider').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:8000,
    });





});
function recaptchaCallback() {
  $('#hiddenRecaptcha').valid();
};
jQuery.validator.addMethod("validate_email", function(value, element) {
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
        return true;
    } else {
       if (value=='') {
        return true;
		} else {
			return false;
		}
    }
}, "Email entered is not valid.");
$('#contact-form').validate({
	ignore: ".ignore",
	rules: {
		email:{validate_email: true, required: true, email:true, maxlength:100},
		phone:{number: true, minlength: 9, maxlength:15},
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
	},
    submitHandler: function (form) {
		var recaptchaResponse = grecaptcha.getResponse();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var data = new FormData($("#contact-form")[0]);
		console.log(recaptchaResponse);
		if(recaptchaResponse == "") {
    		successmessage = 'Please select "I am not a robot"';
            $("#sc_message").text(successmessage);
		}else{
		
        $.ajax({
            url: 'mail/sendmail_contact.php',
            type: 'POST',
            data:data,
            async:false,
            dataType:"json",
            cache:false,
            contentType:false,
            processData:false,
            success: function (response) {
                successmessage = 'Message sent successfully';
                $("#scf_message").text(successmessage);
                $('#contact-form')[0].reset();
                setTimeout(function () {
                    $('#scf_message').fadeOut();
                }, 3000);
            }, error: function (data) {
                successmessage = 'Something went wrong, Please try again ...!';
                $("#sc_message").text(successmessage);
            }
        });
		}
    }
});


$(window).on('resize', function(){
    paddingLeft();
    paddingRight();
});
$(window).on('load', function(){
    paddingLeft();
    paddingRight();
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        sortBy : 'original-order',
        filter: '*',

    });
    $grid.isotope('layout');

    lightGallery(document.getElementById('gallery'), {
        animateThumb: true,
        zoomFromOrigin: true,
        allowMediaOverlap: true,
        toggleThumb: true,
        thumbnails: true,
        selector: '.gp_main'
    });
});
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 15){
        sticky.addClass('fixed');

    }
    else{
        sticky.removeClass('fixed');

    }
});


function paddingLeft(){
    var vleft = parseInt( $(".container").css("marginLeft") );
    $('.feature_box_l').css({'padding-left': vleft + 15});
}

function paddingRight(){
    var vright = parseInt( $(".container").css("marginLeft") );
    $('.feature_box_r').css({'padding-right': vright + 15});
}