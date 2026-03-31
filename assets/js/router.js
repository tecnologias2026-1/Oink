const navItems = document.querySelectorAll('.nav-item');
const mainContent = document.getElementById('main-content');

async function loadPage(page) {
    try {
        const response = await fetch(`pages/${page}.html`);
        const html = await response.text();
        mainContent.innerHTML = html;
    } catch (error) {
        mainContent.innerHTML = '<p>Error al cargar la página.</p>';
    }
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        const page = item.dataset.page;
        loadPage(page);
    });
});

loadPage('home');