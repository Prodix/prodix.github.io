function myFunc() {
    let el = document.getElementsByName("radiogroup");
    let art = document.getElementsByClassName("rb");

    for (var i = 0; i < 3; i++){
        if (el[i].checked == true) {
            art[i].style.borderColor = "#0B7572";
        }
        else {
            art[i].style.borderColor = "transparent";
        }
    }
}

