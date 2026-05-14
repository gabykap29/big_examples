// Current step
let currentStep = 1;
const totalSteps = 5;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupTooltips();
    setupStepNavigation();
});

// Create floating particles
function createParticles() {
    const container = document.getElementById('particles');
    const particles = ['📦', '💻', '⚡', '🔢', '📊'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// Setup tooltips
function setupTooltips() {
    const tooltip = document.getElementById('tooltip');
    const elements = document.querySelectorAll('[data-tooltip]');

    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            const text = this.getAttribute('data-tooltip');
            tooltip.textContent = text;
            tooltip.classList.remove('show');

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const rect = this.getBoundingClientRect();
                    const tooltipWidth = tooltip.offsetWidth;
                    const tooltipHeight = tooltip.offsetHeight;

                    let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                    let top = rect.top - tooltipHeight - 12;
                    let showBelow = false;

                    // If not enough space above, show below
                    if (top < 10) {
                        top = rect.bottom + 12;
                        showBelow = true;
                    }

                    // Clamp horizontally to viewport
                    if (left < 10) {
                        left = 10;
                    } else if (left + tooltipWidth > window.innerWidth - 10) {
                        left = window.innerWidth - tooltipWidth - 10;
                    }

                    tooltip.style.left = left + 'px';
                    tooltip.style.top = top + 'px';

                    tooltip.classList.add('show');
                });
            });
        });
    });

    document.addEventListener('click', function() {
        tooltip.classList.remove('show');
    });
}

// Setup step navigation
function setupStepNavigation() {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('click', function() {
            const stepNum = parseInt(this.getAttribute('data-step'));
            goToStep(stepNum);
        });
    });
}

// Change step
function changeStep(direction) {
    const newStep = currentStep + direction;
    if (newStep >= 1 && newStep <= totalSteps) {
        goToStep(newStep);
    }
}

// Go to specific step
function goToStep(step) {
    // Hide current section
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    
    // Update step indicator
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
    if (step > currentStep) {
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('completed');
    }
    
    // Show new section
    currentStep = step;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('completed');
    
    // Update buttons
    document.getElementById('prevBtn').disabled = currentStep === 1;
    document.getElementById('nextBtn').disabled = currentStep === totalSteps;
    
    if (currentStep === totalSteps) {
        document.getElementById('nextBtn').textContent = '✓ Completado';
    } else {
        document.getElementById('nextBtn').textContent = 'Siguiente →';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Check answer for first question
function checkAnswer(button, isCorrect) {
    const buttons = button.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'default';
    });
    
    if (isCorrect) {
        button.classList.add('correct');
        document.getElementById('hint-1').classList.add('show');
    } else {
        button.classList.add('incorrect');
        setTimeout(() => {
            button.classList.remove('incorrect');
            buttons.forEach(btn => btn.disabled = false);
        }, 1000);
    }
}

// Check answer for second question
function checkAnswer2(button, isCorrect) {
    const buttons = button.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'default';
    });
    
    if (isCorrect) {
        button.classList.add('correct');
        document.getElementById('hint-2').classList.add('show');
    } else {
        button.classList.add('incorrect');
        setTimeout(() => {
            button.classList.remove('incorrect');
            buttons.forEach(btn => btn.disabled = false);
        }, 1000);
    }
}

// Animate comparison steps on scroll
function animateComparisonSteps() {
    const steps = document.querySelectorAll('.comparison-step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '0';
            step.style.transform = 'translateX(-20px)';
            step.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateX(0)';
            }, 100);
        }, index * 500);
    });
}

// Observe when step 4 is visible to animate
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'step-4') {
            animateComparisonSteps();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const step4 = document.getElementById('step-4');
    if (step4) observer.observe(step4);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') changeStep(1);
    if (e.key === 'ArrowLeft') changeStep(-1);
});
