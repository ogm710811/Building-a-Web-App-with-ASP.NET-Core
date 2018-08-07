$(document).ready(() => {
    //var theForm = document.getElementById("the-form");
    var theForm = $("#the-form");
    //theForm.hidden = true;
    theForm.hide();

    //var button = document.getElementById("buy-button");
    var button = $("#buy-button");

    //button.addEventListener("click", () => {
    //    alert("Buying Item");
    //})
    button.on("click", () => {
        alert("Buying Item");
    })

    //var productInfo = document.getElementsByClassName("product-props");
    var productInfo = $(".product-props li");

    //var listItems = productInfo[0].children;
    productInfo.on("click", () => {
        console.log("You click on " + $(this).text());
    })

    var $loginToggle = $("#login-toggle");
    var $popupForm = $(".popup-form");
    $loginToggle.on("click", () => {
        //$popupForm.toggle(['slow']);
        $popupForm.toggle(1000);
    })
});



