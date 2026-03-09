
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
