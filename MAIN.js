document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display scraped data
    function showScrapedData() {
        fetch('https://raw.githubusercontent.com/naomierica11/naomierica11.github.io/main/republika_indeks.json')
            .then(response => response.json())
            .then(data => {
                const newsList = document.getElementById('news-list');
                if (newsList) {
                    newsList.innerHTML = '';

                    // Flag to check if waktu_scraping has been added
                    let waktuScrapingAdded = false;

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

                        // Check if we're at the last article and add waktu_scraping if not added yet
                        if (index === data.length - 1 && !waktuScrapingAdded) {
                            const lastScrapingTime = document.createElement('tr');
                            lastScrapingTime.innerHTML = `
                                <td colspan="4">Waktu Scraping Terakhir</td>
                                <td>${article.waktu_scraping || ''}</td>
                            `;
                            newsList.appendChild(lastScrapingTime);
                            waktuScrapingAdded = true;
                        }
                    });
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
