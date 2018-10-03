//Check if this js file is link with css
console.log("This js file works!");

//Add class to an element and remove class from another
$("#block1").click(function(){
    $(".block.indicator").removeClass("indicator");
    //or $("div.indicator").removeClass("indicator");
    $(this).addClass("indicator");
});

//Add class to an element
$("#block2").click(function(){
    $(".block.indicator").removeClass("indicator");
    $(this).addClass("indicator");
});

//Add class to an element
$("#block3").click(function(){
    $(".block.indicator").removeClass("indicator");
    $(this).addClass("indicator");
});