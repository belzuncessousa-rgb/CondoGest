/* CondoGest — protótipo clicável do app do síndico.
   Todos os dados são de exemplo e ficam no navegador; ainda não há servidor. */
(function () {
  "use strict";

  // ---------- Ícones (traço, 24px) ----------
  const ICON = {
    home: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z",
    calendar: "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4",
    users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7 M16 3.5a4 4 0 0 1 0 7.5 M18 14c2.4.8 4 3.2 4 7",
    megaphone: "M3 10v4h4l7 4V6l-7 4z M18 9a4 4 0 0 1 0 6",
    menu: "M4 7h16 M4 12h16 M4 17h16",
    check: "M5 12.5l4.5 4.5L19 7",
    x: "M6 6l12 12 M18 6 6 18",
    right: "M9 6l6 6-6 6",
    left: "M15 6l-6 6 6 6",
    plus: "M12 5v14 M5 12h14",
    minus: "M5 12h14",
    bell: "M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z M10 20a2 2 0 0 0 4 0",
    package: "M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z M3 7.5 12 12l9-4.5 M12 12v9",
    wrench: "M14 7a4 4 0 0 1 5.5-3.7L17 6l1 1.9 1.9 1 2.6-2.5A4 4 0 0 1 17 10l-8 8a2 2 0 0 1-3-3l8-8",
    party: "M8 3h8l-1 7a3 3 0 0 1-6 0z M12 13v7 M8 21h8",
    bbq: "M4 10h16a8 8 0 0 1-16 0z M8 18l-2 3 M16 18l2 3 M9 3c-1 1.5 1 2.5 0 4 M13 3c-1 1.5 1 2.5 0 4",
    tennis: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M5.6 5.6c3.5 3.5 3.5 9.3 0 12.8 M18.4 5.6c-3.5 3.5-3.5 9.3 0 12.8",
    suite: "M3 19V6 M3 15h18v4 M21 15v-2.5A2.5 2.5 0 0 0 18.5 10H11v5 M7 12.5h.01",
    cowork: "M5 5h14v10H5z M2 19h20",
    pool: "M2 17c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5 M8 13V5a2 2 0 0 1 4 0 M14 13V5a2 2 0 0 1 4 0 M8 9h6",
    logout: "M15 4h4v16h-4 M10 8l-4 4 4 4 M6 12h10",
    building: "M5 21V4h10v17 M15 9h4v12 M3 21h18 M8 8h1 M11 8h1 M8 12h1 M11 12h1 M8 16h1 M11 16h1",
    search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20 20l-4-4",
    doc: "M6 3h8l4 4v14H6z M14 3v4h4 M9 13h6 M9 17h6",
    coin: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15 9h-4a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9 M12 7v2 M12 15v2",
    info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 11v5 M12 8h.01",
    alert: "M12 4 2.5 20h19z M12 10v4 M12 17h.01",
    refresh: "M20 11a8 8 0 1 0-2.3 5.7 M20 4v7h-7",
    key: "M8 15a4 4 0 1 1 3.5-6H21v3h-2v3h-3v-3h-4.5A4 4 0 0 1 8 15z",
    sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.2 4.2l1.4 1.4 M18.4 18.4l1.4 1.4 M1 12h2 M21 12h2 M4.2 19.8l1.4-1.4 M18.4 5.6l1.4-1.4"
  };
  const icon = (name, cls) => `<svg class="svg ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICON[name]}"/></svg>`;
  const LOGO = `<svg viewBox="0 0 34 34" aria-hidden="true"><rect x="3" y="7" width="28" height="5" rx="1.5" fill="var(--accent)"/><path d="M7 12v17M27 12v17" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M12 29V17h10v12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>`;

  // ---------- Datas ----------
  const DAY = 86400000;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const plus = (n) => iso(new Date(today.getTime() + n * DAY));
  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const WD = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const MO = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  function dayLabel(s) {
    const diff = Math.round((parse(s) - today) / DAY);
    if (diff === 0) return "Hoje";
    if (diff === 1) return "Amanhã";
    if (diff === -1) return "Ontem";
    const d = parse(s);
    return `${WD[d.getDay()]}, ${d.getDate()} ${MO[d.getMonth()]}`;
  }
  const relDay = (s) => dayLabel(s).toLowerCase();
  const nowMinutes = () => { const n = new Date(); return n.getHours() * 60 + n.getMinutes(); };
  const mins = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

  // ---------- Dados de exemplo ----------
  const BUILDING = { name: "Edifício Alameda", address: "Rua das Acácias, 1450", units: 64, floors: 16 };
  const MANAGER = { name: "Ana Ribeiro", first: "Ana", initials: "AR", email: "ana@edificioalameda.com.br", role: "Síndica" };

  const hourly = (from, to, step) => { const out = []; for (let h = from; h < to; h += step) out.push([`${String(h).padStart(2, "0")}:00`, `${String(h + step).padStart(2, "0")}:00`]); return out; };
  const AREAS = [
    { id: "salao-de-festas", name: "Salão de festas", icon: "party", tone: "party", floor: "Térreo", capacity: 40, fee: 250, deposit: 500, approval: true,
      slots: [["10:00", "14:00"], ["14:00", "18:00"], ["18:00", "22:00"]], window: 60, perMonth: 1, cancel: "72 h",
      rules: ["Música desligada às 22:00 (lei do silêncio)", "O morador precisa estar presente durante todo o evento", "Vistoria após o uso; caução devolvida em até 5 dias"] },
    { id: "churrasqueira", name: "Churrasqueira", icon: "bbq", tone: "bbq", floor: "Cobertura, 16º andar", capacity: 12, fee: 80, deposit: 0, approval: false,
      slots: [["11:00", "14:00"], ["14:00", "17:00"], ["17:00", "20:00"], ["20:00", "22:00"]], window: 30, perMonth: 4, cancel: "24 h",
      rules: ["Limpe a churrasqueira e desça o lixo depois do uso", "Proibido vidro no terraço", "O gás é desligado às 22:00"] },
    { id: "quadra-de-tenis", name: "Quadra de tênis", icon: "tennis", tone: "tennis", floor: "Área de lazer", capacity: 4, fee: 0, deposit: 0, approval: false,
      slots: hourly(7, 21, 1), window: 7, perMonth: 8, cancel: "2 h",
      rules: ["Uma hora por apartamento por dia", "Somente tênis que não marcam o piso", "As luzes apagam automaticamente às 21:00"] },
    { id: "suite-de-hospedes", name: "Suíte de hóspedes", icon: "suite", tone: "suite", floor: "2º andar, 210", capacity: 3, fee: 150, deposit: 200, approval: true,
      slots: [["15:00", "11:00"]], overnight: true, window: 90, perMonth: 4, cancel: "7 dias",
      rules: ["Check-in a partir das 15:00, check-out até as 11:00", "Chaves retiradas na portaria", "Máximo de 4 noites seguidas"] },
    { id: "coworking", name: "Sala de coworking", icon: "cowork", tone: "cowork", floor: "Mezanino", capacity: 8, fee: 0, deposit: 0, approval: false,
      slots: hourly(8, 20, 2), window: 14, perMonth: 20, cancel: "1 h",
      rules: ["Ligações na cabine telefônica, por favor", "Deixe as mesas livres para a próxima reserva"] },
    { id: "piscina", name: "Piscina", icon: "pool", tone: "pool", floor: "Área de lazer", capacity: 20, fee: 0, deposit: 0, approval: false,
      slots: [], closed: `Fechada para troca de azulejos até ${relDay(plus(4))}`, window: 0, perMonth: 0, cancel: "—",
      rules: ["Aberta das 07:00 às 22:00 quando não está em manutenção", "Não precisa de reserva; ordem de chegada"] }
  ];
  const areaById = (id) => AREAS.find((a) => a.id === id);

  const RESIDENTS = [
    ["302", "Júlia Santos", "Proprietário"], ["410", "Henrique Dias", "Inquilino"], ["507", "Gabriela Rocha", "Proprietário"],
    ["612", "Rafael e Inês Moura", "Proprietário"], ["704", "Kenji Watanabe", "Inquilino"], ["803", "Tomás Becker", "Proprietário"],
    ["905", "Sofia Marino", "Inquilino"], ["1102", "Daniel Levi", "Inquilino"], ["1204", "Mariana Costa", "Proprietário"],
    ["1307", "Camila Diniz", "Inquilino"], ["1501", "Paula Nunes", "Proprietário"], ["1606", "Lucas Ferreira", "Proprietário"]
  ].map(([unit, name, kind]) => ({ unit, name, kind }));
  const residentByUnit = (u) => RESIDENTS.find((r) => r.unit === u);

  const SEED = [
    { id: "b1", area: "salao-de-festas", unit: "1204", date: plus(5), start: "18:00", end: "22:00", guests: 32, status: "pending", note: "Meu aniversário de 30 anos. Um amigo vai tocar como DJ até as 22:00.", created: plus(-1) },
    { id: "b2", area: "suite-de-hospedes", unit: "803", date: plus(2), start: "15:00", end: "11:00", guests: 2, status: "pending", note: "Meus pais vêm passar 3 noites.", nights: 3, created: plus(0) },
    { id: "b3", area: "salao-de-festas", unit: "302", date: plus(12), start: "14:00", end: "18:00", guests: 18, status: "pending", note: "Chá de bebê. Se possível, decoração a partir das 13:30.", created: plus(0), flag: "Pede para entrar 30 min antes do horário" },
    { id: "b4", area: "salao-de-festas", unit: "1307", date: plus(9), start: "18:00", end: "22:00", guests: 45, status: "pending", note: "Festa de formatura.", created: plus(-2), flag: "45 convidados ultrapassa o limite do salão (40)" },
    { id: "b5", area: "churrasqueira", unit: "1501", date: plus(0), start: "17:00", end: "20:00", guests: 10, status: "approved", note: "" },
    { id: "b6", area: "quadra-de-tenis", unit: "704", date: plus(0), start: "07:00", end: "08:00", guests: 2, status: "approved", note: "" },
    { id: "b7", area: "coworking", unit: "1102", date: plus(0), start: "10:00", end: "12:00", guests: 1, status: "approved", note: "" },
    { id: "b8", area: "quadra-de-tenis", unit: "612", date: plus(0), start: "19:00", end: "20:00", guests: 4, status: "approved", note: "" },
    { id: "b9", area: "suite-de-hospedes", unit: "410", date: plus(-1), start: "15:00", end: "11:00", guests: 2, status: "approved", note: "", nights: 2 },
    { id: "b10", area: "salao-de-festas", unit: "905", date: plus(1), start: "18:00", end: "22:00", guests: 25, status: "approved", note: "Jantar de aniversário do clube do livro." },
    { id: "b11", area: "churrasqueira", unit: "1606", date: plus(1), start: "11:00", end: "14:00", guests: 8, status: "approved", note: "" },
    { id: "b12", area: "coworking", unit: "507", date: plus(1), start: "08:00", end: "10:00", guests: 1, status: "approved", note: "" },
    { id: "b13", area: "churrasqueira", unit: "302", date: plus(3), start: "17:00", end: "20:00", guests: 12, status: "approved", note: "" },
    { id: "b14", area: "quadra-de-tenis", unit: "1204", date: plus(2), start: "08:00", end: "09:00", guests: 2, status: "approved", note: "" },
    { id: "b15", area: "salao-de-festas", unit: "612", date: plus(-3), start: "14:00", end: "18:00", guests: 20, status: "approved", note: "" },
    { id: "b16", area: "churrasqueira", unit: "704", date: plus(6), start: "14:00", end: "17:00", guests: 6, status: "approved", note: "" },
    { id: "b17", area: "coworking", unit: "1307", date: plus(0), start: "14:00", end: "16:00", guests: 2, status: "approved", note: "" },
    { id: "b18", area: "quadra-de-tenis", unit: "1501", date: plus(4), start: "18:00", end: "19:00", guests: 2, status: "approved", note: "" }
  ];

  const NOTICES = [
    { id: "n1", title: "Piscina fechada para manutenção", body: `A piscina está fechada enquanto a empresa troca os azulejos trincados da parte funda. A previsão de reabertura é ${relDay(plus(4))}.`, when: "Há 2 dias", reads: 51, pinned: true },
    { id: "n2", title: "Falta de água no bloco B", body: `A água será cortada do 9º ao 16º andar ${relDay(plus(3))}, das 09:00 às 12:00, para troca de registros.`, when: "Ontem", reads: 38 },
    { id: "n3", title: "Nova regra: silêncio no salão de festas", body: "Seguindo a lei municipal, a música no salão de festas deve parar às 22:00 todos os dias da semana.", when: "Semana passada", reads: 60 }
  ];

  // ---------- Estado ----------
  const KEY = "condogest-proto-v1";
  let state = load();
  function fresh() {
    return { signedIn: false, bookings: JSON.parse(JSON.stringify(SEED)), approvalOverride: {}, bookTab: "requests", day: plus(0), areaFilter: "all", areaDay: {}, seq: 100 };
  }
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.bookings && s.seedDay === plus(0)) return s; } catch (e) { /* armazenamento indisponível */ }
    const f = fresh(); f.seedDay = plus(0); return f;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignora */ } }
  const needsApproval = (a) => (a.id in state.approvalOverride ? state.approvalOverride[a.id] : a.approval);
  const active = (b) => b.status === "pending" || b.status === "approved";
  const pending = () => state.bookings.filter((b) => b.status === "pending").sort((a, b) => a.date.localeCompare(b.date));
  const onDay = (d, areaId) => state.bookings.filter((b) => b.date === d && active(b) && (!areaId || areaId === "all" || b.area === areaId)).sort((a, b) => a.start.localeCompare(b.start));
  const slotBooking = (areaId, d, start) => state.bookings.find((b) => b.area === areaId && b.date === d && b.start === start && active(b));

  // ---------- Utilitários ----------
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => (n ? `R$ ${n.toLocaleString("pt-BR")}` : "Grátis");
  const timeRange = (b) => (areaById(b.area).overnight ? plural(b.nights || 1, "noite", "noites") : `${b.start}–${b.end}`);
  const statusPill = (s) => `<span class="pill ${s}">${{ pending: "Aguardando", approved: "Confirmada", declined: "Recusada", cancelled: "Cancelada" }[s]}</span>`;
  const chip = (a, lg) => `<span class="area-chip tone-${a.tone} ${lg ? "lg" : ""}">${icon(a.icon, lg ? "lg" : "")}</span>`;
  const greeting = () => { const h = new Date().getHours(); return h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite"; };

  let toastTimer;
  function toast(msg, undo) {
    const t = $("#toast");
    t.innerHTML = `<span class="grow">${esc(msg)}</span>${undo ? `<button type="button" id="toast-undo">Desfazer</button>` : ""}`;
    t.hidden = false;
    if (undo) $("#toast-undo").onclick = () => { undo(); t.hidden = true; };
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 4200);
  }

  function openSheet(html, bind) {
    const root = $("#sheet-root");
    root.innerHTML = `<div class="scrim" data-close></div><div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
    root.querySelectorAll("[data-close]").forEach((el) => (el.onclick = closeSheet));
    if (bind) bind(root.querySelector(".sheet"));
    const f = root.querySelector(".sheet button, .sheet input, .sheet select");
    if (f) f.focus({ preventScroll: true });
  }
  function closeSheet() { $("#sheet-root").innerHTML = ""; }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSheet(); });

  // ---------- Estrutura ----------
  const TABS = [["home", "Início", "home"], ["reservas", "Reservas", "calendar"], ["moradores", "Moradores", "users"], ["avisos", "Avisos", "megaphone"], ["mais", "Mais", "menu"]];
  function shell(tab, header, body, extra) {
    const n = pending().length;
    return `${header}<main class="screen" id="main">${body}</main>${extra || ""}
      <nav class="tabbar" aria-label="Menu principal">${TABS.map(([id, label, ic]) =>
        `<a href="#${id}" ${tab === id ? 'aria-current="page"' : ""}>${icon(ic)}<span>${label}</span>${id === "reservas" && n ? `<span class="badge">${n}</span>` : ""}</a>`).join("")}</nav>`;
  }
  const topbar = (eyebrow, title, right, left) =>
    `<header class="topbar">${left || ""}<div class="title"><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1></div>${right || ""}</header>`;

  // ---------- Login ----------
  let loginRole = "manager";
  function renderLogin() {
    return `<div class="login">
      <div class="login-top">
        <div class="brandmark">${LOGO}<span>CondoGest</span></div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <h1>Seu condomínio na palma da mão.</h1>
          <p>Reservas, moradores e avisos do ${esc(BUILDING.name)} em um só lugar.</p>
        </div>
      </div>
      <form class="login-card" id="login-form" novalidate>
        <div class="segmented" role="group" aria-label="Eu sou">
          <button type="button" data-role="manager" aria-pressed="${loginRole === "manager"}">Síndico</button>
          <button type="button" data-role="resident" aria-pressed="${loginRole === "resident"}">Morador</button>
        </div>
        ${loginRole === "resident" ? `<div class="note">${icon("info", "sm")}<span>O app do morador é a próxima etapa deste protótipo. Por enquanto, entre como síndico.</span></div>` : ""}
        <div class="field"><label for="email">E-mail</label><input class="input" id="email" type="email" autocomplete="username" value="${MANAGER.email}" required></div>
        <div class="field"><label for="password">Senha</label><input class="input" id="password" type="password" autocomplete="current-password" value="senha-demo" required></div>
        <div class="row-between">
          <label class="check"><input type="checkbox" id="remember" checked> Manter conectado</label>
          <button type="button" class="link" id="forgot">Esqueci a senha</button>
        </div>
        <p class="form-error" id="login-error" hidden></p>
        <button class="btn btn-primary btn-block" type="submit" ${loginRole === "resident" ? "disabled" : ""}>Entrar</button>
        <div class="divider">ou</div>
        <button type="button" class="btn btn-secondary btn-block" id="code-login">${icon("key", "sm")} Entrar com o código do condomínio</button>
        <p class="fine">Protótipo · qualquer e-mail e senha funcionam</p>
      </form>
    </div>`;
  }
  function bindLogin() {
    document.querySelectorAll("[data-role]").forEach((b) => (b.onclick = () => { loginRole = b.dataset.role; render(); }));
    $("#forgot").onclick = () => toast("Enviaríamos um link para redefinir a senha neste e-mail.");
    $("#code-login").onclick = () => toast("O código do condomínio chega junto com o app do morador.");
    $("#login-form").onsubmit = (e) => {
      e.preventDefault();
      const email = $("#email").value.trim(), pw = $("#password").value;
      const err = $("#login-error");
      if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "Digite o e-mail que você usa no CondoGest, como nome@condominio.com.br."; err.hidden = false; return; }
      if (!pw) { err.textContent = "Digite sua senha."; err.hidden = false; return; }
      state.signedIn = true; save(); location.hash = "home";
    };
  }

  // ---------- Início ----------
  function renderHome() {
    const p = pending();
    const todays = onDay(plus(0));
    const nm = nowMinutes();
    const header = `<header class="topbar">
      <div class="title"><div class="eyebrow">${esc(BUILDING.name)} · ${BUILDING.units} aptos</div><h1>${greeting()}, ${MANAGER.first}</h1></div>
      <button class="icon-btn" type="button" id="bell" aria-label="Notificações">${icon("bell")}<span class="dot"></span></button>
      <a class="avatar" href="#mais" aria-label="Perfil">${MANAGER.initials}</a></header>`;
    const att = p.length
      ? `<a class="attention" href="#reservas" data-tab="requests">
          <div class="row"><span class="big">${p.length}</span><div><div class="lbl">${p.length > 1 ? "pedidos de reserva aguardam" : "pedido de reserva aguarda"} sua resposta</div><div class="sub">O mais antigo chegou ${relDay(p.map((b) => b.created || plus(0)).sort()[0])}</div></div></div>
          <span class="go">Ver pedidos ${icon("right", "sm")}</span></a>`
      : `<div class="attention"><div class="lbl">Tudo em dia</div><div class="sub">Nenhum pedido de reserva aguardando você.</div></div>`;
    const timeline = todays.length
      ? `<div class="list timeline">${todays.map((b) => {
          const a = areaById(b.area), r = residentByUnit(b.unit);
          const live = !a.overnight && mins(b.start) <= nm && nm < mins(b.end);
          return `<button class="tl-item" type="button" data-booking="${b.id}"><span class="tl-time">${a.overnight ? "15:00" : b.start}</span>
            <span class="tl-body">${chip(a)}<span class="grow"><span class="tl-name">${esc(a.name)}</span>
            <span class="small muted">Apto ${b.unit} · ${esc(r.name)}</span></span>${live ? `<span class="tl-now">Agora</span>` : b.status === "pending" ? statusPill("pending") : ""}</span></button>`;
        }).join("")}</div>`
      : `<div class="card empty">${icon("calendar")}<strong>Nenhuma reserva hoje</strong></div>`;
    const body = `${att}
      <div class="stats">
        <a class="card stat" href="#reservas" data-tab="schedule"><span class="n">${todays.length}</span><span class="l">Reservas hoje</span></a>
        <button class="card stat" type="button" data-soon="Chamados de manutenção" style="border:0;text-align:left"><span class="n">5</span><span class="l">Chamados abertos</span></button>
        <button class="card stat" type="button" data-soon="Controle de encomendas" style="border:0;text-align:left"><span class="n">12</span><span class="l">Encomendas na portaria</span></button>
      </div>
      <section class="section"><div class="section-head"><h2>Ações rápidas</h2></div>
        <div class="quick">
          <button type="button" id="qa-book"><span class="ic">${icon("calendar")}</span>Reservar área</button>
          <button type="button" id="qa-notice"><span class="ic">${icon("megaphone")}</span>Publicar aviso</button>
          <button type="button" data-soon="Controle de encomendas"><span class="ic">${icon("package")}</span>Registrar encomenda</button>
          <button type="button" data-soon="Chamados de manutenção"><span class="ic">${icon("wrench")}</span>Abrir chamado</button>
        </div></section>
      <section class="section"><div class="section-head"><h2>Hoje no prédio</h2><a class="link" href="#reservas" data-tab="schedule">Agenda completa</a></div>${timeline}</section>
      <section class="section"><div class="section-head"><h2>Último aviso</h2><a class="link" href="#avisos">Todos os avisos</a></div>
        <article class="card notice"><span class="t">${esc(NOTICES[0].title)}</span><p>${esc(NOTICES[0].body)}</p><span class="meta"><span>${NOTICES[0].when}</span><span>Lido por ${NOTICES[0].reads} de ${BUILDING.units} aptos</span></span></article></section>`;
    return shell("home", header, body);
  }
  function bindHome() {
    $("#bell").onclick = () => toast(`${plural(pending().length, "pedido aguardando", "pedidos aguardando")} e 2 chamados novos.`);
    $("#qa-book").onclick = pickAreaSheet;
    $("#qa-notice").onclick = composeNotice;
  }

  // ---------- Reservas ----------
  function renderBookings() {
    const p = pending();
    const tab = state.bookTab;
    const tabs = `<div class="tabs" role="tablist">
      <button type="button" role="tab" data-btab="requests" aria-selected="${tab === "requests"}">Pedidos ${p.length ? `<span class="badge">${p.length}</span>` : ""}</button>
      <button type="button" role="tab" data-btab="schedule" aria-selected="${tab === "schedule"}">Agenda</button>
      <button type="button" role="tab" data-btab="areas" aria-selected="${tab === "areas"}">Áreas</button></div>`;
    let body = "";
    if (tab === "requests") body = renderRequests(p);
    if (tab === "schedule") body = renderSchedule();
    if (tab === "areas") body = renderAreas();
    return shell("reservas", topbar("Áreas comuns", "Reservas"), tabs + body,
      `<button class="fab" type="button" id="fab-book">${icon("plus")} Nova reserva</button>`);
  }
  function renderRequests(p) {
    if (!p.length) return `<div class="card empty">${icon("check")}<strong>Nenhum pedido aguardando</strong><span>Novos pedidos dos moradores aparecem aqui.</span></div>`;
    return `<div class="stack">${p.map((b) => {
      const a = areaById(b.area), r = residentByUnit(b.unit);
      const total = a.fee * (b.nights || 1);
      return `<article class="card req">
        <div class="req-head">${chip(a)}<div class="grow"><div class="t">${esc(a.name)}</div><div class="s">Apto ${b.unit} · ${esc(r.name)}</div></div>${statusPill("pending")}</div>
        <div class="facts"><div><span class="k">Data</span><span class="v">${dayLabel(b.date)}</span></div>
          <div><span class="k">${a.overnight ? "Estadia" : "Horário"}</span><span class="v">${timeRange(b)}</span></div>
          <div><span class="k">Pessoas</span><span class="v">${b.guests}</span></div></div>
        ${b.note ? `<p class="quote">“${esc(b.note)}”</p>` : ""}
        ${b.flag ? `<div class="flag">${icon("alert", "sm")}${esc(b.flag)}</div>` : ""}
        <div class="small muted">Taxa ${money(total)}${a.deposit ? ` + caução de ${money(a.deposit)} (devolvida)` : ""}</div>
        <div class="req-actions"><button class="btn btn-sm btn-ghost-bad" type="button" data-decline="${b.id}">${icon("x", "sm")} Recusar</button>
          <button class="btn btn-sm btn-ok" type="button" data-approve="${b.id}">${icon("check", "sm")} Aprovar</button></div>
      </article>`;
    }).join("")}</div>`;
  }
  function renderSchedule() {
    const days = Array.from({ length: 14 }, (_, i) => plus(i - 1));
    const list = onDay(state.day, state.areaFilter);
    return `<div class="datestrip" id="datestrip">${days.map((d) => {
        const dt = parse(d), n = Math.min(onDay(d).length, 4);
        return `<button class="date" type="button" data-day="${d}" aria-pressed="${d === state.day}" aria-label="${dayLabel(d)}">
          <span class="dw">${d === plus(0) ? "Hoje" : WD[dt.getDay()]}</span><span class="dn">${dt.getDate()}</span><span class="dots">${"<i></i>".repeat(n)}</span></button>`;
      }).join("")}</div>
      <div class="chips"><button class="chip" type="button" data-filter="all" aria-pressed="${state.areaFilter === "all"}">Todas as áreas</button>
        ${AREAS.filter((a) => !a.closed).map((a) => `<button class="chip" type="button" data-filter="${a.id}" aria-pressed="${state.areaFilter === a.id}">${esc(a.name)}</button>`).join("")}</div>
      <section class="section"><div class="section-head"><h2>${dayLabel(state.day)}</h2><span class="small muted">${plural(list.length, "reserva", "reservas")}</span></div>
      ${list.length ? `<div class="list">${list.map((b) => {
        const a = areaById(b.area), r = residentByUnit(b.unit);
        return `<button class="list-item" type="button" data-booking="${b.id}">${chip(a)}<span class="grow"><span class="t" style="display:block">${esc(a.name)} <span class="mono muted">${timeRange(b)}</span></span>
          <span class="s" style="display:block">Apto ${b.unit} · ${esc(r.name)} · ${plural(b.guests, "pessoa", "pessoas")}</span></span>${b.status === "pending" ? statusPill("pending") : icon("right", "sm chev")}</button>`;
      }).join("")}</div>` : `<div class="card empty">${icon("calendar")}<strong>Nenhuma reserva</strong><span>Toque em “Nova reserva” para reservar uma área para um morador.</span></div>`}</section>`;
  }
  function renderAreas() {
    return `<div class="stack">${AREAS.map((a) => {
      const week = Array.from({ length: 7 }, (_, i) => plus(i));
      const used = a.slots.length ? week.reduce((s, d) => s + onDay(d, a.id).length, 0) / (a.slots.length * 7) : 0;
      const pill = a.closed ? `<span class="pill closed">Fechada</span>` : needsApproval(a) ? `<span class="pill approval">Com aprovação</span>` : `<span class="pill open">Imediata</span>`;
      return `<a class="card area-card" href="#area-${a.id}">${chip(a, true)}<span class="grow">
        <span class="row-between"><span class="t">${esc(a.name)}</span>${pill}</span>
        <span class="meta"><span>Até ${a.capacity} pessoas</span><span>${a.overnight ? `${money(a.fee)}/noite` : money(a.fee)}</span><span>${esc(a.floor)}</span></span>
        ${a.closed ? `<span class="small" style="color:var(--bad)">${esc(a.closed)}</span>` : `<span class="occ" title="Ocupação nos próximos 7 dias"><i style="width:${Math.max(4, Math.round(used * 100))}%"></i></span><span class="small muted">${Math.round(used * 100)}% reservado nos próximos 7 dias</span>`}
        </span></a>`;
    }).join("")}</div>`;
  }
  function bindBookings() {
    document.querySelectorAll("[data-btab]").forEach((b) => (b.onclick = () => { state.bookTab = b.dataset.btab; save(); render(); }));
    document.querySelectorAll("[data-day]").forEach((b) => (b.onclick = () => { state.day = b.dataset.day; save(); render(); }));
    document.querySelectorAll("[data-filter]").forEach((b) => (b.onclick = () => { state.areaFilter = b.dataset.filter; save(); render(); }));
    document.querySelectorAll("[data-approve]").forEach((b) => (b.onclick = () => approve(b.dataset.approve)));
    document.querySelectorAll("[data-decline]").forEach((b) => (b.onclick = () => declineSheet(b.dataset.decline)));
    $("#fab-book").onclick = pickAreaSheet;
    const sel = $("#datestrip [aria-pressed=true]");
    if (sel) sel.scrollIntoView({ block: "nearest", inline: "center" });
  }
  function setStatus(id, status, extra) {
    const b = state.bookings.find((x) => x.id === id);
    const prev = { status: b.status, reason: b.reason };
    b.status = status; Object.assign(b, extra || {}); save(); render();
    return () => { b.status = prev.status; b.reason = prev.reason; save(); render(); };
  }
  function approve(id) {
    const b = state.bookings.find((x) => x.id === id);
    const undo = setStatus(id, "approved");
    toast(`Aprovada. Avisamos ${residentByUnit(b.unit).name}.`, undo);
  }
  function declineSheet(id) {
    const b = state.bookings.find((x) => x.id === id), a = areaById(b.area);
    const reasons = ["Data indisponível", "Acima do limite de pessoas", "Taxas condominiais em atraso", "Limite de reservas do mês"];
    openSheet(`<h2>Recusar pedido: ${esc(a.name)}?</h2>
      <p class="muted" style="margin:0">Apto ${b.unit} · ${dayLabel(b.date)} · ${timeRange(b)}. O morador verá o motivo.</p>
      <div class="chips" style="flex-wrap:wrap">${reasons.map((r, i) => `<button class="chip" type="button" data-reason="${esc(r)}" aria-pressed="${i === (b.flag && b.flag.includes("limite") ? 1 : 0)}">${esc(r)}</button>`).join("")}</div>
      <div class="field"><label for="decline-msg">Mensagem ao morador (opcional)</label><textarea class="input" id="decline-msg" placeholder="Ex.: O salão está livre no sábado seguinte."></textarea></div>
      <div class="req-actions"><button class="btn btn-secondary" type="button" data-close>Manter pedido</button><button class="btn btn-ghost-bad" type="button" id="do-decline">Recusar</button></div>`,
      (sh) => {
        sh.querySelectorAll("[data-reason]").forEach((c) => (c.onclick = () => { sh.querySelectorAll("[data-reason]").forEach((x) => x.setAttribute("aria-pressed", "false")); c.setAttribute("aria-pressed", "true"); }));
        $("#do-decline").onclick = () => {
          const r = sh.querySelector("[data-reason][aria-pressed=true]");
          closeSheet();
          const undo = setStatus(id, "declined", { reason: r ? r.dataset.reason : "" });
          toast(`Recusada. O apto ${b.unit} recebeu o motivo.`, undo);
        };
      });
  }
  function bookingSheet(id) {
    const b = state.bookings.find((x) => x.id === id), a = areaById(b.area), r = residentByUnit(b.unit);
    const total = a.fee * (b.nights || 1);
    openSheet(`<div class="area-hero">${chip(a, true)}<div><h2>${esc(a.name)}</h2>${statusPill(b.status)}</div></div>
      <div class="card summary">
        <div><span>Morador</span><span>${esc(r.name)}, apto ${b.unit}</span></div>
        <div><span>Data</span><span>${dayLabel(b.date)}</span></div>
        <div><span>${a.overnight ? "Estadia" : "Horário"}</span><span>${a.overnight ? `${timeRange(b)}, check-in 15:00` : timeRange(b)}</span></div>
        <div><span>Pessoas</span><span>${b.guests}</span></div>
        <div><span>Taxa</span><span>${money(total)}${a.deposit ? ` + caução ${money(a.deposit)}` : ""}</span></div>
      </div>
      ${b.note ? `<p class="quote">“${esc(b.note)}”</p>` : ""}
      ${b.status === "pending"
        ? `<div class="req-actions"><button class="btn btn-ghost-bad" type="button" id="s-decline">Recusar</button><button class="btn btn-ok" type="button" id="s-approve">Aprovar</button></div>`
        : `<div class="req-actions"><button class="btn btn-secondary" type="button" id="s-msg">Enviar mensagem</button><button class="btn btn-ghost-bad" type="button" id="s-cancel">Cancelar reserva</button></div>`}`,
      () => {
        if ($("#s-approve")) { $("#s-approve").onclick = () => { closeSheet(); approve(id); }; $("#s-decline").onclick = () => declineSheet(id); }
        if ($("#s-msg")) {
          $("#s-msg").onclick = () => toast("Mensagens chegam em uma próxima versão.");
          $("#s-cancel").onclick = () => {
            const btn = $("#s-cancel");
            if (btn.dataset.armed) { closeSheet(); const undo = setStatus(id, "cancelled"); toast(`Reserva cancelada. O apto ${b.unit} foi avisado.`, undo); }
            else { btn.dataset.armed = "1"; btn.textContent = "Toque de novo para cancelar"; }
          };
        }
      });
  }
  function pickAreaSheet() {
    openSheet(`<h2>Qual área?</h2><div class="list">${AREAS.map((a) =>
      `<button class="list-item" type="button" data-pick="${a.id}" ${a.closed ? "disabled" : ""} style="${a.closed ? "opacity:.5" : ""}">${chip(a)}<span class="grow"><span class="t" style="display:block">${esc(a.name)}</span><span class="s" style="display:block">${a.closed ? esc(a.closed) : `Até ${a.capacity} pessoas · ${a.overnight ? money(a.fee) + "/noite" : money(a.fee)}`}</span></span>${icon("right", "sm chev")}</button>`).join("")}</div>`,
      (sh) => sh.querySelectorAll("[data-pick]").forEach((b) => (b.onclick = () => { closeSheet(); location.hash = "area-" + b.dataset.pick; })));
  }

  // ---------- Página da área ----------
  function renderArea(id) {
    const a = areaById(id);
    if (!a) return renderBookings();
    const day = state.areaDay[id] || plus(0);
    const days = Array.from({ length: Math.min(a.window || 7, 14) }, (_, i) => plus(i));
    const nm = nowMinutes();
    const back = `<a class="icon-btn back" href="#reservas" aria-label="Voltar para reservas">${icon("left")}</a>`;
    const slots = a.closed
      ? `<div class="banner bad">${icon("alert", "sm")}<span>${esc(a.closed)}. Os moradores não podem reservar até lá.</span></div>`
      : `<div class="datestrip">${days.map((d) => { const dt = parse(d); const n = onDay(d, a.id).length;
          return `<button class="date" type="button" data-aday="${d}" aria-pressed="${d === day}"><span class="dw">${d === plus(0) ? "Hoje" : WD[dt.getDay()]}</span><span class="dn">${dt.getDate()}</span><span class="dots">${"<i></i>".repeat(Math.min(n, 4))}</span></button>`; }).join("")}</div>
        <div class="slots">${a.slots.map(([s, e]) => {
          const b = slotBooking(a.id, day, s);
          const past = day === plus(0) && !a.overnight && mins(e) <= nm;
          const label = a.overnight ? `Check-in ${s}` : `${s}–${e}`;
          if (b) return `<button class="slot booked ${b.status}" type="button" data-booking="${b.id}"><span class="tm">${label}</span><span class="st">${b.status === "pending" ? "Pedido" : "Reservado"} · ${b.unit}</span></button>`;
          return `<button class="slot ${past ? "past" : ""}" type="button" ${past ? "disabled" : `data-slot="${s}|${e}"`}><span class="tm">${label}</span><span class="st">${past ? "Encerrado" : "Livre"}</span></button>`;
        }).join("")}</div>`;
    const body = `<div class="area-hero">${chip(a, true)}<div><h2>${esc(a.name)}</h2><span class="muted small">${esc(a.floor)}</span></div></div>
      <div class="kv"><div><span class="k">Capacidade</span><span class="v">${a.capacity} pessoas</span></div>
        <div><span class="k">Taxa</span><span class="v">${a.overnight ? money(a.fee) + " / noite" : money(a.fee)}${a.deposit ? ` · caução ${money(a.deposit)}` : ""}</span></div>
        <div><span class="k">Antecedência</span><span class="v">${a.window ? `Até ${a.window} dias` : "—"}</span></div>
        <div><span class="k">Cancelamento grátis</span><span class="v">Até ${a.cancel} antes</span></div></div>
      <section class="section"><div class="section-head"><h2>Disponibilidade</h2>${a.closed ? "" : `<span class="small muted">${dayLabel(day)}</span>`}</div>${slots}</section>
      <section class="section"><div class="section-head"><h2>Regras de reserva</h2></div>
        <div class="list">
          <label class="switch-row"><span class="grow"><span class="t" style="display:block;font-weight:600">Exige minha aprovação</span><span class="small muted">Desligado: a reserva do morador é confirmada na hora.</span></span>
            <span class="switch"><input type="checkbox" id="approval-toggle" ${needsApproval(a) ? "checked" : ""}><span></span></span></label>
          <div class="list-item"><span class="grow"><span class="t" style="display:block">Limite por apartamento</span><span class="s" style="display:block">${a.perMonth ? `${plural(a.perMonth, "reserva", "reservas")} por mês` : "Não precisa de reserva"}</span></span><span class="soon">Em breve</span></div>
        </div></section>
      <section class="section"><div class="section-head"><h2>Regulamento</h2></div><ul class="rules">${a.rules.map((r) => `<li>${icon("check", "sm")}<span>${esc(r)}</span></li>`).join("")}</ul></section>`;
    return shell("reservas", topbar("Área comum", a.name, "", back), body);
  }
  function bindArea(id) {
    const a = areaById(id);
    document.querySelectorAll("[data-aday]").forEach((b) => (b.onclick = () => { state.areaDay[id] = b.dataset.aday; save(); render(); }));
    document.querySelectorAll("[data-slot]").forEach((b) => (b.onclick = () => { const [s, e] = b.dataset.slot.split("|"); newBookingSheet(a, state.areaDay[id] || plus(0), s, e); }));
    const t = $("#approval-toggle");
    if (t) t.onchange = () => { state.approvalOverride[id] = t.checked; save(); toast(t.checked ? `Novas reservas de ${a.name} vão aguardar sua aprovação.` : `Reservas de ${a.name} agora são confirmadas na hora.`); };
  }
  function newBookingSheet(a, day, s, e) {
    let guests = Math.min(2, a.capacity), nights = 1;
    const draw = () => {
      $("#g-out").textContent = guests;
      if ($("#n-out")) $("#n-out").textContent = nights;
      $("#nb-total").textContent = money(a.fee * (a.overnight ? nights : 1));
    };
    openSheet(`<h2>Reservar ${esc(a.name)}</h2>
      <div class="card summary"><div><span>Data</span><span>${dayLabel(day)}</span></div><div><span>${a.overnight ? "Check-in" : "Horário"}</span><span class="mono">${a.overnight ? s : `${s}–${e}`}</span></div></div>
      <div class="field"><label for="nb-unit">Morador</label><select class="input" id="nb-unit">${RESIDENTS.map((r) => `<option value="${r.unit}">Apto ${r.unit} · ${esc(r.name)}</option>`).join("")}</select></div>
      <div class="row-between"><div class="field"><label>Pessoas (máx. ${a.capacity})</label>
        <div class="stepper"><button type="button" id="g-dec" aria-label="Menos pessoas">${icon("minus", "sm")}</button><output id="g-out">${guests}</output><button type="button" id="g-inc" aria-label="Mais pessoas">${icon("plus", "sm")}</button></div></div>
        ${a.overnight ? `<div class="field"><label>Noites</label><div class="stepper"><button type="button" id="n-dec" aria-label="Menos noites">${icon("minus", "sm")}</button><output id="n-out">${nights}</output><button type="button" id="n-inc" aria-label="Mais noites">${icon("plus", "sm")}</button></div></div>` : ""}</div>
      <div class="field"><label for="nb-note">Observação (opcional)</label><textarea class="input" id="nb-note" placeholder="Visível para o morador e a portaria"></textarea></div>
      <div class="row-between"><span class="muted">Lançado no boleto do apartamento</span><strong id="nb-total">${money(a.fee)}</strong></div>
      <button class="btn btn-primary btn-block" type="button" id="nb-confirm">Confirmar reserva</button>`,
      () => {
        $("#g-dec").onclick = () => { guests = Math.max(1, guests - 1); draw(); };
        $("#g-inc").onclick = () => { guests = Math.min(a.capacity, guests + 1); draw(); };
        if (a.overnight) { $("#n-dec").onclick = () => { nights = Math.max(1, nights - 1); draw(); }; $("#n-inc").onclick = () => { nights = Math.min(4, nights + 1); draw(); }; }
        $("#nb-confirm").onclick = () => {
          const unit = $("#nb-unit").value;
          const b = { id: "b" + ++state.seq, area: a.id, unit, date: day, start: s, end: e, guests, status: "approved", note: $("#nb-note").value.trim(), created: plus(0) };
          if (a.overnight) b.nights = nights;
          state.bookings.push(b); save(); closeSheet(); render();
          toast(`${a.name} reservada para o apto ${unit} (${relDay(day)}).`, () => { state.bookings = state.bookings.filter((x) => x !== b); save(); render(); });
        };
      });
  }

  // ---------- Moradores ----------
  let residentQuery = "";
  function renderResidents() {
    const q = residentQuery.toLowerCase();
    const list = RESIDENTS.filter((r) => !q || r.name.toLowerCase().includes(q) || r.unit.includes(q));
    const body = `<div class="search">${icon("search", "sm")}<input class="input" id="r-search" type="search" placeholder="Buscar por nome ou apartamento" value="${esc(residentQuery)}" aria-label="Buscar moradores"></div>
      <div class="small muted">Mostrando ${list.length} de ${RESIDENTS.length} aptos de exemplo · ${BUILDING.units} no prédio</div>
      ${list.length ? `<div class="list">${list.map((r) => {
        const next = state.bookings.filter((b) => b.unit === r.unit && active(b) && b.date >= plus(0)).sort((x, y) => x.date.localeCompare(y.date))[0];
        return `<button class="list-item" type="button" data-unit="${r.unit}"><span class="unit-tag">${r.unit}</span><span class="grow"><span class="t" style="display:block">${esc(r.name)}</span>
          <span class="s" style="display:block">${r.kind}${next ? ` · ${areaById(next.area).name} ${relDay(next.date)}` : ""}</span></span>${icon("right", "sm chev")}</button>`;
      }).join("")}</div>` : `<div class="card empty">${icon("search")}<strong>Ninguém encontrado para “${esc(residentQuery)}”</strong><span>Tente um número de apartamento, como 1204.</span></div>`}`;
    return shell("moradores", topbar(BUILDING.name, "Moradores", `<button class="icon-btn" type="button" data-soon="Cadastro de moradores" aria-label="Adicionar morador">${icon("plus")}</button>`), body);
  }
  function bindResidents() {
    const s = $("#r-search");
    s.oninput = () => { residentQuery = s.value; const pos = s.selectionStart; render(); const n = $("#r-search"); n.focus(); n.setSelectionRange(pos, pos); };
    document.querySelectorAll("[data-unit]").forEach((b) => (b.onclick = () => {
      const r = residentByUnit(b.dataset.unit);
      const bks = state.bookings.filter((x) => x.unit === r.unit && active(x)).sort((x, y) => x.date.localeCompare(y.date));
      openSheet(`<div class="area-hero"><span class="unit-tag" style="width:64px;padding:12px 0;font-size:16px">${r.unit}</span><div><h2>${esc(r.name)}</h2><span class="muted small">${r.kind} · ${r.unit.slice(0, -2)}º andar</span></div></div>
        <section class="section"><div class="section-head"><h2>Reservas</h2></div>${bks.length ? `<div class="list">${bks.map((x) => { const a = areaById(x.area);
          return `<div class="list-item">${chip(a)}<span class="grow"><span class="t" style="display:block">${esc(a.name)}</span><span class="s" style="display:block">${dayLabel(x.date)} · ${timeRange(x)}</span></span>${x.status === "pending" ? statusPill("pending") : ""}</div>`; }).join("")}</div>` : `<p class="muted" style="margin:0">Nenhuma reserva.</p>`}</section>
        <div class="req-actions"><button class="btn btn-secondary" type="button" data-close>Fechar</button><button class="btn btn-primary" type="button" id="r-msg">Mensagem</button></div>`,
        () => ($("#r-msg").onclick = () => toast("Mensagens chegam em uma próxima versão.")));
    }));
  }

  // ---------- Avisos ----------
  function renderNotices() {
    const body = `<div class="stack">${NOTICES.map((n) => `<article class="card notice">${n.pinned ? `<span class="soon" style="align-self:flex-start">Fixado</span>` : ""}<span class="t">${esc(n.title)}</span><p>${esc(n.body)}</p><span class="meta"><span>${esc(n.when)}</span><span>Lido por ${n.reads} de ${BUILDING.units} aptos</span></span></article>`).join("")}</div>`;
    return shell("avisos", topbar(BUILDING.name, "Avisos"), body, `<button class="fab" type="button" id="fab-notice">${icon("plus")} Novo aviso</button>`);
  }
  function composeNotice() {
    openSheet(`<h2>Novo aviso</h2>
      <div class="field"><label for="nt-title">Título</label><input class="input" id="nt-title" placeholder="Ex.: Elevador B em manutenção"></div>
      <div class="field"><label for="nt-body">Mensagem</label><textarea class="input" id="nt-body" rows="4" placeholder="O que vai acontecer, quando e o que os moradores devem fazer"></textarea></div>
      <label class="check"><input type="checkbox" id="nt-push" checked> Enviar também como notificação</label>
      <button class="btn btn-primary btn-block" type="button" id="nt-send">Publicar para os ${BUILDING.units} aptos</button>`,
      () => ($("#nt-send").onclick = () => {
        const t = $("#nt-title").value.trim();
        if (!t) { $("#nt-title").focus(); $("#nt-title").placeholder = "Escreva um título primeiro"; return; }
        NOTICES.unshift({ id: "n" + Date.now(), title: t, body: $("#nt-body").value.trim() || "Sem detalhes.", when: "Agora", reads: 0 });
        closeSheet(); toast("Aviso publicado."); if (location.hash !== "#avisos") location.hash = "avisos"; else render();
      }));
  }

  // ---------- Mais ----------
  function renderMore() {
    const item = (ic, t, s, attrs) => `<button class="list-item" type="button" ${attrs}><span class="area-chip" style="background:var(--surface-2)">${icon(ic, "sm")}</span><span class="grow"><span class="t" style="display:block">${t}</span><span class="s" style="display:block">${s}</span></span>${/data-soon/.test(attrs) ? `<span class="soon">Em breve</span>` : icon("right", "sm chev")}</button>`;
    const body = `<div class="card profile"><span class="avatar">${MANAGER.initials}</span><div><div style="font-family:var(--f-display);font-weight:700;font-size:18px">${MANAGER.name}</div><div class="small muted">${MANAGER.role} · ${BUILDING.name}</div><div class="small muted">${MANAGER.email}</div></div></div>
      <section class="section"><div class="section-head"><h2>Condomínio</h2></div><div class="list">
        ${item("building", BUILDING.name, `${BUILDING.address} · ${BUILDING.floors} andares`, 'data-soon="Dados do condomínio"')}
        ${item("wrench", "Chamados de manutenção", "5 abertos, 2 novos hoje", 'data-soon="Chamados de manutenção"')}
        ${item("package", "Encomendas", "12 aguardando na portaria", 'data-soon="Controle de encomendas"')}
        ${item("coin", "Taxas e boletos", "3 apartamentos em atraso este mês", 'data-soon="Taxas e boletos"')}
        ${item("doc", "Documentos", "Convenção, atas, seguro", 'data-soon="Documentos"')}
      </div></section>
      <section class="section"><div class="section-head"><h2>Protótipo</h2></div><div class="list">
        ${item("sun", "Aparência", "Segue o modo claro ou escuro do celular", 'data-soon="Escolha de tema"')}
        ${item("refresh", "Restaurar dados de exemplo", "Volta às reservas iniciais", 'id="reset"')}
        ${item("logout", "Sair", MANAGER.email, 'id="signout"')}
      </div></section>
      <p class="fine">CondoGest · protótipo v0.1 · apenas dados de exemplo</p>`;
    return shell("mais", topbar("Conta", "Mais"), body);
  }
  function bindMore() {
    $("#signout").onclick = () => { state.signedIn = false; save(); location.hash = "login"; };
    $("#reset").onclick = () => { const s = fresh(); s.seedDay = plus(0); s.signedIn = true; state = s; save(); toast("Dados de exemplo restaurados."); render(); };
  }

  // ---------- Rotas ----------
  function route() {
    let h = (location.hash || "").replace(/^#/, "");
    if (!state.signedIn && h !== "login") h = "login";
    if (state.signedIn && (h === "" || h === "login")) h = "home";
    return h;
  }
  function render() {
    const h = route();
    const app = $("#app");
    let html, bind;
    if (h === "login") { html = renderLogin(); bind = bindLogin; }
    else if (h === "reservas") { html = renderBookings(); bind = bindBookings; }
    else if (h.startsWith("area-")) { const id = h.slice(5); html = renderArea(id); bind = () => (areaById(id) ? bindArea(id) : bindBookings()); }
    else if (h === "moradores") { html = renderResidents(); bind = bindResidents; }
    else if (h === "avisos") { html = renderNotices(); bind = () => ($("#fab-notice").onclick = composeNotice); }
    else if (h === "mais") { html = renderMore(); bind = bindMore; }
    else { html = renderHome(); bind = bindHome; }
    app.innerHTML = html;
    bind();
    document.querySelectorAll("[data-booking]").forEach((b) => (b.onclick = () => bookingSheet(b.dataset.booking)));
    document.querySelectorAll("[data-soon]").forEach((b) => (b.onclick = () => toast(`${b.dataset.soon}: chega em uma próxima versão.`)));
    document.querySelectorAll("a[data-tab]").forEach((a) => a.addEventListener("click", () => { state.bookTab = a.dataset.tab; save(); }));
  }
  let lastRoute = null;
  window.addEventListener("hashchange", () => {
    closeSheet();
    const r = route();
    render();
    if (r !== lastRoute) window.scrollTo(0, 0);
    lastRoute = r;
  });
  lastRoute = route();
  render();
})();
