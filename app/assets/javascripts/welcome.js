$(function(){
  $('#find-btn').click(function(){
    var from = $('#from').val(),
        to = $('#to').val();
    var el = $("#delay-box h3").text("");

    $.ajax("/delay.json?from=" + from + "&to=" + to)
      .done(function(data) {
        if (data.delay) {
          el.text(data.delay);
        } else {
          el.text("No Data Available");
        }
      });
  });
});
