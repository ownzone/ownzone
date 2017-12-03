$("body").delay(300).queue(function() {
    $(this).addClass("fade").dequeue();
});
$(".close_window").click(function() {
    window.close();
});
$('.popup').on('click', function() {
    var w = 1200,
        h = 600,
        left = Number((screen.width / 2) - (w / 2)),
        tops = Number((screen.height / 2) - (h / 2)),
        popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
    popupWindow.focus();
    return false;
});
$('.popup2').on('click', function() {
    var w = 800,
        h = 600,
        left = Number((screen.width / 2) - (w / 2)),
        tops = Number((screen.height / 2) - (h / 2)),
        popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
    popupWindow.focus();
    return false;
});

$(document).ready(function() {
    $(".tombol_menu, .menu a").click(function() {
        $(".menu").toggleClass("toggle");
    });
});
$(document).ready(function() {
    $(".tombol_contact, .hubungi, .tombol_hubungi").click(function() {
        $(this).find("i").toggleClass("fa-phone");
        $(this).find("i").toggleClass("fa-remove");
        $(".contact").slideToggle("2000");
    });
});


$(document).ready(function() {
    $("#services").owlCarousel({
        items: 4,
        margin: 100,
        loop: true,
        nav: false,
        navText: false,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                stagePadding: 40,
                margin: 100,
                items: 1,
                nav: true,
                navText: [$('.snext'), $('.sprev')],
                loop: true
            },
            768: {
                items: 2,
                margin: 100,
                nav: false,
                loop: true
            },
            1024: {
                margin: 50,
                items: 4,
                nav: false,
                loop: false
            }
        }
    });
});
$(document).ready(function() {
    $("#works").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [$('.next'), $('.prev')],
        autoHeight: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});

$(document).ready(function() {
    $("#team").owlCarousel({
        margin: 20,
        loop: true,
        nav: false,
        navText: false,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            768: {
                items: 3,
                nav: false,
                loop: true
            },
            1024: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    })
});

var text = ["Hubungi", "Kontak"];
var counter = 0;
var elem = document.getElementById("changeHubungi");
setInterval(change, 2000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) { counter = 0; }
}
