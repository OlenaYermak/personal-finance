const routes = {
    '/': '/src/pages/overview.html',
    // '/overview': '/src/pages/overview.html',
    '/transactions': '/src/pages/transactions.html',
    '/budgets': '/src/pages/budgets.html',
  '/pots': '/src/pages/pots.html',
  '/recurring': '/src/pages/recurring.html',
};

export async function router() {
  const path = window.location.pathname;
  const route = routes[path] || routes['/'];

  try {
    const response = await fetch(route);
    const html = await response.text();

    document.getElementById('app').innerHTML = html;
  } catch (error) {
    document.getElementById('app').innerHTML = `
      <h2>Page not found</h2>
    `;
  }
}
