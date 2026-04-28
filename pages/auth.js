// Initialize Supabase
const SUPABASE_URL = 'https://cnxsnefyxtnzmujrmmfn.supabase.co/rest/v1/'; // À remplacer
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHNuZWZ5eHRuem11anJtbWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODcyMzUsImV4cCI6MjA5Mjk2MzIzNX0.Bz3uqaT9D4tQkCjE0nJjvWv2R-9wZ8FepJFlop89DZg'; // À remplacer

const { createClient } = window.supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// DOM Elements
const authForm = document.getElementById('authForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const toggleBtn = document.getElementById('toggleBtn');
const authTitle = document.getElementById('authTitle');
const authSubtitle = document.getElementById('authSubtitle');
const toggleText = document.getElementById('toggleText');
const submitBtn = document.getElementById('submitBtn');
const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
const generalError = document.getElementById('generalError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

let isSignUp = false;

// Toggle between Login and Sign Up
toggleBtn.addEventListener('click', () => {
    isSignUp = !isSignUp;
    resetForm();
    
    if (isSignUp) {
        authTitle.textContent = 'Créer un compte';
        authSubtitle.textContent = 'Rejoignez Spiral';
        toggleText.textContent = 'Vous avez déjà un compte ?';
        toggleBtn.textContent = 'Se connecter';
        submitBtn.textContent = 'S\'inscrire';
        confirmPasswordGroup.style.display = 'block';
    } else {
        authTitle.textContent = 'Connexion';
        authSubtitle.textContent = 'Accédez à vos logiciels';
        toggleText.textContent = 'Pas encore de compte ?';
        toggleBtn.textContent = 'S\'inscrire';
        submitBtn.textContent = 'Se connecter';
        confirmPasswordGroup.style.display = 'none';
    }
});

// Reset form errors
function resetForm() {
    authForm.reset();
    generalError.classList.remove('show');
    emailError.classList.remove('show');
    passwordError.classList.remove('show');
    confirmPasswordError.classList.remove('show');
    successMessage.classList.remove('show');
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate form
function validateForm() {
    let isValid = true;
    
    emailError.classList.remove('show');
    passwordError.classList.remove('show');
    confirmPasswordError.classList.remove('show');

    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide';
        emailError.classList.add('show');
        isValid = false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 6 caractères';
        passwordError.classList.add('show');
        isValid = false;
    }

    if (isSignUp && passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas';
        confirmPasswordError.classList.add('show');
        isValid = false;
    }

    return isValid;
}

// Handle form submission
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    generalError.classList.remove('show');
    successMessage.classList.remove('show');
    submitBtn.disabled = true;

    try {
        if (isSignUp) {
            // Sign Up
            const { data, error } = await supabase.auth.signUp({
                email: emailInput.value,
                password: passwordInput.value
            });

            if (error) {
                throw error;
            }

            successMessage.textContent = 'Inscription réussie ! Vérifiez votre email pour confirmer votre compte.';
            successMessage.classList.add('show');
            resetForm();
            
            setTimeout(() => {
                isSignUp = false;
                authTitle.textContent = 'Connexion';
                authSubtitle.textContent = 'Accédez à vos logiciels';
                toggleText.textContent = 'Pas encore de compte ?';
                toggleBtn.textContent = 'S\'inscrire';
                submitBtn.textContent = 'Se connecter';
                confirmPasswordGroup.style.display = 'none';
            }, 3000);

        } else {
            // Sign In
            const { data, error } = await supabase.auth.signInWithPassword({
                email: emailInput.value,
                password: passwordInput.value
            });

            if (error) {
                throw error;
            }

            successMessage.textContent = 'Connexion réussie ! Redirection...';
            successMessage.classList.add('show');

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }
    } catch (error) {
        generalError.textContent = error.message || 'Une erreur est survenue. Veuillez réessayer.';
        generalError.classList.add('show');
    } finally {
        submitBtn.disabled = false;
    }
});

// Check if user is already logged in
window.addEventListener('load', async () => {
    try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
            window.location.href = 'dashboard.html';
        }
    } catch (error) {
        console.error('Erreur lors de la vérification de la session:', error);
    }
});
