# Grande Mosquée de Vallauris — Site officiel

Site web de l'**Association Culturelle de Vallauris** — campagne de collecte de dons pour l'achat du local de la Grande Mosquée de Vallauris (06220).

🌐 **[mosquee-vallauris.fr](https://mosquee-vallauris.fr)**

---

## Stack technique

- **[Astro 6](https://astro.build)** — générateur de site statique
- **[Tailwind CSS v4](https://tailwindcss.com)** — styles utilitaires
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** — icônes Phosphor
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap automatique
- **GitHub Pages** — hébergement, domaine personnalisé via `public/CNAME`

---

## Développement local

### Prérequis

- Node.js 22+
- npm

### Installation

```bash
npm install
```

### Serveur de développement

```bash
npm run dev
# → http://localhost:4321
```

### Build de production

```bash
npm run favicon   # génère les favicons PNG depuis public/favicon.svg
npm run build     # génère le site dans dist/
npm run preview   # prévisualise le build
```

---

## Structure du projet

```plaintext
src/
  assets/
    logo.svg                  # Icône mosquée (nav)
    mosque-illustration.svg   # Illustration hero
  layouts/
    Layout.astro              # Layout principal (SEO, JSON-LD, OG)
  pages/
    index.astro               # Page unique — tout le contenu du site
  styles/
    global.css                # Tokens de design + classes composants
public/
  CNAME                       # Domaine personnalisé GitHub Pages
  robots.txt
  favicon.svg
.github/
  workflows/
    deploy.yml                # CI/CD → GitHub Pages
```

---

## Mise à jour du contenu

### Montant collecté

Dans `src/pages/index.astro`, modifier la valeur `collecte` :

```ts
const campaign = {
  achatRdC : 300_000,  // achat rez-de-chaussée
  travaux  : 150_000,  // travaux
  objectif : 450_000,  // objectif total
  collecte :  85_000,  // ← mettre à jour ici
};
```

Le pourcentage et le montant restant sont calculés automatiquement.

### Horaires de prière

Gérés automatiquement via l'iframe **Mawaqit** — aucune mise à jour manuelle nécessaire.

### FAQ

Modifier le tableau `faqItems` dans `src/pages/index.astro`. Le schéma JSON-LD `FAQPage` est généré automatiquement à partir de ce tableau.

---

## Déploiement

Chaque push sur la branche `main` déclenche automatiquement le pipeline GitHub Actions :

1. Installation des dépendances
2. Génération des favicons (`npm run favicon`)
3. Build Astro (`npm run build`)
4. Déploiement sur GitHub Pages

---

## SEO

- **Sitemap** : `https://mosquee-vallauris.fr/sitemap-index.xml`
- **JSON-LD** : `PlaceOfWorship` (Layout) + `FAQPage` (index)
- **Open Graph** : titre, description, image (favicon.svg)
- **Google Search Console** : vérification via meta tag dans Layout.astro

---

## Licence

© Association Culturelle de Vallauris — Tous droits réservés.
