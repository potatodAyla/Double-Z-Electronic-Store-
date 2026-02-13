// Products data
const products = [
  {
    id: 1,
    name: "Wireless Microphone",
    price: 70000,
    image: "images/product1.jpg",
    link: "https://www.facebook.com/share/p/1FP27Ya7tV/",
  },
  {
    id: 2,
    name: "JBL PRX2000 + Wireless Mic",
    price: 155000,
    image: "images/microphone.jpg",
    link: "https://www.facebook.com/share/p/1DD9ausnwa/",
  },
  {
    id: 3,
    name: "D2000 AC/DC Amplifier",
    price: 160000,
    image: "images/amplifier1.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 4,
    name: "D900 Bluetooth Amplifier",
    price: 135000,
    image: "images/amplifier2.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 5,
    name: "AC/DC GD100 Amplifier",
    price: 80000,
    image: "images/amplifier3.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 6,
    name: "AC/DC D100W Amplifier",
    price: 70000,
    image: "images/amplifier4.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 7,
    name: "D10 II AC/DC Bluetooth Amplifier",
    price: 47000,
    image: "images/amplifier5.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 8,
    name: "AC/DC D60 Amplifier",
    price: 63000,
    image: "images/amplifier6.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 9,
    name: "AC/DC D3 Bluetooth Amplifier",
    price: 37000,
    image: "images/d3.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 10,
    name: "Z1006 Bluetooth Audio Amplifier",
    price: 31000,
    image: "images/bluetoothaudio.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 11,
    name: "Z1035 20W*20W Bluetooth Amplifier",
    price: 33000,
    image: "images/5w5w.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 12,
    name: "8000W Portable Spot Welder",
    price: 250000,
    image: "images/amplifier6.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 13,
    name: "1200W DC-DC Booster",
    price: 40000,
    image: "images/1200w.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 14,
    name: "24V 400W AC-DC Power Supply",
    price: 33000,
    image: "images/24v400w.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 15,
    name: "D2000 AC/DC 2.1Ch Amplifier",
    price: 160000,
    image: "images/d2000.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 16,
    name: "10W*10W 3.7V Bluetooth Amplifier",
    price: 14500,
    image: "images/10w10w.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 17,
    name: "ZK-AS21",
    price: 130000,
    image: "images/zkas21.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 18,
    name: "3.7V 5W*5W Bluetooth Amplifier",
    price: 11000,
    image: "images/5w5w.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 19,
    name: "3.7V 10W Bluetooth Amplifier",
    price: 9500,
    image: "images/10w.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 20,
    name: "CA3116 100W Subwoofer Amplifier",
    price: 29000,
    image: "images/ca3116.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 21,
    name: "4.2V 3A Li-ion Charger",
    price: 3000,
    image: "images/li-ion.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 22,
    name: "0-100V 10A Volt & Ampere Meter ",
    price: 5500,
    image: "images/Volt.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 23,
    name: "TPA3116D2 Audio Amplifier IC ",
    price: 5500,
    image: "images/tpa311.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 24,
    name: "Type C Socket",
    price: 1700,
    image: "images/typeC.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 25,
    name: "5V 2.4A Powerbank Circuit",
    price: 1500,
    image: "images/5Vpowerbank.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 26,
    name: "DA 1000W 12V Inverter",
    price: 185000,
    image: "images/inverter2.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 27,
    name: "DA 1600W 12V Inverter",
    price: 225000,
    image: "images/inverter.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 28,
    name: "IP5407 5V2.4A Powerbank Circuit",
    price: 4500,
    image: "images/ip5407.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 29,
    name: "DC Motor Speed Controller",
    price: 3200,
    image: "images/dcmotor.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 30,
    name: "T500 Bluetooth Amplifier",
    price: 65000,
    image: "images/t500.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 31,
    name: "Type C Female Socket",
    price: 1400,
    image: "images/socket.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 32,
    name: "Voltmeter Dual USB output",
    price: 11500,
    image: "images/voltmeter.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 33,
    name: "Supnova Voltmeter",
    price: 20000,
    image: "images/supnova.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 34,
    name: "PT2399 Microphone Circuit",
    price: 32000,
    image: "images/pt2399.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 35,
    name: "2*30W BLuetooth Audio Amplifier",
    price: 18000,
    image: "images/bluetooth.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 36,
    name: "XH-M562 2*50W Amplifier",
    price: 12000,
    image: "images/xhm562.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 37,
    name: "XY-P40W Bluetooth Amplifier",
    price: 18000,
    image: "images/xyp40.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 38,
    name: "8.4V Bluetooth Amplifier Module",
    price: 50000,
    image: "images/84v.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 39,
    name: "ZK-502L",
    price: 26000,
    image: "images/amplifier6.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
  {
    id: 40,
    name: "3W*2 Audio Amplifier",
    price: 1300,
    image: "images/audio.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
];

let currentPage = 1;
const itemsPerPage = 8; //  40 products / 8 per page = 5 pages
let filteredProducts = [...products];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  updateCartCount();

  if (document.getElementById("product-list")) {
    renderProducts();
    document
      .getElementById("searchInput")
      .addEventListener("input", handleSearch);
  }

  if (document.getElementById("cart-items")) {
    renderCart();
  }
});

// render products

function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredProducts.slice(start, end);

  container.innerHTML = pageItems.length
    ? pageItems
        .map(
          (p) => `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm">
            <img src="${p.image}" class="card-img-top p-3" alt="${p.name}">
            <div class="card-body d-flex flex-column">
              <h6 class="fw-semibold">${p.name}</h6>
              <p class="text-success fw-bold">${formatMMK(p.price)}</p>

              <div class="mt-auto d-flex justify-content-between">
                <a href="${p.link}" target="_blank"
                  class="btn custom-btn btn-sm">Details</a>
                <button class="btn custom-btn btn-sm"
                  onclick="addToCart(${p.id})">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      `,
        )
        .join("")
    : `<p class="text-center text-muted">No products found</p>`;

  renderPagination();
}

//pagination

function renderPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  pagination.innerHTML = "";

  // Prev
  pagination.innerHTML += `
    <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">
        Prev
      </a>
    </li>
  `;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a class="page-link" href="#" onclick="changePage(${i})">
          ${i}
        </a>
      </li>
    `;
  }

  // Next
  pagination.innerHTML += `
    <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
      <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
        Next
      </a>
    </li>
  `;
}
function changePage(page) {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderProducts();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// search

function handleSearch(e) {
  const keyword = e.target.value.toLowerCase();

  filteredProducts = keyword
    ? products.filter((p) => p.name.toLowerCase().includes(keyword))
    : [...products];

  currentPage = 1;
  renderProducts();
}

// cart function

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const item = cart.find((c) => c.id === id);
  item ? item.qty++ : cart.push({ ...product, qty: 1 });

  saveCart();
  updateCartCount();
  showToast("Added to cart Successfully");
}
function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

function changeQty(id, amount) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    removeItem(id);
    return;
  }

  saveCart();
  updateCartCount();
  renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  if (!itemsEl || !totalEl) return;

  itemsEl.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="text-muted">Your cart is empty.</p>`;
    totalEl.textContent = "0 MMK";
    return;
  }

  cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    itemsEl.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <strong>${item.name}</strong><br>
          <small>${formatMMK(item.price)} * ${item.qty}</small>
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-secondary"
            onclick="changeQty(${item.id}, -1)">-</button>

          <button class="btn btn-sm btn-outline-secondary"
            onclick="changeQty(${item.id}, 1)">+</button>

          <button class="btn btn-sm btn-danger"
            onclick="removeItem(${item.id})">&times;</button>
        </div>
      </div>
    `;
  });

  totalEl.textContent = formatMMK(total);
}
function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;

  el.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function formatMMK(price) {
  return price.toLocaleString() + " MMK";
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

// ‌add to cart message
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => toast.remove(), 2500);
}

// scroll to top

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (!scrollTopBtn) return;

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
