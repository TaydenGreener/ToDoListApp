

function additem(){
    let myname = $(".myinput").val();
    $(".container").append("<div class='row' onclick='strike()'><img onclick='removeitem()' class='trashcan' src='../images/trashcan.svg'><span>"+ myname +"</span></div>");
    $(".myinput").val("");
    let numchildren = $(".container").children().length;
    console.log(numchildren);
}

function clearlist(){
    $(".row").remove();
}

function removeitem(element){
    $(element).parent().remove();
}

$("test").click(function() {
    $(this).css("text-decoration", "linethrough");
})