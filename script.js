document.addEventListener("DOMContentLoaded", function () {

    fetch("./components/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar konnte nicht geladen werden: " + response.status);
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });


    fetch("./components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer konnte nicht geladen werden: " + response.status);
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });

});
