import './css/style.css'
import { router } from './js/router';

// первинний рендер
router();

// реагує на кнопки "назад / вперед"
window.addEventListener('popstate', router);

// SPA-навігація
document.addEventListener('click', event => {
  const link = event.target.closest('a[data-link]');
  if (!link) return;

  event.preventDefault();

  const href = link.getAttribute('href');
  history.pushState(null, '', href);

  router();
});




