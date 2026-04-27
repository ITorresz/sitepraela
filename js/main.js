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
    correct: 0,
    feedback: ['Exatamente! Fui eu que disse primeiro, com o coração na mão 💚', 'Quase... fui eu! 😄', 'Quase! Fui eu o corajoso 😊', 'Não, foi pessoalmente!']
  },
  {
    q: 'Onde foi o nosso primeiro beijo que mudou tudo?',
    options: ['Atrás da cortina do circo', 'Na praça da cidade', 'Na escola', 'Numa festa'],
    correct: 0,
    feedback: ['Isso mesmo! Atrás da cortina, nosso segredinho 🎪💕', 'Quase, mas não!', 'Não foi lá não 😄', 'Não foi em festa não!']
  },
  {
    q: 'Qual música sempre me faz lembrar de você?',
    options: ['Amor que nos faz um', 'Fico assim sem você', 'Trem Bala', 'Por enquanto'],
    correct: 0,
    feedback: ['Essa música fala tanto de mim pensando em você ❤️', 'Essa também é linda, mas não é a nossa!', 'Trem Bala é demais, mas não é essa!', 'Quase!']
  },
  {
    q: 'O que eu mais amo em você (além de tudo)?',
    options: ['Seu coração', 'Seu cabelo', 'Sua comida', 'Seu jeito de rir'],
    correct: 0,
    feedback: ['Seu coração é o maior presente que a vida me deu 💖', 'Seu cabelo também é lindo, mas é o coração que me ganhou!', 'Você cozinha bem? haha! Mas é o coração!', 'Seu riso também é mágico, mas é o coração!']
  },
  {
    q: 'Qual viagem nós sonhamos em fazer juntos?',
    options: ['Qualquer lugar que seja com você', 'Paris, França', 'Nova York, EUA', 'Maldivas'],
    correct: 0,
    feedback: ['Exatamente! Com você, qualquer destino vira paraíso 🌍✈️', 'Paris seria incrível, mas o que importa é estarmos juntos!', 'Nova York também é um sonho, mas o segredo é estarmos juntos!', 'Maldivas com você seria perfeito! Mas qualquer lugar serve!']
  },
  {
    q: 'Quando eu olho pra você, o que eu sinto?',
    options: ['Que ganhei a loteria da vida', 'Nervoso', 'Indiferença', 'Sono'],
    correct: 0,
    feedback: ['Sim! Você é meu maior prêmio, Nicolly 🏆💚', 'Até fico nervoso às vezes de tanta emoção, mas principalmente grato!', 'Hm, definitivamente não é isso 😄', 'Com você ao meu lado, eu fico mais acordado do que nunca!']
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

/* --- MENSAGENS SECRETAS --- */
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
