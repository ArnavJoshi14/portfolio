
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Preloader Animation
window.addEventListener('load', () => {
    gsap.to(".progress-bar", {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
            gsap.to(".preloader", {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                onComplete: () => {
                    document.querySelector(".preloader").style.display = "none";
                    initAnimations();
                }
            });
        }
    });
});

function initAnimations() {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    })
    .to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to(".ticker-container", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .to(".hero-description", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")
    .to(".cta-button", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5");

    // Floating orbs animation
    gsap.to(".orb1", {
        y: -40,
        x: 30,
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });

    gsap.to(".orb2", {
        y: 50,
        x: -40,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });

    gsap.to(".orb3", {
        y: -30,
        x: 35,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });

    // Remove the old ticker animation as it's now handled by CSS

    // About section animations
    gsap.fromTo(".profile-image", {
        x: -100,
        visibility: "hidden",
    }, {
        x: 0,
        visibility: "visible",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%"
        }
    });

    gsap.fromTo(".about-content", {
        x: 100,
        visibility: "hidden",
    }, {
        x: 0,
        visibility: "visible",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%"
        }
    });

    // Skills section animation
    gsap.fromTo(".skills h2", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%"
        }
    });

    // Projects animations
    gsap.fromTo(".projects h2", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%"
        }
    });

    gsap.fromTo(".project-card", {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%"
        }
    });

    

    gsap.fromTo(".social-links", {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".social-links",
            start: "top 90%"
        }
    });
}

// CTA button pulse animation
document.querySelector('.cta-button').addEventListener('mouseenter', function() {
    gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
    });
});

document.querySelector('.cta-button').addEventListener('mouseleave', function() {
    gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });
});

// Resume button bounce animation
document.querySelector('.resume-btn').addEventListener('mouseenter', function() {
    gsap.to(this, {
        y: -3,
        duration: 0.3,
        ease: "power2.out"
    });
});

document.querySelector('.resume-btn').addEventListener('mouseleave', function() {
    gsap.to(this, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
    });
});


// Social links glow animation
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Parallax effect for hero section
gsap.to(".spline-bg", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Project cards hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            rotationY: 5,
            rotationX: 5,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// Navbar background opacity on scroll
ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {className: "scrolled", targets: "nav"}
});

// Add scrolled class styles
const style = document.createElement('style');
style.textContent = `
    nav.scrolled {
        background: rgba(10, 10, 15, 0.95);
        backdrop-filter: blur(20px);
    }
`;
document.head.appendChild(style);

// Random star field generation
function createStarField() {
    const starField = document.createElement('div');
    starField.style.position = 'fixed';
    starField.style.top = '0';
    starField.style.left = '0';
    starField.style.width = '100%';
    starField.style.height = '100%';
    starField.style.pointerEvents = 'none';
    starField.style.zIndex = '-10';
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        
        // Twinkling animation
        gsap.to(star, {
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 3 + 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });
        
        starField.appendChild(star);
    }
    
    document.body.appendChild(starField);
}

// Initialize star field
createStarField();

// Cursor trail effect
let cursorTrail = [];
document.addEventListener('mousemove', (e) => {
    cursorTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    if (cursorTrail.length > 10) {
        cursorTrail.shift();
    }
    
    // Clean up old trail points
    cursorTrail = cursorTrail.filter(point => Date.now() - point.time < 1000);
});

// Hamburger menu toggle for mobile (top right)
const navLinks = document.querySelector('.nav-links');
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.innerHTML = '<i class="ph ph-list"></i>';
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.style.background = 'none';
mobileMenuToggle.style.border = 'none';
mobileMenuToggle.style.color = 'white';
mobileMenuToggle.style.fontSize = '1.5rem';
mobileMenuToggle.style.cursor = 'pointer';

// Add toggle button only on mobile, top right
function handleMobileMenu() {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            document.querySelector('.nav-container').appendChild(mobileMenuToggle);
        }
        mobileMenuToggle.style.display = 'block';
        navLinks.classList.add('mobile');
        navLinks.classList.remove('open');
        navLinks.style.display = '';
    } else {
        mobileMenuToggle.style.display = 'none';
        navLinks.classList.remove('mobile', 'open');
        navLinks.style.display = 'flex';
    }
}

// Toggle menu open/close
mobileMenuToggle.onclick = function () {
    navLinks.classList.toggle('open');
};

// Close menu when a link is clicked (on mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('open');
        }
    });
});

// Initial setup and resize handler
handleMobileMenu();
window.addEventListener('resize', handleMobileMenu);


// Intersection Observer for additional animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.skill-item, .tech-tag').forEach(el => {
    observer.observe(el);
});

// Smooth scroll behavior for browsers that don't support CSS smooth scroll
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Add any scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

console.log('🚀 Arnav Joshi Portfolio - Loaded successfully!');
initAnimations();
