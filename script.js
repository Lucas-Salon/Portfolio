// Remplace simplement les placeholders dans index.html
document.getElementById('year').textContent = new Date().getFullYear();

// Formulaire basique : ouvre le client mail (tu peux remplacer par un submit vers une API)
function sendMail(e){
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(`Contact portfolio - ${f.name.value}`);
  const body = encodeURIComponent(`${f.message.value}\n\nContact: ${f.name.value} - ${f.email.value}`);
  window.location.href = `mailto:[ton.email@example.com]?subject=${subject}&body=${body}`;
}
