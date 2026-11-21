/* =========================================================
   MÍDIA KIT · DJ JOÃO PAULO
   Edite apenas o objeto DADOS. O resto monta o site sozinho.
   - Fotos: coloque na pasta /fotos e escreva o caminho.
   - YouTube: só o ID do vídeo (depois de "v=" na URL).
   - Spotify: só o ID (código no fim do link de compartilhar).
   ========================================================= */
var DADOS = {
  // Logo: deixe "logo.png" quando o arquivo tiver fundo transparente.
  // Se quiser usar o nome em texto no lugar da logo, deixe vazio: logo: "",
  logo: "assets/LOGO-JOAO-PAULO-BRANCA.png",
  nomeTexto: ["DJ João", "Paulo"],
  frase: "Mais do que um artista, O Menino É Incrivel !!",
  faixaTextos: ["DJ João Paulo", "Mídia Kit", "Shows & Eventos", "Contratações"],

  numeros: [
    { valor: 150000, sufixo: "+", rotulo: "ouvintes mensais no Spotify" },
    { valor: 15000000, sufixo: "+", rotulo: "streams somados" },
  ],

  biografia: [
    "DJ João Paulo é uma das novas promessas do eletrofunk no Brasil.",
  "Nascido em 2010, João Paulo Messias Silva Gonzaga começou sua jornada na música aos 11 anos, produzindo diretamente pelo celular e mostrando desde cedo um talento fora do comum.",
  "Aos 13 anos, lançou sua primeira faixa autoral, chamando atenção pela originalidade, qualidade técnica e uma identidade sonora marcante.",
  "Nas redes sociais, vem conquistando espaço com suas produções e mixagens envolventes, criando uma conexão real com o público jovem.",
  "Mesmo com pouca idade, já se apresentou em eventos locais e vem ganhando reconhecimento no cenário, provando que sua música vai além dos limites da idade.",
  "Mais do que um artista, ele representa uma nova geração que transforma sonhos em realidade e faz jus ao nome:",
  "DJ João Paulo - O MENINO É INCRÍVEL"
  ],
  fotosBio: ["assets/biografia.png"],

  trajetoria: [
    { ano: "2023", titulo: "Primeiros passos", texto: "Início como DJ em festas locais e aniversários." },
    { ano: "2024", titulo: "Primeiras produções", texto: "Lançamento dos primeiros remixes e edits nas plataformas." },
    { ano: "2025", titulo: "Palcos maiores", texto: "Apresentações em festivais e casas de shows da região." },
    { ano: "2026", titulo: "Hit nas plataformas", texto: "Faixa ultrapassa a marca de 1 milhão de streams." },
  ],

  hits: [
    { titulo: "Nunca É do Nada", detalhe: "Single · 2023", plays: "3,9 mi de plays", capa: "assets/nunca e do nada.png", link: "https://open.spotify.com/intl-pt/track/3UXnvDfe2T0fAv4RH6XKOB?si=c6aca0ad8c0a4569" },
    { titulo: "Vovó É 157", detalhe: "Single · 2026", plays: "600 miL plays", capa: "assets/vovo e 157.png", link: "https://open.spotify.com/intl-pt/track/3uUGSnhLXtnkpNrHWaFeiY?si=1c33a80b11684127" },
    { titulo: "Pele a Pele", detalhe: "Single · 2024", plays: "550 mil plays", capa: "assets/pele a pele.png", link: "https://open.spotify.com/intl-pt/track/22iPB5PMUNeBqNfBkLoHGp?si=ad6b98cd4806403e" },
    { titulo: "No Banco do Carona", detalhe: "Single · 2026", plays: "510 mil plays", capa: "assets/Banco do carona.png", link: "https://open.spotify.com/intl-pt/track/4u21fCXpLEmXc7REPeC2PO?si=7cdbfee18e634822" },
    { titulo: "Tal do Tbt", detalhe: "Single · 2026", plays: "300 mil plays", capa: "assets/Tal do tbt.png", link: "https://open.spotify.com/intl-pt/track/0KcSG6vlp0mqQMnIwSQwYF?si=a1465582ee0e48fa" },
  ],

  aftermovies: [
    { id: "COLE_O_ID_DO_VIDEO", legenda: "Aftermovie · Nome do evento 2025" },
    { id: "COLE_O_ID_DO_VIDEO", legenda: "Aftermovie · Nome do evento 2024" }
  ],

  porqueContratar: [
    { titulo: "Pista cheia", texto: "Leitura de público em tempo real: o set muda conforme a energia da pista." },
    { titulo: "Repertório sob medida", texto: "Do pop ao eletrônico, o set é montado para o perfil do seu evento." },
    { titulo: "Profissionalismo", texto: "Pontualidade, passagem de som e comunicação clara antes e depois do show." },
    { titulo: "Audiência própria", texto: "Milhares de ouvintes e seguidores que divulgam o evento junto com você." },
    { titulo: "Estrutura completa", texto: "Equipamento próprio e rider técnico simples, fácil de atender." },
    { titulo: "Prova social", texto: "Aftermovies e números públicos que mostram o resultado entregue." }
  ],

  contato: {
    texto: "Envie a data, a cidade e o tipo de evento. A resposta chega em até 24 horas.",
    links: [
      { rotulo: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=%2B556281011303&text&type=phone_number&app_absent=0" },
      { rotulo: "Instagram", url: "https://www.instagram.com/djjoaopaulo.oficial?igsh=MWlqdDFkeWo2NTZhcA%3D%3D&utm_source=qr" },
      { rotulo: "Spotify", url: "https://open.spotify.com/intl-pt/artist/7qt4aKJYleaq35trtn89sr?si=OTJJUl8bR-6YKwosdyNCbw" }
    ]
  },
  rodape: "© 2026 DJ João Paulo. Todos os direitos reservados."
};

/* ---------------- Código (não precisa mexer) ---------------- */
var $ = function (s) { return document.querySelector(s); };
var ehModelo = function (id) { return !id || id.indexOf("COLE_") === 0; };
var el = function (tag, attrs, html) {
  var e = document.createElement(tag);
  Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
  e.innerHTML = html || "";
  return e;
};
var imagem = function (src, alt, classe) {
  var i = el("img", { src: src, alt: alt, loading: "lazy" });
  if (classe) i.className = classe;
  i.onerror = function () { i.style.visibility = "hidden"; };
  return i;
};
var vazio = function (msg) { return el("div", { "class": "vazio" }, msg); };
var seguro = function (fn) { try { fn(); } catch (e) { console.warn("Mídia Kit:", e); } };
var reduzido = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
var mouse = { x: innerWidth / 2, y: innerHeight / 2 };

function formatar(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(n % 1e6 ? 1 : 0).replace(".", ",") + " mi";
  if (n >= 1e3) return Math.round(n / 1e3) + " mil";
  return String(n);
}

function montarVideos(lista, destino) {
  lista.forEach(function (v) {
    var caixa = el("div");
    if (ehModelo(v.id)) {
      caixa.appendChild(vazio("Cole o ID do vídeo do YouTube"));
    } else {
      var moldura = el("div", { "class": "video" });
      var botao = el("button", { type: "button", "aria-label": "Reproduzir: " + v.legenda }, '<span class="play"></span>');
      botao.insertBefore(imagem("https://i.ytimg.com/vi/" + v.id + "/hqdefault.jpg", v.legenda), botao.firstChild);
      botao.onclick = function () {
        moldura.innerHTML = "";
        moldura.appendChild(el("iframe", {
          src: "https://www.youtube.com/embed/" + v.id + "?autoplay=1&rel=0",
          allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
          allowfullscreen: "", title: v.legenda
        }));
      };
      moldura.appendChild(botao);
      caixa.appendChild(moldura);
    }
    caixa.appendChild(el("p", { "class": "video-legenda" }, v.legenda));
    destino.appendChild(caixa);
  });
}

/* Logo ou nome em texto */
seguro(function () {
  document.querySelectorAll("img.marca").forEach(function (img) {
    if (DADOS.logo) { img.src = DADOS.logo; return; }
    var t = el("span", { "class": img.className.replace("marca", "").trim() + " marca-texto", "aria-label": "DJ João Paulo" },
      "<b>" + DADOS.nomeTexto[0] + "</b> <i>" + DADOS.nomeTexto[1] + "</i>");
    img.parentNode.replaceChild(t, img);
  });
});

/* Conteúdo */
seguro(function () { $("#hero-frase").textContent = DADOS.frase; });

seguro(function () {
  var f = DADOS.faixaTextos.map(function (t) { return "<span>" + t + "</span><span>/</span>"; }).join("");
  $("#faixa").innerHTML = f + f + f + f;
});

seguro(function () {
  DADOS.numeros.forEach(function (n) {
    $("#numeros").appendChild(el("div", { "class": "numero" },
      '<strong data-alvo="' + n.valor + '" data-sufixo="' + (n.sufixo || "") + '">' + formatar(n.valor) + (n.sufixo || "") + '</strong><span>' + n.rotulo + "</span>"));
  });
});

seguro(function () {
  $("#bio-texto").innerHTML = DADOS.biografia.map(function (p) { return "<p>" + p + "</p>"; }).join("");
  DADOS.fotosBio.forEach(function (f, i) { $("#bio-fotos").appendChild(imagem(f, "Foto " + (i + 2) + " do DJ João Paulo")); });
});

seguro(function () {
  DADOS.trajetoria.forEach(function (t) {
    $("#linha-tempo").appendChild(el("li", {}, "<time>" + t.ano + "</time><div><h3>" + t.titulo + "</h3><p>" + t.texto + "</p></div>"));
  });
});

seguro(function () {
  DADOS.hits.forEach(function (h, i) {
    var a = el("a", { "class": "hit", href: h.link, target: "_blank", rel: "noopener" });
    a.appendChild(el("div", { "class": "hit-pos" }, String(i + 1)));
    a.appendChild(imagem(h.capa, "Capa de " + h.titulo, "hit-capa"));
    a.appendChild(el("div", { "class": "hit-info" }, "<strong>" + h.titulo + "</strong><span>" + h.detalhe + "</span>"));
    a.appendChild(el("div", { "class": "hit-plays" }, h.plays));
    $("#hits-lista").appendChild(a);
  });
});

seguro(function () {
  DADOS.spotify.forEach(function (s) {
    if (ehModelo(s.id)) { $("#spotify-lista").appendChild(vazio("Cole o ID do Spotify em DADOS.spotify")); return; }
    $("#spotify-lista").appendChild(el("iframe", {
      src: "https://open.spotify.com/embed/" + s.tipo + "/" + s.id + "?theme=0",
      height: s.altura || 352, loading: "lazy",
      allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      title: "Spotify"
    }));
  });
});

seguro(function () { montarVideos(DADOS.youtube, $("#youtube-lista")); });
seguro(function () { montarVideos(DADOS.aftermovies, $("#after-lista")); });

seguro(function () {
  DADOS.porqueContratar.forEach(function (m) {
    $("#motivos").appendChild(el("div", { "class": "motivo" }, "<h3>" + m.titulo + "</h3><p>" + m.texto + "</p>"));
  });
});

seguro(function () {
  $("#contato-texto").textContent = DADOS.contato.texto;
  DADOS.contato.links.forEach(function (l) {
    $("#contato-links").appendChild(el("a", { href: l.url, target: "_blank", rel: "noopener" }, l.rotulo));
  });
  $("#rodape-texto").textContent = DADOS.rodape;
});

/* Efeitos (se algum falhar, o site continua normal) */
seguro(function () {
  var tirar = function () { var l = $("#loader"); if (l) l.style.display = "none"; };
  setTimeout(tirar, 2600);
});

// Aparecer ao rolar + contagem dos números
seguro(function () {
  var alvos = document.querySelectorAll(".rv, .linha-tempo li, [data-alvo]");
  var mostrar = function (e) {
    e.classList.add("on");
    if (e.dataset && e.dataset.alvo) contar(e);
  };
  function contar(e) {
    var alvo = +e.dataset.alvo, suf = e.dataset.sufixo, ini = performance.now(), dur = 1700;
    if (reduzido) return;
    (function passo(t) {
      var p = Math.min((t - ini) / dur, 1);
      e.textContent = formatar(Math.round(alvo * (1 - Math.pow(1 - p, 3)))) + (p === 1 ? suf : "");
      if (p < 1) requestAnimationFrame(passo);
    })(ini);
  }
  if (!("IntersectionObserver" in window)) { alvos.forEach(mostrar); return; }
  var obs = new IntersectionObserver(function (itens) {
    itens.forEach(function (i) {
      if (!i.isIntersecting) return;
      mostrar(i.target); obs.unobserve(i.target);
    });
  }, { threshold: 0.15 });
  alvos.forEach(function (e, k) {
    if (e.matches(".linha-tempo li")) e.style.transitionDelay = (k % 5) * 90 + "ms";
    obs.observe(e);
  });
  // Garantia: depois de 6s, nada fica escondido
  setTimeout(function () { alvos.forEach(function (e) { e.classList.add("on"); }); }, 6000);
});

// Barra de progresso
seguro(function () {
  var barra = $("#progresso");
  var atualiza = function () {
    var max = document.documentElement.scrollHeight - innerHeight;
    barra.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
  };
  addEventListener("scroll", atualiza, { passive: true });
  atualiza();
});

// Luz que segue o mouse
seguro(function () {
  var luz = $("#luz");
  addEventListener("pointermove", function (e) {
    mouse.x = e.clientX; mouse.y = e.clientY;
    luz.style.setProperty("--x", e.clientX + "px");
    luz.style.setProperty("--y", e.clientY + "px");
  }, { passive: true });
});

// Fundo: equalizador animado que reage ao mouse
seguro(function () {
  var cv = $("#fundo"), ctx = cv.getContext("2d"), L, A, barras;
  function ajustar() {
    var d = Math.min(window.devicePixelRatio || 1, 2);
    L = innerWidth; A = innerHeight;
    cv.width = L * d; cv.height = A * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    barras = Math.max(28, Math.floor(L / 26));
  }
  ajustar();
  addEventListener("resize", ajustar);
  function desenhar(t) {
    ctx.clearRect(0, 0, L, A);
    var larg = L / barras;
    for (var i = 0; i < barras; i++) {
      var x = i * larg;
      var onda = (Math.sin(t * 0.0011 + i * 0.42) + Math.sin(t * 0.0007 + i * 0.13) * 0.7 + Math.sin(t * 0.0019 + i * 0.9) * 0.35 + 2.05) / 4.1;
      var perto = Math.max(0, 1 - Math.abs(x + larg / 2 - mouse.x) / 260);
      var h = (onda * 0.34 + perto * 0.22) * A + 8;
      var g = ctx.createLinearGradient(0, A, 0, A - h);
      g.addColorStop(0, "rgba(255,255,255,.20)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(x + 2, A - h, larg - 4, h);
      ctx.fillStyle = "rgba(255,255,255,.35)";
      ctx.fillRect(x + 2, A - h, larg - 4, 2);
    }
    if (!reduzido) requestAnimationFrame(desenhar);
  }
  requestAnimationFrame(desenhar);
});
