$(document).ready(function () {

  // Placeholder
  $(".name").textPlaceholder();
  $(".phone").textPlaceholder();
  $(".email").textPlaceholder();
  $(".promo").textPlaceholder();

  // Всплывающее окно
  $('.call').on('click', function(e) {
    e.preventDefault();
    $('.pop_up').bPopup();
});
   $('.conf').on('click', function(e) {
    e.preventDefault();
    $('.pop_conf').bPopup({
      positionStyle: 'fixed'
    });
});

   // Дата
  var month=new Array();
  month[0]="января";
  month[1]="февраля";
  month[2]="марта";
  month[3]="апреля";
  month[4]="мая";
  month[5]="июня";
  month[6]="июля";
  month[7]="августа";
  month[8]="сентября";
  month[9]="октября";
  month[10]="ноября";
  month[11]="декабря";

  var time = new Date();
  var d = time.getDate() + 3;
  var m = month[time.getMonth()];
  $('.date p').html(d+'<br><span> '+m+'</span>');

  // Слайдер
    $('.review_block').flexslider({
      prevText: "",
      nextText: "",
      animation: 'slide',
      controlNav: false,
      pauseOnHover: true,
      slideshowSpeed: 5000
    });

    // Табы
    $('#m').show();

    $('.list_tab li').click(function(){
      if( $(this).hasClass('active')){
        return false;
      }

      var link = $(this).children().attr('href');
      var prevActive = $('.list_tab li.active').children().attr('href');
      $('.list_tab li.active').removeClass('active');
      $(this).addClass('active');

      $(prevActive).fadeOut(100, function(){
        $(link).fadeIn(300);
      });
      return false;
    });

    $('.name').blur(function() {
      if ($(this).val() != "") {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
      var $list_active = $(this).parents('.left').find('.active').length;
      if ( $list_active == 1) {
        $old_price.text('500');
        $new_price.text('299');
      }
      if ( $list_active == 2) {
        $old_price.text('1000');
        $new_price.text('499')
      }
      if ( $list_active == 3) {
        $old_price.text('1500');
        $new_price.text('699')
      }
      if ( $list_active == 4) {
        $old_price.text('2000');
        $new_price.text('799');
      }
    });

    var i = 0;
    var $old_price = $('.old_price');
    var $new_price = $('.new_price b');

    $('.list_content li').click(function(e){

      e.preventDefault();

      i = i + 1;

      var $list_active = $('.form_block .left').find('.active').length;
      var $name = $(this).children().text();
      var $input_name = $('input').attr('name');
      var k = 0;

      /*if ( $list_active == 1) {
        $old_price.text('500');
        $new_price.text('299');
      }
      if ( $list_active == 2) {
        $old_price.text('1000');
        $new_price.text('499')
      }
      if ( $list_active == 3) {
        $old_price.text('1500');
        $new_price.text('699')
      }
      if ( $list_active == 4) {
        $old_price.text('2000');
        $new_price.text('799');
      }*/

      if( $(this).hasClass('active')){
        $(this).removeClass('active');

        if ($('.name-1').val() == $name) {
          $('.name-1').val('');
          $('.name-1').removeClass('active');
          i = 0;
        }
        if ($('.name-2').val() == $name) {
          $('.name-2').val('');
          $('.name-2').removeClass('active');
          i = 1;
        }
        if ($('.name-3').val() == $name) {
          $('.name-3').val('');
          $('.name-3').removeClass('active');
          i = 2;
        }
        if ($('.name-4').val() == $name) {
          $('.name-4').val('');
          $('.name-4').removeClass('active');
          i = 3;
        }

      } else if (i > 4) {
        alert('Можно выбрать максимум 4 имени');
        i = 0;
        return false;
      } else {

          while (i > 0) {
          if ($('.name-'+i).val() == "" || $('.name-'+i).val() == "Имя 1" || $('.name-'+i).val() == "Имя 2" || $('.name-'+i).val() == "Имя 3" || $('.name-'+i).val() == "Имя 4") {
            $(this).addClass('active');
            $('.name-'+i).val($name);
            $('.name-'+i).addClass('active');
            if ( $list_active == 0) {
              $old_price.text('500');
              $new_price.text('299');
            }
            if ( $list_active == 1) {
              $old_price.text('1000');
              $new_price.text('499')
            }
            if ( $list_active == 2) {
              $old_price.text('1500');
              $new_price.text('699')
            }
            if ( $list_active == 3) {
              $old_price.text('2000');
              $new_price.text('799');
            }
            return false;
          } else if (i > 4) {
            i = 0;
            if (k = 1) {
              alert('Можно выбрать максимум 4 имени');
              k = 0;
              return false;
            }
            k = 1;
          }
          i = i + 1;
        }
      }
      if ( $list_active == 1 || $list_active == 2) {
          $old_price.text('500');
          $new_price.text('299');
        }
        if ( $list_active == 3) {
          $old_price.text('1000');
          $new_price.text('499')
        }
        if ( $list_active == 4) {
          $old_price.text('1500');
          $new_price.text('699')
        }
        if ( $list_active == 5) {
          $old_price.text('2000');
          $new_price.text('799');
        }

    });

    //Якоря
    $("#top-menu li a, .choose").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top - 68;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
  });

	// Обработчик формы
     $('.pop_up .name, .phone, .email').blur( function() {

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
         var id = $(this).attr('name');
         var val = $(this).val();

       switch(id)
       {
							//Проверка телефона
							case 'phone':
                 var rv_phone = /^[0-9\s+)(_-]+$/; // используем регулярное выражение

                if(val.length > 5  && val != 'Ваш телефон' && rv_phone.test(val))
                {
                   $(this).removeClass('error');
									 $(this).addClass('not_error');
                }

                else
                {
							     $(this).removeClass('not_error');
									 $(this).addClass('error');
                }
            break;

            // Проверка email
               case 'email':
                   var rv_mail = /.+@.+\..+/i;
                   if(val != '' && rv_mail.test(val))
                   {
                      $(this).removeClass('error');
                       $(this).addClass('not_error');

                   }
                   else
                   {
                $(this).removeClass('not_error');
                 $(this).addClass('error');

                   }
               break;

       } // end switch(...)

     }); // end blur()

    // Теперь отправим наше письмо с помощью AJAX
     $('form.form').submit(function(e){

         e.preventDefault();

         if($(this).find('.not_error').length >= 1)
         {

             $.ajax({
                    url: 'send.php',
                    type: 'post',
                    context: this,
                    data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){
                         $(this).find('form.form :input').attr('disabled','disabled');
                    },

                   success: function(response){
                        $('form.form :input').removeAttr('disabled');
                        $('.name').val('').removeClass('error not_error');
                        $('.phone').val('').removeClass('error not_error');
                        $('.email').val('').removeClass('error not_error');
                        $('.promo').val('').removeClass('error not_error');
                        $('.pop_up').bPopup().close();
                        yaCounter34090590.reachGoal('form');
                $('.pop_success').bPopup({
                  speed: 450,
                  transition: 'slideDown',
                  position: ['auto', 100] //x, y
                });

                   }
            }); // end ajax({...})
        }
        else
        {
          if(!$(this).find('.phone').hasClass('not_error')) {
            $(this).find('.phone').addClass('error');
          }

          if(!$(this).find('.email').hasClass('not_error')) {
            $(this).find('.email').addClass('error');
          }
          return false;
        }

   }); // end submit()
 $('form.pay-now').submit(function(e){

         e.preventDefault();

         if($(this).find('.not_error').length >= 1)
         {
              $.ajax({
                    url: 'send.php',
                    type: 'post',
                    context: this,
                    data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){
                         $(this).find('form :input').attr('disabled','disabled');
                    },

                   success: function(response){
                    yaCounter34090590.reachGoal('form');
                    location.href="oplata.html";
                   }
            }); // end ajax({...})

        }
        else
        {
          if(!$(this).find('.phone').hasClass('not_error')) {
            $(this).find('.phone').addClass('error');
          }

          if(!$(this).find('.email').hasClass('not_error')) {
            $(this).find('.email').addClass('error');
          }
          return false;
        }

   }); // end submit()

});