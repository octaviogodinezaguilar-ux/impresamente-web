(function () {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const whatsappUrl = (number, text) =>
    `https://wa.me/${String(number || '').replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

  function setText(selector, value) {
    const element = $(selector);
    if (element && value !== undefined && value !== null) element.textContent = value;
  }

  function setAttribute(selector, attribute, value) {
    const element = $(selector);
    if (element && value) element.setAttribute(attribute, value);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function inferredCategory(product) {
    if (product.category) return product.category;
    const name = String(product.name || '').toLowerCase();
    if (name.includes('agenda')) return 'Agendas';
    if (name.includes('termo')) return 'Termos';
    if (name.includes('taza')) return 'Tazas';
    if (name.includes('playera')) return 'Playeras';
    return 'Kits / Regalos';
  }

  function renderProducts(products, brand) {
    const grid = $('.featured-grid');
    if (!grid) return;
    grid.replaceChildren();

    products.forEach((product) => {
      const card = createElement('article', 'product-card');
      card.dataset.category = inferredCategory(product);

      const image = createElement('img');
      image.src = product.image || '';
      image.alt = product.alt || product.name || 'Producto personalizado';
      image.loading = 'lazy';
      image.width = 600;
      image.height = 420;

      const body = createElement('div', 'card-body');
      const copy = createElement('div');
      copy.append(
        createElement('h3', '', product.name || 'Producto personalizado'),
        createElement('p', '', product.price || 'Solicita cotización')
      );

      const quote = createElement('a', 'product-quote', 'Cotizar');
      quote.href = whatsappUrl(
        brand.whatsapp || '527445082879',
        `Hola Impresamente, quiero cotizar: ${product.name || 'un producto personalizado'}.`
      );
      quote.target = '_blank';
      quote.rel = 'noopener';
      quote.setAttribute('aria-label', `Cotizar ${product.name || 'producto'} por WhatsApp`);

      body.append(copy, quote);
      card.append(image, body);
      grid.append(card);
    });
  }

  function renderCategories(categories) {
    const grid = $('.category-grid');
    if (!grid) return;
    grid.replaceChildren();

    categories.forEach((category) => {
      const link = createElement('a', 'category-card');
      link.href = '#catalogo';
      link.dataset.category = category.name || '';

      const image = createElement('img');
      image.src = category.image || '';
      image.alt = category.alt || category.name || 'Categoría';
      image.loading = 'lazy';
      image.width = 400;
      image.height = 300;

      link.append(image, createElement('span', '', category.name || 'Categoría'));
      grid.append(link);
    });
  }

  function renderList(containerSelector, items, factory) {
    const container = $(containerSelector);
    if (!container || !Array.isArray(items)) return;
    container.replaceChildren(...items.map(factory));
  }

  function render(data) {
    const brand = data.brand || {};
    const hero = data.hero || {};

    if (data.seo) {
      document.title = data.seo.title || document.title;
      setAttribute('meta[name="description"]', 'content', data.seo.description);
      setAttribute('meta[property="og:title"]', 'content', data.seo.title);
      setAttribute('meta[property="og:description"]', 'content', data.seo.description);
    }

    $$('.brand span, .footer-brand h2').forEach((element) => {
      element.textContent = brand.name || element.textContent;
    });
    $$('.brand small, .footer-brand p').forEach((element) => {
      element.textContent = brand.subtitle || element.textContent;
    });
    setText('[data-brand-location]', brand.location);
    setText('[data-brand-shipping]', brand.shipping);

    setText('.eyebrow', hero.eyebrow);
    const heading = $('.hero h1');
    if (heading && hero.title) {
      heading.replaceChildren();
      const title = hero.title.replace('♡', '').trim();
      const highlight = hero.highlight || '';
      const index = highlight ? title.indexOf(highlight) : -1;
      if (index >= 0) {
        heading.append(
          document.createTextNode(title.slice(0, index)),
          createElement('em', '', highlight),
          document.createTextNode(title.slice(index + highlight.length) + ' '),
          createElement('span', '', '♡')
        );
      } else {
        heading.textContent = hero.title;
      }
    }
    setText('.lead', hero.lead);
    setText('.sublead', hero.sublead);
    setText('.hero-actions .btn-primary', hero.primaryCta);
    setText('.hero-actions .btn-outline', hero.secondaryCta);
    setAttribute('.hero-visual img', 'src', hero.image);
    setAttribute('.hero-visual img', 'alt', hero.imageAlt);
    setAttribute('meta[property="og:image"]', 'content', hero.image);

    renderList('.trust-bar', data.trust, (item) => {
      const article = createElement('article');
      article.append(
        createElement('span', '', item.icon || ''),
        createElement('b', '', item.title || ''),
        createElement('small', '', item.text || '')
      );
      return article;
    });

    if (Array.isArray(data.products)) renderProducts(data.products, brand);
    if (Array.isArray(data.categories)) renderCategories(data.categories);

    renderList('.process-grid', data.process, (item) => {
      const article = createElement('article');
      article.append(
        createElement('span', '', item.number || ''),
        createElement('div', 'icon', item.icon || ''),
        createElement('h3', '', item.title || ''),
        createElement('p', '', item.text || '')
      );
      return article;
    });

    const collection = data.collection || {};
    setText('.collection-copy p', collection.label);
    setText('.collection-copy h2', collection.title);
    setText('.collection-copy span', collection.text);
    setText('.collection-copy .btn', collection.button);
    setAttribute('.collection-card img', 'src', collection.image);
    setAttribute('.collection-card img', 'alt', collection.alt);

    renderList('.testimonial-grid', data.testimonials, (item) => {
      const article = createElement('article');
      const details = createElement('div');
      details.append(
        createElement('b', '', item.name || ''),
        createElement('span', '', item.stars || '★★★★★')
      );
      article.append(
        createElement('div', 'avatar', item.initials || ''),
        details,
        createElement('p', '', item.text || '')
      );
      return article;
    });

    const cta = data.cta || {};
    setText('.cta-strip h2', cta.title);
    setText('.cta-strip p', cta.text);
    setText('.whatsapp-big', cta.button || brand.phone);

    $$('[data-social="instagram"]').forEach((link) => {
      link.href = brand.instagram || '#';
      if (link.closest('.footer')) link.textContent = `Instagram ${brand.instagramLabel || ''}`;
    });
    $$('[data-social="facebook"]').forEach((link) => {
      link.href = brand.facebook || '#';
      if (link.closest('.footer')) link.textContent = `Facebook ${brand.facebookLabel || ''}`;
    });
    $$('[data-social="whatsapp"], .hero-actions .btn-outline, .whatsapp-big, .collection-copy .btn')
      .forEach((link) => {
        link.href = whatsappUrl(brand.whatsapp || '527445082879', 'Hola Impresamente, quiero cotizar un producto personalizado.');
      });
    const footerWhatsapp = $('.footer [data-social="whatsapp"]');
    if (footerWhatsapp) footerWhatsapp.textContent = `WhatsApp ${brand.phone || ''}`;

    setupCategoryFilters();
  }

  function setupCategoryFilters() {
    const cards = $$('.category-card');
    const products = $$('.product-card');
    const section = $('#catalogo');
    if (!cards.length || !products.length || !section) return;

    let status = $('.catalog-status');
    if (!status) {
      status = createElement('div', 'catalog-status');
      status.setAttribute('aria-live', 'polite');
      $('.featured-grid')?.before(status);
    }

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const category = card.dataset.category;
        let visible = 0;
        products.forEach((product) => {
          const matches = product.dataset.category === category;
          product.hidden = !matches;
          if (matches) visible += 1;
        });

        status.replaceChildren();
        const message = visible
          ? `${visible} producto${visible === 1 ? '' : 's'} destacado${visible === 1 ? '' : 's'} en ${category}.`
          : `Aún no hay productos destacados en ${category}, pero podemos crearlo para ti.`;
        status.append(createElement('span', '', message));

        const reset = createElement('button', 'filter-reset', 'Ver todos');
        reset.type = 'button';
        reset.addEventListener('click', () => {
          products.forEach((product) => { product.hidden = false; });
          status.replaceChildren();
        });
        status.append(reset);
      });
    });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="wa.me"]');
    if (!link || typeof window.fbq !== 'function') return;
    window.fbq('track', 'Contact', {
      content_name: link.getAttribute('aria-label') || link.textContent.trim() || 'WhatsApp'
    });
  });

  fetch('data/site.json', { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`No se pudo cargar el contenido (${response.status})`);
      return response.json();
    })
    .then(render)
    .catch((error) => {
      console.warn(error.message);
      setupCategoryFilters();
    });
})();
