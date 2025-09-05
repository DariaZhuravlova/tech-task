$(document).ready(function () {
  $(".tabs-nav li").on("click", function (e) {
    e.stopPropagation();

    const tabId = $(this).data("tab");
    const $dropdown = $("#" + tabId);

    // снять active со всех
    $(".tabs-nav li").removeClass("active");
    $(".tab-item").slideUp(200);

    // добавить active на текущий
    $(this).addClass("active");
    $dropdown.stop(true, true).slideDown(200);
  });

  // клик вне — закрыть
  $(document).on("click", function () {
    $(".tabs-nav li").removeClass("active");
    $(".tab-item").slideUp(200);
  });

  // клик внутри dropdown — не закрывать
  $(".tab-item").on("click", function (e) {
    e.stopPropagation();
  });
});


// swiper

new Swiper(".swiper", {
    loop: true,
    autoplay: {delay: 3000},
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
