$.getJSON("https://api.myjson.com/bins/9uamz", function (data) {
console.log(data.length);
var tel = 0;
var ol = document.getElementById("kek");
  for (i = 0; i < data.length; i++) {
    var li=document.createElement('li');
    var a=document.createElement('a');

        ol.appendChild(li);

        li.appendChild(a);
        li.setAttribute("data-search-term", (data[tel].name).toLowerCase());
          a.innerHTML=a.innerHTML + data[tel].name + "<strong> | " +data[tel].percentage+"</strong>";
          a.setAttribute("href", "../beerpages/beers-"+data[tel].name+".html");
        tel += 1;

  }
});


jQuery(document).ready(function($){
$('.live-search-list li').each(function(){
$(this).attr('data-search-term', $(this).text().toLowerCase());
});

$('.live-search-box').on('keyup', function(){

var searchTerm = $(this).val().toLowerCase();

    $('.live-search-list li').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});

});
