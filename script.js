document.getElementById('data-diri-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('verification-section').classList.remove('hidden');
});

document.getElementById('verify-button').addEventListener('click', function() {
    const verificationCode = document.getElementById('verification-code').value;
    if (verificationCode === "Ray&SelpiForever") {
        document.getElementById('verification-section').classList.add('hidden');
        document.getElementById('surat-section').classList.remove('hidden');
        generateSuratLamaran();
    } else {
        alert("Kode verifikasi salah! Silakan coba lagi.");
    }
});

function generateSuratLamaran() {
    const nama = document.getElementById('nama').value;
    const ktp = document.getElementById('ktp').value;
    const tempatLahir = document.getElementById('tempat-lahir').value;
    const tanggalLahir = formatTanggal(document.getElementById('tanggal-lahir').value);
    const agama = document.getElementById('agama').value;
    const telepon = document.getElementById('telepon').value;
    const company = document.getElementById('company').value;
    const posisi = document.getElementById('posisi').value;

    const surat = `Kepada Yth.,
HRD ${company}

Dengan hormat,

Saya, ${nama}, dengan ini mengajukan lamaran kerja untuk posisi ${posisi} di ${company}. Meskipun saya belum memiliki pengalaman kerja formal, saya memiliki semangat belajar yang tinggi, motivasi yang kuat, & komitmen untuk memberikan yang terbaik dalam setiap tugas yang diberikan.

Sebagai lulusan yang baru memasuki dunia kerja, saya menyadari bahwa pengalaman praktis adalah hal yang sangat berharga. Oleh karena itu, saya sangat antusias untuk bergabung dengan ${company} & memanfaatkan kesempatan ini untuk mengembangkan diri, belajar dari tim yang profesional, & berkontribusi secara aktif bagi kemajuan perusahaan.

Berikut adalah data diri saya:
Nama          : ${nama}
No. KTP       : ${ktp}
Tempat, Tanggal Lahir : ${tempatLahir}, ${tanggalLahir}
Agama         : ${agama}
No. Telepon   : ${telepon}

Saya adalah pribadi yang cepat belajar, adaptif, & memiliki kemampuan analitis yang baik. Selama masa pendidikan, saya aktif dalam berbagai kegiatan organisasi & proyek kelompok, yang melatih saya untuk bekerja dalam tim, mengelola waktu dengan efektif, & menyelesaikan masalah dengan solusi yang kreatif. Saya juga memiliki kemampuan komunikasi yang baik, baik secara lisan maupun tulisan, yang saya yakini akan menjadi nilai tambah dalam menjalankan tugas di ${company}.

Saya sangat bersemangat untuk mengikuti proses interview & berdiskusi lebih lanjut tentang bagaimana saya dapat berkontribusi bagi ${company}. Saya yakin bahwa dengan semangat kerja keras & keinginan kuat untuk belajar, saya dapat menjadi bagian yang berharga dari tim Anda. Saya berkomitmen untuk terus mengembangkan diri & memberikan kontribusi yang signifikan bagi kesuksesan ${company}.

Saya sangat menghargai kesempatan untuk dapat mengikuti proses seleksi lebih lanjut. Saya berharap dapat bertemu secara langsung untuk membahas bagaimana saya dapat berkontribusi & tumbuh bersama ${company}. Terima kasih atas waktu & pertimbangan Bapak/Ibu.

Hormat saya,
${nama}`;

    // Menampilkan surat lamaran di halaman
    document.getElementById('surat-content').textContent = surat;

    // Tombol salin surat
    document.getElementById('copy-button').addEventListener('click', function() {
        navigator.clipboard.writeText(surat).then(() => {
            alert("Surat lamaran berhasil disalin!");
        });
    });

    // Tombol mulai ulang
    document.getElementById('restart-button').addEventListener('click', function() {
        location.reload(); // Mereload halaman
    });
}

// Fungsi untuk mengubah format tanggal dari YYYY-MM-DD ke DD NamaBulan YYYY
function formatTanggal(tanggal) {
    const [tahun, bulan, hari] = tanggal.split('-');
    const namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return `${hari} ${namaBulan[parseInt(bulan) - 1]} ${tahun}`;
}

// Update tahun dinamis
document.getElementById('tahun').textContent = new Date().getFullYear();
