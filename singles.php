<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Drake Singles — every chart-topper, era by era." />
    <meta name="author" content="Drake Fan" />
    <title>Drake — Singles</title>

    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#b5ddd4">
    <link rel="icon" type="image/x-icon" href="/drake-icon-192.png" />

    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="css/modern-styles.css" rel="stylesheet" />
</head>
<body>
    <div class="grain"></div>

    <nav class="navbar">
        <div class="navbar-container">
            <a class="navbar-brand" href="index.php">DRAKE</a>
            <button class="mobile-toggle" aria-label="Toggle navigation menu"><i class="bi bi-list"></i></button>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" aria-haspopup="true">Discography</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="albums.php">Albums</a>
                        <a class="dropdown-item" href="singles.php">Singles</a>
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="ovo.php">OVO Sound</a></li>
                <li class="nav-item"><a class="nav-link" href="song-recommender.php">Recommender</a></li>
                <li class="nav-item"><a class="nav-link" href="about.php">About</a></li>
            </ul>
        </div>
    </nav>

    <header class="page-header">
        <div class="container">
            <p class="hero-eyebrow">— Discography —</p>
            <h1 class="chromatic-strong">Singles</h1>
            <p>From <em>Best I Ever Had</em> to <em>What Did I Miss?</em> — search and filter by era.</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="row mb-4">
                <div class="col-6 col-md-12">
                    <div class="form-group">
                        <label class="form-label" for="searchInput">Search</label>
                        <input type="text" class="form-control" id="searchInput" placeholder="Type a song or album..." />
                    </div>
                </div>
                <div class="col-6 col-md-12">
                    <div class="form-group">
                        <label class="form-label" for="eraFilter">Era</label>
                        <select class="form-control form-select" id="eraFilter">
                            <option value="">All Eras</option>
                            <option value="2009-2013">Early (2009–2013)</option>
                            <option value="2014-2018">Peak (2014–2018)</option>
                            <option value="2019-2023">Recent (2019–2023)</option>
                            <option value="2024-2025">Latest (2024–2025)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="singles-grid" id="singlesGrid"></div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>— Follow Drake —</p>
            <div class="social-row">
                <a href="https://www.instagram.com/champagnepapi" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/drake" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter-x"></i></a>
                <a href="https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" target="_blank" rel="noopener noreferrer"><i class="bi bi-spotify"></i></a>
                <a href="https://www.youtube.com/DrakeOfficial" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a>
            </div>
            <p>&copy; 2026 Drake Fan Site</p>
        </div>
    </footer>

    <script src="js/navigation.js"></script>
    <script>
        const drakeSingles = [
            { title: "Best I Ever Had", year: 2009, era: "2009-2013", album: "So Far Gone", peak: 2 },
            { title: "Successful", year: 2009, era: "2009-2013", album: "So Far Gone", peak: 17 },
            { title: "Over", year: 2010, era: "2009-2013", album: "Thank Me Later", peak: 14 },
            { title: "Find Your Love", year: 2010, era: "2009-2013", album: "Thank Me Later", peak: 5 },
            { title: "Headlines", year: 2011, era: "2009-2013", album: "Take Care", peak: 13 },
            { title: "Take Care", year: 2011, era: "2009-2013", album: "Take Care", peak: 7 },
            { title: "Make Me Proud", year: 2011, era: "2009-2013", album: "Take Care", peak: 9 },
            { title: "The Motto", year: 2012, era: "2009-2013", album: "Take Care", peak: 14 },
            { title: "HYFR", year: 2012, era: "2009-2013", album: "Take Care", peak: 62 },
            { title: "Started From the Bottom", year: 2013, era: "2009-2013", album: "Nothing Was the Same", peak: 6 },
            { title: "Hold On, We're Going Home", year: 2013, era: "2009-2013", album: "Nothing Was the Same", peak: 4 },

            { title: "0 to 100 / The Catch Up", year: 2014, era: "2014-2018", album: "Single", peak: 40 },
            { title: "Energy", year: 2015, era: "2014-2018", album: "If You're Reading This", peak: 26 },
            { title: "Know Yourself", year: 2015, era: "2014-2018", album: "If You're Reading This", peak: 44 },
            { title: "Back to Back", year: 2015, era: "2014-2018", album: "Single", peak: 21 },
            { title: "Hotline Bling", year: 2015, era: "2014-2018", album: "Views", peak: 2 },
            { title: "Summer Sixteen", year: 2016, era: "2014-2018", album: "Views", peak: 6 },
            { title: "One Dance", year: 2016, era: "2014-2018", album: "Views", peak: 1 },
            { title: "Pop Style", year: 2016, era: "2014-2018", album: "Views", peak: 43 },
            { title: "Controlla", year: 2016, era: "2014-2018", album: "Views", peak: 18 },
            { title: "Too Good", year: 2016, era: "2014-2018", album: "Views", peak: 14 },
            { title: "Fake Love", year: 2016, era: "2014-2018", album: "More Life", peak: 8 },
            { title: "Passionfruit", year: 2017, era: "2014-2018", album: "More Life", peak: 8 },
            { title: "More Life", year: 2017, era: "2014-2018", album: "More Life", peak: 26 },
            { title: "God's Plan", year: 2018, era: "2014-2018", album: "Scorpion", peak: 1 },
            { title: "Nice For What", year: 2018, era: "2014-2018", album: "Scorpion", peak: 1 },
            { title: "I'm Upset", year: 2018, era: "2014-2018", album: "Scorpion", peak: 7 },
            { title: "In My Feelings", year: 2018, era: "2014-2018", album: "Scorpion", peak: 1 },
            { title: "Don't Matter To Me", year: 2018, era: "2014-2018", album: "Scorpion", peak: 9 },

            { title: "Money In The Grave", year: 2019, era: "2019-2023", album: "Single", peak: 7 },
            { title: "When To Say When", year: 2020, era: "2019-2023", album: "Dark Lane Demo Tapes", peak: 24 },
            { title: "Chicago Freestyle", year: 2020, era: "2019-2023", album: "Dark Lane Demo Tapes", peak: 14 },
            { title: "Toosie Slide", year: 2020, era: "2019-2023", album: "Dark Lane Demo Tapes", peak: 1 },
            { title: "Pain 1993", year: 2020, era: "2019-2023", album: "Single", peak: 7 },
            { title: "Popstar", year: 2020, era: "2019-2023", album: "Single", peak: 3 },
            { title: "Greece", year: 2020, era: "2019-2023", album: "Single", peak: 49 },
            { title: "Laugh Now Cry Later", year: 2020, era: "2019-2023", album: "Single", peak: 2 },
            { title: "What's Next", year: 2021, era: "2019-2023", album: "Scary Hours 2", peak: 1 },
            { title: "Wants and Needs", year: 2021, era: "2019-2023", album: "Scary Hours 2", peak: 2 },
            { title: "Lemon Pepper Freestyle", year: 2021, era: "2019-2023", album: "Scary Hours 2", peak: 3 },
            { title: "Way 2 Sexy", year: 2021, era: "2019-2023", album: "Certified Lover Boy", peak: 1 },
            { title: "Girls Want Girls", year: 2021, era: "2019-2023", album: "Certified Lover Boy", peak: 2 },
            { title: "Fair Trade", year: 2021, era: "2019-2023", album: "Certified Lover Boy", peak: 3 },
            { title: "Knife Talk", year: 2021, era: "2019-2023", album: "Certified Lover Boy", peak: 4 },
            { title: "Champagne Poetry", year: 2021, era: "2019-2023", album: "Certified Lover Boy", peak: 5 },
            { title: "Jimmy Cooks", year: 2022, era: "2019-2023", album: "Honestly, Nevermind", peak: 1 },
            { title: "Falling Back", year: 2022, era: "2019-2023", album: "Honestly, Nevermind", peak: 4 },
            { title: "Sticky", year: 2022, era: "2019-2023", album: "Honestly, Nevermind", peak: 19 },
            { title: "Rich Flex", year: 2022, era: "2019-2023", album: "Her Loss", peak: 2 },
            { title: "Major Distribution", year: 2022, era: "2019-2023", album: "Her Loss", peak: 4 },
            { title: "On BS", year: 2022, era: "2019-2023", album: "Her Loss", peak: 6 },
            { title: "Spin Bout U", year: 2022, era: "2019-2023", album: "Her Loss", peak: 5 },

            { title: "Search & Rescue", year: 2023, era: "2024-2025", album: "Single", peak: 2 },
            { title: "First Person Shooter", year: 2023, era: "2024-2025", album: "For All the Dogs", peak: 1 },
            { title: "IDGAF", year: 2023, era: "2024-2025", album: "For All the Dogs", peak: 3 },
            { title: "Slime You Out", year: 2023, era: "2024-2025", album: "For All the Dogs", peak: 1 },
            { title: "Another Late Night", year: 2023, era: "2024-2025", album: "For All the Dogs", peak: 5 },
            { title: "8AM in Charlotte", year: 2023, era: "2024-2025", album: "For All the Dogs", peak: 6 },
            { title: "Virginia Beach", year: 2023, era: "2024-2025", album: "For All the Dogs", peak: 3 },
            { title: "Red Button", year: 2024, era: "2024-2025", album: "100 Gigs", peak: 15 },
            { title: "Housekeeping Knows", year: 2024, era: "2024-2025", album: "100 Gigs", peak: 22 },
            { title: "SOD", year: 2024, era: "2024-2025", album: "100 Gigs", peak: 18 },
            { title: "Blue Green Red", year: 2024, era: "2024-2025", album: "100 Gigs", peak: 25 },
            { title: "What Did I Miss?", year: 2025, era: "2024-2025", album: "Single", peak: 8 },
            { title: "Which One", year: 2025, era: "2024-2025", album: "Single", peak: 12 },
            { title: "Somebody Loves Me Pt. 2", year: 2025, era: "2024-2025", album: "Single", peak: 6 },
            { title: "Dog House", year: 2025, era: "2024-2025", album: "Single", peak: 14 }
        ];

        const grid = document.getElementById('singlesGrid');
        const searchInput = document.getElementById('searchInput');
        const eraFilter = document.getElementById('eraFilter');

        function render(list) {
            grid.innerHTML = '';
            if (list.length === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-style: italic;">No singles match your search.</p>';
                return;
            }
            list.forEach(s => {
                const card = document.createElement('article');
                card.className = 'album-card';
                card.innerHTML = `
                    <div class="album-year">${s.year} · Peak #${s.peak}</div>
                    <h3>"${s.title}"</h3>
                    <p style="font-style: italic; color: var(--ink-soft); font-size: 0.9rem; margin: 0.25rem 0 1rem;">${s.album}</p>
                    <div class="album-actions">
                        <a href="https://open.spotify.com/search/${encodeURIComponent(s.title + ' Drake')}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" aria-label="Spotify"><i class="bi bi-spotify"></i></a>
                        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.title + ' Drake')}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                        <a href="https://music.apple.com/search?term=${encodeURIComponent(s.title + ' Drake')}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" aria-label="Apple Music"><i class="bi bi-music-note"></i></a>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function applyFilters() {
            const q = searchInput.value.toLowerCase();
            const era = eraFilter.value;
            render(drakeSingles.filter(s =>
                (s.title.toLowerCase().includes(q) || s.album.toLowerCase().includes(q)) &&
                (!era || s.era === era)
            ));
        }

        searchInput.addEventListener('input', applyFilters);
        eraFilter.addEventListener('change', applyFilters);
        render(drakeSingles);
    </script>
</body>
</html>
