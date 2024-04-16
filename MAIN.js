document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display scraped data
    function showScrapedData() {
        fetch('https://raw.githubusercontent.com/naomierica11/naomierica11.github.io/main/republika_indeks.json')
            .then(response => response.json())
            .then(data => {
                const newsList = document.getElementById('news-list');
                if (newsList) {
                    newsList.innerHTML = '';

                    // Loop through each article
                    data.forEach(function (article, index) {
                        const listItem = document.createElement('tr');
                        // Populate table rows with article data
                        listItem.innerHTML = `
                            <td>${index + 1}</td>
                            <td>${article.judul}</td>
                            <td>${article.kategori}</td>
                            <td>${article.waktu_publish}</td>
                            <td>${article.waktu_scraping ? article.waktu_scraping : ''}</td>
                        `;
                        newsList.appendChild(listItem);
                    });

                    // Add the last scraping time if available
                    const lastScrapingTime = data[data.length - 1].waktu_scraping;
                    if (lastScrapingTime) {
                        const lastScrapingRow = document.createElement('tr');
                        lastScrapingRow.innerHTML = `
                            <td colspan="5">Waktu Scraping Terakhir</td>
                            <td>${lastScrapingTime}</td>
                        `;
                        newsList.appendChild(lastScrapingRow);
                    }
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }

    // Call the function to display scraped data
    showScrapedData();
});

function showPage(pageId) {
    // Semua section disembunyikan
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Tampilkan section dengan id yang sesuai
    document.getElementById(pageId).style.display = 'block';
}
