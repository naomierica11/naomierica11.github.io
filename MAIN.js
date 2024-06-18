document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display scraped data
    function showScrapedData() {
        fetch('republika_indeks.json')  // Relative path to the JSON file
            .then(response => response.json())
            .then(data => {
                const newsList = document.getElementById('news-list');
                if (newsList) {
                    newsList.innerHTML = '';

                    const currentDateTime = new Date().toLocaleString();  // Get the current date and time

                    data.forEach(function (article, index) {
                        const listItem = document.createElement('tr');
                        listItem.innerHTML = `
                            <td>${index + 1}</td>
                            <td>${article.judul}</td>
                            <td>${article.kategori}</td>
                            <td>${article.waktu_publish}</td>
                            <td>${currentDateTime}</td>
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
