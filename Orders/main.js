    function sok() {
    let filter = document.getElementById("sokefelt").value.toLowerCase();
    let ordrer = document.getElementsByClassName("order");


    for (let i = 0; i < ordrer.length; i++) {
        let tekst = ordrer[i].innerText.toLowerCase();
        
        if (tekst.includes(filter)) {
            ordrer[i].style.display = "flex";
        } else {
            ordrer[i].style.display = "none";
        }
    }
} 
 let valgtKnapp = null;

            function fjernOrder(btn) {
                valgtKnapp = btn;
                document.getElementById('fjern-dialog').show();
            }

            function bekreftFjern() {
                if (valgtKnapp) {
                    valgtKnapp.closest('.order').remove();
                    valgtKnapp = null;
                }
                lukkDialog();
            }

            function lukkDialog() {
                document.getElementById('fjern-dialog').close();
            }