function sok() {
    let filter = document.getElementById("sokefelt").value.toLowerCase();
    let ordrer = document.getElementsByClassName("order");
    let forslag = document.getElementById("forslag");
    let wrapper = document.getElementById("sokefelt-wrapper");

    // reposition dropdown to match wrapper
    let rect = wrapper.getBoundingClientRect();
    forslag.style.top = (rect.bottom + window.scrollY) + 'px';
    forslag.style.left = rect.left + 'px';
    forslag.style.width = rect.width + 'px';

    forslag.innerHTML = '';

    for (let i = 0; i < ordrer.length; i++) {
        let tekst = ordrer[i].innerText.toLowerCase();
        if (tekst.includes(filter) && filter.length > 0) {
            ordrer[i].style.display = "flex";

            let rå = ordrer[i].querySelector('.tekst p').innerText;
            let highlighted = rå.replace(new RegExp(filter, 'gi'), match => `<span>${match}</span>`);

            let item = document.createElement('md-list-item');
            item.setAttribute('type', 'button');
            item.innerHTML = `<div slot="headline">${highlighted}</div>`;
            item.addEventListener('click', () => {
                document.getElementById("sokefelt").value = rå;
                skjulForslag();
                sok();
            });
            forslag.appendChild(item);
        } else if (!tekst.includes(filter)) {
            ordrer[i].style.display = "none";
        }
    }

    if (forslag.children.length > 0 && filter.length > 0) {
        forslag.classList.add('synlig');
        wrapper.classList.remove('ingen-forslag');
    } else {
        skjulForslag();
    }
}

function skjulForslag() {
    document.getElementById("forslag").classList.remove('synlig');
    document.getElementById("sokefelt-wrapper").classList.add('ingen-forslag');
}

document.addEventListener('click', (e) => {
    if (!document.getElementById('sokefelt-wrapper').contains(e.target) &&
        !document.getElementById('forslag').contains(e.target)) {
        skjulForslag();
    }
});

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

