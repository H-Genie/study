var nav_state=0;

function navClick() {
    if (nav_state==0) {
        document.getElementById("gnb").style="display:block;";
        document.getElementById("nav_click").style="transform:rotate(45deg);";
        nav_state=1;
    }
    else {
        document.getElementById("gnb").style="display:none;";
        document.getElementById("nav_click").style="transform:rotate(0deg);";
        nav_state=0;
    }
}

