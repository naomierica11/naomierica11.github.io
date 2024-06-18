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
                            <td>${article.title}</td>
                            <td>${article.category}</td>
                            <td>${article.published_at}</td>
                            <td>${article.scraped_at}</td>
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

function showPage(pageId) {
    // Semua section disembunyikan
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Tampilkan section dengan id yang sesuai
    document.getElementById(pageId).style.display = 'block';
}
