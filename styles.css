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
    replace_whatsapp: "Substitua o número WhatsApp no código pelo seu."
  },
  // demais idiomas iguais ao seu código…
};

// aplicar idioma
function setLanguage(lang){
  const t = translations[lang] || translations['pt'];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if(t[key]) el.placeholder = t[key];
  });
}

// gerar horários
function generateTimes(){
  const times = [];
  let h = 9, m = 0;
  while (h < 17){
    const hh = String(h).padStart(2,'0');
    const mm = String(m).padStart(2,'0');
    times.push(`${hh}:${mm}`);
    m += 20;
    if(m>=60){ h+=1; m-=60; }
    if(h===16 && m>20) break;
  }
  if(!times.includes("16:20")) times.push("16:20");
  return times;
}

document.addEventListener('DOMContentLoaded',()=>{

  // idioma
  const langEl = document.getElementById('lang');
  if(langEl){
    langEl.addEventListener('change', ()=> setLanguage(langEl.value));
    setLanguage(langEl.value || 'pt');
  } else setLanguage('pt');

  // horários
  const timeSelect = document.getElementById('time');
  if(timeSelect){
    generateTimes().forEach(t=>{
      const opt = document.createElement('option');
      opt.value=t;
      opt.textContent=t;
      timeSelect.appendChild(opt);
    });
  }

  // cálculo do total
  const peopleInput = document.getElementById('people');
  const paymentSelect = document.getElementById('payment');
  const totalBox = document.getElementById('total');

  function calcularTotal() {
    const pessoas = parseInt(peopleInput.value) || 0;
    const pagamento = paymentSelect.value;

    const precoPorPessoa = 70;
    const taxaPreservacaoPorPessoa = 10;

    // AQUI ESTÁ O AJUSTE CORRETO
    const adicionalPorPessoa = (pagamento === 'credit' || pagamento === 'debit') ? 5 : 0;

    const total =
        pessoas * precoPorPessoa +
        pessoas * taxaPreservacaoPorPessoa +
        pessoas * adicionalPorPessoa;

    totalBox.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  peopleInput.addEventListener('input', calcularTotal);
  paymentSelect.addEventListener('change', calcularTotal);
  calcularTotal();

  // envio WhatsApp
  const form = document.getElementById('reserveForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const people = parseInt(peopleInput.value||1);
      const time = document.getElementById('time').value;
      const payment = document.getElementById('payment').value;
      const total = totalBox.textContent;

      const msg = encodeURIComponent(
        `Reserva Thunder\nNome: ${name}\nPessoas: ${people}\nHorário: ${time}\nPagamento: ${payment}\nTotal: ${total}`
      );

      const waNumber = "5584999045759";

      window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
    });
  }

});
