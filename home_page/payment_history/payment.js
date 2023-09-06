console.log("Check works!");

function detailForm() {
    console.log("detailForm function works!");
    let main_body = document.getElementById("main_body");
    console.log("main_body : ", main_body);

    let side_body = document.getElementById("side_body");
    console.log("side_body : ", side_body);

    side_body.classList.remove("d-none");

    if (side_body.style.display === "none") {
        side_body.style.display = "flex";
        main_body.style.width = "50%";
    } else {
        side_body.style.display = "none";
        main_body.style.width = "100%";
    }
}