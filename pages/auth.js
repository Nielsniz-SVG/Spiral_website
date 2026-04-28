// Initialize Supabase
const SUPABASE_URL = 'https://cnxsnefyxtnzmujrmmfn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHNuZWZ5eHRuem11anJtbWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODcyMzUsImV4cCI6MjA5Njk2MzIzNX0.Bz3uqaT9D4tQkCjE0nJjvWv2R-9wZ8FepJFlop89DZg';

let supabase;

// Wait for Supabase JS to load
if (window.supabase) {
    const { createClient } = window.supabase;
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
}

// DOM Elements (will be initialized after DOM loads)
let authForm, emailInput, passwordInput, confirmPasswordInput, toggleBtn;
let authTitle, authSubtitle, toggleText, submitBtn, confirmPasswordGroup;
let generalError, emailError, passwordError, confirmPasswordError, successMessage;

let isSignUp = false;

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    authForm = document.getElementById('authForm');
    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    confirmPasswordInput = document.getElementById('confirmPassword');
    toggleBtn = document.getElementById('toggleBtn');
    authTitle = document.getElementById('authTitle');
    authSubtitle = document.getElementById('authSubtitle');
    toggleText = document.getElementById('toggleText');
    submitBtn = document.getElementById('submitBtn');
    confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
    generalError = document.getElementById('generalError');
    emailError = document.getElementById('emailError');
    passwordError = document.getElementById('passwordError');
    confirmPasswordError = document.getElementById('confirmPasswordError');
    successMessage = document.getElementById('successMessage');

    // Check if user is already logged in
    checkAuthStatus();

    // Add event listeners
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAuthMode);
    }
    if (authForm) {
        authForm.addEventListener('submit', handleFormSubmit);
    }
});

// Toggle between Login and Sign Up
function toggleAuthMode() {
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
}

// Reset form errors
function resetForm() {
    if (authForm) authForm.reset();
    if (generalError) generalError.classList.remove('show');
    if (emailError) emailError.classList.remove('show');
    if (passwordError) passwordError.classList.remove('show');
    if (confirmPasswordError) confirmPasswordError.classList.remove('show');
    if (successMessage) successMessage.classList.remove('show');
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
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!supabase) {
        if (generalError) {
            generalError.textContent = 'Erreur : Supabase non initialisé';
            generalError.classList.add('show');
        }
        return;
    }

    if (!validateForm()) {
        return;
    }

    if (generalError) generalError.classList.remove('show');
    if (successMessage) successMessage.classList.remove('show');
    if (submitBtn) submitBtn.disabled = true;

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

            if (successMessage) {
                successMessage.textContent = 'Inscription réussie ! Vérifiez votre email pour confirmer votre compte.';
                successMessage.classList.add('show');
            }
            resetForm();
            
            setTimeout(() => {
                isSignUp = false;
                if (authTitle) authTitle.textContent = 'Connexion';
                if (authSubtitle) authSubtitle.textContent = 'Accédez à vos logiciels';
                if (toggleText) toggleText.textContent = 'Pas encore de compte ?';
                if (toggleBtn) toggleBtn.textContent = 'S\'inscrire';
                if (submitBtn) submitBtn.textContent = 'Se connecter';
                if (confirmPasswordGroup) confirmPasswordGroup.style.display = 'none';
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

            if (successMessage) {
                successMessage.textContent = 'Connexion réussie ! Redirection...';
                successMessage.classList.add('show');
            }

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }
    } catch (error) {
        if (generalError) {
            generalError.textContent = error.message || 'Une erreur est survenue. Veuillez réessayer.';
            generalError.classList.add('show');
        }
        console.error('Auth error:', error);
    } finally {
        if (submitBtn) submitBtn.disabled = false;
    }
}

// Check if user is already logged in
async function checkAuthStatus() {
    try {
        if (!supabase) return;
        
        const { data } = await supabase.auth.getSession();
        if (data.session) {
            window.location.href = 'dashboard.html';
        }
    } catch (error) {
        console.error('Erreur lors de la vérification de la session:', error);
    }
}
