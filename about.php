<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="About Drake" />
    <meta name="author" content="Replit AI" />
    <title>Drake - About</title>
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#2c2c2c">
    <link rel="icon" type="image/jpeg" href="images/baha.jpg?v=2" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
    <link href="css/modern-styles.css" rel="stylesheet" />
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            min-height: 100vh;
            padding-top: 80px;
        }
        .social-icons a {
            font-size: 2rem;
            transition: var(--transition-normal);
            color: var(--accent-gold);
        }
        .social-icons a:hover {
            transform: scale(1.2);
            color: var(--accent-orange);
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container navbar-container">
            <a class="navbar-brand" href="index.php">
                <i class="bi bi-music-note-beamed"></i> Drake
            </a>
            
            <button class="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <i class="bi bi-list"></i>
            </button>
            
            <ul class="navbar-nav" role="menubar">
                <li class="nav-item" role="none">
                    <a class="nav-link" href="index.php" role="menuitem">Home</a>
                </li>
                <li class="nav-item dropdown" role="none">
                    <a class="nav-link dropdown-toggle" href="#" role="menuitem" aria-haspopup="true" aria-expanded="false" id="albumsDropdown">
                        Albums <i class="bi bi-chevron-down"></i>
                    </a>
                    <div class="dropdown-menu" role="menu" aria-labelledby="albumsDropdown">
                        <a class="dropdown-item" href="albums.php" role="menuitem">All Albums</a>
                        <a class="dropdown-item" href="singles.php" role="menuitem">Singles</a>
                    </div>
                </li>
                <li class="nav-item" role="none">
                    <a class="nav-link active" href="about.php" role="menuitem">About</a>
                </li>
                <li class="nav-item" role="none">
                    <a class="nav-link" href="ovo.php" role="menuitem">OVO Artists</a>
                </li>
                <li class="nav-item" role="none">
                    <a class="nav-link" href="song-recommender.php" role="menuitem">Song Recommender</a>
                </li>
                <li class="nav-item" role="none">
                    <a class="nav-link" href="song-creator.php" role="menuitem">Song Creator</a>
                </li>
                <li class="nav-item" role="none">
                    <a class="nav-link" href="song-guesser.php" role="menuitem">Song Guesser</a>
                </li>
            </ul>
        </div>
    </nav>
    
    <!-- Header -->
    <header class="py-5" style="padding-top: 120px; background: var(--primary-bg); min-height: 60vh; display: flex; align-items: center;">
        <div class="container px-4">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-6">
                    <div class="text-center">
                        <div class="creator-logo mb-4" style="background: linear-gradient(135deg, var(--accent-ice), var(--accent-frost)); width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 0 20px rgba(100, 181, 246, 0.3);">
                            <i class="bi bi-person" style="font-size: 2.5rem; color: var(--primary-bg);"></i>
                        </div>
                        <h1 class="fw-bolder mb-3" style="color: var(--accent-ice); font-size: 2.5rem;">About Drake</h1>
                        <p class="mb-4" style="color: var(--text-secondary); font-size: 1.1rem;">Learn about Drake's incredible journey from Degrassi to becoming one of the most influential artists of our time.</p>
                        <div class="creator-stats d-flex justify-content-center gap-4 mb-4 flex-wrap">
                            <div class="stat-item text-center">
                                <div class="stat-number">6ix</div>
                                <div class="stat-label">Toronto</div>
                            </div>
                            <div class="stat-item text-center">
                                <div class="stat-number">Multi</div>
                                <div class="stat-label">Grammy</div>
                            </div>
                            <div class="stat-item text-center">
                                <div class="stat-number">Global</div>
                                <div class="stat-label">Icon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <section class="py-5" style="background: var(--card-bg);">
        <div class="container px-4 px-lg-5">
            <h2 style="color: var(--accent-ice); margin-bottom: 2rem;">Biography</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">Aubrey Drake Graham was born on October 24, 1986, in Toronto, Ontario, Canada. Raised in Forest Hill, he first gained fame as Jimmy Brooks on *Degrassi: The Next Generation*. His passion for music led to the release of his debut mixtape *Room for Improvement* in 2006.</p>
        </div>
    </section>
    
    <section class="py-5" style="background: var(--secondary-bg);">
        <div class="container px-4 px-lg-5">
            <h2 style="color: var(--accent-ice); margin-bottom: 2rem;">Career & Rise to Fame</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">Drake's breakthrough came in 2009 with *So Far Gone*, leading to a deal with Young Money Entertainment. Albums like *Take Care*, *Nothing Was the Same*, and *Views* cemented his legacy.</p>
        </div>
    </section>
    
    <section class="py-5" style="background: var(--card-bg);">
        <div class="container px-4 px-lg-5">
            <h2 style="color: var(--accent-ice); margin-bottom: 2rem;">Discography</h2>
            <ul>
                <li><strong>So Far Gone</strong> (2009)</li>
                <li><strong>Thank Me Later</strong> (2010)</li>
                <li><strong>Take Care</strong> (2011)</li>
                <li><strong>Nothing Was the Same</strong> (2013)</li>
                <li><strong>If Your Reading This, It's Too Late</strong> (2015)</li>
                <li><strong>What a Time to be Alive</strong> (2016)</li>
                <li><strong>Views</strong> (2016)</li>
                <li><strong>More Life</strong> (2017)</li>
                <li><strong>Scary Hours</strong> (2018)</li>
                <li><strong>Scorpion</strong> (2018)</li>
                <li><strong>Care Package</strong> (2019)</li>
                <li><strong>Dark Lane Demo Tapes</strong> (2020)</li>
                <li><strong>Scary Hours 2</strong> (2021)</li>
                <li><strong>Certified Lover Boy</strong> (2021)</li>
                <li><strong>Honestly, Nevermind</strong> (2022)</li>
                <li><strong>Her Loss</strong> (2022)</li>
                <li><strong>For All The Dogs</strong> (2023)</li>
                <li><strong>100 Gigs</strong> (2024)</li>
                <li><strong>$ome $exy $ongs 4 U</strong> (2025)</li>
            </ul>
        </div>
    </section>
    
    <section class="py-5" style="background: var(--secondary-bg);">
        <div class="container px-4 px-lg-5">
            <h2 style="color: var(--accent-ice); margin-bottom: 2rem;">Awards & Achievements</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">Drake has won 5 Grammy Awards, 34 Billboard Music Awards, and holds the record for the most Billboard Hot 100 entries (331 as of 2023).</p>
        </div>
    </section>
    
    <footer class="bg-dark py-4 text-center text-white">
        <div class="container px-4 px-lg-5">
            <div class="small">Copyright © 2025 - Drake</div>
        </div>
    </footer>
    
    <script src="js/navigation.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>