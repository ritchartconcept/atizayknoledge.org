document.getElementById('form-connexion').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const motDePasse = document.getElementById('password').value;
  const erreurBox = document.getElementById('erreur-connexion');

  const { error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: motDePasse
  });

  if (error) {
    erreurBox.textContent = "Email ou mot de passe incorrect.";
    erreurBox.style.display = 'block';
    return;
  }

  window.location.href = "espace-membre.html";
});