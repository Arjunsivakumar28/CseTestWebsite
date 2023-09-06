console.log("Works!");

// Password show and hide function
function password_show_hide(ele) {
    console.log("click works")
    console.log("element check : ", ele.children);
    let password = ele.parentElement.children[0];
    let show_eye = ele.children[0];
    let hide_eye = ele.children[1];
    hide_eye.classList.remove("d-none");
    if (password.type === "password") {
        password.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        password.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}
