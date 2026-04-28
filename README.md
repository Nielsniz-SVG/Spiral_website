# 🌀 Spiral - Site Web Open Source

Bienvenue sur le site officiel de **Spiral**, votre plateforme centralisée pour accéder à des logiciels web et desktop open source de qualité.

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Configuration Supabase](#-configuration-supabase)
- [Déploiement sur Netlify](#-déploiement-sur-netlify)
- [Développement local](#-développement-local)
- [Personnalisation](#-personnalisation)
- [Licence](#-licence)

---

## ✨ Fonctionnalités

- 🎨 **Design minimaliste** inspiré du logo Spiral
- 🔐 **Authentification sécurisée** avec Supabase
- 📱 **Interface responsive** (mobile, tablette, desktop)
- 🎯 **Tableau de bord** pour les utilisateurs connectés
- 📦 **Gestion des logiciels** (Web et Desktop)
- 🔍 **Recherche en temps réel** des applications
- 📧 **Formulaire de contact**
- 🌙 **Mode sombre** par défaut

---

## 📁 Structure du projet

```
Spiral_website/
├── index.html                 # Page d'accueil
├── css/
│   └── style.css             # Feuilles de styles
├── js/
│   └── app.js                # Logique générale
├── pages/
│   ├── login.html            # Page d'authentification
│   ├── auth.js               # Gestion Supabase (authentification)
│   ├── dashboard.html        # Tableau de bord utilisateur
│   └── dashboard.js          # Logique du dashboard
├── assets/
│   └── Spiral Logo.png       # Logo de l'entreprise
└── README.md                 # Ce fichier
```

---

## 🚀 Installation

### Prérequis

- Node.js 14+ (optionnel, pour servir localement)
- Compte Supabase (gratuit) : https://supabase.com
- Compte Netlify (gratuit) : https://www.netlify.com

### Cloner le projet

```bash
# Clone le repository
git clone <votre-repo-url>
cd Spiral_website
```

---

## 🔑 Configuration Supabase

### Étape 1 : Créer un compte Supabase

1. Rendez-vous sur https://supabase.com
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec GitHub, Google, ou email
4. Créez une nouvelle organisation et un nouveau projet

### Étape 2 : Obtenir vos clés API

1. Dans le tableau de bord Supabase, allez dans **Settings** > **API**
2. Copiez :
   - **Project URL** (SUPABASE_URL)
   - **Anon Key** (SUPABASE_KEY)

### Étape 3 : Configurer les fichiers

Remplacez les valeurs placeholder dans les fichiers :

#### Dans `pages/auth.js` (ligne 1-4) :

```javascript
const SUPABASE_URL = 'https://votre-projet.supabase.co';
const SUPABASE_KEY = 'votre-clé-anon-publique';
```

#### Dans `pages/dashboard.js` (ligne 1-4) :

```javascript
const SUPABASE_URL = 'https://votre-projet.supabase.co';
const SUPABASE_KEY = 'votre-clé-anon-publique';
```

### Étape 4 : Configurer l'authentification

1. Dans Supabase, allez à **Authentication** > **Providers**
2. Assurez-vous que **Email** est activé
3. Allez à **URL Configuration** et ajoutez vos URLs :
   - **Site URL** : `https://votredomaine.com` (Netlify)
   - **Redirect URLs** : 
     - `https://votredomaine.com/pages/dashboard.html`
     - `http://localhost:3000/pages/dashboard.html` (développement)

### Étape 5 : (Optionnel) Créer une table logiciels

Pour stocker vos logiciels dans la base de données :

```sql
CREATE TABLE software (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50), -- 'Web' ou 'Desktop'
  icon VARCHAR(2),
  download_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🌐 Déploiement sur Netlify

### Méthode 1 : Déploiement via GitHub (Recommandé)

#### 1. Pousser le code sur GitHub

```bash
git init
git add .
git commit -m "Initial commit: Spiral website"
git branch -M main
git remote add origin https://github.com/votre-username/Spiral_website.git
git push -u origin main
```

#### 2. Connecter Netlify à GitHub

1. Rendez-vous sur https://app.netlify.com
2. Cliquez sur **"New site from Git"**
3. Choisissez **GitHub**
4. Sélectionnez votre repository `Spiral_website`
5. Cliquez sur **"Deploy site"**

#### 3. Configurer les variables d'environnement

1. Dans Netlify, allez à **Settings** > **Environment variables** (ou Build & deploy)
2. Ajoutez les variables (optionnel, mais recommandé pour la sécurité) :
   - `SUPABASE_URL` : votre URL Supabase
   - `SUPABASE_KEY` : votre clé Supabase

**Important** : Les variables d'environnement doivent être injektées côté client. Pour plus de sécurité, utilisez les fonctions Netlify (voir section avancée).

### Méthode 2 : Déploiement direct via Netlify

1. Compressez votre projet en `.zip`
2. Allez sur https://app.netlify.com/drop
3. Déposez votre fichier `.zip`
4. Netlify génère automatiquement une URL

### Méthode 3 : CLI Netlify

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

### Après le déploiement

1. Netlify génère une URL : `https://votre-site.netlify.app`
2. Configurez ce domaine dans Supabase (voir **Étape 4** ci-dessus)
3. Testez la connexion/inscription sur votre site

---

## 💻 Développement local

### Serveur HTTP simple

#### Avec Python 3 :
```bash
python -m http.server 8000
```

#### Avec Node.js :
```bash
npx http-server
```

Ouvrez votre navigateur à : `http://localhost:8000`

### Notes importantes

- Modifiez `SUPABASE_URL` et `SUPABASE_KEY` pour votre environnement local
- Les fichiers HTML sont servis directement (pas de build nécessaire)
- N'oubliez pas d'ajouter `http://localhost:PORT/pages/dashboard.html` dans Supabase

---

## 🎨 Personnalisation

### Modifier les couleurs

Dans `css/style.css`, modifiez les variables CSS au début du fichier :

```css
:root {
    --primary: #ffffff;        /* Couleur primaire */
    --dark: #0a0e27;          /* Fond sombre */
    --accent: #6366f1;        /* Couleur accent */
    --accent-light: #818cf8;  /* Accent clair */
    --text: #e5e7eb;          /* Couleur texte */
}
```

### Ajouter des logiciels

Modifiez le tableau `sampleSoftware` dans `pages/dashboard.js` :

```javascript
const sampleSoftware = [
    {
        id: 1,
        name: 'Mon App',
        description: 'Description',
        type: 'Web', // ou 'Desktop'
        icon: '🎉',
        downloadUrl: 'https://...'
    },
    // ...
];
```

### Connecter une base de données réelle

Décommentez les lignes dans `pages/dashboard.js` pour charger depuis Supabase :

```javascript
const { data, error } = await supabase
    .from('software')
    .select('*');

if (error) throw error;
allSoftware = data;
```

---

## 📖 Ressources utiles

- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Netlify](https://docs.netlify.com)
- [Guide Supabase Auth JS](https://supabase.com/docs/guides/auth/auth-javascript)
- [Netlify Functions](https://docs.netlify.com/functions/overview) (pour la sécurité côté serveur)

---

## 🔒 Sécurité

### ⚠️ Important

- **NE PAS** commiter vos vraies clés Supabase sur GitHub
- Utilisez des fichiers `.env` locaux (non committé)
- En production, utilisez des **variables d'environnement sécurisées** sur Netlify
- Les clés publiques (Anon Key) sont intentionnelles pour les opérations côté client

### Bonnes pratiques

1. **Toujours valider** les données côté serveur
2. **Limiter les permissions** Supabase par rôle
3. **Utiliser Row Level Security (RLS)** pour les données sensibles
4. **Monitorer les accès** dans Supabase Analytics

---

## 🐛 Dépannage

### "Impossible de se connecter à Supabase"
- Vérifiez vos clés `SUPABASE_URL` et `SUPABASE_KEY`
- Vérifiez que votre domaine est dans les URLs autorisées
- Vérifiez la console du navigateur (F12) pour les erreurs CORS

### "Erreur CORS lors de l'authentification"
- Allez dans Supabase > Authentication > URL Configuration
- Ajoutez votre domaine Netlify dans **Redirect URLs**

### "Page blanche après déploiement"
- Vérifiez les logs Netlify : **Deploys** > **View deploy log**
- Assurez-vous que tous les fichiers sont uploadés
- Vérifiez que les chemins des fichiers sont corrects

---

## 📝 Licence

Ce projet est sous licence [MIT](LICENSE). Vous êtes libre de le modifier et l'utiliser pour vos besoins.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

---

## 📞 Support

Pour toute question ou problème :
1. Consultez la [documentation Supabase](https://supabase.com/docs)
2. Consultez la [documentation Netlify](https://docs.netlify.com)
3. Ouvrez une issue sur GitHub

---

**Fait avec ❤️ par Spiral**

```
   ╭─────╮
   │ ╭──╮│
   │ │  ││
   ╰─╯  ╰╯
```
