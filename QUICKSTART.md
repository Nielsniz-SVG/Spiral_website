# 🚀 Démarrage Rapide - Spiral Website

Vous avez 10 minutes ? C'est le guide pour vous ! 

## ⚡ Les 5 étapes

### 1️⃣ Préparer Supabase (3 minutes)

```bash
# A) Aller sur https://supabase.com → Sign Up
# B) Créer un nouveau projet
# C) Attendre le déploiement (≈2 min)
# D) Récupérer ces infos (Settings > API) :
#    - Project URL
#    - Anon Key
```

### 2️⃣ Configurer le code (2 minutes)

**Option A - Modifier dans l'éditeur :**

1. Ouvrez [pages/auth.js](pages/auth.js)
2. Ligne 1-4 : Remplacez `YOUR_SUPABASE_URL` et `YOUR_SUPABASE_KEY`
3. Faites la même chose dans [pages/dashboard.js](pages/dashboard.js)

**Option B - Copier une variable d'environnement :**

```bash
cp .env.example .env.local
# Éditez .env.local avec vos clés
```

### 3️⃣ Tester localement (3 minutes)

```bash
# Terminal 1 : Lancer un serveur local
python -m http.server 8000
# ou : npx http-server

# Ouvrir le navigateur
# http://localhost:8000
```

Testez :
- ✅ Accueil s'affiche ?
- ✅ Cliquez "Se connecter" ?
- ✅ Inscription marche ?
- ✅ Login marche ?

### 4️⃣ Déployer sur Netlify (2 minutes)

**Option A - Drag & Drop :**

1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le dossier `Spiral_website`
3. Voilà ! 🎉

**Option B - GitHub :**

```bash
git add .
git commit -m "Initial Spiral website"
git push origin main
```

Puis connectez GitHub à Netlify.

### 5️⃣ Configurer Supabase (1 minute)

Dans Supabase Dashboard :
1. **Authentication** > **URL Configuration**
2. Ajouter votre URL Netlify dans **Redirect URLs**
3. Sauvegarder

**C'est tout ! Vous êtes en production ! 🚀**

---

## 📱 Comment utiliser le site

### Pour les visiteurs

1. Accueil : Découvrir Spiral
2. "Se connecter" → Créer un compte
3. Dashboard : Voir et télécharger les logiciels

### Pour les admins

- Ajouter des logiciels ? Éditez `sampleSoftware` dans [pages/dashboard.js](pages/dashboard.js)
- Changer les couleurs ? Modifiez `:root` dans [css/style.css](css/style.css)
- Ajouter des pages ? Créez des fichiers HTML et liez-les

---

## 🆘 Problèmes courants

### ❌ "Impossible de se connecter à Supabase"

**Solution :**
- Vérifiez `SUPABASE_URL` et `SUPABASE_KEY` dans les fichiers
- Copier-coller depuis Supabase Dashboard > Settings > API

### ❌ "CORS error"

**Solution :**
- Supabase > Authentication > URL Configuration
- Ajouter votre URL Netlify dans **Redirect URLs**

### ❌ "Page blanche après inscription"

**Solution :**
- Appuyez F12 pour voir les erreurs
- Regardez la console
- Vérifiez vos clés Supabase

---

## 🎨 Customisation rapide

### Changer le titre

[index.html](index.html) ligne 7 :
```html
<title>Spiral - Vos logiciels</title>
```

### Changer les couleurs

[css/style.css](css/style.css) ligne 2-7 :
```css
--accent: #6366f1; /* Violet → Changez la couleur ! */
```

### Ajouter vos logiciels

[pages/dashboard.js](pages/dashboard.js) ligne 18 :
```javascript
const sampleSoftware = [
    {
        name: 'Mon App',
        description: 'Ma description',
        icon: '🎉',
        // ...
    }
];
```

---

## 📚 Besoin de plus d'infos ?

- 📖 Guide complet : [README.md](README.md)
- 🤝 Comment contribuer : [CONTRIBUTING.md](CONTRIBUTING.md)
- 🔑 Docs Supabase : https://supabase.com/docs
- 🌐 Docs Netlify : https://docs.netlify.com

---

## ✅ Checklist avant production

- [ ] Clés Supabase configurées
- [ ] URL Netlify ajoutée dans Supabase
- [ ] Inscription fonctionne
- [ ] Login fonctionne
- [ ] Dashboard s'affiche après login
- [ ] Logiciels affichés correctement
- [ ] Mobile responsive OK

---

**Bienvenue à bord ! 🎉**

Des questions ? Ouvrez une issue sur GitHub ou contactez-nous.
