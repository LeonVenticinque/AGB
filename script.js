document.addEventListener("DOMContentLoaded", function () {
    console.log("NEUE SCRIPT.JS GELADEN");

    fetch("/AGB/components/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navigation konnte nicht geladen werden.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => {
            console.error("Navbar-Fehler:", error);
        });


    fetch("/AGB/components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer konnte nicht geladen werden.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => {
            console.error("Footer-Fehler:", error);
        });

});
