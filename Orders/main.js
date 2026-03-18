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

//IT WORKS!!!
//handles the popup upon pressing "fjern". blur handler is written by claude ai
let valgtKnapp = null;

function fjernOrder(btn) {
    valgtKnapp = btn;
    document.body.classList.add('dialog-open');
    document.getElementById('fjern-dialog').show();
}

function bekreftFjern() {
    const progress = document.getElementById('fjern-progress');
    const knappSnapshot = valgtKnapp; // save reference before lukkDialog nulls it

    progress.style.opacity = '1';
    progress.value = 0;

    lukkDialog();

    let start = null;
    const duration = 600;

    function animate(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        progress.value = Math.min(elapsed / duration, 1);

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            setTimeout(() => {
                progress.style.opacity = '0';
                setTimeout(() => {
                    if (knappSnapshot) {
                        knappSnapshot.closest('.order').remove();
                    }
                    progress.value = 0;
                }, 300);
            }, 100);
        }
    }

    requestAnimationFrame(animate);
}

function lukkDialog() {
    document.body.classList.remove('dialog-open');
    document.getElementById('fjern-dialog').close();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fjern-dialog').addEventListener('close', () => {
        document.body.classList.remove('dialog-open');
        valgtKnapp = null;
    });
});

