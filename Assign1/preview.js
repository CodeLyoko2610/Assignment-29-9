//Function: Check if the JS is linked with html
function checkJS(){
$("button").click(function(){
    console.log("This JS file work!");
})};

checkJS();

//--------------------------JS way----------------------------
// //Function: Takes inputted Title from user
// function takeTitle() {
//     document.getElementById("output_title").innerHTML = 
//     document.getElementById("form_title").value;
// };

// //Function: Takes inputted Content from user
// function takeContent() {
//     document.getElementById("output_content").innerHTML = 
//     document.getElementById("form_content").value;
// };

// //Function: Click submit button and output values from user input
// $("button").click(function(){
//     takeTitle();
//     takeContent();
// });

//-----------------------------JQuery way----------------------
//Function: Change the default title
function changeTitle() {
    $("div#output_title").html($("input#form_title").val());
};  

//Function: Change the default content
function changeContent() {
    $("div#output_content").html($("textarea#form_content").val()); //The location must be absolutely right ! textarea used, not a div -> so indicate the textarea, not a div !
};

//Function: Only change when the button is hitted
$("button").click(function(){
    changeTitle();
    changeContent();
});
