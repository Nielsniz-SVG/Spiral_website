# Spiral Website - Checklist de Déploiement

## ✅ Pré-déploiement

### Configuration Supabase
- [ ] Compte Supabase créé
- [ ] Projet Supabase créé et déployé
- [ ] Clés API copiées (Project URL + Anon Key)
- [ ] Authentification Email activée
- [ ] URLs de redirection configurées
  - [ ] Localhost ajouté
  - [ ] URL Netlify ajoutée

### Configuration Spiral Website
- [ ] Fichier `pages/auth.js` mis à jour avec SUPABASE_URL et SUPABASE_KEY
- [ ] Fichier `pages/dashboard.js` mis à jour avec SUPABASE_URL et SUPABASE_KEY
- [ ] `.env.local` créé avec les clés (pour développement)
- [ ] `.gitignore` vérifié (ne contient pas les clés !)

### Tests Locaux
- [ ] Site s'affiche correctement sur http://localhost:8000
- [ ] Bouton "Se connecter" fonctionne
- [ ] Page d'inscription s'affiche
- [ ] Inscription avec email/password fonctionne
- [ ] Email de confirmation reçu (checker spam)
- [ ] Login fonctionne après confirmation email
- [ ] Dashboard s'affiche après login
- [ ] Logiciels affichés correctement
- [ ] Recherche fonctionne
- [ ] Logout fonctionne
- [ ] Responsive OK sur mobile (F12 → Toggle device toolbar)

### Code Quality
- [ ] Pas d'erreurs console (F12 → Console)
- [ ] Pas d'avertissements de sécurité
- [ ] Tous les liens fonctionnent
- [ ] Formulaire de contact fonctionne

---

## 🚀 Déploiement Netlify

### Avant Push
- [ ] Fichier `.env` + `.env.local` **NON** pushés
- [ ] Clés sensibles **JAMAIS** dans les fichiers committé
- [ ] `package.json` à jour
- [ ] `README.md` à jour

### Étapes de déploiement
- [ ] Repository GitHub créé
- [ ] Code pushé sur GitHub
- [ ] Netlify connecté à GitHub
- [ ] Déploiement automatique activé
- [ ] Variables d'environnement définies dans Netlify
  - [ ] SUPABASE_URL
  - [ ] SUPABASE_KEY

### Post-déploiement Netlify
- [ ] Site accessible via netlify.app
- [ ] HTTPS activé (automatique)
- [ ] URL personnalisé configuré (optionnel)
- [ ] Redirections fonctionnent

### Configuration Supabase Final
- [ ] Netlify URL ajoutée dans Supabase > Auth > URL Configuration
- [ ] Redirect URLs mise à jour :
  - [ ] https://votre-site.netlify.app/pages/dashboard.html

---

## 🧪 Tests Post-Déploiement

### Fonctionnalités Principales
- [ ] Inscription fonctionne en production
- [ ] Confirmation email fonctionne
- [ ] Login fonctionne en production
- [ ] Dashboard s'affiche
- [ ] Logiciels affichés
- [ ] Recherche fonctionne
- [ ] Logout fonctionne

### Sécurité
- [ ] HTTPS forcé
- [ ] Pas de contenu sensible en plain text
- [ ] Headers de sécurité présents (F12 → Network → Response Headers)
- [ ] Pas de erreurs de CORS

### Performance
- [ ] Page charge vite (< 3s)
- [ ] Images optimisées
- [ ] CSS minifié
- [ ] JavaScript minifié

### Responsive
- [ ] Mobile (320px) OK
- [ ] Tablette (768px) OK
- [ ] Desktop (1200px+) OK

---

## 📝 Checklists Maintenance

### Mensuel
- [ ] Vérifier logs Netlify
- [ ] Vérifier logs Supabase
- [ ] Mettre à jour les dépendances
- [ ] Tester la connexion/inscription

### Trimestriel
- [ ] Audit de sécurité
- [ ] Performance check
- [ ] SEO check
- [ ] Mettre à jour les logiciels

### Annuel
- [ ] Renouveler certificats SSL (Netlify auto)
- [ ] Renouveler abonnement Supabase (si applicable)
- [ ] Audit complet du site

---

## 🚨 Troubleshooting

### Problème : "Impossible de se connecter"
**Solution :**
1. Vérifier clés SUPABASE dans les fichiers
2. Vérifier Supabase Dashboard > Authentification > Providers
3. Chercher erreurs dans F12 Console
4. Vérifier URL de redirection dans Supabase

### Problème : "CORS Error"
**Solution :**
1. Aller dans Supabase > Auth > URL Configuration
2. Vérifier que votre domaine est dans Redirect URLs
3. Vérifier que HTTPS est utilisé

### Problème : "Erreur lors du déploiement"
**Solution :**
1. Vérifier Netlify Deploy logs
2. Vérifier que tous les fichiers sont committé (git status)
3. Vérifier que pas de caractères spéciaux dans les noms de fichiers
4. Relancer le déploiement depuis Netlify UI

### Problème : "Page blanche en production"
**Solution :**
1. F12 Console → Voir les erreurs
2. Vérifier que fichiers HTML existent
3. Vérifier chemins relatifs (./ vs ../)
4. Vérifier Netlify Deploy logs

---

## 📚 Ressources Utiles

- [Docs Supabase](https://supabase.com/docs)
- [Docs Netlify](https://docs.netlify.com)
- [GitHub Pages vs Netlify](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)
- [Sécurité Front-End](https://owasp.org/www-project-top-ten/)

---

**Dernière mise à jour : 28 avril 2026**
