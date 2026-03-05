(function () {
  const products = window.BBQ_PRODUCTS || [];
  const categoryMap = {
    featured: '[data-products-featured]',
    beef: '[data-products-beef]',
    pork: '[data-products-pork]',
    poultry: '[data-products-poultry]'
  };

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderProduct(product) {
    return `
      <article class="product-card">
        <span class="card-title">${escapeHtml(product.name)}</span>
        <span class="card-price">${product.price} BYN / ${product.unit}</span>
      </article>
    `;
  }

  function renderCatalog() {
    Object.keys(categoryMap).forEach(cat => {
      const selector = categoryMap[cat];
      const container = document.querySelector(selector);
      if (!container) return;
      const list = products.filter(p => p.category === cat);
      container.innerHTML = list.map(renderProduct).join('');
    });
  }

  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => links.classList.toggle('is-open'));
    }
  }

  renderCatalog();
  initNav();
})();
