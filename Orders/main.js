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
