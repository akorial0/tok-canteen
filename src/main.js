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

const products = [
  
  { kategori: "Drikker", navn: "Melk", pris: 15 },
  { kategori: "Drikker", navn: "Vann uten kullsyre", pris: 10 },
  { kategori: "Drikker", navn: "Vann med kullsyre", pris: 12 },

  
  { kategori: "Smoothies", navn: "Mango", pris: 25 },
  { kategori: "Smoothies", navn: "Appelsin", pris: 25 },
  { kategori: "Smoothies", navn: "Banan", pris: 25 },
  { kategori: "Smoothies", navn: "Jordbær", pris: 25 },

  
  { kategori: "Knekkebrød", navn: "Brunost", pris: 20 },
  { kategori: "Knekkebrød", navn: "Cheese and Chives", pris: 20 },
  { kategori: "Knekkebrød", navn: "Sour cream and Onion", pris: 20 },

  
  { kategori: "Yoghurt", navn: "Vanilje yoghurt liten", pris: 15 },
  { kategori: "Yoghurt", navn: "Mango yoghurt", pris: 15 },
  { kategori: "Yoghurt", navn: "Banan yoghurt", pris: 15 }
]; 

let orders = [];

function addOrder(user, role, productName, antall) {
 
  let product = products.find(p => p.navn === productName);
  if (!product) {
    console.log("Produktet finnes ikke!");
    return;
  }

  
  let price = product.pris;
  if (role === "ansatt") price = price * 0.8; 
  
  const order = {
    user: user,
    role: role,
    product: productName,
    antall: antall,
    total: price * antall
  };

  orders.push(order);

  showOrders();
}

function showOrders() {
  console.log(" Karoline ser bestillingene ");
  
  orders.forEach(order => {
    console.log(
      `${order.user} (${order.role}) bestilte ${order.antall} x ${order.product} - Total: ${order.total} kr`
    );
  });

}

addOrder("Josh", "elev", "Melk", 1);
addOrder("Karwaan", "ansatt", "Banan", 2);
addOrder("Lala", "elev", "Vanilje yoghurt liten", 1);
addOrder("Wael", "elev", "Vann med kullsyre", 2);
