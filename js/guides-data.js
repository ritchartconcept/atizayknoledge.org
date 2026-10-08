// ==========================================================================
// Données de démonstration partagées par guides.html et guide-detail.html.
// Chaque guide est découpé en "modules" (mini-cours), et chaque module
// contient des "blocs" : texte, image ou vidéo. C'est la même structure
// que l'éditeur de rédaction (étape 5) produira plus tard.
//
// Types de blocs :
//   { type: "texte", contenu: "..." }
//   { type: "image", src: "...", legende: "..." }
//   { type: "video", url: "https://www.youtube.com/watch?v=..." }  (YouTube ou Vimeo)
// ==========================================================================
const guidesDemo = [
  {
    id: 1,
    titre: "Dessiner un personnage à partir de formes simples",
    categorie: "techniques",
    auteur: "Widlène J.",
    vues: 412,
    image: "https://placehold.co/480x300/1B2A4C/FAF3E7?text=Techniques",
    resume: "Une méthode pas à pas pour construire un personnage manga/BD à partir de formes de base.",
    modules: [
      {
        titre: "Pourquoi partir de formes simples",
        blocs: [
          { type: "texte", contenu: "Se lancer directement dans les détails est l'erreur la plus fréquente chez les débutants. Une structure solide en formes simples rend tout le reste plus facile." },
          { type: "image", src: "https://placehold.co/900x450/1B2A4C/FAF3E7?text=Formes+de+base", legende: "Cercle, ovale et rectangle : les trois formes de départ." }
        ]
      },
      {
        titre: "Construire la tête et le corps",
        blocs: [
          { type: "texte", contenu: "Commence par un cercle pour le crâne, puis ajoute un ovale pour la mâchoire. Le corps se construit avec un rectangle pour le torse et des cylindres pour les membres." },
          { type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
        ]
      },
      {
        titre: "Erreurs fréquentes à éviter",
        blocs: [
          { type: "texte", contenu: "Têtes trop grandes, membres de même longueur, absence de ligne d'équilibre : ces trois erreurs reviennent chez presque tous les débutants." }
        ]
      }
    ]
  },
  {
    id: 2,
    titre: "Colorier en numérique avec peu de moyens",
    categorie: "techniques",
    auteur: "Widlène J.",
    vues: 298,
    image: "https://placehold.co/480x300/1B2A4C/FAF3E7?text=Techniques",
    resume: "Logiciels gratuits et techniques de base pour colorier sans matériel coûteux.",
    modules: [
      {
        titre: "Le matériel vraiment nécessaire",
        blocs: [
          { type: "texte", contenu: "Une tablette d'entrée de gamme, ou même une souris, suffit pour démarrer. Le logiciel compte davantage que le matériel." }
        ]
      },
      {
        titre: "Logiciels gratuits recommandés",
        blocs: [
          { type: "texte", contenu: "Krita et MediBang Paint sont gratuits et couvrent la quasi-totalité des besoins d'un illustrateur débutant ou intermédiaire." }
        ]
      }
    ]
  },
  {
    id: 3,
    titre: "Où trouver du matériel d'art fiable en Haïti",
    categorie: "contexte-local",
    auteur: "Jonas P.",
    vues: 356,
    image: "https://placehold.co/480x300/3A7D5C/FAF3E7?text=Contexte+local",
    resume: "Fournisseurs, alternatives et conseils pratiques selon ton budget.",
    modules: [
      {
        titre: "Le problème de l'accès au matériel",
        blocs: [
          { type: "texte", contenu: "Le matériel importé est rare et cher. Connaître les bonnes adresses et les bonnes alternatives fait gagner du temps et de l'argent." }
        ]
      },
      {
        titre: "Quand un matériel est indisponible",
        blocs: [
          { type: "texte", contenu: "Papier, encres, marqueurs : pour chaque matériel courant, il existe souvent une alternative locale ou un équivalent d'une autre marque." }
        ]
      }
    ]
  },
  {
    id: 4,
    titre: "Travailler efficacement avec des coupures d'électricité",
    categorie: "contexte-local",
    auteur: "Jonas P.",
    vues: 221,
    image: "https://placehold.co/480x300/3A7D5C/FAF3E7?text=Contexte+local",
    resume: "Organiser son travail créatif autour des coupures d'électricité et d'internet.",
    modules: [
      {
        titre: "Organiser sa journée autour des coupures",
        blocs: [
          { type: "texte", contenu: "Réserve les tâches qui demandent de l'électricité (numérique, export) aux plages où le courant est stable, et garde le travail manuel pour le reste." }
        ]
      },
      {
        titre: "Sauvegarder son travail en continu",
        blocs: [
          { type: "texte", contenu: "Active l'enregistrement automatique de ton logiciel et garde une copie sur une clé USB : une coupure ne doit jamais te coûter une journée de travail." }
        ]
      }
    ]
  },
  {
    id: 5,
    titre: "Les grands mouvements de l'art visuel haïtien",
    categorie: "histoire",
    auteur: "Fritzner R.",
    vues: 132,
    image: "https://placehold.co/480x300/E9B44C/1A1A1A?text=Histoire",
    resume: "De l'art naïf à la bande dessinée contemporaine : les grandes étapes de l'art visuel haïtien.",
    modules: [
      {
        titre: "L'art naïf haïtien",
        blocs: [
          { type: "texte", contenu: "Le mouvement le plus connu internationalement : des artistes autodidactes, des couleurs vives, des scènes de vie quotidienne et de spiritualité. Le Centre d'Art, fondé en 1944, a joué un rôle clé." }
        ]
      },
      {
        titre: "L'art moderne et la scène contemporaine",
        blocs: [
          { type: "texte", contenu: "Des artistes formés académiquement ont ensuite rompu avec les codes naïfs, tandis qu'une scène jeune de BD et d'illustration émerge aujourd'hui." }
        ]
      }
    ]
  },
  {
    id: 6,
    titre: "Portrait : une artiste qui a marqué le secteur",
    categorie: "portraits",
    auteur: "Marie-Ange D.",
    vues: 189,
    image: "https://placehold.co/480x300/E63946/FAF3E7?text=Portrait",
    resume: "Parcours, obstacles et vision d'une artiste haïtienne.",
    modules: [
      {
        titre: "Son parcours",
        blocs: [
          { type: "texte", contenu: "Contenu du portrait à venir — ce guide sera rédigé après l'interview." }
        ]
      }
    ]
  },
  {
    id: 7,
    titre: "Comment fixer le prix de sa première illustration",
    categorie: "business",
    auteur: "Fritzner R.",
    vues: 412,
    image: "https://placehold.co/480x300/1A1A1A/FAF3E7?text=Business",
    resume: "Une méthode simple pour calculer un prix juste et le défendre face à un client.",
    modules: [
      {
        titre: "Pourquoi on sous-évalue son travail",
        blocs: [
          { type: "texte", contenu: "La majorité des artistes débutants sous-évaluent leur travail, par manque de repères ou par peur de perdre un client. Résultat : des heures de travail largement sous-payées." }
        ]
      },
      {
        titre: "Calculer un prix de départ",
        blocs: [
          { type: "texte", contenu: "Estime le nombre d'heures réel du projet, multiplie par un tarif horaire minimum réaliste, puis ajuste selon la complexité et l'usage prévu par le client." }
        ]
      },
      {
        titre: "Adapter son prix selon le client",
        blocs: [
          { type: "texte", contenu: "Une ONG internationale n'a pas le même budget qu'une petite entreprise locale. Une grille de prix qui varie selon le client est normale, tant qu'elle reste transparente." }
        ]
      }
    ]
  },
  {
    id: 8,
    titre: "Structurer une facture simple pour un client",
    categorie: "business",
    auteur: "Fritzner R.",
    vues: 298,
    image: "https://placehold.co/480x300/1A1A1A/FAF3E7?text=Business",
    resume: "Les éléments indispensables d'une facture professionnelle, pour ONG comme pour clients locaux.",
    modules: [
      {
        titre: "Les éléments indispensables",
        blocs: [
          { type: "texte", contenu: "Coordonnées des deux parties, numéro et date de facture, description du travail, montant, conditions de paiement et droits d'usage accordés." }
        ]
      },
      {
        titre: "Erreurs courantes à éviter",
        blocs: [
          { type: "texte", contenu: "Oublier de préciser les droits d'usage, omettre le délai de paiement, ne pas garder de copie de ses factures." }
        ]
      }
    ]
  }
];

// Labels affichés pour chaque catégorie
const labelsCategories = {
  "techniques": "Techniques",
  "contexte-local": "Contexte local",
  "histoire": "Histoire de l'art",
  "business": "Business",
  "portraits": "Portrait"
};
