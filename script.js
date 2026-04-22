function val(id){
  return Number(document.getElementById(id).value || 0);
}

function calculate(){

  let glucose = val("glucose");
  let insulin = val("insulin");
  let hba1c = val("hba1c");
  let ldl = val("ldl");
  let hdl = val("hdl");
  let trig = val("trig");
  let crp = val("crp");

  let fat = val("fat");
  let visceral = val("visceral");
  let muscle = val("muscle");

  let homa = glucose && insulin ? (glucose*insulin/405).toFixed(2) : "-";
  let ratio = trig && hdl ? (trig/hdl).toFixed(2) : "-";

  let score = 100;

  if(homa > 2) score -= 20;
  if(fat > 30) score -= 15;
  if(visceral > 10) score -= 20;
  if(ratio > 3) score -= 10;
  if(crp > 3) score -= 10;
  if(hba1c > 5.6) score -= 10;
  if(ldl > 130) score -= 10;

  let insights = [];

  if(homa > 2) insights.push("⚠️ Insulin resistance");
  if(fat > 30) insights.push("⚠️ High body fat");
  if(visceral > 10) insights.push("🔴 Visceral fat risk");
  if(ratio > 3) insights.push("⚠️ Cardiometabolic risk");
  if(crp > 3) insights.push("🔴 Inflammation");

  if(insights.length === 0) insights.push("🟢 Stable health profile");

  document.getElementById("homa").innerHTML = "HOMA-IR: " + homa;
  document.getElementById("ratio").innerHTML = "TG/HDL: " + ratio;
  document.getElementById("score").innerHTML = "Health Score: " + score + "/100";

  let html="";
  insights.forEach(i => html += "<p>"+i+"</p>");
  document.getElementById("insights").innerHTML = html;
}
