$("#datepicker").datepicker({
  inline: true,
});

$("#dialog-link, #icons li").hover(
  function () {
    $(this).addClass("ui-state-hover");
  },
  function () {
    $(this).removeClass("ui-state-hover");
  }
);
