$(function(){
  $('#find-btn').click(function(){
    var from = $('#from').val(),
        to = $('#to').val();
    $.ajax("/delay.json?from=" + from + "&to=" + to)
      .done(function(data) {
        console.log(data);
        $("#delay-box span").text(data.delay);
      });
  });
});
