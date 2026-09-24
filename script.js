const tombolMulai = document.getElementById("btn-mulai");
const deskripsiHero = document.getElementById("deskripsi-hero");
const tombolFokus = document.getElementById("btn-fokus");
const teksFokus = document.getElementById("teks-fokus");

let mulai = false;
let fokus = false;

tombolMulai.addEventListener("click", function() {
    if (mulai) {
        deskripsiHero.textContent = "Atur waktu belajar, pantau kegiatan, dan tingkatkan produktivitas kamu setiap hari.";
        tombolMulai.textContent = "Mulai Belajar";
        alert("Mode belajar selesai.");
        mulai = false;

    } else {
        deskripsiHero.textContent = "Mantap! Sekarang saatnya fokus menyelesaikan satu tugas terlebih dahulu.";
        tombolMulai.textContent = "Sedang Belajar...";
        alert("Selamat belajar! Tetap fokus.");
        mulai = true;
    }
});

tombolFokus.addEventListener("click", function() {
    if (fokus) {
        teksFokus.textContent = "Aktifkan mode fokus untuk mulai belajar.";
        tombolFokus.textContent = "Mode Fokus ON";
        tombolFokus.style.backgroundColor = "#4f6bed";
        fokus = false;

    } else {
        teksFokus.textContent = "Mode fokus aktif. Kurangi gangguan dan fokus pada tugasmu.";
        tombolFokus.textContent = "Mode ON Aktif Dinyalakan";
        tombolFokus.style.backgroundColor = "#36a269";
        alert("Mode fokus berhasil dinyalakan.");
        fokus = true;
    }
});