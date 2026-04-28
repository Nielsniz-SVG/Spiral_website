// Initialize Supabase
const SUPABASE_URL = 'https://cnxsnefyxtnzmujrmmfn.supabase.co/rest/v1/'; // À remplacer
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHNuZWZ5eHRuem11anJtbWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODcyMzUsImV4cCI6MjA5Mjk2MzIzNX0.Bz3uqaT9D4tQkCjE0nJjvWv2R-9wZ8FepJFlop89DZg'; // À remplacer

const { createClient } = window.supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// DOM Elements
const softwareGrid = document.getElementById('softwareGrid');
const userEmail = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');
const logoutBtnAlt = document.getElementById('logoutBtnAlt');
const searchInput = document.getElementById('searchInput');
const appCount = document.getElementById('appCount');

// Sample software data (replace with database queries)
const sampleSoftware = [
    {
        id: 1,
        name: 'Spiral Editor',
        description: 'Éditeur de code avancé avec support pour tous les langages populaires',
        type: 'Desktop',
        icon: '✏️',
        downloadUrl: '#'
    },
    {
        id: 2,
        name: 'Spiral Cloud',
        description: 'Plateforme cloud pour synchroniser et partager vos projets',
        type: 'Web',
        icon: '☁️',
        downloadUrl: '#'
    },
    {
        id: 3,
        name: 'Spiral Collaborate',
        description: 'Outil de collaboration en temps réel pour les équipes',
        type: 'Web',
        icon: '👥',
        downloadUrl: '#'
    },
    {
        id: 4,
        name: 'Spiral CLI',
        description: 'Interface en ligne de commande pour les développeurs',
        type: 'Desktop',
        icon: '⚙️',
        downloadUrl: '#'
    },
    {
        id: 5,
        name: 'Spiral Deploy',
        description: 'Déployez vos applications facilement sur le cloud',
        type: 'Web',
        icon: '🚀',
        downloadUrl: '#'
    }
];

let allSoftware = [...sampleSoftware];

// Check authentication
window.addEventListener('load', async () => {
    try {
        const { data } = await supabase.auth.getSession();
        
        if (!data.session) {
            window.location.href = 'login.html';
            return;
        }

        // Set user email
        userEmail.textContent = data.session.user.email;

        // Load software
        loadSoftware();
    } catch (error) {
        console.error('Erreur lors de la vérification de la session:', error);
        window.location.href = 'login.html';
    }
});

// Load software from Supabase (or use sample data)
async function loadSoftware() {
    try {
        // In a real application, you would fetch from Supabase:
        // const { data, error } = await supabase
        //     .from('software')
        //     .select('*');
        // 
        // if (error) throw error;
        // allSoftware = data;

        displaySoftware(allSoftware);
    } catch (error) {
        console.error('Erreur lors du chargement des logiciels:', error);
        softwareGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-icon">⚠️</div>
                <h3>Erreur de chargement</h3>
                <p>Les logiciels n'ont pas pu être chargés. Veuillez réessayer.</p>
            </div>
        `;
    }
}

// Display software cards
function displaySoftware(software) {
    if (software.length === 0) {
        softwareGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-icon">📦</div>
                <h3>Aucun logiciel trouvé</h3>
                <p>Aucun logiciel ne correspond à votre recherche.</p>
            </div>
        `;
        return;
    }

    softwareGrid.innerHTML = software.map(app => `
        <div class="app-card">
            <div class="app-header">
                <div class="app-icon">${app.icon}</div>
                <span class="app-badge">${app.type}</span>
            </div>
            <h3>${app.name}</h3>
            <div class="app-type">${app.type === 'Web' ? '🌐 Application Web' : '💻 Application Desktop'}</div>
            <p class="app-description">${app.description}</p>
            <div class="app-actions">
                <a href="${app.downloadUrl}" class="btn-download" target="_blank">Télécharger</a>
                <a href="#" class="btn-view">Plus d'infos</a>
            </div>
        </div>
    `).join('');

    appCount.textContent = software.length;
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allSoftware.filter(app => 
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm)
    );
    displaySoftware(filtered);
});

// Logout function
async function logout() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        alert('Erreur lors de la déconnexion');
    }
}

logoutBtn.addEventListener('click', logout);
logoutBtnAlt.addEventListener('click', logout);
