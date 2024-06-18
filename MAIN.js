document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display scraped data
    function showScrapedData() {
        fetch("D:/Polban 1/sms 2/proyek/naomierica11.github.io/republika_indeks.json")  // Ganti dengan path relatif jika file berada di direktori yang sama
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
