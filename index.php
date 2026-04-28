<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Drake Fan Site — explore albums, singles, OVO Sound, and stream original tracks. Iceman coming soon." />
    <meta name="author" content="Drake Fan" />
    <title>Drake — Iceman Coming Soon</title>

    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#b5ddd4">
    <link rel="icon" type="image/x-icon" href="/drake-icon-192.png" />

    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="css/modern-styles.css" rel="stylesheet" />
</head>
<body>
    <div class="grain"></div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="navbar-container">
            <a class="navbar-brand" href="index.php">DRAKE</a>

            <button class="mobile-toggle" aria-label="Toggle navigation menu">
                <i class="bi bi-list"></i>
            </button>

            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link active" href="index.php">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" aria-haspopup="true">Discography</a>
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

    <!-- Iceman Coming Soon Banner -->
    <section class="iceman-banner">
        <div class="container">
            <p class="hero-eyebrow">A New Era · 2026</p>
            <h1 class="iceman-title chromatic-strong">ICEMAN</h1>
            <p class="hero-sub">The next chapter from Drake. A frozen sound, a thawed heart. Episode releases approaching.</p>
            <p class="iceman-meta">— Coming Soon —</p>
        </div>
    </section>

    <!-- Hero Intro -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="section-eyebrow">— Welcome to the archive —</span>
                <h2>Drake Fan Site</h2>
                <p>An obsessive fan archive: every album, every single, every era. From <em>So Far Gone</em> to <em>Iceman</em> — and a small drop of original music made by yours truly.</p>
            </div>

            <div class="hero-meta">
                <div class="meta-item"><div class="meta-num">19</div><div class="meta-label">Albums</div></div>
                <div class="meta-item"><div class="meta-num">250+</div><div class="meta-label">Songs</div></div>
                <div class="meta-item"><div class="meta-num">5</div><div class="meta-label">Grammys</div></div>
                <div class="meta-item"><div class="meta-num">OVO</div><div class="meta-label">Sound</div></div>
            </div>
        </div>
    </section>

    <!-- My Music — Download Cards -->
    <section class="section" id="my-music" style="border-top: 3px solid var(--ink-dark); border-bottom: 3px solid var(--ink-dark);">
        <div class="container">
            <div class="section-title">
                <span class="section-eyebrow">— Original Tracks —</span>
                <h2>My Music</h2>
                <p>A few songs of my own, inspired by the OVO sound. Drop the file path into <code style="font-family: var(--mono); background: var(--paper); padding: 2px 6px; border: 1px solid var(--ink-dark);">music/</code> and the buttons below will let visitors download.</p>
            </div>

            <div class="download-grid">

                <!-- Track 1 -->
                <article class="track-card">
                    <div class="track-art">
                        <span class="track-art-placeholder">Cover · 01</span>
                    </div>
                    <div class="track-meta">
                        <span class="track-num">Track 01</span>
                        <h3>Untitled One</h3>
                        <p class="track-info">A late-night cut. Replace with your own title and audio file.</p>
                    </div>
                    <div class="track-actions">
                        <a class="btn btn-sm" href="music/track-01.mp3" download>
                            <i class="bi bi-download"></i> Download
                        </a>
                        <a class="btn btn-sm btn-outline" href="music/track-01.mp3" target="_blank">
                            <i class="bi bi-play-fill"></i> Play
                        </a>
                    </div>
                </article>

                <!-- Track 2 -->
                <article class="track-card">
                    <div class="track-art">
                        <span class="track-art-placeholder">Cover · 02</span>
                    </div>
                    <div class="track-meta">
                        <span class="track-num">Track 02</span>
                        <h3>Untitled Two</h3>
                        <p class="track-info">Replace this card text with the song's name and a short note.</p>
                    </div>
                    <div class="track-actions">
                        <a class="btn btn-sm" href="music/track-02.mp3" download>
                            <i class="bi bi-download"></i> Download
                        </a>
                        <a class="btn btn-sm btn-outline" href="music/track-02.mp3" target="_blank">
                            <i class="bi bi-play-fill"></i> Play
                        </a>
                    </div>
                </article>

                <!-- Track 3 -->
                <article class="track-card">
                    <div class="track-art">
                        <span class="track-art-placeholder">Cover · 03</span>
                    </div>
                    <div class="track-meta">
                        <span class="track-num">Track 03</span>
                        <h3>Untitled Three</h3>
                        <p class="track-info">Add your audio to <span class="text-mono">music/track-03.mp3</span> to enable the download.</p>
                    </div>
                    <div class="track-actions">
                        <a class="btn btn-sm" href="music/track-03.mp3" download>
                            <i class="bi bi-download"></i> Download
                        </a>
                        <a class="btn btn-sm btn-outline" href="music/track-03.mp3" target="_blank">
                            <i class="bi bi-play-fill"></i> Play
                        </a>
                    </div>
                </article>

                <!-- Track 4 -->
                <article class="track-card">
                    <div class="track-art">
                        <span class="track-art-placeholder">Cover · 04</span>
                    </div>
                    <div class="track-meta">
                        <span class="track-num">Track 04</span>
                        <h3>Untitled Four</h3>
                        <p class="track-info">Add a fourth track here, or remove this card if you only have three.</p>
                    </div>
                    <div class="track-actions">
                        <a class="btn btn-sm" href="music/track-04.mp3" download>
                            <i class="bi bi-download"></i> Download
                        </a>
                        <a class="btn btn-sm btn-outline" href="music/track-04.mp3" target="_blank">
                            <i class="bi bi-play-fill"></i> Play
                        </a>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <!-- Explore Section -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="section-eyebrow">— The archive —</span>
                <h2>Explore</h2>
                <p>Three corners of the catalogue.</p>
            </div>

            <div class="row">
                <div class="col-4 col-md-6 col-12">
                    <div class="card">
                        <span class="card-tag">Section 01</span>
                        <div class="card-icon"><i class="bi bi-disc"></i></div>
                        <h3>Albums</h3>
                        <p>Studio albums, mixtapes, and collaborations from <em>So Far Gone</em> to <em>$$$4U</em>.</p>
                        <div style="margin-top: auto; padding-top: 1rem;">
                            <a href="albums.php" class="btn btn-outline btn-sm">Open</a>
                        </div>
                    </div>
                </div>

                <div class="col-4 col-md-6 col-12">
                    <div class="card">
                        <span class="card-tag">Section 02</span>
                        <div class="card-icon"><i class="bi bi-music-note-beamed"></i></div>
                        <h3>Singles</h3>
                        <p>The hits, the loosies, the leaks. Filter by era, search by name.</p>
                        <div style="margin-top: auto; padding-top: 1rem;">
                            <a href="singles.php" class="btn btn-outline btn-sm">Open</a>
                        </div>
                    </div>
                </div>

                <div class="col-4 col-md-6 col-12">
                    <div class="card">
                        <span class="card-tag">Section 03</span>
                        <div class="card-icon"><i class="bi bi-people"></i></div>
                        <h3>OVO Sound</h3>
                        <p>The label and the family — PARTYNEXTDOOR, Majid Jordan, Roy Woods, dvsn and more.</p>
                        <div style="margin-top: auto; padding-top: 1rem;">
                            <a href="ovo.php" class="btn btn-outline btn-sm">Open</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="divider" />

            <div class="row">
                <div class="col-6 col-12">
                    <div class="card">
                        <span class="card-tag">Find your track</span>
                        <h3>Song Recommender</h3>
                        <p>Tell us your mood, your era, the kind of feature you like — and we'll match you with the right Drake song.</p>
                        <div style="margin-top: auto; padding-top: 1rem;">
                            <a href="song-recommender.php" class="btn btn-sm">Open Recommender</a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-12">
                    <div class="card">
                        <span class="card-tag">The man</span>
                        <h3>About Drake</h3>
                        <p>Toronto. Forest Hill. Degrassi. <em>So Far Gone</em>. The 6. The legacy.</p>
                        <div style="margin-top: auto; padding-top: 1rem;">
                            <a href="about.php" class="btn btn-sm btn-outline">Read Bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>— Follow Drake —</p>
            <div class="social-row">
                <a href="https://www.instagram.com/champagnepapi" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/drake" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
                <a href="https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><i class="bi bi-spotify"></i></a>
                <a href="https://www.youtube.com/DrakeOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            </div>
            <p>&copy; 2026 Drake Fan Site · Built by fans, for fans</p>
        </div>
    </footer>

    <script src="js/navigation.js"></script>
</body>
</html>
