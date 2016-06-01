$(document).ready(function(){

  $.each(data, function(index, value) {
    if(value.gender == 'm'){
      $("#males").append("<li>" +index+"</li>");
    }
    else if (value.gender == 'f'){
      $("#females").append("<li>"+index+"</li>");
    }
  });

    $("#males li").click(function(){
          var name = $(this).text();
          $.each(data, function(index, value) {
              if(index == name)
              {
                    $("#bioData").empty()
                  $("#bioData").append(this.bio);
              }
          });
    });

    $("#females li").click(function(){
          var name = $(this).text();
          $.each(data, function(index, value) {
              if(index == name)
              {
                    $("#bioData").empty()
                  $("#bioData").append(this.bio);
              }
          });
    });


});
