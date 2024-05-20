$(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
        $('#menu').addClass("bg-interno");
    } else {

        $("#menu").removeClass("bg-interno");
        $('#menu').addClass("navbar");
    }

})

function Mensaje() {
    alert("Su mensaje se ha enviado con éxito");
}

$("#bttn2").click(Mensaje);