// Clean Navigation Component - Fixed for Drake Website
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileToggle();
        this.setupDropdowns();
        this.handleOutsideClicks();
        this.handleKeyboardNavigation();
        this.setActivePage();
        this.handleResize();
    }

    // Fixed mobile menu toggle functionality
    setupMobileToggle() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navbarNav = document.querySelector('.navbar-nav');

        if (!mobileToggle || !navbarNav) return;

        // Remove any existing listeners
        const newToggle = mobileToggle.cloneNode(true);
        mobileToggle.parentNode.replaceChild(newToggle, mobileToggle);

        newToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            const isOpen = navbarNav.classList.contains('show');
            
            if (isOpen) {
                navbarNav.classList.remove('show');
            } else {
                navbarNav.classList.add('show');
            }
            
            // Update toggle icon
            const icon = newToggle.querySelector('i');
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('bi-x');
                    icon.classList.add('bi-list');
                } else {
                    icon.classList.remove('bi-list');
                    icon.classList.add('bi-x');
                }
            }

            // Update ARIA attributes
            newToggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close mobile menu when clicking nav links (only actual links, not dropdowns)
        const navLinks = navbarNav.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navbarNav.classList.remove('show');
                    const icon = newToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('bi-list');
                        icon.classList.remove('bi-x');
                    }
                    newToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    // Fixed dropdown functionality - only for actual dropdown menus
    setupDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');

            if (!toggle || !menu) return;

            // Only handle clicks for actual dropdown toggles with menu content
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('show');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('show');

                // Update ARIA attributes
                const isExpanded = dropdown.classList.contains('show');
                toggle.setAttribute('aria-expanded', isExpanded);
            });

            // Desktop hover behavior (only on non-touch devices)
            if (!('ontouchstart' in window) && window.innerWidth > 768) {
                dropdown.addEventListener('mouseenter', () => {
                    dropdown.classList.add('show');
                    toggle.setAttribute('aria-expanded', true);
                });

                dropdown.addEventListener('mouseleave', () => {
                    dropdown.classList.remove('show');
                    toggle.setAttribute('aria-expanded', false);
                });
            }

            // Close dropdown when clicking dropdown items
            const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(item => {
                item.addEventListener('click', () => {
                    dropdown.classList.remove('show');
                    toggle.setAttribute('aria-expanded', false);
                });
            });
        });
    }

    // Handle clicks outside navigation
    handleOutsideClicks() {
        document.addEventListener('click', (e) => {
            const navbar = document.querySelector('.navbar');
            if (!navbar || navbar.contains(e.target)) return;

            // Close mobile menu
            const navbarNav = document.querySelector('.navbar-nav');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            if (navbarNav && navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
                if (mobileToggle) {
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('bi-list');
                        icon.classList.remove('bi-x');
                    }
                    mobileToggle.setAttribute('aria-expanded', false);
                }
            }

            // Close dropdowns
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
                const toggle = dropdown.querySelector('.dropdown-toggle');
                if (toggle) {
                    toggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    // Keyboard navigation support
    handleKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu and dropdowns
                const navbarNav = document.querySelector('.navbar-nav');
                const mobileToggle = document.querySelector('.mobile-toggle');
                
                if (navbarNav && navbarNav.classList.contains('show')) {
                    navbarNav.classList.remove('show');
                }

                const dropdowns = document.querySelectorAll('.dropdown');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                    const toggle = dropdown.querySelector('.dropdown-toggle');
                    if (toggle) {
                        toggle.setAttribute('aria-expanded', false);
                    }
                });

                if (mobileToggle) {
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('bi-list');
                        icon.classList.remove('bi-x');
                    }
                    mobileToggle.setAttribute('aria-expanded', false);
                }
            }
        });
    }

    // Set active page in navigation
    setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === currentPage || 
                (currentPage === '' && href === 'index.html') ||
                (currentPage === 'index.html' && href === 'index.html')) {
                link.classList.add('active');
                
                // If it's a dropdown item, also mark the parent dropdown as active
                const dropdown = link.closest('.dropdown');
                if (dropdown) {
                    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    if (dropdownToggle) {
                        dropdownToggle.classList.add('active');
                    }
                }
            }
        });
    }

    // Handle window resize
    handleResize() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                // Close mobile menu on desktop
                const navbarNav = document.querySelector('.navbar-nav');
                const mobileToggle = document.querySelector('.mobile-toggle');
                
                if (navbarNav && navbarNav.classList.contains('show')) {
                    navbarNav.classList.remove('show');
                }

                if (mobileToggle) {
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('bi-list');
                        icon.classList.remove('bi-x');
                    }
                    mobileToggle.setAttribute('aria-expanded', false);
                }
            }
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation functionality
    const navManager = new NavigationManager();
    
    console.log('Navigation initialized successfully');
});
