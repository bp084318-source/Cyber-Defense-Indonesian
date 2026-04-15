let selectedGame = "";
let selectedItem = "";

// dari halaman game index
function openGame(game) {
  if (game === "ff") window.location.href = "ff.html";
  if (game === "ml") window.location.href = "ml.html";
  if (game === "pubg") window.location.href = "pubg.html";
}

// klik item topup
function buy(game, item) {
  selectedGame = game;
  selectedItem = item;

  const el = document.getElementById("selectedItem");
  if (el) {
    el.innerText = `Selected: ${game} - ${item}`;
  }
}

// tombol order WA
function order() {
  const userId = document.getElementById("userId").value;
  const qtyEl = document.getElementById("qty"); // optional

  const qty = qtyEl ? qtyEl.value : "1";

  if (!selectedGame || !selectedItem) {
    alert("Pilih item dulu!");
    return;
  }

  if (!userId) {
    alert("Masukkan ID game!");
    return;
  }

  const adminNumber = "6283183419690";

  const message =
`⚡ TOPUP ORDER ⚡

Game: ${selectedGame}
Item: ${selectedItem}
ID Game: ${userId}
Jumlah: ${qty || "1"}

Mohon segera diproses.`;

  const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

// AUTO SCALE & MOBILE OPTIMIZATION
function optimizeMobileUI() {
  if (window.innerWidth < 768) {
    document.body.style.zoom = "1.05"; // sedikit zoom biar enak dilihat

    // tombol jadi lebih besar
    document.querySelectorAll("button").forEach(btn => {
      btn.style.padding = "14px";
      btn.style.fontSize = "16px";
    });

    // input biar gampang diketik
    document.querySelectorAll("input").forEach(inp => {
      inp.style.padding = "12px";
      inp.style.fontSize = "16px";
    });

    // card lebih lega
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.padding = "12px";
    });
  }
}

// jalanin saat load
window.onload = optimizeMobileUI;
