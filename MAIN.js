 const mntoggle = document.querySelector('.menu-toggle input');
 const nav = document.querySelector('nav ul');

mntoggle.addEventListener('click',function(){
    nav.classList.toggle('menushow');    
})

document.addEventListener('DOMContentLoaded', function () {
    const mntoggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');

    mntoggle.addEventListener('change', function () { // Mengubah 'click' menjadi 'change' untuk toggle switch
        nav.classList.toggle('menushow');
    });

    // Fungsi untuk menampilkan konten terkait saat menu dipilih
    document.querySelectorAll('nav a').forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) { // Menambahkan parameter event
            event.preventDefault(); // Mencegah aksi default dari link
            var targetSectionId = this.getAttribute('href').substr(1);
            showContent(targetSectionId);
        });
    });

    function showContent(contentId) {
        document.querySelectorAll('section').forEach(function (section) {
            section.style.display = 'none';
        });

        document.getElementById(contentId).style.display = 'block';

        // Jika yang dipilih adalah bagian untuk menampilkan hasil scraping
        if (contentId === 'scraped-data') {
            fetch('republika_indeks.json') // Menggunakan fetch untuk mendapatkan file JSON
                .then(response => response.json()) // Mengubah respons menjadi JSON
                .then(data => {
                    var newsList = document.getElementById('news-list'); // Menggunakan document.getElementById karena tidak ada jQuery
                    newsList.innerHTML = ''; // Mengosongkan daftar sebelum menambahkan data baru

                    // Tambahkan setiap berita ke daftar
                    data.forEach(function (article, index) {
                        var listItem = document.createElement('tr'); // Membuat elemen <tr>
                        var datetime = new Date(article.scrape_time);
                        listItem.innerHTML = `
                            <td>${index + 1}</td>
                            <td>${article.title}</td>
                            <td>${article.category}</td>
                            <td>${article.publish_time}</td>
                            <td>${datetime.toLocaleString()}</td>
                        `;
                        newsList.appendChild(listItem); // Menambahkan elemen <tr> ke dalam <tbody>
                    });
                })
                .catch(error => console.error('Error fetching JSON:', error)); // Menangani kesalahan saat mengambil JSON
        }
    }
});
