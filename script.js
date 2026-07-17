// I used https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp for assistance. //
function myFunction() {
    var card = document.getElementById("fun-facts-card");

    if (card.style.display === "block") {
        card.style.display = "none";
    } else {
        card.style.display = "block";
    }
}