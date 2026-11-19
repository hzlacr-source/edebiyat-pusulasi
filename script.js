const searchInput = document.querySelector('#book-search');

if (searchInput) {
  const cards = Array.from(document.querySelectorAll('.book-card'));
  const resultCount = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  const clearButton = document.querySelector('#clear-search');
  const emptyClearButton = document.querySelector('#empty-clear');

  // Başlıktaki Türkçe karakterleri de tutarlı eşleştirmek için aramayı normalize eder.
  const normalize = (value) => value
    .trim()
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  function filterBooks() {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      // Arama yalnızca data-title değerini, yani eser başlığını karşılaştırır.
      const title = normalize(card.dataset.title);
      const matches = query === '' || title.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    resultCount.textContent = `${visibleCount} eser gösteriliyor`;
    emptyState.hidden = visibleCount !== 0;
  }

  // input olayı her yazma, silme veya yapıştırma işleminden sonra filtreyi yeniler.
  searchInput.addEventListener('input', filterBooks);

  function clearSearch() {
    searchInput.value = '';
    filterBooks();
    searchInput.focus();
  }

  clearButton.addEventListener('click', clearSearch);
  emptyClearButton.addEventListener('click', clearSearch);
}
