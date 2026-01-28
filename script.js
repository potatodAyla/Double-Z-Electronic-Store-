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
    id: 8,
    name: "AC/DC D60 Amplifier",
    price: 63000,
    image: "images/amplifier6.jpg",
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
    id: 8,
    name: "AC/DC D60 Amplifier",
    price: 63000,
    image: "images/amplifier6.jpg",
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
    id: 8,
    name: "AC/DC D60 Amplifier",
    price: 63000,
    image: "images/amplifier6.jpg",
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
    id: 8,
    name: "AC/DC D60 Amplifier",
    price: 63000,
    image: "images/amplifier6.jpg",
    link: "https://www.facebook.com/share/p/1CCyNJ5on4/",
  },
];

let currentPage = 1;
const itemsPerPage = 4;
let filteredProducts = [...products];

// Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   DOM READY
========================= */

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  updateCartCount();

  if (document.getElementById("product-list")) {
    renderProducts(filteredProducts);

    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.addEventListener("input", handleSearch);
  }

  if (document.getElementById("cart-items")) {
    renderCart();
  }
});

/* =========================
   PRODUCT RENDERING
========================= */

function renderProducts(list) {
  const container = document.getElementById("product-list");
  if (!container) return;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = list.slice(start, end);

  container.innerHTML = pageItems.length
    ? pageItems
        .map(
          (p) => `
        <div class="col-6 col-md-4 col-lg-3 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="${p.image}" class="card-img-top p-3" alt="${p.name}">
            <div class="card-body d-flex flex-column">
              <h6>${p.name}</h6>
              <p class="text-success fw-bold">${formatMMK(p.price)}</p>
              <div class="mt-auto d-flex justify-content-between">
                <a href="${p.link}" target="_blank" class="btn btn-outline-primary btn-sm">Details</a>
                <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add</button>
              </div>
            </div>
          </div>
        </div>
      `,
        )
        .join("")
    : `<p class="text-center text-muted">No products found</p>`;

  renderPagination(list);
}

/* =========================
   PAGINATION
========================= */

function renderPagination(list) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  const totalPages = Math.ceil(list.length / itemsPerPage);
  pagination.innerHTML = "";

  // Prev
  pagination.innerHTML += `
    <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <a class="page-link" href="javascript:void(0)" onclick="changePage(${currentPage - 1})">Prev</a>
    </li>
  `;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a class="page-link" href="javascript:void(0)" onclick="changePage(${i})">${i}</a>
      </li>
    `;
  }

  // Next
  pagination.innerHTML += `
    <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
      <a class="page-link" href="javascript:void(0)" onclick="changePage(${currentPage + 1})">Next</a>
    </li>
  `;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderProducts(filteredProducts);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================
   SEARCH
========================= */

function handleSearch(e) {
  const keyword = e.target.value.toLowerCase();

  filteredProducts = keyword
    ? products.filter((p) => p.name.toLowerCase().includes(keyword))
    : [...products];

  currentPage = 1;
  renderProducts(filteredProducts);
}

/* =========================
   CART FUNCTIONS
========================= */

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const item = cart.find((c) => c.id === id);
  if (item) item.qty++;
  else cart.push({ id, name: product.name, price: product.price, qty: 1 });

  saveCart();
  updateCartCount();
  showToast("Added to cart");
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
  if (item.qty <= 0) removeItem(id);

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
    total += item.price * item.qty;
    itemsEl.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <strong>${item.name}</strong><br>
          <small>${formatMMK(item.price)} × ${item.qty}</small>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${item.id}, -1)">−</button>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">&times;</button>
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

/* =========================
   UTILITIES
========================= */

function formatMMK(price) {
  return price.toLocaleString() + " MMK";
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

/* =========================
   TOAST
========================= */

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => toast.remove(), 2500);
}
