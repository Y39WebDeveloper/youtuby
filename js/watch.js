$(document).ready(function(){
    $(".reply").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
    });
});
function read(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "MORE";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "LESS";
        moreText.style.display = "inline";
    }
}