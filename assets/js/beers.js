$.getJSON("https://api.myjson.com/bins/9uamz", function (data) {

  var number1 = Math.floor(Math.random() * data.length);
  var number2 = number1;
  while (number2 == number1) {
    var number2 = Math.floor(Math.random() * data.length);
  };
  var number3 = number2;
  while (number3 == number2 || number3 == number1) {
    var number2 = Math.floor(Math.random() * data.length);
  };
  while (number2 == number1) {
    var number2 = Math.floor(Math.random() * data.length);
  };


    document.getElementById("naam1").innerHTML = data[number1].name;
    document.getElementById("percentage1").innerHTML = data[number1].percentage;
    document.getElementById("info1").innerHTML = data[number1].info;

    document.getElementById("naam2").innerHTML = data[number2].name;
    document.getElementById("percentage2").innerHTML = data[number2].percentage;
    document.getElementById("info2").innerHTML = data[number2].info;

    document.getElementById("naam3").innerHTML = data[number3].name;
    document.getElementById("percentage3").innerHTML = data[number3].percentage;
    document.getElementById("info3").innerHTML = data[number3].info;

    $("#foto_one").attr("src", data[number1].pic);
    $("#foto_two").attr("src", data[number2].pic);
    $("#foto_three").attr("src", data[number3].pic);


    $('#one').css("background-color", data[number1].pic)
    $('#one').css("background-size", "100% 100%");
});
