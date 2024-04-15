 const mntoggle = document.querySelector('.menu-toggle input');
 const nav = document.querySelector('nav ul');

mntoggle.addEventListener('click',function(){
    nav.classList.toggle('menushow');    
})

// Jika yang dipilih adalah bagian untuk menampilkan hasil scraping
if (contentId === 'scraped-data') {
    // Lakukan request ke file JSON yang berisi hasil scraping
    $.getJSON('republika_indeks.json', function(data){
        var newsList = $('#news-list');
        newsList.empty(); // Kosongkan daftar sebelum menambahkan data baru

        // Tambahkan setiap berita ke daftar
        $.each(data, function(index, article){
            if (article.hasOwnProperty('category')) {
                var listItem = $('<li></li>');
                var datetime = new Date(article.scrape_time);
                listItem.html(
                    '<strong>' + article.title + '</strong><br>' +
                    '<em>Kategori: ' + article.category + '</em><br>' +
                    'Waktu Publish: ' + article.publish_time + '<br>' +
                    'Waktu Scraping: ' + datetime.toLocaleString()
                );
                newsList.append(listItem);
            }
        });
    });
}
