$(document).ready(function() {
  $("form#userinput").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var addressline1Input = $("#addressline1").val();
    var addressline2Input = $("#addressline2").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput = $("#zipcode").val();
    var phoneInput = $("#phone").val();
    var emailInput = $("#email").val();
    $(".name").text(nameInput);
    $(".addressline1").text(addressline1Input);
    $(".addressline2").text(addressline2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);
    $(".phone").text(phoneInput);
    $(".email").text(phoneInput);
    $("div.addressbook").append("<div class='well'>" + "<h3>" + nameInput
      + "</h3>" + "<ul class='list'>" + "<li>" + addressline1Input + "</li>"
      + "<li>" + addressline2Input + "</li>" + "<li>" + cityInput + "</li>"
      + "<li>" + stateInput + "</li>" + "<li>" + zipcodeInput + "</li>" + "<li>" + phoneInput + "</li>"
      + "<li>" + emailInput + "</li>" + "</ul>" + "</div>");
  });
});
