/*======================================Range Input=========================================*/
var p = document.getElementById("price_range_1"),
    res = document.getElementById("second_choose__class");

p.addEventListener("input", function() {
    res.innerHTML = p.value;
});

/*========================================================================*/
$(document).ready(function() {
  $(function selectActive(event) {
    $(".catalog_item").click(function(event) {
      event.preventDefault();
      $(".catalog_item.active").removeClass("active");
      $(this).addClass("active");
    });
  });

  $(".buy_button__appeare").hover(
    function buyButtonAppeare() {
      $(this).html("<a class='order_buy d-block' href=''>Заказать</a>");
    },
    function() {
      $(this).text("25 900");
    }
  );



  $(".buy_second").hover(
    function buyButtonAppeare() {
      $(this).html("<a class='order_buy d-block' href=''>Заказать</a>");
    },
    function() {
      $(this).text("3 303 руб.");
    }
  );
});


/*================================SERTIFICATE-==========================================*/


$(document).ready(function () {

    $('.owl_sertificate_carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1100: {
                items: 5
            }
        }
    });
    var owl = $('.owl_sertificate_carousel');
    owl.owlCarousel();

    $('.sliderNext_sertificate').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.sliderPrev_sertificate').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

});

/*=======================================OUR PARTNERS====================================================*/

$(document).ready(function () {
    $('.owl_partners_carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    var owl = $('.owl_partners_carousel');
    owl.owlCarousel();

    $('.sliderNext').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.sliderPrev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })

});