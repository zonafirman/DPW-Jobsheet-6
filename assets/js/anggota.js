document.addEventListener("DOMContentLoaded", function () {
  const url = "../data/anggota.json";
  const columns = ["no_anggota", "nama", "alamat", "no_hp"];
  
  muatDataGenerik(url, columns);
});
