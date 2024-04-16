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
                        const listItem = document.createElement('tr');
                        listItem.innerHTML = `
                            <td>${index + 1}</td>
                            <td>${article.judul}</td>
                            <td>${article.kategori}</td>
                            <td>${article.waktu_publish}</td>
                        `;
                        newsList.appendChild(listItem);
                    });
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }

    // Call the function to display scraped data
    showScrapedData();
});
