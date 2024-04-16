document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display scraped data
    function showScrapedData() {
        fetch('https://raw.githubusercontent.com/naomierica11/naomierica11.github.io/main/republika_indeks.json')
            .then(response => response.json())
            .then(data => {
                const newsList = document.getElementById('news-list');
                if (newsList) {
                    newsList.innerHTML = '';

                    data.forEach(function (article, index) {
                        // Check if the article object has all required properties
                        if (article.judul && article.kategori && article.waktu_publish) {
                            const listItem = document.createElement('tr');
                            listItem.innerHTML = `
                                <td>${index + 1}</td>
                                <td>${article.judul}</td>
                                <td>${article.kategori}</td>
                                <td>${article.waktu_publish}</td>
                                <td>${data[data.length - 1].waktu_scraping}</td>
                            `;
                            newsList.appendChild(listItem);
                        }
                    });

                    // Check if the last object has waktu_scraping property
                    if (data[data.length - 1].waktu_scraping) {
                        const lastScrapingTime = document.createElement('tr');
                        lastScrapingTime.innerHTML = `
                            <td>${data.length}</td>
                            <td colspan="3">Waktu Scraping Terakhir</td>
                            <td>${data[data.length - 1].waktu_scraping}</td>
                        `;
                        newsList.appendChild(lastScrapingTime);
                    }
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }

    // Call the function to display scraped data
    showScrapedData();
});
