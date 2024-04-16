document.addEventListener('DOMContentLoaded', function () {
    const mntoggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');

    if (mntoggle && nav) { // Pastikan elemen menu toggle dan menu navigasi tersedia
        mntoggle.addEventListener('change', function () {
            nav.classList.toggle('menushow');
        });

        document.querySelectorAll('nav a').forEach(function (menuItem) {
            menuItem.addEventListener('click', function (event) {
                event.preventDefault();
                var targetSectionId = this.getAttribute('href').substr(1);
                showContent(targetSectionId);
            });
        });
    }

    function showContent(contentId) {
        document.querySelectorAll('section').forEach(function (section) {
            section.style.display = 'none';
        });

        const contentToShow = document.getElementById(contentId);
        if (contentToShow) {
            contentToShow.style.display = 'block';

            if (contentId === 'scraped-data') {
                fetch('https://raw.githubusercontent.com/naomierica11/naomierica11.github.io/main/republika_indeks.json')
                .then(response => response.json())
                .then(data => {
                    const newsList = document.getElementById('news-list');
                    if (newsList) {
                        newsList.innerHTML = '';

                        data.forEach(function (article, index) {
                            const listItem = document.createElement('tr');
                            const datetimePublish = new Date(article.publish_time);
                            const datetimeScrape = new Date(article.scrape_time);
                            listItem.innerHTML = `
                                <td>${index + 1}</td>
                                <td>${article.title}</td>
                                <td>${article.category}</td>
                                <td>${datetimePublish.toLocaleString()}</td>
                                <td>${datetimeScrape.toLocaleString()}</td>
                            `;
                            newsList.appendChild(listItem);
                        });
                    }
                })
                .catch(error => console.error('Error fetching JSON:', error));

            }
        }
    }
});
