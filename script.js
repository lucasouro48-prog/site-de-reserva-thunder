// script.js - tradução, geração de horários, cálculo e envio WhatsApp
const translations = {
  pt: {
    brand: "Thunder Passeios de Lancha",
    home_title: "Passeios de Lancha na Lagoa de Guaraíras",
    home_sub: "Experiências privadas e seguras em Tibau do Sul — bancos de areia, bar molhado e fauna local.",
    explore: "Explorar rotas",
    book_now: "Reservar agora",
    routes_title: "Rotas & Atrações",
    routes_text: "Bar molhado, banco de areia para fotos, banho de agila, avistamento da garça azul (espécie em risco) e caranguejos goiamus.",
    duration: "Duração estimada: 1h10 a 1h30",
    location: "Local: Praia de Tibau do Sul — Passeios na Lagoa de Guaraíras.",
    gallery_title: "Galeria de Imagens",
    gallery_sub: "Fotos do passeio e pontos de parada.",
    reserve_title: "Reservar Passeio",
    name_label: "Nome completo",
    people_label: "Número de pessoas",
    time_label: "Horário disponível",
    payment_label: "Forma de pagamento",
    payment_credit: "Crédito (+R$5,00)",
    payment_pix: "Pix",
    payment_cash: "Dinheiro",
    preservation_fee: "Taxa de preservação por pessoa: R$10,00",
    price_per_person: "Preço por pessoa: R$70,00",
    total_label: "Total",
    submit_btn: "Enviar reserva por WhatsApp",
    whatsapp_note: "Será direcionado ao WhatsApp para finalizar a reserva.",
    replace_whatsapp: ""
  },
  en: {
    brand: "Thunder Boat Tours",
    home_title: "Boat Tours on Lagoa de Guaraíras",
    home_sub: "Private, safe experiences in Tibau do Sul — sandbanks, floating bar and local wildlife.",
    explore: "Explore routes",
    book_now: "Book now",
    routes_title: "Routes & Attractions",
    routes_text: "Floating bar, sandbank for photos, mud bath, sightings of the blue heron (endangered) and goiamus crabs.",
    duration: "Estimated duration: 1h10 to 1h30",
    location: "Location: Tibau do Sul beach — Tours on Lagoa de Guaraíras.",
    gallery_title: "Image Gallery",
    gallery_sub: "Photos from tours and stop points.",
    reserve_title: "Reserve Tour",
    name_label: "Full name",
    people_label: "Number of people",
    time_label: "Available time",
    payment_label: "Payment method",
    payment_credit: "Credit (+R$5.00)",
    payment_pix: "Pix",
    payment_cash: "Cash",
    preservation_fee: "Preservation fee per person: R$10.00",
    price_per_person: "Price per person: R$70.00",
    total_label: "Total",
    submit_btn: "Send reservation via WhatsApp",
    whatsapp_note: "You'll be redirected to WhatsApp to finish the booking.",
    replace_whatsapp: ""
  },
  es: {
    brand: "Thunder Paseos en Lancha",
    home_title: "Paseos en lancha en la Lagoa de Guaraíras",
    home_sub: "Experiencias privadas y seguras en Tibau do Sul — bancos de arena, bar flotante y fauna local.",
    explore: "Explorar rutas",
    book_now: "Reservar ahora",
    routes_title: "Rutas y Atracciones",
    routes_text: "Bar flotante, banco de arena para fotos, baño de lodo, avistamiento de la garza azul (en peligro) y cangrejos goiamus.",
    duration: "Duración estimada: 1h10 a 1h30",
    location: "Ubicación: Playa de Tibau do Sul — Paseos en la Lagoa de Guaraíras.",
    gallery_title: "Galería de Imágenes",
    gallery_sub: "Fotos del paseo y puntos de parada.",
    reserve_title: "Reservar Paseo",
    name_label: "Nombre completo",
    people_label: "Número de personas",
    time_label: "Horario disponible",
    payment_label: "Forma de pago",
    payment_credit: "Crédito (+R$5,00)",
    payment_pix: "Pix",
    payment_cash: "Efectivo",
    preservation_fee: "Tasa de preservación por persona: R$10,00",
    price_per_person: "Precio por persona: R$70,00",
    total_label: "Total",
    submit_btn: "Enviar reserva por WhatsApp",
    whatsapp_note: "Serás dirigido a WhatsApp para finalizar la reserva.",
    replace_whatsapp: ""
  },
  zh: { // Chinese simplified
    brand: "Thunder 快艇游",
    home_title: "瓜拉艾拉斯潟湖快艇游",
    home_sub: "在 Tibau do Sul 的私人安全体验 — 沙洲、浮动酒吧与当地野生动植物。",
    explore: "查看路线",
    book_now: "立即预订",
    routes_title: "路线与景点",
    routes_text: "浮动酒吧、沙洲拍照点、泥浴、蓝鹭观赏（濒危）与 goiamus 蟹。",
    duration: "预计时长：1小时10分至1小时30分",
    location: "地点：Tibau do Sul 海滩 — 瓜拉艾拉斯潟湖游览。",
    gallery_title: "图片库",
    gallery_sub: "游览与停靠点照片。",
    reserve_title: "预订行程",
    name_label: "全名",
    people_label: "人数",
    time_label: "可用时间",
    payment_label: "支付方式",
    payment_credit: "信用卡 (+R$5.00)",
    payment_pix: "Pix",
    payment_cash: "现金",
    preservation_fee: "每人保护费：R$10.00",
    price_per_person: "每人价格：R$70.00",
    total_label: "总额",
    submit_btn: "通过 WhatsApp 发送预订",
    whatsapp_note: "将跳转到 WhatsApp 完成预订。",
    replace_whatsapp: ""
  fr: {
    brand: "Thunder Tours en Bateau",
    home_title: "Balades en bateau sur la Lagoa de Guaraíras",
    home_sub: "Expériences privées et sécurisées à Tibau do Sul — bancs de sable, bar flottant et faune locale.",
    explore: "Explorer les itinéraires",
    book_now: "Réserver",
    routes_title: "Itinéraires & Attractions",
    routes_text: "Bar flottant, banc de sable pour photos, bain de boue, observation du héron bleu (en danger) et crabes goiamus.",
    duration: "Durée estimée : 1h10 à 1h30",
    location: "Emplacement : Plage de Tibau do Sul — Balades sur la Lagoa de Guaraíras.",
    gallery_title: "Galerie d'images",
    gallery_sub: "Photos des excursions et des points d'arrêt.",
    reserve_title: "Réserver une excursion",
    name_label: "Nom complet",
    people_label: "Nombre de personnes",
    time_label: "Heure disponible",
    payment_label: "Méthode de paiement",
    payment_credit: "Crédit (+R$5,00)",
    payment_pix: "Pix",
    payment_cash: "Espèces",
    preservation_fee: "Frais de préservation par personne : R$10,00",
    price_per_person: "Prix par personne : R$70,00",
    total_label: "Total",
    submit_btn: "Envoyer la réservation via WhatsApp",
    whatsapp_note: "Vous serez redirigé vers WhatsApp pour finaliser la réservation.",
    replace_whatsapp: ""
  },
  de: {
    brand: "Thunder Bootstouren",
    home_title: "Bootstouren auf der Lagoa de Guaraíras",
    home_sub: "Private, sichere Erlebnisse in Tibau do Sul — Sandbänke, schwimmende Bar und lokale Tierwelt.",
    explore: "Routen erkunden",
    book_now: "Jetzt buchen",
    routes_title: "Routen & Sehenswürdigkeiten",
    routes_text: "Schwimmende Bar, Sandbank für Fotos, Schlammbad, Sichtung des blauen Reihers (gefährdet) und goiamus-Krabben.",
    duration: "Geschätzte Dauer: 1h10 bis 1h30",
    location: "Ort: Strand von Tibau do Sul — Touren auf der Lagoa de Guaraíras.",
    gallery_title: "Bildergalerie",
    gallery_sub: "Fotos von Touren und Anlaufpunkten.",
    reserve_title: "Tour reservieren",
    name_label: "Vollständiger Name",
    people_label: "Anzahl Personen",
    time_label: "Verfügbare Uhrzeit",
    payment_label: "Zahlungsmethode",
    payment_credit: "Kredit (+R$5,00)",
    payment_pix: "Pix",
    payment_cash: "Bargeld",
    preservation_fee: "Erhaltungsgebühr pro Person: R$10,00",
    price_per_person: "Preis pro Person: R$70,00",
    total_label: "Gesamt",
    submit_btn: "Reservierung per WhatsApp senden",
    whatsapp_note: "Sie werden zu WhatsApp weitergeleitet, um die Buchung abzuschließen.",
    replace_whatsapp: ""
  },
  af: { // Afrikaans used for "africano"
    brand: "Thunder Boottoere",
    home_title: "Boottoere by Lagoa de Guaraíras",
    home_sub: "Privaat en veilige ervarings in Tibau do Sul — sandbanke, drywende kroeg en plaaslike wild.",
    explore: "Verken roetes",
    book_now: "Bespreek nou",
    routes_title: "Roetes & Aantreklikhede",
    routes_text: "Drywende kroeg, sandbank vir foto's, modderbad, waarneming van die blou reier (bedreig) en goiamus-krabbe.",
    duration: "Geskatte duur: 1u10 tot 1u30",
    location: "Ligging: Strand van Tibau do Sul — Toere op Lagoa de Guaraíras.",
    gallery_title: "Galerij van Beelde",
    gallery_sub: "Foto's van toere en stopplekke.",
    reserve_title: "Bespreek Toer",
    name_label: "Volle naam",
    people_label: "Aantal persone",
    time_label: "Beskikbare tyd",
    payment_label: "Betalingsmetode",
    payment_credit: "Krediet (+R$5,00)",
    payment_pix: "Pix",
    payment_cash: "Kontant",
    preservation_fee: "Bewaringsfooi per persoon: R$10,00",
    price_per_person: "Prys per persoon: R$70,00",
    total_label: "Totaal",
    submit_btn: "Stuur bespreking via WhatsApp",
    whatsapp_note: "Jy sal na WhatsApp herlei word om die bespreking te voltooi.",
    replace_whatsapp: ""
  }
};

// helper to set language
function setLanguage(lang){
  const t = translations[lang] || translations['pt'];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(t[key]) el.textContent = t[key];
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if(t[key]) el.placeholder = t[key];
  });
}

// generate times 09:00 to 16:20 every 20 min
function generateTimes(){
  const times = [];
  let h = 9, m = 0;
  while (h < 17){
    const hh = String(h).padStart(2,'0'), mm=String(m).padStart(2,'0');
    times.push(`${hh}:${mm}`);
    m += 20;
    if(m>=60){ h+=1; m-=60; }
    if(h===16 && m>20) break;
  }
  // ensure last 16:20 included
  if(!times.includes("16:20")) times.push("16:20");
  return times;
}

// fill time select if present
document.addEventListener('DOMContentLoaded',()=>{
  // language chooser
  const langEl = document.getElementById('lang') || document.querySelector('.lang-select');
  if(langEl){
    langEl.addEventListener('change', ()=> setLanguage(langEl.value));
    setLanguage(langEl.value || 'pt');
  } else setLanguage('pt');

  // populate times in reserve page
  const timeSelect = document.getElementById('time');
  if(timeSelect){
    generateTimes().forEach(t=>{
      const opt = document.createElement('option'); opt.value=t; opt.textContent=t;
      timeSelect.appendChild(opt);
    });
  }

  // price calc
  const peopleInput = document.getElementById('people');
  const paymentSelect = document.getElementById('payment');
  const totalBox = document.getElementById('total');
  function calc(){
    const people = Math.max(1, parseInt(peopleInput.value||1));
    const base = 70;
    const preservation = 10;
    let total = people * (base + preservation);
    if(paymentSelect && paymentSelect.value === 'credit') total += 5; // flat surcharge
    if(totalBox) totalBox.textContent = `R$ ${total.toFixed(2)}`;
  }
  if(peopleInput) peopleInput.addEventListener('input', calc);
  if(paymentSelect) paymentSelect.addEventListener('change', calc);
  calc();

  // form submit -> open WhatsApp with message
  const form = document.getElementById('reserveForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const people = parseInt(document.getElementById('people').value||1);
      const time = document.getElementById('time').value;
      const payment = document.getElementById('payment').value;
      const msg = encodeURIComponent(
        `Reserva Tunder\nNome: ${name}\nPessoas: ${people}\nHorário: ${time}\nPagamento: ${payment}\nObservações: `);
      // WhatsApp number: 5584999045759
      const waNumber = '5584999045759'; // substitute your number (country code +55...)
      // open WhatsApp (web or app)
      const url = `https://wa.me/$5584999045759?text=${msg}`;
      window.open(url,'_blank');
    });
  }

});



