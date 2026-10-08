(async function () {
  const { data: { session } } = await supabaseClient.auth.getSession();

  // Si personne n'est connecté, on renvoie directement vers la connexion.
  if (!session) {
    window.location.href = "login.html";
    return;
  }

  // On récupère le profil (nom, discipline) lié à ce compte,
  // pour afficher "Bienvenue, [nom]" dynamiquement sur la page.
  const { data: profil } = await supabaseClient
    .from('profils')
    .select('nom, discipline')
    .eq('id', session.user.id)
    .single();

  if (profil) {
    document.querySelector('.bienvenue h1').textContent = "Bienvenue, " + profil.nom;
  }
})();

// Bouton de déconnexion — attache-le à ton lien "Déconnexion" existant
// en lui ajoutant l'id="deconnexion" dans le HTML.
document.getElementById('deconnexion')?.addEventListener('click', async function (e) {
  e.preventDefault();
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
});