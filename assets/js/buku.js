document.addEventListener("DOMContentLoaded", function () {
  const url = "../data/buku.json";
  // Kolom 'kategori' ditambahkan di sini (Latihan Tambahan #3)
  const columns = ["judul", "pengarang", "tahun", "kategori", "stok"];
  
  muatDataGenerik(url, columns);

  // Latihan Tambahan #1: Tombol Muat Ulang
  const btnReload = document.getElementById("btn-reload");
  if (btnReload) {
    btnReload.addEventListener("click", () => muatDataGenerik(url, columns));
  }
});
