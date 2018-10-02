//Function: Check if the JS is linked with html
function checkJS(){
$("button").click(function(){
    console.log("This JS file work!");
})};

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
// //Function: take inputted title
//     $(document).ready(function takeTitle(){
//     $("div#output_title").html("This should replace the empty space");
// });

//Function: Change the default title
// function changeTitle() {
//     $("div#output_title").html("This should replace the empty space");
// };
// changeTitle();

// //Function: Change the default content
// function changeContent() {
//     $("div#output_content").html("This should replace the empty space");
// };
// changeContent();

//Function: Take inputted title from the form
function takeTitle() {    
$("div#output_title").html($("div#form_title").html());
};

//NO!!!! NOT WORKING, WHY!!
//Function: Click button to submit the info
$("button").click(function(){
    $("div#output_title").html($("div#form_title").html());
});

// $("button").click(function(){
// $("#output_title").html(takeTitle());
// });

