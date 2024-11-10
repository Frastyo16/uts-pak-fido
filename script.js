// Fungsi untuk mengubah judul header
function changeTitle() {
    const title = document.getElementById("main-title");
    if (title.innerText === "Game MOBA Terpopuler di Indonesia") {
        title.innerText = "Selamat Datang di Halaman Web!";
    } else {
        title.innerText = "Game MOBA Terpopuler di Indonesia";
    }
}

// Fungsi untuk menampilkan atau menyembunyikan konten aside
function toggleAsideContent() {
    const asideContent = document.getElementById("aside-content");
    if (asideContent.style.display === "none") {
        asideContent.style.display = "block";
    } else {
        asideContent.style.display = "none";
    }
}