// Pastikan untuk mengganti 'data.json' dengan path ke file JSON Anda
fetch("D:/Polban 1/sms 2/proyek/naomierica11.github.io/republika_indeks.json")
    .then(response => response.json())
    .then(data => {
        // Ambil elemen tbody tempat data akan dimasukkan
        const newsList = document.getElementById('news-list');

        // Iterasi data dan buat baris tabel untuk setiap item
        data.forEach((item, index) => {
            const row = document.createElement('tr');

            // Buat dan isi kolom untuk setiap properti item
            const nomorCell = document.createElement('td');
            nomorCell.textContent = index + 1;
            row.appendChild(nomorCell);

            const judulCell = document.createElement('td');
            judulCell.textContent = item.judul;
            row.appendChild(judulCell);

            const kategoriCell = document.createElement('td');
            kategoriCell.textContent = item.kategori;
            row.appendChild(kategoriCell);

            const waktuPublishCell = document.createElement('td');
            waktuPublishCell.textContent = item.waktuPublish;
            row.appendChild(waktuPublishCell);

            const waktuScrapingCell = document.createElement('td');
            waktuScrapingCell.textContent = item.waktuScraping;
            row.appendChild(waktuScrapingCell);

            // Tambahkan baris ke tabel
            newsList.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
