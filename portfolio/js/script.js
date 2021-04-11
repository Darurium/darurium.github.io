const humburger = document.querySelector(".hamburger"),
      close = document.querySelector(".mobile-menu__close"),
      menu = document.querySelector(".mobile-menu");

humburger.addEventListener("click", () => {
    menu.classList.add("mobile-menu__active");
})

close.addEventListener("click", () => {
    menu.classList.remove("mobile-menu__active");
})

$(document).ready(function(){

    $('.contacts__form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });

})