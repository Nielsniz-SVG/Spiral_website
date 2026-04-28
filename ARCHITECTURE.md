# 📚 Architecture - Spiral Website

## 📂 Structure du Projet

```
Spiral_website/
├── 📄 index.html                    # Page d'accueil
├── 📄 privacy.html                  # Politique de confidentialité
├── 📄 terms.html                    # Conditions d'utilisation
│
├── 📁 css/
│   └── style.css                   # Feuilles de styles principales
│
├── 📁 js/
│   └── app.js                      # Logique générale (animations, menu mobile)
│
├── 📁 pages/
│   ├── login.html                  # Page d'authentification
│   ├── auth.js                     # Gestion Supabase (register/login)
│   ├── dashboard.html              # Tableau de bord utilisateur
│   └── dashboard.js                # Logique dashboard (logiciels, recherche)
│
├── 📁 assets/
│   └── Spiral Logo.png             # Logo de l'entreprise
│
├── 📄 README.md                    # Guide d'installation et d'utilisation
├── 📄 QUICKSTART.md                # Démarrage rapide (5 minutes)
├── 📄 CONTRIBUTING.md              # Guide de contribution
├── 📄 DEPLOYMENT_CHECKLIST.md      # Checklist de déploiement
│
├── 📄 package.json                 # Dépendances Node.js
├── 📄 netlify.toml                 # Configuration Netlify
├── 📄 .htaccess                    # Configuration Apache (optionnel)
├── 📄 .gitignore                   # Fichiers à ignorer en Git
├── 📄 .env.example                 # Template de variables d'environnement
│
└── 📄 LICENSE                      # Licence MIT
```

---

## 🏗️ Architecture Globale

```
┌─────────────────────────────────────────────┐
│           Spiral Website                    │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  Frontend (HTML/CSS/JavaScript)      │   │
│  │  - index.html (public)               │   │
│  │  - pages/login.html (public)         │   │
│  │  - pages/dashboard.html (protected)  │   │
│  └──────────────────────────────────────┘   │
│                    ↓                         │
│  ┌──────────────────────────────────────┐   │
│  │  Supabase (Backend as a Service)    │   │
│  │  - Authentication                    │   │
│  │  - Database (PostgreSQL)             │   │
│  │  - Real-time (WebSocket)             │   │
│  └──────────────────────────────────────┘   │
│                    ↓                         │
│  ┌──────────────────────────────────────┐   │
│  │  Netlify (Hosting)                   │   │
│  │  - Static site hosting               │   │
│  │  - HTTPS/SSL                         │   │
│  │  - Functions (optionnel)             │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## 🎨 Technologies Utilisées

| Domaine | Technologie | Raison |
|---------|-------------|--------|
| Frontend | HTML5 | Structure sémantique |
| Styles | CSS3 | Design responsive, animations |
| Interactivité | JavaScript Vanilla | Pas de dépendances inutiles |
| Auth | Supabase + JWT | Sécurité, gestion simple |
| Base de données | PostgreSQL (Supabase) | Puissant, flexible, gratuit |
| Hosting | Netlify | Déploiement facile, HTTPS gratuit |
| CDN | Supabase JS | Authentification côté client |

---

## 🔐 Flux d'Authentification

```
1. Utilisateur remplit le formulaire (email/password)
   ↓
2. Clic sur "S'inscrire" ou "Se connecter"
   ↓
3. JavaScript envoie requête à Supabase via SDK
   ↓
4. Supabase :
   - Valide email/password
   - Hash du password
   - Stocke utilisateur en DB
   - Retourne JWT token
   ↓
5. JavaScript stocke token en session/localStorage
   ↓
6. Lors des pages protégées :
   - Vérification token avant affichage
   - Si pas de token → redirect login
   ↓
7. Utilisateur connecté accède au dashboard
```

---

## 📊 Flux Données

### Inscription
```
Form ──POST──> Supabase Auth ──INSERT──> Users Table ──JWT──> localStorage
```

### Login
```
Form ──POST──> Supabase Auth ──VERIFY──> JWT ──>localStorage ──GET──> Software DB
```

### Dashboard
```
Dashboard Load ──GET TOKEN──> localStorage ──FETCH──> Software Table ──DISPLAY──> User
```

---

## 🎯 Composants Principaux

### 1. **index.html** (Accueil)
- **Rôle** : Présentation de Spiral
- **Publique** : Oui
- **Contient** : Hero, Features, Software preview, Contact
- **Scripts** : `js/app.js`

### 2. **pages/login.html** (Authentification)
- **Rôle** : Inscription/Connexion
- **Publique** : Oui
- **Contient** : Formulaire email/password, Toggle login/signup
- **Scripts** : `auth.js` (Supabase)

### 3. **pages/dashboard.html** (Tableau de bord)
- **Rôle** : Afficher logiciels pour utilisateurs connectés
- **Publique** : Non (protégé par token)
- **Contient** : Stats, Search, Software cards
- **Scripts** : `dashboard.js` (Supabase + Logique)

---

## 🎨 Design System

### Palette de Couleurs
```css
Primary (Accent)   : #6366f1  (Violet/Indigo)
Accent Light       : #818cf8  (Violet clair)
Background Dark    : #0a0e27  (Très sombre)
Background Darker  : #050811  (Noir)
Text               : #e5e7eb  (Gris clair)
Border             : #1f2937  (Gris foncé)
White              : #ffffff  (Accent)
```

### Typographie
- **Font** : Segoe UI, Tahoma, Geneva
- **Headings** : Bold, 1.5rem → 3.5rem
- **Body** : Regular, 1rem
- **Line height** : 1.6

### Breakpoints Responsive
```css
Mobile   : < 768px
Tablet   : 768px - 1024px
Desktop  : > 1024px
```

---

## 🔄 Flux Utilisateur

### Visiteur
```
Accueil
  ↓
Lire infos
  ↓
Cliquer "Se connecter"
  ↓
Page Login
  ↓
S'inscrire OU Se connecter
```

### Utilisateur Connecté
```
Page Login → Dashboard
  ↓
Voir logiciels
  ↓
Rechercher logiciels
  ↓
Télécharger
  ↓
Se déconnecter
```

---

## 🔑 Variables Clés

### Supabase
```javascript
SUPABASE_URL    // https://[PROJECT-ID].supabase.co
SUPABASE_KEY    // Clé publique (Anon Key)
```

### Utilisateur (localStorage)
```javascript
// Stocké automatiquement par Supabase
supabase.auth.session() // Retourne token JWT
```

---

## 📝 Conventions de Code

### HTML
- Indentation : 4 espaces
- Classes BEM : `.card__header`, `.button--primary`
- IDs pour JavaScript : `#authForm`, `#softwareGrid`

### CSS
- Ordre : Layout → Display → Colors → Typography
- Variables CSS : `--primary`, `--dark`, `--accent`
- Mobile-first : Styles mobile d'abord, puis media queries

### JavaScript
- camelCase pour variables/fonctions
- SCREAMING_SNAKE_CASE pour constantes
- `async/await` pour asynchrone
- Commentaires pour code complexe

---

## 🧪 Tests Importants

```javascript
// Test 1: Authentification
- Inscription avec email valide
- Inscription avec email existant (erreur ?)
- Login avec credentials valides
- Login avec credentials invalides
- Email de confirmation

// Test 2: Dashboard
- Affichage des logiciels
- Recherche fonctionne
- Pagination (si applicable)
- Téléchargement possible

// Test 3: Responsive
- Mobile (320px, 480px)
- Tablette (768px)
- Desktop (1920px)

// Test 4: Sécurité
- Token JWT valide
- Protection des pages privées
- HTTPS en production
- Pas de données sensibles en localStorage
```

---

## 🚀 Performance

### Optimisations à jour
- [x] CSS minifié
- [x] JS non-dépendant de framework
- [x] Images optimisées (PNG logo)
- [x] Lazy loading
- [ ] Service Workers (à ajouter)
- [ ] Lighthouse scores (à vérifier)

### Cibles Performance
- LCP (Largest Contentful Paint) : < 2.5s
- FID (First Input Delay) : < 100ms
- CLS (Cumulative Layout Shift) : < 0.1

---

## 🔒 Sécurité

### Implémentées
- [x] JWT pour authentification
- [x] HTTPS (Netlify)
- [x] Row Level Security (RLS) en Supabase
- [x] Validation côté client
- [x] Headers de sécurité

### À Ajouter (Optionnel)
- [ ] Rate limiting (Netlify Functions)
- [ ] CAPTCHA (hCaptcha)
- [ ] Two-factor authentication
- [ ] Log d'audit
- [ ] Validation côté serveur (Functions)

---

## 🐛 Débogage

### Console Browser (F12)
```javascript
// Vérifier session
supabase.auth.getSession().then(console.log)

// Logs Supabase
// Network tab → voir appels API
// Console → voir erreurs JavaScript
```

### Logs Netlify
```bash
// Voir logs en ligne de commande
netlify logs
```

### Logs Supabase
```
Dashboard > Logs > SQL Editor
```

---

## 📈 Améliorations Futures

1. **Backend Avancé**
   - Netlify Functions pour validation serveur
   - Webhooks Supabase

2. **Frontend**
   - Framework (React, Vue)
   - TypeScript
   - PWA (Progressive Web App)

3. **Features**
   - Paiements (Stripe)
   - Notifications email
   - Système de votes/reviews
   - Forum communauté

4. **Ops**
   - CI/CD (GitHub Actions)
   - Tests automatisés
   - Monitoring (Sentry)
   - Analytics (Plausible)

---

**Architecture Document - Spiral Website v1.0**
