document.getElementById('form-inscription').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const discipline = document.getElementById('discipline').value;
    const motDePasse = document.getElementById('password').value;
    const confirmation = document.getElementById('password2').value;
    const erreurBox = document.getElementById('erreur-inscription');
  
    if (motDePasse !== confirmation) {
      alert('Les deux mots de passe ne correspondent pas.');
      return;
    }
  
    // nom et discipline sont passés ici, dans "options.data" —
    // le trigger SQL les récupère automatiquement pour créer le profil.
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: motDePasse,
      options: {
        data: { nom: nom, discipline: discipline }
      }
    });
  
    if (error) {
      erreurBox.textContent = error.message;
      erreurBox.style.display = 'block';
      return;
    }
  
    // Si la confirmation d'email est activée, il n'y a pas encore de session.
    if (!data.session) {
      erreurBox.style.background = '#e2f0e8';
      erreurBox.style.color = '#3A7D5C';
      erreurBox.style.borderColor = '#3A7D5C';
      erreurBox.textContent = "Compte créé ! Vérifie tes emails pour confirmer ton adresse avant de te connecter.";
      erreurBox.style.display = 'block';
      return;
    }
  
    window.location.href = "espace-membre.html";
  });