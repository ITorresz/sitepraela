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
  sections.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });
  closeMobileMenu();
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});
document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => showSection(el.dataset.goto));
});

/* --- MENU MOBILE --- */
function openMobileMenu() { document.getElementById('mobile-nav').classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobile-nav').classList.remove('open'); }
document.getElementById('hamburger-btn').addEventListener('click', () => {
  const isOpen = document.getElementById('mobile-nav').classList.contains('open');
  isOpen ? closeMobileMenu() : openMobileMenu();
});

/* --- CONTADOR DE DIAS --- */
const START_DATE = new Date('2025-05-01T00:00:00');
function updateCounter() {
  const now = new Date();
  const diff = now - START_DATE;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  setIfExists('cnt-days', String(days).padStart(3, '0'));
  setIfExists('cnt-hours', String(hours).padStart(2, '0'));
  setIfExists('cnt-minutes', String(minutes).padStart(2, '0'));
  setIfExists('cnt-seconds', String(seconds).padStart(2, '0'));
  setIfExists('hero-days', days);
  return days;
}
function setIfExists(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
setInterval(updateCounter, 1000);
updateCounter();

/* --- DIA 365 --- */
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
  const hearts = ['💖','💕','💗','💓','💞','❤️','🌹','✨','💝','💘'];
  function spawnHeart() {
    const h = document.createElement('div');
    h.classList.add('falling-heart');
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*1.5+1}rem;animation-duration:${Math.random()*4+3}s;animation-delay:${Math.random()*0.5}s;`;
    container.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }
  heartRainInterval = setInterval(spawnHeart, 180);
  setTimeout(() => { clearInterval(heartRainInterval); container.style.display='none'; }, 24*60*60*1000);
}
document.querySelector('.close-banner')?.addEventListener('click', () => {
  document.querySelector('.day-365-banner').style.display = 'none';
});

/* ============================
   GALERIA
   Para adicionar fotos: coloque o arquivo na pasta "imagens"
   e adicione uma nova linha aqui embaixo seguindo o modelo!
   ============================ */
const photos = [
  /* FOTO 01 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (1).jpeg', caption: 'Sua Linda! 💚' },
  /* FOTO 02 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (2).jpeg', caption: 'Seu sorriso me ilumina ✨' },
  /* FOTO 03 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29.jpeg', caption: 'Cada instante com você vira lembrança eterna no meu coração 💖' },
  /* FOTO 04 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (4).jpeg', caption: 'Te olhar é como encontrar meu lar no meio do mundo 🏠' },
  /* FOTO 05 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21.jpeg', caption: 'Seu sorriso tem o poder de apagar qualquer tempestade dentro de mim 🌤️' },
  /* FOTO 06 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 11.01.01.jpeg', caption: 'Foi no seu abraço que eu entendi o que é paz de verdade 🕊️' },
  /* FOTO 07 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29 (1).jpeg', caption: 'Não importa onde estamos, se estou com você, estou completo 💫' },
  /* FOTO 08 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29 (2).jpeg', caption: 'Você é o meu sonho que eu tenho a sorte de viver acordado 🌙' },
  /* FOTO 09 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 11.04.29 (3).jpeg', caption: 'Cada detalhe seu me faz te amar ainda mais 🌹' },
  /* FOTO 10 */ { src: 'imagens/WhatsApp Image 2025-06-04 at 10.58.21 (3).jpeg', caption: 'Se eu pudesse, congelava esse momento pra viver nele pra sempre ⏳' },

  /* ═══════════════════════════════════════════════════════════
     ADICIONE NOVAS FOTOS AQUI EMBAIXO!
     Copie essa linha e troque o nome do arquivo e a legenda:

     { src: 'imagens/NOME_DO_ARQUIVO.jpeg', caption: 'Sua legenda aqui 💚' },

     Não esqueça de salvar a foto na pasta "imagens" primeiro!
     ═══════════════════════════════════════════════════════════ */
];

let currentLightboxIdx = 0;
function openLightbox(idx) {
  currentLightboxIdx = idx;
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = photos[idx].src;
  document.getElementById('lightbox-caption').textContent = photos[idx].caption;
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
document.getElementById('lightbox')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNext();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'Escape') closeLightbox();
});
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
document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ============================
   NOSSA HISTÓRIA com Editor Persistente
   ============================ */
const STORAGE_KEY_HISTORIA = 'nicolly_historia_capitulos';
const capitulosFixos = [
  { emoji:'👀', data:'O Começo de Tudo', titulo:'O dia que te vi pela primeira vez 👀', texto:'Tem momentos na vida que a gente sabe que algo mudou. Quando eu te vi pela primeira vez, foi exatamente isso. Uma sensação estranha, boa, que eu não conseguia explicar. Era o começo de algo que eu ainda não entendia, mas que o coração já sabia.', fixo:true },
  { emoji:'💬', data:'As Primeiras Conversas', titulo:'Quando o papo não terminava nunca 💬', texto:'A gente começou a conversar e eu percebi que você era diferente. Inteligente, engraçada, genuína. Cada conversa me fazia querer mais. Eu ficava esperando sua mensagem com um sorriso que eu mal conseguia esconder.', fixo:true },
  { emoji:'🎪', data:'O Momento Mágico', titulo:'O primeiro beijo atrás da cortina do circo 🎪', texto:'Atrás daquela cortina, o mundo parou. Só existíamos nós dois. Foi o beijo que mudou tudo, que confirmou o que meu coração já gritava. Naquele instante, eu soube: era você. Sempre foi você.', fixo:true },
  { emoji:'💚', data:'1º de Maio de 2025', titulo:'O dia em que nos tornamos nós 💚', texto:'Primeiro de maio. Uma data que ficou marcada no meu coração para sempre. O dia em que você aceitou ser minha namorada, e eu passei a ser o homem mais feliz do mundo. Cada mês que passa, eu te amo mais.', fixo:true },
  { emoji:'🏠', data:'Os Dias que Seguiram', titulo:'Construindo nossa rotina juntos 🏠', texto:'Ao longo do tempo, fui descobrindo os seus detalhes. Seus humores, seus gostos, seus medos e seus sonhos. E com cada descoberta, fui me apaixonando mais. A rotina com você é tudo, menos comum.', fixo:true },
];

function getCapitulosExtras() {
  try { const s = localStorage.getItem(STORAGE_KEY_HISTORIA); return s ? JSON.parse(s) : []; } catch(e) { return []; }
}
function salvarCapitulosExtras(extras) {
  try { localStorage.setItem(STORAGE_KEY_HISTORIA, JSON.stringify(extras)); } catch(e) {}
}

function buildHistoria() {
  const timeline = document.getElementById('timeline-dinamica');
  if (!timeline) return;
  const extras = getCapitulosExtras();
  const todos = [...capitulosFixos, ...extras];
  timeline.innerHTML = '';
  todos.forEach((cap, idx) => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');
    const extraIdx = idx - capitulosFixos.length;
    const deleteBtn = cap.fixo ? '' : `<button class="timeline-delete-btn" data-idx="${extraIdx}" title="Apagar">🗑️</button>`;
    item.innerHTML = `
      <div class="timeline-content">
        ${deleteBtn}
        <p class="timeline-date">${cap.data}</p>
        <h3 class="timeline-title">${cap.titulo}</h3>
        <p class="timeline-text">${cap.texto}</p>
      </div>
      <div class="timeline-dot">${cap.emoji}</div>
    `;
    timeline.appendChild(item);
  });
  const itemFinal = document.createElement('div');
  itemFinal.classList.add('timeline-item');
  itemFinal.innerHTML = `
    <div class="timeline-content">
      <p class="timeline-date">Em Andamento…</p>
      <h3 class="timeline-title">Os próximos capítulos ✨</h3>
      <p class="timeline-text">Nossa história ainda está sendo escrita. Cada dia é uma nova página, cada momento é um novo parágrafo. E eu mal posso esperar por tudo o que ainda vem por aí, sempre com você do meu lado.</p>
    </div>
    <div class="timeline-dot">✨</div>
  `;
  timeline.appendChild(itemFinal);
  setTimeout(() => {
    document.querySelectorAll('.timeline-item').forEach(el => el.classList.add('visible'));
  }, 100);
  document.querySelectorAll('.timeline-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.idx);
      const extras = getCapitulosExtras();
      extras.splice(i, 1);
      salvarCapitulosExtras(extras);
      buildHistoria();
    });
  });
}

function setupHistoriaForm() {
  const form = document.getElementById('form-historia');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emoji = document.getElementById('historia-emoji').value.trim() || '💫';
    const data = document.getElementById('historia-data').value.trim();
    const titulo = document.getElementById('historia-titulo').value.trim();
    const texto = document.getElementById('historia-texto').value.trim();
    if (!titulo || !texto) { alert('Ei, bota pelo menos o título e o texto hein! 😄'); return; }
    const extras = getCapitulosExtras();
    extras.push({ emoji, data: data || 'Mais um capítulo nosso', titulo, texto, fixo: false });
    salvarCapitulosExtras(extras);
    form.reset();
    document.getElementById('historia-emoji').value = '💫';
    buildHistoria();
    const feedbackEl = document.getElementById('historia-feedback');
    if (feedbackEl) {
      feedbackEl.textContent = 'Capítulo salvo! Nossa história fica cada vez mais linda 💚';
      feedbackEl.style.display = 'block';
      setTimeout(() => { feedbackEl.style.display = 'none'; }, 3000);
    }
  });
}

buildHistoria();
setupHistoriaForm();

/* --- SCROLL ANIMATION --- */
function animateOnScroll() {
  const items = document.querySelectorAll('.timeline-item, .promise-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  items.forEach(item => observer.observe(item));
}
animateOnScroll();

/* ============================
   QUIZ DO AMOR — 20 Perguntas Românticas
   (Nicolly é sempre a resposta certa!)
   ============================ */
const quizData = [
  { q: 'Qual é a pessoa mais linda que já passou na minha vida?', options: ['Uma atriz famosa', 'Nicolly', 'Uma influencer do Instagram', 'A vizinha'], correct: 1, feedback: ['Não é nem de longe! 😄', 'Isso mesmo! Você é a mais linda de todas, sem competição! 💚', 'Hahaha! Não tem nem como comparar!', 'Definitivamente não! 😂'] },
  { q: 'Quem faz meu coração acelerar só de aparecer na tela do celular?', options: ['Minha mãe mandando áudio', 'O banco cobrando', 'Nicolly', 'Notificação do app de delivery'], correct: 2, feedback: ['Minha mãe manda áudio de 10 minutos haha!', 'O banco NÃO acelera meu coração de um jeito bom! 😅', 'ISSO! Você aparece e meu coração já vai a mil! 💖', 'Delivery nunca vai bater você, Nicolly!'] },
  { q: 'Quem é meu maior tesouro nessa vida toda?', options: ['Meu videogame', 'Meus amigos', 'Meu travesseiro favorito', 'Nicolly'], correct: 3, feedback: ['O videogame não me beija! 😂', 'Eles são demais, mas não chegam perto!', 'O travesseiro não sorri pra mim do jeito que você sorri! 😄', 'É você! Sempre foi você! O maior tesouro que a vida me deu! 💎💚'] },
  { q: 'Quem eu escolheria levar numa ilha deserta sem pensar duas vezes?', options: ['Um chef de cozinha', 'Nicolly', 'Um guia de sobrevivência', 'Meu celular carregado'], correct: 1, feedback: ['Comida é importante, mas...', 'Você e ponto final! Com você até na ilha deserta seria a melhor aventura! 🏝️💚', 'Sobrevivência é importante mas sem você não tem graça!', 'O celular não te abraça do jeito que você merece!'] },
  { q: 'Qual é o sorriso que mais ilumina qualquer lugar?', options: ['O do palhaço do circo', 'O meu próprio', 'O da Mona Lisa', 'O da Nicolly'], correct: 3, feedback: ['O palhaço nem chega perto! 🤡', 'Mentira! O seu sorriso me ganha de lavada!', 'A Mona Lisa é famosa, mas o seu sorriso é muito melhor! 😄', 'É você! Quando você sorri o mundo para! ✨💚'] },
  { q: 'Se eu pudesse passar a vida toda do lado de alguém, quem seria?', options: ['Um cachorrinho fofo', 'Nicolly', 'Um bilionário pra pagar as contas', 'Meu melhor amigo'], correct: 1, feedback: ['Cachorro é fofo mas... não é você! 🐶', 'É você! A vida toda, cada dia, cada segundo! 💚✨', 'Haha dinheiro não abraça nem beija!', 'Ele é ótimo mas você é insubstituível!'] },
  { q: 'Quem é a pessoa que eu mais quero ver feliz no mundo inteiro?', options: ['Meu time de futebol ganhando', 'O pessoal da família toda', 'Nicolly', 'Meu cantor favorito'], correct: 2, feedback: ['O time ganha mas você vence sempre no meu coração!', 'A família é tudo mas você é especial demais!', 'É você! Ver você feliz é o que me faz mais feliz no mundo! 🌍💚', 'Cantor famoso? Não chega nem perto de você!'] },
  { q: 'Quem consegue me deixar com aquele sorriso bobo sem motivo?', options: ['Um meme engraçado', 'O cheiro de café de manhã', 'Uma piada interna com amigos', 'Nicolly'], correct: 3, feedback: ['Meme é engraçado mas não é você! 😄', 'Café é bom mas você é melhor! ☕', 'Piada boa mas você ganha de goleada!', 'SIM! Você é culpada pelo meu sorriso bobo diário! 😁💚'] },
  { q: 'Quem eu penso quando ouço qualquer música romântica?', options: ['Ninguém específico, só a vibe', 'Na minha comida favorita por algum motivo', 'Nicolly', 'Nos meus planos pro futuro'], correct: 2, feedback: ['Mentira! Tem sim! 😄', 'Comida e música não têm essa relação haha!', 'SEMPRE você! Toda música romântica vira nossa música! 🎵💚', 'Os planos também têm você dentro!'] },
  { q: 'Qual o abraço mais gostoso e quentinho que eu já recebi?', options: ['O do cobertor saindo da secadora', 'O da minha vó quando era criança', 'Abraço de urso do meu amigo', 'O abraço da Nicolly'], correct: 3, feedback: ['Cobertor quente é top mas não é abraço! 😄', 'Abraço de vó é especial mas o seu tem um nível diferente!', 'Amigo abraça bem mas você abraça com o coração!', 'É o seu! Seu abraço é o lugar mais gostoso do mundo! 🫂💚'] },
  { q: 'Quando imagino meu futuro, quem está sempre do meu lado?', options: ['Uma versão mais rica de mim', 'Meu gato imaginário', 'Nicolly', 'Um barco próprio no litoral'], correct: 2, feedback: ['Versão rica também quer você ali!', 'O gato imaginário não conta haha!', 'Você! Sempre você! Em cada versão do meu futuro, você está lá! 🌟💚', 'O barco vem depois, primeiro você!'] },
  { q: 'Quem consegue me animar mesmo nos dias mais cinzentos?', options: ['Uma pizza chegando em casa', 'Um feriado surpresa', 'Nicolly', 'Minha playlist favorita'], correct: 2, feedback: ['Pizza é poderosa mas não chega perto! 🍕', 'Feriado é bom mas você é melhor!', 'Você! Uma mensagem sua já vira o dia! 💚☀️', 'Playlist é boa mas você é a minha música favorita!'] },
  { q: 'Se eu pudesse dar um presente pra pessoa que mais amo, pra quem seria?', options: ['Pra mim mesmo obviamente', 'Pro meu melhor amigo', 'Pro meu pet', 'Pra Nicolly'], correct: 3, feedback: ['Haha honesto mas não! 😄', 'Ele merece mas você merece mais!', 'Pet é família mas...', 'Pra você! Qualquer coisa boa do mundo eu quero primeiro na sua mão! 🎁💚'] },
  { q: 'Quem faz qualquer programa simples virar a melhor coisa do mundo?', options: ['Um bom sorvete na sobremesa', 'A turma animada', 'Nicolly', 'Quando não tem fila em lugar nenhum'], correct: 2, feedback: ['Sorvete é especial mas você é mais! 🍦', 'Turma anima mas você transforma!', 'VOCÊ! Mercado, farmácia, qualquer lugar com você vira aventura! 💚✨', 'Sem fila é bom demais mas você bate qualquer coisa!'] },
  { q: 'Qual é a voz que eu mais gosto de ouvir no mundo?', options: ['O locutor do meu time', 'Meu cantor favorito ao vivo', 'Nicolly', 'A voz do meu personagem favorito'], correct: 2, feedback: ['Locutor fica histérico no gol mas não é isso! ⚽', 'Show ao vivo é incrível mas...', 'A sua voz! Poderia ouvir você falar pra sempre! 🎶💚', 'Personagem é ficção, você é real e muito melhor!'] },
  { q: 'Quem é a pessoa que eu mais quero impressionar em tudo que faço?', options: ['Meu chefe no trabalho', 'Meus pais', 'Nicolly', 'Minha turma toda'], correct: 2, feedback: ['Chefe é importante mas você é minha motivação de verdade!', 'Pais são fundamentais mas você é especial!', 'Você! Tudo que faço quero que você fique orgulhosa! 💪💚', 'A turma não manda no meu coração!'] },
  { q: 'Se eu tivesse que descrever o amor de verdade com uma pessoa real, quem eu citaria?', options: ['Algum casal famoso do cinema', 'Os avós que ficaram juntos pra sempre', 'Nicolly', 'Um personagem de livro'], correct: 2, feedback: ['Cinema é ficção, você é real e mais bonita!', 'Avós são inspiração mas você é o meu presente!', 'Você! O amor de verdade tem o seu rosto, Nicolly! 💚💍', 'Personagem de livro? Você é melhor que qualquer história!'] },
  { q: 'Quem eu quero que seja a primeira a saber de cada novidade da minha vida?', options: ['Meu melhor amigo de infância', 'Minha mãe', 'Nicolly', 'Minhas redes sociais'], correct: 2, feedback: ['Ele é parceiro mas você vem antes!', 'Mãe é mãe mas você tem um lugar especial!', 'Você! Qualquer coisa que acontece, você é a primeira que quero contar! 💚📲', 'Redes sociais? Você antes de qualquer postagem!'] },
  { q: 'Quem é a razão pela qual eu acordo sorrindo às vezes sem nem saber por quê?', options: ['Aquele sonho bom que tive', 'O sol entrando pela janela', 'A sensação de domingo sem compromisso', 'Nicolly'], correct: 3, feedback: ['Sonho bom é gostoso mas...', 'Sol é lindo mas você brilha mais!', 'Domingo livre é bom demais mas você é melhor!', 'É você! Você habita até nos meus sonhos! 🌙💚'] },
  { q: 'Se eu pudesse resumir tudo que é bom na minha vida em uma palavra só, qual seria?', options: ['Liberdade', 'Sucesso', 'Felicidade', 'Nicolly'], correct: 3, feedback: ['Liberdade é lindo mas incompleto sem você!', 'Sucesso sem você não tem graça!', 'Felicidade tem nome e esse nome é você!', 'NICOLLY! Uma palavra que resume tudo que há de bom! 💚✨🌍'] },
];

let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;

function buildQuiz() {
  const progressContainer = document.querySelector('.quiz-progress');
  if (progressContainer) {
    progressContainer.innerHTML = '';
    quizData.forEach(() => {
      const dot = document.createElement('div');
      dot.classList.add('quiz-dot');
      progressContainer.appendChild(dot);
    });
  }
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizData[quizCurrent];
  if (!q) return;
  setIfExists('quiz-question-num', `Pergunta ${quizCurrent + 1} de ${quizData.length}`);
  setIfExists('quiz-question-text', q.q);
  setIfExists('quiz-feedback', '');
  const dots = document.querySelectorAll('.quiz-dot');
  dots.forEach((dot, i) => {
    dot.className = 'quiz-dot';
    if (i < quizCurrent) dot.classList.add('done');
    else if (i === quizCurrent) dot.classList.add('current');
  });
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
  if (quizCurrent >= quizData.length) showQuizResult();
  else renderQuizQuestion();
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
    msg = `PERFEITA! 20 de 20! Nicolly, você conhece o meu coração melhor do que eu mesmo! Você é a resposta certa pra tudo na minha vida, e esse quiz só confirma isso. Te amo demais!`;
  } else if (pct >= 80) {
    emoji = '💖✨';
    msg = `Incrível! ${quizScore} de ${quizData.length} respostas certas! Você quase me conhece completamente, e as respostas que errou vamos criar mais memórias pra você descobrir! Te amo muito!`;
  } else if (pct >= 60) {
    emoji = '💕😄';
    msg = `${quizScore} de ${quizData.length}! Tá indo bem! Temos uma vida inteira pela frente pra você me conhecer cada vez mais. E eu vou adorar cada momento desse processo. Te amo!`;
  } else {
    emoji = '😄💚';
    msg = `${quizScore} de ${quizData.length}! Não tem problema! Acabamos de começar nossa história. Temos tanto ainda pra criar juntos que logo você vai acertar tudo! Te amo, Nicolly!`;
  }
  document.getElementById('quiz-result-emoji').textContent = emoji;
  setIfExists('quiz-result-msg', msg);
}

document.getElementById('quiz-restart')?.addEventListener('click', () => {
  quizCurrent = 0;
  quizScore = 0;
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-card-content').style.display = 'block';
  buildQuiz();
});

buildQuiz();

/* --- MENSAGENS SECRETAS --- */
const secretMessages = [
  { icon:'💌', label:'Carta do Primeiro Dia', hint:'Toque para abrir', emoji:'🌱', title:'Aquele Primeiro Dia', text:'Você sabe o que eu pensava naquele primeiro dia? Que você era a pessoa mais especial que já tinha cruzado meu caminho. Que seu jeito de sorrir deixava tudo mais fácil. Que eu precisava te conhecer melhor. E hoje? Hoje eu sei que eu estava completamente certo.' },
  { icon:'🌙', label:'Pensamento da Madrugada', hint:'Uma confissão', emoji:'🌟', title:'Às 3 da Manhã', text:'Existem noites em que eu acordo, olho pro teto e fico pensando em você. Não porque estou preocupado, mas porque meu coração não aguenta ficar longe de você nem na hora de dormir. Você é meu pensamento favorito, o que não vai embora nunca.' },
  { icon:'☀️', label:'Bom Dia Especial', hint:'Para começar bem', emoji:'🌅', title:'Cada Manhã com Você', text:'Acordar sabendo que você existe no mundo já faz meu dia valer a pena. Mas sabe o que é ainda melhor? Quando é você que me manda mensagem de bom dia. Aí sim, o dia fica perfeito. Você é a minha parte favorita de acordar.' },
  { icon:'🌹', label:'Segredo do Coração', hint:'Só pra você', emoji:'🔐', title:'O Que Eu Nunca Te Disse', text:'Tem um segredo que eu carrego: toda vez que você sorri pra mim, eu fico tão feliz que parece que o tempo para. E eu fico pensando: como alguém pode ser tão linda assim? Você não tem ideia do efeito que causa em mim. É mágico.' },
  { icon:'🎵', label:'A Nossa Música', hint:'Uma história musical', emoji:'🎶', title:'Amor que nos Faz Um', text:'Toda vez que essa música toca, eu fecho os olhos e te vejo. Vejo seu rosto, seu sorriso, seu olhar. A letra fala de um amor que une duas almas, que transforma tudo. E eu penso: é exatamente isso que você faz comigo. Você me completa, Nicolly.' },
  { icon:'✈️', label:'Sonho de Viagem', hint:'Para onde vamos?', emoji:'🗺️', title:'Qualquer Lugar com Você', text:'Eu não ligo pra onde a gente vai. Pode ser a praia mais linda ou o interior mais simples. O que importa é que você vai estar do meu lado. Porque com você, todo lugar vira um destino especial. Quero o mundo inteiro ao seu lado.' },
  { icon:'🏠', label:'Nosso Lar', hint:'Um sonho próximo', emoji:'💫', title:'O Lar que Quero Construir', text:'Você sabe qual é o meu maior sonho? É ter um cantinho nosso. Um lugar onde a gente bota as coisas que a gente ama, onde cozinhamos juntos, onde dormimos abraçados, onde criamos nossa própria história. Com você, qualquer lugar vira lar.' },
  { icon:'💪', label:'Nos Dias Difíceis', hint:'Força e apoio', emoji:'🛡️', title:'Quando Tudo Pesar', text:'Nos dias em que tudo parece pesado demais, quando o cansaço toma conta e a vontade some, eu penso em você. E de repente fica mais fácil. Porque eu sei que você está aí, torcendo por mim, acreditando em mim. Você é minha força, Nicolly.' },
];

function buildMessages() {
  const grid = document.getElementById('messages-grid');
  if (!grid) return;
  secretMessages.forEach((msg, idx) => {
    const card = document.createElement('div');
    card.classList.add('message-envelope');
    card.innerHTML = `<span class="envelope-icon">${msg.icon}</span><div class="envelope-label">${msg.label}</div><div class="envelope-hint">${msg.hint}</div>`;
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
  if (e.target === e.currentTarget) { e.currentTarget.classList.remove('open'); document.body.style.overflow = ''; }
});

buildMessages();

/* --- INICIALIZAÇÃO --- */
showSection('home');