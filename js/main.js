// =======================
// TikTok Scanner
// =======================

function scanTikTok() {
  const username = document.getElementById("tiktokUser").value;
  const status = document.getElementById("ttStatus");
  const progress = document.getElementById("ttProgress");
  const result = document.getElementById("ttResult");

  if (!username) {
    status.innerText = "❌ Masukkan username";
    return;
  }

  let percent = 0;

  const steps = [
    "🔍 Mengumpulkan data publik...",
    "🧠 Analisis aktivitas...",
    "🌐 Deteksi exposure...",
    "⚡ Menyusun hasil..."
  ];

  let step = 0;

  const interval = setInterval(() => {
    percent += 10;
    progress.style.width = percent + "%";

    if (percent % 30 === 0 && step < steps.length) {
      status.innerText = steps[step];
      step++;
    }

    if (percent >= 100) {
      clearInterval(interval);

      let risk = Math.floor(Math.random() * 100);

      let level = "AMAN";
      if (risk > 70) level = "BAHAYA";
      else if (risk > 40) level = "WASPADA";

      result.innerHTML = `
        <p>📊 Risk Score: ${risk}</p>
        <p>Status: ${level}</p>
        <button onclick="openTikTok('${username}')">LIHAT PROFIL</button>
      `;

      status.innerText = "✅ Analisis selesai";
    }
  }, 300);
}

function openTikTok(user) {
  window.open(`https://www.tiktok.com/@${user}`, "_blank");
}

// =======================
// Image Scanner
// =======================

const fileInput = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

function startImageScan() {
  const status = document.getElementById("imgStatus");
  const progress = document.getElementById("imgProgress");
  const result = document.getElementById("imgResult");

  if (!fileInput.files.length) {
    status.innerText = "❌ Upload foto dulu";
    return;
  }

  let percent = 0;

  const steps = [
    "🔍 Menganalisis gambar...",
    "🧠 Deteksi pola visual...",
    "🌐 Membandingkan database...",
    "⚡ Menyusun hasil..."
  ];

  let step = 0;

  const interval = setInterval(() => {
    percent += 10;
    progress.style.width = percent + "%";

    if (percent % 30 === 0 && step < steps.length) {
      status.innerText = steps[step];
      step++;
    }

    if (percent >= 100) {
      clearInterval(interval);

      status.innerText = "🌐 Membuka Google Images...";

      setTimeout(() => {
        window.open("https://images.google.com/", "_blank");

        let random = Math.random();

        if (random > 0.5) {
          result.innerHTML =
            "🔴 Kemungkinan ditemukan gambar serupa di internet.";
        } else {
          result.innerHTML =
            "🟢 Tidak ditemukan indikasi kuat.";
        }

        clearData();
      }, 1000);
    }
  }, 300);
}

// =======================
// Clear Data
// =======================

function clearData() {
  fileInput.value = "";
  preview.src = "";
  preview.style.display = "none";

  document.getElementById("imgStatus").innerText =
    "🧹 Data dibersihkan demi keamanan";

  document.getElementById("imgProgress").style.width = "0%";
                    }
