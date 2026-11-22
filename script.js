const books = [
    ['Yabancı','Albert Camus','9780679720201'],['İnsan Ne ile Yaşar?','Lev Tolstoy','9780486286123'],['İçimizdeki Şeytan','Sabahattin Ali','9789754586981'],['İnce Memed','Yaşar Kemal','9789754586684'],['1984','George Orwell','9780451524935'],
    ['Sineklerin Tanrısı','William Golding','9780571056866'],['Cesur Yeni Dünya','Aldous Huxley','9780060850524'],['Hayvan Çiftliği','George Orwell','9780451526342'],['Fahrenheit 451','Ray Bradbury','9781451673319'],['Bülbülü Öldürmek','Harper Lee','9780061120084'],
    ['Büyük Gatsby','F. Scott Fitzgerald','9780743273565'],['Tutunamayanlar','Oğuz Atay','9789754588206'],['Kürk Mantolu Madonna','Sabahattin Ali','9789754587025'],['Saatleri Ayarlama Enstitüsü','Ahmet Hamdi Tanpınar','9789754708792'],['Masumiyet Müzesi','Orhan Pamuk','9789750716835'],
    ['Aşk-ı Memnu','Halit Ziya Uşaklıgil','9789754583362'],['Mai ve Siyah','Halit Ziya Uşaklıgil','9789754582198'],['Kiralık Konak','Yakup Kadri Karaosmanoğlu','9789754582600'],['Yaban','Yakup Kadri Karaosmanoğlu','9789754582334'],['Dokuzuncu Hariciye Koğuşu','Peyami Safa','9789754585939'],
    ['Fatih-Harbiye','Peyami Safa','9789754586806'],['Acımak','Reşat Nuri Güntekin','9789754581955'],['Çalıkuşu','Reşat Nuri Güntekin','9789754582754'],['Dudaktan Kalbe','Reşat Nuri Güntekin','9789754584246'],['Yaprak Dökümü','Reşat Nuri Güntekin','9789754587308'],
    ['Bir Gün','David Nicholls','9780340960745'],['Küçük Prens','Antoine de Saint-Exupéry','9780156012195'],['Simyacı','Paulo Coelho','9780061122415'],['Uçurtma Avcısı','Khaled Hosseini','9781594631931'],['Bin Muhteşem Güneş','Khaled Hosseini','9781594489501'],
    ['Sefiller','Victor Hugo','9780140444308'],['Notre-Dame’ın Kamburu','Victor Hugo','9780140443530'],['Monte Kristo Kontu','Alexandre Dumas','9780140449266'],['Üç Silahşörler','Alexandre Dumas','9780140447996'],['Madame Bovary','Gustave Flaubert','9780140449129'],
    ['Karamazov Kardeşler','Fyodor Dostoyevski','9780140449242'],['Suç ve Ceza','Fyodor Dostoyevski','9780140449136'],['Budala','Fyodor Dostoyevski','9780140447927'],['Yeraltından Notlar','Fyodor Dostoyevski','9780140446500'],['Ölü Canlar','Nikolay Gogol','9780140448078'],
    ['Savaş ve Barış','Lev Tolstoy','9780140447934'],['Anna Karenina','Lev Tolstoy','9780140449174'],['Diriliş','Lev Tolstoy','9780140449471'],['Oblomov','Ivan Gonçarov','9780141442298'],['Beyaz Geceler','Fyodor Dostoyevski','9780486406415'],
    ['Bir İdam Mahkumunun Son Günü','Victor Hugo','9782070408497'],['Germinal','Émile Zola','9780199536894'],['Nana','Émile Zola','9780199536474'],['Crimen ve Ceza','Fyodor Dostoyevski','9780140449136'],['Başkaldıran İnsan','Albert Camus','9780786411726'],
    ['Dönüşüm','Franz Kafka','9780553213690'],['Dava','Franz Kafka','9780805210408'],['Şato','Franz Kafka','9780805211061'],['Amerika','Franz Kafka','9780805210644'],['İnsanlık Durumu','André Malraux','9780394586209'],
    ['Veba','Albert Camus','9780679720218'],['Sisifos Söylencesi','Albert Camus','9780143036536'],['Bilinmeyen Bir Kadının Mektubu','Stefan Zweig','9781590171954'],['Satranç','Stefan Zweig','9780811220349'],
    ['Amok Koşucusu','Stefan Zweig','9780142181038'],['Genç Werther’in Acıları','Johann Wolfgang Goethe','9780140445039'],['Faust','Johann Wolfgang Goethe','9780140449013'],['İnsan İşi','Thomas Mann','9780679417391'],
    ['Gençlik','Leo Tolstoy','9780140447934'],['Dorian Gray’in Portresi','Oscar Wilde','9780141439570'],['Drakula','Bram Stoker','9780141439846'],['Frankenstein','Mary Shelley','9780141439471'],['Jane Eyre','Charlotte Brontë','9780141441146'],['Wuthering Heights','Emily Brontë','9780141439556'],
    ['Uğultulu Tepeler','Emily Brontë','9780141439556'],['Gurur ve Önyargı','Jane Austen','9780141439518'],['Emma','Jane Austen','9780141439587'],['Akıl ve Tutku','Jane Austen','9780141439662'],['Northanger Manastırı','Jane Austen','9780141439792'],
    ['Moby Dick','Herman Melville','9780142437247'],['Tom Sawyer','Mark Twain','9780143039568'],['Huckleberry Finn','Mark Twain','9780142437179'],['Büyük Umutlar','Charles Dickens','9780141439563'],['Oliver Twist','Charles Dickens','9780141439747'],
    ['İki Şehrin Hikayesi','Charles Dickens','9780141439609'],['David Copperfield','Charles Dickens','9780140439441'],['Doğu Ekspresinde Cinayet','Agatha Christie','9780062693662'],['On Küçük Zenci','Agatha Christie','9780062073556'],['Köşe Başı','Agatha Christie','9780062073488'],
    ['Kayıp Zamanın İzinde','Marcel Proust','9780142437964'],['Dalgalar','Virginia Woolf','9780156037419'],['Mrs. Dalloway','Virginia Woolf','9780156628709'],['Odalar','Virginia Woolf','9780156027786'],
    ['Orlando','Virginia Woolf','9780156652896'],['Aylaklar','George Gissing','9781906462091'],['Ulysses','James Joyce','9780141182803'],['Portre','James Joyce','9780142437346'],['Finnegan Uyanıyor','James Joyce','9780141181264'],
    ['Parfüm','Patrick Süskind','9780140120837'],['Mürebbiye','Anton Çehov','9780486275462'],['Vişne Bahçesi','Anton Çehov','9780486266828'],['Martı','Anton Çehov','9780486266811'],['Üç Kızkardeş','Anton Çehov','9780486298683'],
    ['Kral Lear','William Shakespeare','9780141396627'],['Son Oyun','William Shakespeare','9780571167720']
];

const readingRoute = document.querySelector('#reading-route');

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    siteNav.classList.toggle('is-open', open);
  });
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Menüyü aç');
      siteNav.classList.remove('is-open');
    });
  });
}

if (readingRoute) {
  readingRoute.innerHTML = books.slice(0, 10).map(([title, author, isbn], index) => `
    <a class="mini-book-card" href="icerikler.html" aria-label="${index + 1}. ${title} — ${author}">
      <span class="book-number">${String(index + 1).padStart(2, '0')}</span>
      <div class="cover-image-wrap">
        <img src="assets/covers/${isbn}.jpg" alt="${title} kitap kapağı" loading="lazy" onerror="this.onerror=()=>{this.src='assets/covers/book-placeholder.svg'};this.src='https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg'">
      </div>
      <strong>${title}</strong>
      <small>${author}</small>
    </a>
  `).join('');
}
const bookGrid = document.querySelector('#book-grid');

if (bookGrid) {
  bookGrid.innerHTML = books.map(([title, author, isbn], index) => {
    const slug = title
      .toLocaleLowerCase('tr-TR')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    return `
      <article class="book-card" id="${slug}" data-title="${title}" data-author="${author}">
        <div class="card-topline">
          <span class="card-number">${String(index + 1).padStart(2, '0')}</span>
          <span class="genre-pill">KLASİK EDEBİYAT</span>
        </div>
        <div class="cover">
          <img class="catalog-cover-image" src="assets/covers/${isbn}.jpg" alt="${title} kitap kapağı"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg';this.onerror=function(){this.onerror=null;this.src='assets/covers/book-placeholder.svg'}">
        </div>
        <div class="card-body">
          <p class="card-author">${author.toLocaleUpperCase('tr-TR')}</p>
          <h3>${title}</h3>
          <p class="card-description">${title}, ${author} tarafından kaleme alınmış, edebiyat tarihinde önemli bir yer tutan seçkin bir eser.</p>
          <div class="reader-note">
            <span class="note-quote" aria-hidden="true">“</span>
            <p><strong>Okur notu</strong>${title} ile edebî yolculuğuna bu kitabın karakterleri, dili ve dünyası eşlik ediyor.</p>
          </div>
          <div class="card-meta"><span>Tür</span><span>Edebiyat · ${index + 1}. eser</span></div>
          <button class="save-book-button" type="button" data-save-book="${title}">Okuma listeme ekle</button>
        </div>
      </article>
    `;
  }).join('');
}

const storageKey = 'edebiyat-pusulasi-reading-list';
const normalizeText = (value) => value
  .trim()
  .toLocaleLowerCase('tr-TR')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

function readReadingList() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.some((title) => typeof title !== 'string')) {
      throw new Error('Okuma listesi verisi beklenen biçimde değil.');
    }
    return parsed;
  } catch (error) {
    const status = document.querySelector('#list-status, #save-feedback');
    if (status) status.textContent = 'Okuma listesi okunamadı. Tarayıcı depolama verisini kontrol et.';
    console.error('Okuma listesi okunamadı:', error);
    return null;
  }
}

function writeReadingList(titles) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(titles));
    return true;
  } catch (error) {
    const status = document.querySelector('#list-status, #save-feedback');
    if (status) status.textContent = 'Okuma listesi kaydedilemedi. Tarayıcı depolama iznini kontrol et.';
    console.error('Okuma listesi kaydedilemedi:', error);
    return false;
  }
}

const searchForm = document.querySelector('.nav-search');
const searchField = searchForm?.querySelector('input[name="q"]');
const searchParams = new URLSearchParams(window.location.search);
if (searchField && searchParams.has('q')) searchField.value = searchParams.get('q') || '';

if (searchForm && searchField) {
  const clearButton = searchForm.querySelector('.nav-search-clear');
  const updateClearButton = () => {
    if (clearButton) clearButton.hidden = searchField.value.length === 0;
  };
  updateClearButton();
  searchField.addEventListener('input', updateClearButton);
  clearButton?.addEventListener('click', () => {
    searchField.value = '';
    searchField.dispatchEvent(new Event('input', { bubbles: true }));
    searchField.focus();
  });

  const suggestions = document.createElement('ul');
  suggestions.className = 'search-suggestions';
  suggestions.setAttribute('role', 'listbox');
  suggestions.hidden = true;
  searchForm.appendChild(suggestions);

  const showSuggestions = () => {
    const query = normalizeText(searchField.value);
    if (!query) {
      suggestions.hidden = true;
      return;
    }

    const matches = books
      .filter(([title, author]) => normalizeText(`${title} ${author}`).includes(query))
      .slice(0, 7);

    suggestions.innerHTML = matches.map(([title, author]) => `
      <li role="option">
        <button class="search-suggestion-button" type="button" data-search-title="${title}">
          <strong>${title}</strong><span>${author}</span>
        </button>
      </li>
    `).join('');
    suggestions.hidden = matches.length === 0;

    suggestions.querySelectorAll('[data-search-title]').forEach((button) => {
      button.addEventListener('click', () => {
        window.location.href = `icerikler.html?q=${encodeURIComponent(button.dataset.searchTitle)}`;
      });
    });
  };

  searchField.addEventListener('input', showSuggestions);
  searchField.addEventListener('focus', showSuggestions);
  searchField.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') suggestions.hidden = true;
  });
  document.addEventListener('click', (event) => {
    if (!searchForm.contains(event.target)) suggestions.hidden = true;
  });
}

if (bookGrid) {
  const resultCount = document.querySelector('#result-count');
  const cards = Array.from(bookGrid.querySelectorAll('.book-card'));
  let emptyMessage = document.querySelector('.catalog-empty');

  const filterCards = (rawQuery) => {
    const query = normalizeText(rawQuery);
    let visibleCount = 0;
    cards.forEach((card) => {
      const searchableText = normalizeText(`${card.dataset.title} ${card.dataset.author}`);
      const matches = !query || searchableText.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    if (resultCount) resultCount.textContent = `${visibleCount} eser gösteriliyor`;

    if (query && visibleCount === 0) {
      if (!emptyMessage) {
        emptyMessage = document.createElement('p');
        emptyMessage.className = 'catalog-empty';
        bookGrid.before(emptyMessage);
      }
      emptyMessage.textContent = 'Bu kitap veya yazar için sonuç bulunamadı.';
    } else if (emptyMessage) {
      emptyMessage.remove();
      emptyMessage = null;
    }
  };

  filterCards(searchParams.get('q') || '');
  if (searchField) searchField.addEventListener('input', () => filterCards(searchField.value));

  const feedback = document.createElement('p');
  feedback.className = 'visually-hidden';
  feedback.id = 'save-feedback';
  feedback.setAttribute('role', 'status');
  bookGrid.before(feedback);

  bookGrid.querySelectorAll('[data-save-book]').forEach((button) => {
    const titles = readReadingList();
    if (titles?.includes(button.dataset.saveBook)) {
      button.textContent = 'Listemde';
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      const currentTitles = readReadingList();
      if (!currentTitles) return;
      const title = button.dataset.saveBook;
      if (currentTitles.includes(title)) return;
      if (writeReadingList([...currentTitles, title])) {
        button.textContent = 'Listemde';
        button.disabled = true;
        feedback.textContent = `${title} okuma listene eklendi.`;
      }
    });
  });
}

const authorList = document.querySelector('#author-list');
if (authorList) {
  const authorCounts = new Map();
  books.forEach(([title, author]) => {
    authorCounts.set(author, [...(authorCounts.get(author) || []), title]);
  });
  authorList.innerHTML = Array.from(authorCounts, ([author, titles]) => `
    <article class="directory-card">
      <p class="eyebrow">${titles.length} ESER</p>
      <h2>${author}</h2>
      <ul>${titles.map((title) => `<li><a href="icerikler.html?q=${encodeURIComponent(title)}">${title}</a></li>`).join('')}</ul>
      <a class="text-link" href="icerikler.html?q=${encodeURIComponent(author)}">Bu yazarı ara <span aria-hidden="true">→</span></a>
    </article>
  `).join('');
}

const genreList = document.querySelector('#genre-list');
if (genreList) {
  const genres = [
    { name: 'Distopya', description: 'Geleceğe dair karanlık ihtimalleri ve toplum düzenlerini sorgulayan anlatılar.', titles: ['1984', 'Sineklerin Tanrısı', 'Cesur Yeni Dünya', 'Hayvan Çiftliği', 'Fahrenheit 451'] },
    { name: 'Öykü', description: 'Kısa anlatılarda yoğunlaşan insanlık halleri ve unutulmaz karşılaşmalar.', titles: ['İnsan Ne ile Yaşar?', 'Beyaz Geceler', 'Mürebbiye', 'Bilinmeyen Bir Kadının Mektubu', 'Satranç'] },
    { name: 'Tiyatro', description: 'Sahnede çatışan karakterler, seçimler ve güçlü diyaloglar.', titles: ['Kral Lear', 'Vişne Bahçesi', 'Martı', 'Üç Kızkardeş', 'Son Oyun'] },
    { name: 'Felsefi Edebiyat', description: 'Varoluş, özgürlük ve insanın dünyadaki yeri üzerine düşündüren eserler.', titles: ['Yabancı', 'Başkaldıran İnsan', 'Sisifos Söylencesi', 'Dönüşüm', 'Yeraltından Notlar'] },
    { name: 'Roman', description: 'Farklı coğrafya ve dönemlerde karakterlerin izini süren uzun anlatılar.', titles: ['İnce Memed', 'Tutunamayanlar', 'Anna Karenina', 'Jane Eyre', 'Büyük Gatsby'] }
  ];
  genreList.innerHTML = genres.map(({ name, description, titles }) => `
    <article class="directory-card genre-card">
      <p class="eyebrow">OKUMA ROTASI</p><h2>${name}</h2><p>${description}</p>
      <ul>${titles.map((title) => `<li><a href="icerikler.html?q=${encodeURIComponent(title)}">${title}</a></li>`).join('')}</ul>
    </article>
  `).join('');
}

const quoteList = document.querySelector('#quote-list');
if (quoteList) {
  const quotes = [
    ['“Olmak ya da olmamak, işte bütün mesele bu.”', 'William Shakespeare', 'Hamlet', 'William Shakespeare'],
    ['“Güzellik dünyayı kurtaracak.”', 'Fyodor Dostoyevski', 'Budala', 'Budala'],
    ['“Dur, ey an! Ne güzelsin!”', 'Johann Wolfgang Goethe', 'Faust', 'Faust'],
    ['“Mutlu ailelerin hepsi birbirine benzer; mutsuz ailelerin mutsuzluğu ise kendine özgüdür.”', 'Lev Tolstoy', 'Anna Karenina', 'Anna Karenina'],
    ['“İnsanı insan yapan, insanın kendisiyle mücadelesidir.”', 'Albert Camus', 'Yabancı', 'Yabancı'],
    ['“Yalnızlık, insanın kendini bulduğu en sessiz yolculuktur.”', 'Anton Çehov', 'Mürebbiye', 'Mürebbiye'],
    ['“Bütün aydınlıklar, karanlıkta doğar.”', 'George Orwell', '1984', '1984'],
    ['“Gece, herkesin sırrını saklayabildiği tek zamandır.”', 'Fyodor Dostoyevski', 'Suç ve Ceza', 'Suç ve Ceza'],
    ['“İnsan ne ile yaşarsa onunla yaşar; hayatın anlamı, onu paylaşmakta saklıdır.”', 'Lev Tolstoy', 'İnsan Ne ile Yaşar?', 'İnsan Ne ile Yaşar?'],
    ['“İçinde bulunduğun dünya, senin bakışına göre değişir.”', 'Johann Wolfgang Goethe', 'Genç Werther’in Acıları', 'Genç Werther’in Acıları'],
    ['“Bazen bir insanın en çok istediği şey, en uzağında olan şeydir.”', 'Stefan Zweig', 'Bilinmeyen Bir Kadının Mektubu', 'Bilinmeyen Bir Kadının Mektubu'],
    ['“Hayat, ne kadar kısa olursa olsun, yaşanmaya değer.”', 'Franz Kafka', 'Dava', 'Dava'],
    ['“Bir insanın karakteri, en çok yalnız kaldığında anlaşılır.”', 'Charles Dickens', 'Büyük Umutlar', 'Büyük Umutlar'],
    ['“Kalbin sesini duymak için bazen dünyayı susturmak gerekir.”', 'Jane Austen', 'Gurur ve Önyargı', 'Gurur ve Önyargı'],
    ['“Kendine yabancılaşan insan, dünyaya da yabancı kalır.”', 'Albert Camus', 'Başkaldıran İnsan', 'Başkaldıran İnsan'],
    ['“Hiçbir yol, başlamak kadar güçlü değildir.”', 'Victor Hugo', 'Sefiller', 'Sefiller'],
    ['“Bir kadının gözlerinde, insanın aradığı bütün dünya bulunabilir.”', 'Gabriel García Márquez', 'Yüz Yıllık Yalnızlık', 'Yüz Yıllık Yalnızlık'],
    ['“Zaman, yaraların iyileşmesini bekleyen en büyük hekimdir.”', 'Oscar Wilde', 'Dorian Gray’in Portresi', 'Dorian Gray’in Portresi'],
    ['“İnsan, kendisi için bir anlam yaratmadığı sürece kaybolur.”', 'Friedrich Nietzsche', 'İnsan İşi', 'İnsan İşi'],
    ['“Korkularımızı yendikçe, dünyayı yeniden keşfederiz.”', 'Paulo Coelho', 'Simyacı', 'Simyacı'],
    ['“Gerçek özgürlük, seçebilme cesaretindedir.”', 'Jean-Paul Sartre', 'Varoluş ve Hiçlik', 'Yabancı']
  ];
  quoteList.innerHTML = quotes.map(([quote, author, work, searchTitle]) => `
    <article class="quote-card"><span class="note-quote" aria-hidden="true">“</span><blockquote>${quote}</blockquote>
      <p>${author}</p><small>${work}</small><a class="text-link" href="icerikler.html?q=${encodeURIComponent(searchTitle)}">İçerikte bul <span aria-hidden="true">→</span></a>
    </article>
  `).join('');
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const contactStatus = document.querySelector('#contact-status');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = String(formData.get('subject') || 'Edebiyat Pusulası');
    const body = [
      `Ad: ${String(formData.get('name') || '')}`,
      `E-posta: ${String(formData.get('email') || 'Belirtilmedi')}`,
      '',
      String(formData.get('message') || '')
    ].join('\n');

    if (contactStatus) {
      contactStatus.textContent = 'E-posta taslağı açılıyor. Alıcı adresini ekleyip e-posta uygulamandan gönderebilirsin.';
    }
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const savedBooks = document.querySelector('#saved-books');
if (savedBooks) {
  const status = document.querySelector('#list-status');
  const titles = readReadingList();
  if (titles) {
    const saved = titles.map((title) => books.find(([bookTitle]) => bookTitle === title)).filter(Boolean);
    status.textContent = saved.length ? `${saved.length} kitap listende.` : 'Henüz listene kitap eklemedin.';
    savedBooks.innerHTML = saved.map(([title, author, isbn]) => `
      <article class="saved-book">
        <img src="assets/covers/${isbn}.jpg" alt="" loading="lazy">
        <div><h2>${title}</h2><p>${author}</p><a class="text-link" href="icerikler.html?q=${encodeURIComponent(title)}">Eseri görüntüle <span aria-hidden="true">→</span></a></div>
        <button class="remove-book-button" type="button" data-remove-book="${title}">Listeden çıkar</button>
      </article>
    `).join('');
    savedBooks.querySelectorAll('[data-remove-book]').forEach((button) => {
      button.addEventListener('click', () => {
        const remaining = readReadingList()?.filter((title) => title !== button.dataset.removeBook);
        if (remaining && writeReadingList(remaining)) window.location.reload();
      });
    });
  }
}
