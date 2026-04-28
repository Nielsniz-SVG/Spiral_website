# ❓ FAQ - Spiral Website

## Questions Générales

### Q1 : Qu'est-ce que Spiral ?
**A :** Spiral est une plateforme web qui met à disposition des logiciels open source (web et desktop). Les utilisateurs créent un compte et accèdent à une bibliothèque de logiciels gratuits et transparents.

### Q2 : Est-ce vraiment gratuit ?
**A :** Oui ! Tous les logiciels sont 100% open source et gratuits. Le site est également gratuit à héberger sur Netlify.

### Q3 : Puis-je modifier ce site ?
**A :** Absolument ! Il est fourni sous licence MIT. Vous pouvez le forker, modifier, et déployer votre propre version.

---

## Installation & Configuration

### Q4 : Par où commencer ?
**A :** Lire [QUICKSTART.md](QUICKSTART.md) - démarrage en 10 minutes.

### Q5 : J'ai besoin d'aide pour Supabase
**A :** 
1. Lire la section "Configuration Supabase" dans [README.md](README.md)
2. Consulter [https://supabase.com/docs](https://supabase.com/docs)
3. Ouvrir une issue sur GitHub

### Q6 : Comment déployer sur Netlify ?
**A :** Trois méthodes dans [README.md](README.md) :
- Drag & drop
- GitHub integration
- Netlify CLI

### Q7 : Puis-je utiliser un autre hébergeur ?
**A :** Oui ! Spiral est un site statique HTML/CSS/JS. Il fonctionne sur n'importe quel hébergeur (GitHub Pages, Vercel, AWS, OVH, etc.).

---

## Développement

### Q8 : Puis-je ajouter des logiciels ?
**A :** Oui, deux façons :
1. **Statique** : Éditez `sampleSoftware` dans `pages/dashboard.js`
2. **Dynamique** : Créez une table "software" dans Supabase et décommentez la requête

### Q9 : Comment personnaliser le design ?
**A :** 
- Couleurs : Modifiez `:root` dans `css/style.css`
- Texte : Modifiez les fichiers HTML
- Logo : Remplacez `assets/Spiral Logo.png`

### Q10 : Puis-je ajouter des pages ?
**A :** Oui ! Créez un fichier `.html`, liez-le dans le menu ou footer, et appliquez le CSS existant.

### Q11 : Comment tester localement ?
**A :**
```bash
python -m http.server 8000
# Ouvrez http://localhost:8000
```

### Q12 : Puis-je utiliser npm/Node ?
**A :** Oui, `package.json` est fourni. Mais ce n'est pas obligatoire pour cette version de base.

---

## Authentification & Supabase

### Q13 : Comment marche l'authentification ?
**A :** 
1. Supabase JWT pour sessions utilisateur
2. Token stocké dans le navigateur
3. Vérification avant accès au dashboard

### Q14 : Mes données sont-elles sécurisées ?
**A :** Oui :
- Supabase utilise PostgreSQL chiffré
- Mots de passe hashés
- HTTPS forcé sur Netlify
- Row Level Security (RLS) en Supabase

### Q15 : Où sont stockées les données ?
**A :** Dans Supabase (serveurs en Europe ou USA selon votre région).

### Q16 : Puis-je ajouter Two-Factor Authentication ?
**A :** Oui, Supabase supporte la 2FA. Consultez la [documentation Supabase](https://supabase.com/docs).

---

## Déploiement

### Q17 : Comment déployer en production ?
**A :** Lire [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - checklist complète.

### Q18 : Mon site montre une page blanche !
**A :** 
1. Appuyez F12 pour voir les erreurs
2. Vérifiez vos clés Supabase dans `auth.js` et `dashboard.js`
3. Cherchez les erreurs CORS ou réseau

### Q19 : "CORS Error" - Qu'est-ce que c'est ?
**A :** Supabase bloque les requêtes de domaines non autorisés. Solution :
- Allez dans Supabase > Auth > URL Configuration
- Ajoutez votre domaine Netlify dans "Redirect URLs"

### Q20 : Puis-je avoir un domaine personnalisé ?
**A :** Oui ! Sur Netlify :
1. Domain settings
2. Ajouter domaine personnalisé
3. Configurer DNS (guides Netlify fournis)

---

## Performance & SEO

### Q21 : Mon site est lent !
**A :** Checklist :
- [ ] Utilisez Lighthouse (F12 > Lighthouse)
- [ ] Optimisez images
- [ ] Activez compression Gzip
- [ ] Utilisez CDN Netlify (automatique)

### Q22 : Comment améliorer le SEO ?
**A :**
1. Modifiez les meta tags dans `index.html`
2. Ajoutez description et keywords
3. Créez `sitemap.xml`
4. Utilisez Google Search Console

### Q23 : Puis-je mesurer les visites ?
**A :** Oui, ajoutez Google Analytics dans `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

---

## Contribution & Communauté

### Q24 : Puis-je contribuer ?
**A :** Oui ! Lire [CONTRIBUTING.md](CONTRIBUTING.md).

### Q25 : Comment rapporter un bug ?
**A :** 
1. Ouvrir une issue sur GitHub
2. Décrire le problème clairement
3. Inclure étapes de reproduction
4. Attacher screenshot si possible

### Q26 : Puis-je proposer une feature ?
**A :** Oui ! Discussion GitHub > Feature requests.

---

## Support & Ressources

### Q27 : Comment obtenir de l'aide ?
**A :** 
1. Lire la documentation (README, QUICKSTART)
2. Consulter [ARCHITECTURE.md](ARCHITECTURE.md)
3. Ouvrir une issue GitHub
4. Consulter docs officielles :
   - [Supabase](https://supabase.com/docs)
   - [Netlify](https://docs.netlify.com)

### Q28 : Ressources recommandées ?
**A :**
- MDN Web Docs (HTML/CSS/JS)
- CSS Tricks (Design)
- Dev.to (Tutoriels)
- Stack Overflow (Questions)

### Q29 : Puis-je commercial utiliser ce code ?
**A :** Oui, c'est MIT. Vous pouvez l'utiliser commercialement, mais devez inclure la licence.

### Q30 : Comment rester à jour ?
**A :**
- Star le repository GitHub
- Watch pour les mises à jour
- Rejoindre discussions GitHub
- Suivre commits

---

## Problèmes Courants

### Q31 : Inscription fonctionne pas
**A :**
- [ ] Vérifiez clés Supabase
- [ ] Vérifiez email valide
- [ ] Vérifiez F12 Console pour erreurs
- [ ] Vérifiez spam mail

### Q32 : Login ne fonctionne pas après inscription
**A :**
- [ ] Attendez email de confirmation
- [ ] Confirmez email
- [ ] Attendez quelques secondes
- [ ] Rechargez page
- [ ] Vérifiez Supabase Auth Logs

### Q33 : Dashboard vide après login
**A :**
- [ ] Actualisez page
- [ ] Vérifiez données `sampleSoftware`
- [ ] Vérifiez F12 Console
- [ ] Vérifiez Supabase database

### Q34 : Erreur 404 après login
**A :**
- [ ] Vérifiez chemin `pages/dashboard.html`
- [ ] Vérifiez redirect dans `auth.js`
- [ ] Vérifiez Netlify redirects dans `netlify.toml`

---

## Avancé

### Q35 : Puis-je ajouter Stripe pour paiements ?
**A :** Oui, via Netlify Functions + Supabase. Complexe mais possible.

### Q36 : Comment faire une PWA ?
**A :** Ajouter `manifest.json` et Service Workers. Lire MDN Web Docs.

### Q37 : Puis-je utiliser une base de données différente ?
**A :** Oui, remplacez Supabase. Compatible avec Firebase, MongoDB, etc.

### Q38 : Comment monitorer en production ?
**A :** 
- Supabase Logs
- Netlify Analytics
- Sentry (error tracking)
- Google Analytics

---

## License & Legal

### Q39 : Quelle est la licence ?
**A :** MIT. Consultez [LICENSE](LICENSE).

### Q40 : Dois-je respecter une politique de confidentialité ?
**A :** Oui, voir [privacy.html](privacy.html) pour template.

---

**Besoin d'aide supplémentaire ? Ouvrez une issue GitHub ou contactez nous !** 🚀
