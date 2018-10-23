

function additem(){
    let myname = $(".myinput").val();
    if (myname == '') {
        alert("Please enter a To Do");
    }
    else {
        $(".container").append("<div class='row' id='mydivid'><button onclick='clearitem()'>delete</button><span>"+ myname +"</span><input id='check' type='checkbox'></div>");
    }
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

function myfunction() {
    $("#myinputid").keydown(function(event) {
        if (event.keyCode === 13) {
            $("#addbtn").click();
        }
    })
}

function clearitem() {
    var hidden = document.getElementById("mydivid");
    if (hidden.style.display === "none") {
        hidden.dipslay = "block";
    }
    else {
        hidden.style.display = "none";
    }
}

function itemchecked() {
    var itemischecked = document.getElementById('check').check;
    if (itemischecked === true) {
        itemischecked.classList.add("checked");
    }
}