const questions = [
 {key:'recipient',title:"Who's the gift for?",hint:'Tell us who gets to unwrap it.',options:['My partner','Mom or Dad','A friend','A colleague','Myself','Someone else']},
 {key:'pet',title:'Which pet are we celebrating?',hint:'The one who gets all the attention.',options:['Dog','Cat','Horse','Another pet']},
 {key:'occasion',title:'Is this for a certain occasion?',hint:'Big day or small surprise?',options:['Birthday','Anniversary','Christmas / holidays',"Mother’s / Father’s Day",'Other','Just because']},
 {key:'preference',title:'What would they enjoy most?',hint:'Think about what would make them smile.',options:['Something useful','Something for their home','Something funny','A keepsake','Help me choose']},
 {key:'budget',title:"What's your budget?",hint:'Product price in US dollars, before shipping and tax.',options:['Up to $25','Over $25 to $50','Over $50 to $75','Over $75','No set budget']}
];
const app = document.querySelector('#app');
let step = -1;
let answers = {};
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function render(focus=true){
 if(step === -1){
  app.innerHTML = `<section class="intro"><div class="eyebrow">THE PET PRINTED GIFT FINDER</div><div class="pet-mark" aria-hidden="true">🐾</div><h1>They love their pet.<br>Let's find them a gift.</h1><p>Five quick questions. A little less guesswork.</p><button class="primary" id="start">Let's get started <span aria-hidden="true">→</span></button><div class="small">No sign-up. Just you and a few good questions.</div></section>`;
  document.querySelector('#start').onclick=()=>{step=0;render();};
 } else if(step < questions.length){
  const q=questions[step];
  app.innerHTML=`<section class="quiz"><div class="step-label">QUESTION ${step+1} OF 5</div><div class="progress" aria-hidden="true">${questions.map((_,i)=>`<span class="${i<=step?'filled':''}"></span>`).join('')}</div><h1 tabindex="-1">${escapeHtml(q.title)}</h1><p class="hint">${escapeHtml(q.hint)}</p><fieldset><legend class="sr-only">${escapeHtml(q.title)}</legend><div class="options">${q.options.map((option,i)=>`<label class="option"><input type="radio" name="answer" value="${i}" ${answers[q.key]===option?'checked':''}><span>${escapeHtml(option)}</span><span class="check" aria-hidden="true">✓</span></label>`).join('')}</div></fieldset><div class="navigation"><button class="back" id="back">← Back</button><button class="primary" id="next" ${answers[q.key]?'':'disabled'}>${step===4?'Review my answers':'Continue'} →</button></div><p class="small">Choose one answer to continue.</p></section>`;
  app.querySelectorAll('input').forEach(input=>input.onchange=()=>{answers[q.key]=q.options[Number(input.value)];document.querySelector('#next').disabled=false;});
  document.querySelector('#back').onclick=()=>{step--;render();};
  document.querySelector('#next').onclick=()=>{if(!answers[q.key])return;step++;render();};
 }else{
  const matches=recommendGifts(giftCatalog,answers);
  const occasionText={'Birthday':'A birthday surprise with their pet at the heart of it.','Anniversary':'A personal way to mark your anniversary.','Christmas / holidays':'Something personal to unwrap over the holidays.',"Mother’s / Father’s Day":'A little nod to the pet they love.'};
  app.innerHTML=`<section class="quiz results"><div class="eyebrow">A FEW GIFTS TO CONSIDER</div><h1 tabindex="-1">${matches.length?'Their pet. Their kind of gift.':'Let’s try a different angle.'}</h1><p class="hint">${matches.length?'Picked from a small, checked selection on Pet Printed US.':'There isn’t a checked match for these answers in our starter selection.'}</p><div class="product-list">${matches.map((r,i)=>`<article class="product-card"><div class="product-image"><img src="${escapeHtml(r.product.image)}" alt="Store example of ${escapeHtml(r.product.title)}" loading="lazy"><span class="image-fallback" hidden>Preview unavailable — see the product on Pet Printed.</span></div><div class="product-info"><div class="eyebrow">${i===0?'OUR FIRST PICK':'ANOTHER IDEA'}</div><h2>${escapeHtml(r.product.title)}</h2><div class="price">${new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(r.variant.priceCents/100)}</div><div class="small">${escapeHtml(r.variant.label)}</div><p class="reason">${escapeHtml(r.product.reason)}${r.occasionMatch?' '+escapeHtml(occasionText[answers.occasion]||''):''}</p>${r.preferenceMatch?`<span class="match-tag">Fits: ${escapeHtml(answers.preference.toLowerCase())}</span>`:''}<p class="small">${escapeHtml(r.product.note)}</p><a class="primary product-link" href="${escapeHtml(r.product.url)}?variant=${r.variant.id}" target="_blank" rel="noopener noreferrer">Personalize on Pet Printed ↗</a></div></article>`).join('')}</div>${!matches.length?`<aside class="notice"><strong>${answers.pet==='Another pet'?'We haven’t checked other pet species yet.':'Try a different budget.'}</strong><p>We won’t swap the pet or go over your chosen price range. Edit your answers below, or <a href="https://pet-printed.com/" target="_blank" rel="noopener noreferrer">browse Pet Printed US</a>.</p></aside>`:''}<p class="small catalog-note">US prices checked October 14, 2026. Shipping and tax are extra. Prices and availability may change; confirm on the store. This starter selection has five products, with photo suitability reviewed for dog, cat, and horse where applicable.</p><details class="answer-details"><summary>Review or change your answers</summary><div class="summary">${questions.map((q,i)=>`<div class="summary-row"><div><div class="small">${escapeHtml(q.title)}</div><strong>${escapeHtml(answers[q.key])}</strong></div><button class="edit" data-step="${i}" aria-label="Edit: ${escapeHtml(q.title)}">Edit</button></div>`).join('')}</div></details><button class="back" id="restart">↻ Start again</button></section>`;
  app.querySelectorAll('.product-image img').forEach(img=>img.onerror=()=>{img.hidden=true;img.nextElementSibling.hidden=false;});
  app.querySelectorAll('.edit').forEach(button=>button.onclick=()=>{step=Number(button.dataset.step);render();});
  document.querySelector('#restart').onclick=()=>{answers={};step=-1;render();};
 }
 if(focus){const heading=app.querySelector('h1');heading.setAttribute('tabindex','-1');heading.focus();window.scrollTo(0,0);}
}
render(false);

