function budgetAllows(cents,budget){
 if(budget==='No set budget')return true;
 if(budget==='Up to $25')return cents<=2500;
 if(budget==='Over $25 to $50')return cents>2500&&cents<=5000;
 if(budget==='Over $50 to $75')return cents>5000&&cents<=7500;
 if(budget==='Over $75')return cents>7500;
 return false;
}
function recommendGifts(catalog,answers){
 const ranked=catalog.filter(p=>p.verified&&p.currency==='USD'&&p.species.includes(answers.pet)).flatMap(p=>{
  const variant=p.variants.filter(v=>v.available&&Number.isInteger(v.priceCents)&&v.priceCents>0&&budgetAllows(v.priceCents,answers.budget)).sort((a,b)=>a.priceCents-b.priceCents)[0];
  if(!variant)return [];
  const preferenceMatch=p.preferences.includes(answers.preference);
  const occasionMatch=p.occasions.includes(answers.occasion);
  const recipientMatch=p.recipients.includes(answers.recipient);
  return [{product:p,variant,preferenceMatch,occasionMatch,recipientMatch,score:(preferenceMatch?5:0)+(occasionMatch?3:0)+(recipientMatch?1:0)}];
 }).sort((a,b)=>b.score-a.score||a.product.id.localeCompare(b.product.id));
 const types=new Set();
 return ranked.filter(r=>{if(types.has(r.product.type))return false;types.add(r.product.type);return true;}).slice(0,3);
}
if(typeof module!=='undefined')module.exports={budgetAllows,recommendGifts};
