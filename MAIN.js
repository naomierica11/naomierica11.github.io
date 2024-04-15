 const mntoggle = document.querySelector('.menu-toggle input');
 const nav = document.querySelector('nav ul');

mntoggle.addEventListener('click',function(){
    nav.classList.toggle('menushow');    
})

// Fungsi untuk menampilkan konten terkait saat menu dipilih
document.querySelectorAll('nav a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
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
        // Lakukan request ke file JSON yang berisi hasil scraping
        $.getJSON('republika_indeks.json', function(data){
            var newsList = $('#news-list');
            newsList.empty(); // Kosongkan daftar sebelum menambahkan data baru

            // Tambahkan setiap berita ke daftar
            data.forEach(function(article, index) {
                var listItem = $('<tr></tr>');
                var datetime = new Date(article.scrape_time);
                listItem.html(
                    '<td>' + (index + 1) + '</td>' +
                    '<td>' + article.title + '</td>' +
                    '<td>' + article.category + '</td>' +
                    '<td>' + article.publish_time + '</td>' +
                    '<td>' + datetime.toLocaleString() + '</td>'
                );
                newsList.append(listItem);
            });
        });
    }
}

