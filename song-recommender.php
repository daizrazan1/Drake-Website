<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Get a Drake song recommendation based on your mood, era, and feature preference." />
    <meta name="author" content="Drake Fan" />
    <title>Drake — Recommender</title>

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
                    <a class="nav-link dropdown-toggle" href="#" aria-haspopup="true">Discography</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="albums.php">Albums</a>
                        <a class="dropdown-item" href="singles.php">Singles</a>
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="ovo.php">OVO Sound</a></li>
                <li class="nav-item"><a class="nav-link active" href="song-recommender.php">Recommender</a></li>
                <li class="nav-item"><a class="nav-link" href="about.php">About</a></li>
            </ul>
        </div>
    </nav>

    <header class="page-header">
        <div class="container">
            <p class="hero-eyebrow">— Find Your Track —</p>
            <h1 class="chromatic-strong">Recommender</h1>
            <p>Tell us your mood, your era, and the kind of feature you like — we'll match you with the right Drake song.</p>
        </div>
    </header>

    <section class="section">
        <div class="container" style="max-width: 720px;">
            <div class="card">
                <span class="card-tag">Quiz · 4 Questions</span>
                <h3 style="text-transform: none; letter-spacing: 0.04em;">Tell us about your mood</h3>

                <form id="recForm" style="margin-top: 1.5rem;">
                    <div class="form-group">
                        <label class="form-label" for="vibe">What's your current vibe?</label>
                        <select class="form-control form-select" name="vibe" id="vibe" required>
                            <option value="">Choose your vibe…</option>
                            <option value="sad">Sad &amp; Emotional</option>
                            <option value="hyped">Hyped &amp; Energetic</option>
                            <option value="happy">Happy &amp; Uplifting</option>
                            <option value="party">Party &amp; Club Ready</option>
                            <option value="chill">Chill &amp; Relaxed</option>
                            <option value="romantic">Romantic &amp; Intimate</option>
                            <option value="motivational">Motivational</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="feature">Preferred feature?</label>
                        <select class="form-control form-select" name="feature" id="feature" required>
                            <option value="">Choose feature type…</option>
                            <option value="solo">Solo Drake</option>
                            <option value="young-thug">Young Thug</option>
                            <option value="yeat">Yeat</option>
                            <option value="chris-brown">Chris Brown</option>
                            <option value="gunna">Gunna</option>
                            <option value="the-weeknd">The Weeknd</option>
                            <option value="rick-ross">Rick Ross</option>
                            <option value="female-vocalist">Female R&amp;B vocalist</option>
                            <option value="any">Any</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="era">Which Drake era?</label>
                        <select class="form-control form-select" name="era" id="era" required>
                            <option value="">Choose era…</option>
                            <option value="early">Early (2009–2013)</option>
                            <option value="peak">Peak (2014–2018)</option>
                            <option value="recent">Recent (2019–2023)</option>
                            <option value="latest">Latest (2024–2025)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="length">Song length preference?</label>
                        <select class="form-control form-select" name="length" id="length" required>
                            <option value="">Choose length…</option>
                            <option value="short">Short (under 3 min)</option>
                            <option value="medium">Medium (3–4 min)</option>
                            <option value="long">Long (over 4 min)</option>
                        </select>
                    </div>

                    <button type="submit" class="btn" style="width: 100%; margin-top: 1rem;">
                        <i class="bi bi-search"></i> Find My Drake Song
                    </button>
                </form>
            </div>

            <div id="result" style="display: none;"></div>
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
        const songs = {
            sad:          ['Marvins Room', 'Take Care', 'Doing It Wrong', 'From Time', 'Jaded', '8AM in Charlotte', 'Teenage Fever', 'After Dark'],
            hyped:        ['Started From the Bottom', 'Energy', 'Nonstop', '0 to 100', 'Worst Behavior', '6 God', 'Rich Flex', 'First Person Shooter'],
            happy:        ['Best I Ever Had', 'God\'s Plan', 'One Dance', 'Hold On, We\'re Going Home', 'Hotline Bling', 'Toosie Slide'],
            party:        ['In My Feelings', 'Way 2 Sexy', 'Nice For What', 'Sticky', 'Toosie Slide', 'I\'m Upset', 'Slime You Out'],
            chill:        ['Passionfruit', 'Chicago Freestyle', 'Feel No Ways', 'Madiba Riddim', 'Falling Back', 'Currents'],
            romantic:     ['Hold On, We\'re Going Home', 'Find Your Love', 'Doing It Wrong', 'Get It Together', 'Teenage Fever', 'Texts Go Green'],
            motivational: ['Started From the Bottom', 'Lord Knows', 'Lose You', 'Light Up', '6PM in New York', 'Jungle']
        };

        const era_filter = {
            early:  ['Best I Ever Had', 'Marvins Room', 'Take Care', 'Started From the Bottom', 'Find Your Love', 'Headlines', 'HYFR', 'From Time', 'Hold On, We\'re Going Home', 'Worst Behavior', 'Doing It Wrong', 'Light Up', '6 God'],
            peak:   ['Hotline Bling', 'One Dance', 'Energy', 'Know Yourself', '0 to 100', 'Back to Back', 'Passionfruit', 'God\'s Plan', 'Nice For What', 'In My Feelings', 'I\'m Upset', 'Nonstop', 'Feel No Ways', 'Madiba Riddim', 'Get It Together', 'Lose You', 'Jaded', 'After Dark', '6PM in New York', 'Jungle'],
            recent: ['Toosie Slide', 'Chicago Freestyle', 'Way 2 Sexy', 'Sticky', 'Falling Back', 'Texts Go Green', 'Currents', 'Rich Flex', 'Teenage Fever'],
            latest: ['Slime You Out', 'First Person Shooter', '8AM in Charlotte', 'What Did I Miss?', 'Which One', 'Dog House']
        };

        document.getElementById('recForm').addEventListener('submit', (e) => {
            e.preventDefault();

            const vibe    = document.getElementById('vibe').value;
            const era     = document.getElementById('era').value;
            const feature = document.getElementById('feature').value;
            const length  = document.getElementById('length').value;

            let pool = songs[vibe] || [];
            const eraPool = era_filter[era] || [];
            const filtered = pool.filter(s => eraPool.includes(s));
            const finalPool = filtered.length ? filtered : pool;
            const pick = finalPool[Math.floor(Math.random() * finalPool.length)] || 'God\'s Plan';

            const result = document.getElementById('result');
            result.style.display = 'block';
            result.innerHTML = `
                <div class="recommend-result">
                    <p style="font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.32em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 0.5rem;">— Your Drake song —</p>
                    <h3>You should listen to</h3>
                    <p class="song-title">"${pick}"</p>
                    <p style="color: var(--ink-mid); font-style: italic; font-size: 0.95rem; margin: 0.5rem 0 1.5rem;">
                        Vibe: ${vibe} · Era: ${era} · Length: ${length}${feature !== 'any' && feature !== 'solo' ? ' · feat. ' + feature.replace('-', ' ') : ''}
                    </p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                        <a class="btn btn-sm" target="_blank" rel="noopener" href="https://open.spotify.com/search/${encodeURIComponent(pick + ' Drake')}">
                            <i class="bi bi-spotify"></i> Spotify
                        </a>
                        <a class="btn btn-sm btn-outline" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${encodeURIComponent(pick + ' Drake')}">
                            <i class="bi bi-youtube"></i> YouTube
                        </a>
                        <a class="btn btn-sm btn-outline" target="_blank" rel="noopener" href="https://music.apple.com/search?term=${encodeURIComponent(pick + ' Drake')}">
                            <i class="bi bi-music-note"></i> Apple Music
                        </a>
                    </div>
                </div>
            `;
            result.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    </script>
</body>
</html>
