/* ============================
   SITE PARA NICOLLY 💖
   JavaScript Principal
   ============================ */

/* --- SPLASH SCREEN --- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    checkDay365();
  }, 3000);
});

/* --- PARTÍCULAS DE FUNDO --- */
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#007f7f', '#009999', '#00bfbf', '#f7a8c4', '#e75480'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 80 + 20;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 30 + 20}s;
      animation-delay: ${Math.random() * 20}s;
    `;
    container.appendChild(p);
  }
}
createParticles();

/* --- NAVEGAÇÃO POR ABAS --- */
const sections = ['home', 'carta', 'galeria', 'historia', 'contador', 'quiz', 'video', 'mensagens', 'sonhos', 'promessas'];

function showSection(id) {
  // Esconde todas
  sections.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.remove('active');
  });

  // Mostra a selecionada
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Atualiza botões da nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });

  // Fecha menu mobile
  closeMobileMenu();
}

// Botões nav desktop
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

// Botões nav mobile
document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

// Botões feature cards e CTAs
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => showSection(el.dataset.goto));
});

/* --- MENU MOBILE (HAMBURGER) --- */
function openMobileMenu() {
  document.getElementById('mobile-nav').classList.add('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-nav').classList.remove('open');
}

document.getElementById('hamburger-btn').addEventListener('click', () => {
  const isOpen = document.getElementById('mobile-nav').classList.contains('open');
  isOpen ? closeMobileMenu() : openMobileMenu();
});

/* --- CONTADOR DE DIAS --- */
const START_DATE = new Date('2025-05-01T00:00:00');

function updateCounter() {
  const now = new Date();
  const diff = now - START_DATE;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Contador principal
  setIfExists('cnt-days', String(days).padStart(3, '0'));
  setIfExists('cnt-hours', String(hours).padStart(2, '0'));
  setIfExists('cnt-minutes', String(minutes).padStart(2, '0'));
  setIfExists('cnt-seconds', String(seconds).padStart(2, '0'));

  // Mini contador hero
  setIfExists('hero-days', days);

  return days;
}

function setIfExists(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

setInterval(updateCounter, 1000);
updateCounter();

/* --- DIA 365: CHUVA DE CORAÇÕES --- */
function checkDay365() {
  const days = updateCounter();

  if (days === 365) {
    startHeartRain();
    document.querySelector('.day-365-banner').style.display = 'block';
  }
}

let heartRainInterval = null;

function startHeartRain() {
  const container = document.getElementById('heart-rain');
  container.style.display = 'block';

  const hearts = ['💖', '💕', '💗', '💓', '💞', '❤️', '🌹', '✨', '💝', '💘'];

  function spawnHeart() {
    const h = document.createElement('div');
    h.classList.add('falling-heart');
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.cssText = `
      left: ${Math.random() * 100}%;
      font-size: ${Math.random() * 1.5 + 1}rem;
      animation-duration: ${Math.random() * 4 + 3}s;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    container.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }

  // Chuva intensa — spawn frequente o dia todo
  heartRainInterval = setInterval(spawnHeart, 180);

  // Para após 24 horas
  const stopTime = 24 * 60 * 60 * 1000;
  setTimeout(() => {
    clearInterval(heartRainInterval);
    container.style.display = 'none';
  }, stopTime);
}

document.querySelector('.close-banner')?.addEventListener('click', () => {
  document.querySelector('.day-365-banner').style.display = 'none';
});

/* --- GALERIA / LIGHTBOX --- */
const photos = [
  { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (1).jpeg', caption: 'Sua Linda! 💚' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (2).jpeg', caption: 'Seu sorriso me ilumina ✨' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29.jpeg', caption: 'Cada instante com você vira lembrança eterna no meu coração 💖' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (4).jpeg', caption: 'Te olhar é como encontrar meu lar no meio do mundo 🏠' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21.jpeg', caption: 'Seu sorriso tem o poder de apagar qualquer tempestade dentro de mim 🌤️' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 11.01.01.jpeg', caption: 'Foi no seu abraço que eu entendi o que é paz de verdade 🕊️' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29 (1).jpeg', caption: 'Não importa onde estamos, se estou com você, estou completo 💫' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29 (2).jpeg', caption: 'Você é o meu sonho que eu tenho a sorte de viver acordado 🌙' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29 (3).jpeg', caption: 'Cada detalhe seu me faz te amar ainda mais 🌹' },
  { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (3).jpeg', caption: 'Se eu pudesse, congelava esse momento pra viver nele pra sempre ⏳' },
];

let currentLightboxIdx = 0;

function openLightbox(idx) {
  currentLightboxIdx = idx;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = photos[idx].src;
  cap.textContent = photos[idx].caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNext() {
  currentLightboxIdx = (currentLightboxIdx + 1) % photos.length;
  openLightbox(currentLightboxIdx);
}

function lightboxPrev() {
  currentLightboxIdx = (currentLightboxIdx - 1 + photos.length) % photos.length;
  openLightbox(currentLightboxIdx);
}

document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-next')?.addEventListener('click', lightboxNext);
document.getElementById('lightbox-prev')?.addEventListener('click', lightboxPrev);
document.getElementById('lightbox')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});

// Keyboard lightbox
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNext();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'Escape') closeLightbox();
});

// Montar galeria
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  photos.forEach((photo, idx) => {
    const card = document.createElement('div');
    card.classList.add('photo-card');
    card.innerHTML = `<img src="${photo.src}" alt="Foto ${idx+1}" loading="lazy"><div class="photo-caption">${photo.caption}</div>`;
    card.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(card);
  });
}

buildGallery();

/* --- TABS GALERIA --- */
document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Todos os layouts levam pra mesma galeria aqui (future expansion)
  });
});

/* --- TIMELINE SCROLL ANIMATION --- */
function animateOnScroll() {
  const items = document.querySelectorAll('.timeline-item, .promise-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  items.forEach(item => observer.observe(item));
}
animateOnScroll();

/* --- QUIZ --- */
const quizData = [
  {
    q: 'Quem disse "eu te amo" primeiro?',
    options: ['Isaque', 'Nicolly', 'Os dois ao mesmo tempo', 'Um recado de voz'],
    correct: 1,
    feedback: ['Errado! Foi a Nicolly que disse primeiro, minha linda 💚', 'Exatamente! Você foi corajosa e disse primeiro, amor 😄', 'Quase, mas foi você!', 'Não foi por voz, foi pessoal!']
  },
  {
    q: 'Qual é a cor dos olhos da Nicolly que me deixa louco?',
    options: ['Azul', 'Verde', 'Castanho', 'Preto'],
    correct: 2,
    feedback: ['Não, são castanhos lindos!', 'Exato! Seus olhos castanhos me encantam, minha fofinha 💖', 'Não, são castanhos!', 'Não, são castanhos!']
  },
  {
    q: 'O que a Nicolly mais ama fazer comigo?',
    options: ['Cozinhar', 'Assistir filmes', 'Conversar até tarde', 'Todas as opções'],
    correct: 3,
    feedback: ['Você ama tudo isso, mas principalmente conversar!', 'Você ama tudo, mas todas são perfeitas!', 'Exato! Todas as opções, porque você ama tudo que fazemos juntos, amor ✨', 'Não, você ama tudo!']
  },
  {
    q: 'Qual é o sorriso da Nicolly que me derrete?',
    options: ['O tímido', 'O largo', 'O bobo', 'Todos'],
    correct: 3,
    feedback: ['Todos os sorrisos são lindos!', 'Todos me derretem!', 'Exato! Todos os seus sorrisos são mágicos, minha princesinha 😍', 'Não, todos!']
  },
  {
    q: 'O que a Nicolly representa pra mim?',
    options: ['Minha namorada', 'Minha melhor amiga', 'Meu amor eterno', 'Tudo isso'],
    correct: 3,
    feedback: ['Você é tudo isso e mais!', 'Você é tudo!', 'Exato! Você é tudo pra mim, minha linda 💕', 'Não, você é tudo!']
  },
  {
    q: 'Qual comida a Nicolly mais ama?',
    options: ['Pizza', 'Chocolate', 'Sorvete', 'Tudo doce'],
    correct: 3,
    feedback: ['Você ama tudo doce, amor!', 'Exato! Você ama tudo doce, minha fofinha 🍫', 'Não, tudo doce!', 'Não, tudo doce!']
  },
  {
    q: 'O que a Nicolly faz quando está feliz?',
    options: ['Sorri', 'Canta', 'Dança', 'Todas as opções'],
    correct: 3,
    feedback: ['Você faz tudo quando está feliz!', 'Exato! Você sorri, canta e dança de alegria, minha linda 🎶', 'Não, todas!', 'Não, todas!']
  },
  {
    q: 'Qual é o maior sonho da Nicolly?',
    options: ['Ser feliz comigo', 'Viajar o mundo', 'Ter uma família', 'Todos'],
    correct: 3,
    feedback: ['Você sonha com tudo isso!', 'Exato! Você sonha com tudo, minha princesinha 🌟', 'Não, todos!', 'Não, todos!']
  },
  {
    q: 'O que a Nicolly mais valoriza em um relacionamento?',
    options: ['Respeito', 'Amor', 'Confiança', 'Tudo'],
    correct: 3,
    feedback: ['Você valoriza tudo!', 'Exato! Você valoriza tudo, amor 💑', 'Não, tudo!', 'Não, tudo!']
  },
  {
    q: 'Qual é a qualidade da Nicolly que mais admiro?',
    options: ['Sua doçura', 'Sua força', 'Sua inteligência', 'Todas'],
    correct: 3,
    feedback: ['Você tem todas essas qualidades!', 'Exato! Você é doce, forte e inteligente, minha linda 👑', 'Não, todas!', 'Não, todas!']
  },
  {
    q: 'O que a Nicolly faz quando estou triste?',
    options: ['Me abraça', 'Me consola', 'Me faz rir', 'Todas'],
    correct: 3,
    feedback: ['Você faz tudo pra me animar!', 'Exato! Você me abraça, consola e faz rir, amor 🥰', 'Não, todas!', 'Não, todas!']
  },
  {
    q: 'Qual lugar a Nicolly mais ama ir comigo?',
    options: ['Praia', 'Cinema', 'Passear', 'Qualquer lugar'],
    correct: 3,
    feedback: ['Você ama qualquer lugar comigo!', 'Exato! Qualquer lugar é especial com você, minha fofinha 🌍', 'Não, qualquer lugar!', 'Não, qualquer lugar!']
  },
  {
    q: 'O que a Nicolly representa no meu coração?',
    options: ['Uma chama', 'Uma estrela', 'Meu mundo', 'Tudo'],
    correct: 3,
    feedback: ['Você é tudo no meu coração!', 'Exato! Você é tudo, minha linda ❤️', 'Não, tudo!', 'Não, tudo!']
  },
  {
    q: 'Qual música lembra a Nicolly?',
    options: ['Romântica', 'Alegre', 'Triste', 'Todas'],
    correct: 3,
    feedback: ['Todas as músicas me lembram de você!', 'Exato! Todas as músicas falam de você, amor 🎵', 'Não, todas!', 'Não, todas!']
  },
  {
    q: 'O que a Nicolly faz de melhor?',
    options: ['Amar', 'Cuidar', 'Ser feliz', 'Tudo'],
    correct: 3,
    feedback: ['Você faz tudo de melhor!', 'Exato! Você faz tudo de melhor, minha princesinha ✨', 'Não, tudo!', 'Não, tudo!']
  },
  {
    q: 'Qual é o maior presente que a Nicolly me deu?',
    options: ['Seu amor', 'Sua presença', 'Sua alegria', 'Tudo'],
    correct: 3,
    feedback: ['Você me deu tudo!', 'Exato! Você me deu tudo, amor 🎁', 'Não, tudo!', 'Não, tudo!']
  },
  {
    q: 'O que a Nicolly mais ama em mim?',
    options: ['Meu jeito', 'Minha voz', 'Meu amor', 'Tudo'],
    correct: 3,
    feedback: ['Você ama tudo em mim!', 'Exato! Você ama tudo, minha linda 💖', 'Não, tudo!', 'Não, tudo!']
  },
  {
    q: 'Qual é a cor favorita da Nicolly?',
    options: ['Rosa', 'Azul', 'Verde', 'Vermelho'],
    correct: 0,
    feedback: ['Exato! Rosa é sua cor favorita, amor 🌸', 'Não, é rosa!', 'Não, rosa!', 'Não, rosa!']
  },
  {
    q: 'O que a Nicolly mais ama comer?',
    options: ['Doce', 'Salgado', 'Fruta', 'Tudo'],
    correct: 3,
    feedback: ['Você ama tudo!', 'Exato! Você ama tudo, minha fofinha 🍭', 'Não, tudo!', 'Não, tudo!']
  },
  {
    q: 'Qual é o maior medo da Nicolly?',
    options: ['Perder o amor', 'Ficar sozinha', 'Não ser feliz', 'Nenhum'],
    correct: 3,
    feedback: ['Você não tem medo, amor!', 'Exato! Você não tem medo porque é forte, minha linda 🛡️', 'Não, nenhum!', 'Não, nenhum!']
  },
];

let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;

function buildQuiz() {
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizData[quizCurrent];
  if (!q) return;

  setIfExists('quiz-question-num', `Pergunta ${quizCurrent + 1} de ${quizData.length}`);
  setIfExists('quiz-question-text', q.q);
  setIfExists('quiz-feedback', '');

  // Progress dots
  const dots = document.querySelectorAll('.quiz-dot');
  dots.forEach((dot, i) => {
    dot.className = 'quiz-dot';
    if (i < quizCurrent) dot.classList.add('done');
    else if (i === quizCurrent) dot.classList.add('current');
  });

  // Options
  const optsContainer = document.getElementById('quiz-options');
  if (!optsContainer) return;
  optsContainer.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.classList.add('quiz-option');
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    optsContainer.appendChild(btn);
  });

  // Reset next button
  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) nextBtn.classList.remove('show');

  quizAnswered = false;
}

function selectAnswer(idx, btn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizData[quizCurrent];
  const allBtns = document.querySelectorAll('.quiz-option');

  allBtns.forEach(b => b.disabled = true);

  if (idx === q.correct) {
    btn.classList.add('correct');
    quizScore++;
    setIfExists('quiz-feedback', '✅ ' + q.feedback[idx]);
  } else {
    btn.classList.add('wrong');
    allBtns[q.correct].classList.add('correct');
    setIfExists('quiz-feedback', '💭 ' + q.feedback[idx]);
  }

  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.classList.add('show');
    nextBtn.textContent = quizCurrent < quizData.length - 1 ? 'Próxima pergunta →' : 'Ver resultado 🎉';
  }
}

document.getElementById('quiz-next-btn')?.addEventListener('click', () => {
  quizCurrent++;
  if (quizCurrent >= quizData.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
});

function showQuizResult() {
  document.getElementById('quiz-card-content').style.display = 'none';
  const result = document.getElementById('quiz-result');
  if (!result) return;
  result.style.display = 'block';

  const pct = Math.round((quizScore / quizData.length) * 100);
  let emoji, msg;

  if (pct === 100) {
    emoji = '🏆💚';
    msg = `Perfeita! Você acertou tudo! Você realmente me conhece e guarda cada detalhe do nosso amor no coração. Te amo demais, Nicolly!`;
  } else if (pct >= 70) {
    emoji = '💖✨';
    msg = `Quase lá! Você acertou ${quizScore} de ${quizData.length}. Você me conhece muito bem! Vamos continuar criando histórias para você saber tudo de mim.`;
  } else {
    emoji = '😄💕';
    msg = `Você acertou ${quizScore} de ${quizData.length}. Tudo bem! Temos uma vida inteira pra criar mais memórias juntos. E eu vou te contar tudo!`;
  }

  document.getElementById('quiz-result-emoji').textContent = emoji;
  setIfExists('quiz-result-msg', msg);
}

document.getElementById('quiz-restart')?.addEventListener('click', () => {
  quizCurrent = 0;
  quizScore = 0;
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-card-content').style.display = 'block';
  renderQuizQuestion();
});

buildQuiz();

/* --- SALVAR HISTÓRIA --- */
function loadSavedStories() {
  const saved = JSON.parse(localStorage.getItem('nicollyStories') || '[]');
  const container = document.getElementById('saved-stories');
  if (!container) return;
  container.innerHTML = '';
  saved.forEach((story, idx) => {
    const div = document.createElement('div');
    div.classList.add('saved-story-item');
    div.innerHTML = `<p>${story}</p><button onclick="deleteStory(${idx})">Excluir</button>`;
    container.appendChild(div);
  });
}

function saveStory() {
  const text = document.getElementById('new-story-text').value.trim();
  if (!text) return;
  const saved = JSON.parse(localStorage.getItem('nicollyStories') || '[]');
  saved.push(text);
  localStorage.setItem('nicollyStories', JSON.stringify(saved));
  document.getElementById('new-story-text').value = '';
  loadSavedStories();
}

function deleteStory(idx) {
  const saved = JSON.parse(localStorage.getItem('nicollyStories') || '[]');
  saved.splice(idx, 1);
  localStorage.setItem('nicollyStories', JSON.stringify(saved));
  loadSavedStories();
}

document.getElementById('save-story-btn')?.addEventListener('click', saveStory);
loadSavedStories();
const secretMessages = [
  {
    icon: '💌',
    label: 'Carta do Primeiro Dia',
    hint: 'Toque para abrir',
    emoji: '🌱',
    title: 'Aquele Primeiro Dia',
    text: 'Você sabe o que eu pensava naquele primeiro dia? Que você era a pessoa mais especial que já tinha cruzado meu caminho. Que seu jeito de sorrir deixava tudo mais fácil. Que eu precisava te conhecer melhor. E hoje? Hoje eu sei que eu estava completamente certo.'
  },
  {
    icon: '🌙',
    label: 'Pensamento da Madrugada',
    hint: 'Uma confissão',
    emoji: '🌟',
    title: 'Às 3 da Manhã',
    text: 'Existem noites em que eu acordo, olho pro teto e fico pensando em você. Não porque estou preocupado, mas porque meu coração não aguenta ficar longe de você nem na hora de dormir. Você é meu pensamento favorito, o que não vai embora nunca.'
  },
  {
    icon: '☀️',
    label: 'Bom Dia Especial',
    hint: 'Para começar bem',
    emoji: '🌅',
    title: 'Cada Manhã com Você',
    text: 'Acordar sabendo que você existe no mundo já faz meu dia valer a pena. Mas sabe o que é ainda melhor? Quando é você que me manda mensagem de bom dia. Aí sim, o dia fica perfeito. Você é a minha parte favorita de acordar.'
  },
  {
    icon: '🌹',
    label: 'Segredo do Coração',
    hint: 'Só pra você',
    emoji: '🔐',
    title: 'O Que Eu Nunca Te Disse',
    text: 'Tem um segredo que eu carrego: toda vez que você sorri pra mim, eu fico tão feliz que parece que o tempo para. E eu fico pensando: "como alguém pode ser tão linda assim?" Você não tem ideia do efeito que causa em mim. É mágico.'
  },
  {
    icon: '🎵',
    label: 'A Nossa Música',
    hint: 'Uma história musical',
    emoji: '🎶',
    title: 'Amor que nos Faz Um',
    text: 'Toda vez que essa música toca, eu fecho os olhos e te vejo. Vejo seu rosto, seu sorriso, seu olhar. A letra fala de um amor que une duas almas, que transforma tudo. E eu penso: "é exatamente isso que você faz comigo." Você me completa, Nicolly.'
  },
  {
    icon: '✈️',
    label: 'Sonho de Viagem',
    hint: 'Para onde vamos?',
    emoji: '🗺️',
    title: 'Qualquer Lugar com Você',
    text: 'Eu não ligo pra onde a gente vai. Pode ser a praia mais linda ou o interior mais simples. O que importa é que você vai estar do meu lado. Porque com você, todo lugar vira um destino especial. Quero o mundo inteiro ao seu lado.'
  },
  {
    icon: '🏠',
    label: 'Nosso Lar',
    hint: 'Um sonho próximo',
    emoji: '💫',
    title: 'O Lar que Quero Construir',
    text: 'Você sabe qual é o meu maior sonho? É ter um cantinho nosso. Um lugar onde a gente bota as coisas que a gente ama, onde cozinhamos juntos, onde dormimos abraçados, onde criamos nossa própria história. Com você, qualquer lugar vira lar.'
  },
  {
    icon: '💪',
    label: 'Nos Dias Difíceis',
    hint: 'Força e apoio',
    emoji: '🛡️',
    title: 'Quando Tudo Pesar',
    text: 'Nos dias em que tudo parece pesado demais, quando o cansaço toma conta e a vontade some, eu penso em você. E de repente fica mais fácil. Porque eu sei que você está aí, torcendo por mim, acreditando em mim. Você é minha força, Nicolly.'
  },
];

function buildMessages() {
  const grid = document.getElementById('messages-grid');
  if (!grid) return;

  secretMessages.forEach((msg, idx) => {
    const card = document.createElement('div');
    card.classList.add('message-envelope');
    card.innerHTML = `
      <span class="envelope-icon">${msg.icon}</span>
      <div class="envelope-label">${msg.label}</div>
      <div class="envelope-hint">${msg.hint}</div>
    `;
    card.addEventListener('click', () => openMessage(idx));
    grid.appendChild(card);
  });
}

function openMessage(idx) {
  const msg = secretMessages[idx];
  const modal = document.getElementById('msg-modal');
  document.getElementById('msg-modal-emoji').textContent = msg.emoji;
  document.getElementById('msg-modal-title').textContent = msg.title;
  document.getElementById('msg-modal-text').textContent = msg.text;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('msg-modal-close')?.addEventListener('click', () => {
  document.getElementById('msg-modal').classList.remove('open');
  document.body.style.overflow = '';
});

document.getElementById('msg-modal')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('open');
    document.body.style.overflow = '';
  }
});

buildMessages();

/* --- INICIALIZAÇÃO --- */
showSection('home');
