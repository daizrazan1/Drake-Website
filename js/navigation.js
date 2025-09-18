// Modern Navigation Component with Mobile Support
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
    }

    // Mobile menu toggle functionality
    setupMobileToggle() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navbarNav = document.querySelector('.navbar-nav');

        if (!mobileToggle || !navbarNav) return;

        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navbarNav.classList.toggle('show');
            
            // Update toggle icon
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-list');
                icon.classList.toggle('bi-x');
            }

            // Update ARIA attributes
            const isExpanded = navbarNav.classList.contains('show');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when clicking on nav links
        const navLinks = navbarNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navbarNav.classList.remove('show');
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('bi-list');
                        icon.classList.remove('bi-x');
                    }
                    mobileToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    // Dropdown functionality for desktop and mobile
    setupDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');

            if (!toggle || !menu) return;

            // Click handler for mobile and desktop
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
            if (!('ontouchstart' in window)) {
                dropdown.addEventListener('mouseenter', () => {
                    dropdown.classList.add('show');
                    toggle.setAttribute('aria-expanded', true);
                });

                dropdown.addEventListener('mouseleave', () => {
                    dropdown.classList.remove('show');
                    toggle.setAttribute('aria-expanded', false);
                });
            }
        });
    }

    // Handle clicks outside navigation
    handleOutsideClicks() {
        document.addEventListener('click', (e) => {
            const navbar = document.querySelector('.navbar');
            if (!navbar || navbar.contains(e.target)) return;

            // Close mobile menu
            const navbarNav = document.querySelector('.navbar-nav');
            if (navbarNav && navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
                const mobileToggle = document.querySelector('.mobile-toggle');
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
                if (navbarNav) {
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

                const mobileToggle = document.querySelector('.mobile-toggle');
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
                if (navbarNav) {
                    navbarNav.classList.remove('show');
                }

                const mobileToggle = document.querySelector('.mobile-toggle');
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

// Generate navigation HTML
function generateNavigation(activePage = '') {
    return `
        <nav class="navbar">
            <div class="container navbar-container">
                <a class="navbar-brand" href="index.html">
                    <i class="bi bi-music-note-beamed"></i> Drake
                </a>
                
                <button class="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                    <i class="bi bi-list"></i>
                </button>
                
                <ul class="navbar-nav" role="menubar">
                    <li class="nav-item" role="none">
                        <a class="nav-link ${activePage === 'index.html' ? 'active' : ''}" href="index.html" role="menuitem">Home</a>
                    </li>
                    <li class="nav-item dropdown" role="none">
                        <a class="nav-link dropdown-toggle ${activePage === 'albums.html' || activePage === 'singles.html' ? 'active' : ''}" 
                           href="#" 
                           role="menuitem" 
                           aria-haspopup="true" 
                           aria-expanded="false"
                           id="albumsDropdown">
                            Albums <i class="bi bi-chevron-down"></i>
                        </a>
                        <div class="dropdown-menu" role="menu" aria-labelledby="albumsDropdown">
                            <a class="dropdown-item ${activePage === 'albums.html' ? 'active' : ''}" href="albums.html" role="menuitem">All Albums</a>
                            <a class="dropdown-item ${activePage === 'singles.html' ? 'active' : ''}" href="singles.html" role="menuitem">Singles</a>
                        </div>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link ${activePage === 'about.html' ? 'active' : ''}" href="about.html" role="menuitem">About</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link ${activePage === 'ovo.html' ? 'active' : ''}" href="ovo.html" role="menuitem">OVO Artists</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link ${activePage === 'fav-song-gen.html' ? 'active' : ''}" href="fav-song-gen.html" role="menuitem">Fav Song Gen</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link ${activePage === 'song-creator.html' ? 'active' : ''}" href="song-creator.html" role="menuitem">Song Creator</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link ${activePage === 'song-guesser.html' ? 'active' : ''}" href="song-guesser.html" role="menuitem">Song Guesser</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert navigation if not already present
    if (!document.querySelector('.navbar') && document.getElementById('navigation-placeholder')) {
        const placeholder = document.getElementById('navigation-placeholder');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        placeholder.innerHTML = generateNavigation(currentPage);
    }
    
    // Initialize navigation functionality - critical for mobile menu and dropdowns
    const navManager = new NavigationManager();
    navManager.handleResize(); // Also setup resize handler
    
    console.log('Navigation initialized successfully');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NavigationManager, generateNavigation };
}
// Navigation functionality for Drake website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileToggle && navbarNav) {
        mobileToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-list');
                icon.classList.toggle('bi-x');
            }
        });
    }

    // Dropdown functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('show');
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navbarNav) {
                navbarNav.classList.remove('show');
            }
            const mobileIcon = mobileToggle?.querySelector('i');
            if (mobileIcon) {
                mobileIcon.classList.add('bi-list');
                mobileIcon.classList.remove('bi-x');
            }
        });
    });
});
