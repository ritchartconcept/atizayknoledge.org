// Les données (guidesDemo, labelsCategories) viennent de js/guides-data.js,
// chargé avant ce fichier dans guides.html.

const grille = document.getElementById('guides-grille');
const messageAucunResultat = document.getElementById('aucun-resultat');
const champRecherche = document.getElementById('recherche-guide');
const boutonsFiltres = document.querySelectorAll('.filtre-btn');

let categorieActive = 'tous';

// Construit le HTML d'une carte de guide
function creerCarteGuide(guide) {
  const initiale = guide.auteur.charAt(0);

  return `
    <a href="guide-detail.html?id=${guide.id}" class="guide-carte">
      <img src="${guide.image}" alt="${guide.titre}" class="guide-carte-image">
      <div class="guide-carte-corps">
        <div class="guide-carte-cat">${labelsCategories[guide.categorie] || guide.categorie}</div>
        <h3>${guide.titre}</h3>
        <div class="guide-carte-meta">
          <span class="guide-carte-auteur">
            <span class="mini-avatar">${initiale}</span>
            ${guide.auteur}
          </span>
          <span>${guide.vues} vues</span>
        </div>
      </div>
    </a>
  `;
}

// Réaffiche la grille selon la catégorie active + le texte recherché
function actualiserAffichage() {
  const texteRecherche = champRecherche.value.trim().toLowerCase();

  const guidesFiltres = guidesDemo.filter(function (guide) {
    const correspondCategorie = categorieActive === 'tous' || guide.categorie === categorieActive;
    const correspondRecherche = guide.titre.toLowerCase().includes(texteRecherche);
    return correspondCategorie && correspondRecherche;
  });

  if (guidesFiltres.length === 0) {
    grille.innerHTML = '';
    messageAucunResultat.style.display = 'block';
    return;
  }

  messageAucunResultat.style.display = 'none';
  grille.innerHTML = guidesFiltres.map(creerCarteGuide).join('');
}

// Gestion des clics sur les boutons de filtre
boutonsFiltres.forEach(function (btn) {
  btn.addEventListener('click', function () {
    boutonsFiltres.forEach(function (b) { b.classList.remove('actif'); });
    btn.classList.add('actif');
    categorieActive = btn.dataset.categorie;
    actualiserAffichage();
  });
});

// Recherche en temps réel pendant la frappe
champRecherche.addEventListener('input', actualiserAffichage);

// Premier affichage au chargement de la page
actualiserAffichage();


// ==========================================================================
// Pour brancher les vraies données Supabase plus tard :
//
// 1. Crée la table dans Supabase (SQL Editor) :
//
//    create table guides (
//      id uuid default gen_random_uuid() primary key,
//      titre text not null,
//      categorie text not null,
//      contenu text,
//      auteur_id uuid references auth.users,
//      auteur_nom text,
//      vues integer default 0,
//      image text,
//      publie boolean default false,
//      cree_le timestamp default now()
//    );
//
// 2. Remplace le tableau "guidesDemo" tout en haut de ce fichier par :
//
//    let guidesDemo = [];
//    async function chargerGuides() {
//      const { data, error } = await supabaseClient
//        .from('guides')
//        .select('*')
//        .eq('publie', true);
//      if (!error) {
//        guidesDemo = data;
//        actualiserAffichage();
//      }
//    }
//    chargerGuides();
//
//    ...et supprime l'appel direct à actualiserAffichage() à la fin du fichier,
//    puisque chargerGuides() s'en charge une fois les données reçues.
// ==========================================================================
