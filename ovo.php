<?php
$artists = [
    [
        'name' => 'PARTYNEXTDOOR',
        'role' => 'Singer · Producer',
        'image' => 'https://ratedrnb.com/cdn/2024/04/partynextdoor-ratedrnb-scaled.jpg',
        'songs' => ['Dreamin', 'Recognize', 'Loyal', 'Break From Toronto', 'Make a Mil'],
    ],
    [
        'name' => 'Majid Jordan',
        'role' => 'R&B Duo',
        'image' => 'https://upload.wikimedia.org/wikipedia/en/4/40/MajidJordanalbum.jpg',
        'songs' => ['My Love', 'Something About You', 'Her', 'Forever', 'Phases'],
    ],
    [
        'name' => 'dvsn',
        'role' => 'R&B Duo',
        'image' => 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Daniel_Daley_dvsn_Summer_Sixteen_2016.jpg',
        'songs' => ['Hallucinations', 'Too Deep', 'With Me', 'In + Out', 'Sept 5th'],
    ],
    [
        'name' => 'Roy Woods',
        'role' => 'Singer · Rapper',
        'image' => 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Roy_Woods_2018.png',
        'songs' => ['Drama', 'Get You Good', 'Jealousy', 'Gwan Big Up Urself', 'Love You'],
    ],
    [
        'name' => 'Baka Not Nice',
        'role' => 'Rapper',
        'image' => 'https://lastfm.freetls.fastly.net/i/u/ar0/e80fb9d98647e9e38d20e963b91528a2.jpg',
        'songs' => ['Live Up to My Name', 'Money in the Bank', 'No Time', 'I Am Who I Am', 'Junior High'],
    ],
    [
        'name' => 'Smiley',
        'role' => 'Rapper',
        'image' => 'https://www.hotnewhiphop.com/imgprst/390x273-cover-81-auto/2025/01/GettyImages-1981613783.jpg',
        'songs' => ['Over the Top', 'Body', 'In My Zone', 'Moving Different', '2 Mazza'],
    ],
    [
        'name' => 'Popcaan',
        'role' => 'Dancehall',
        'image' => 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/SDKqd5nBJt.jpg',
        'songs' => ['Unruly Rasta', 'Only Man She Want', 'Party Shot', 'Everything Nice', 'We Never Fear Dem'],
    ],
    [
        'name' => 'Naomi Sharon',
        'role' => 'Singer',
        'image' => 'https://core.colorsxstudios.com/wp-content/uploads/2024/01/COLORSxSTUDIOS_Announcement_NaomiSharon-1200x1500.jpg',
        'songs' => ['Hills', 'Celestial', 'Time and Trust', 'Another Life', 'Definition of Love'],
    ],
    [
        'name' => 'Drake',
        'role' => 'Founder',
        'image' => 'https://static01.nyt.com/images/2021/12/08/arts/06drake2/06drake2-mediumSquareAt3X.jpg',
        'songs' => ['God\'s Plan', 'One Dance', 'Hotline Bling', 'Started From the Bottom', 'In My Feelings'],
    ],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="The OVO Sound roster — Drake's record label." />
    <meta name="author" content="Drake Fan" />
    <title>Drake — OVO Sound</title>

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
                <li class="nav-item"><a class="nav-link active" href="ovo.php">OVO Sound</a></li>
                <li class="nav-item"><a class="nav-link" href="song-recommender.php">Recommender</a></li>
                <li class="nav-item"><a class="nav-link" href="about.php">About</a></li>
            </ul>
        </div>
    </nav>

    <header class="page-header">
        <div class="container">
            <p class="hero-eyebrow">— October's Very Own —</p>
            <h1 class="chromatic-strong">OVO Sound</h1>
            <p>The label, the roster, the sound. Founded by Drake, Noah "40" Shebib, and Oliver El-Khatib in 2012.</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="artist-grid">
                <?php foreach ($artists as $i => $a):
                    $sid = 'artist-' . $i;
                ?>
                <article class="artist-card">
                    <img src="<?= htmlspecialchars($a['image']) ?>" alt="<?= htmlspecialchars($a['name']) ?>" loading="lazy" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border: 1px solid var(--ink-dark); margin-bottom: 1rem; filter: contrast(1.05) saturate(0.85);" onerror="this.style.display='none'">
                    <div class="artist-name"><?= htmlspecialchars($a['name']) ?></div>
                    <div class="artist-role"><?= htmlspecialchars($a['role']) ?></div>
                    <button class="btn btn-sm btn-outline" type="button" onclick="toggleSongs('<?= $sid ?>')">
                        <i class="bi bi-music-note"></i> Top Songs
                    </button>
                    <ul class="album-songs" id="<?= $sid ?>" style="display: none; text-align: left;">
                        <?php foreach ($a['songs'] as $s): ?>
                            <li><?= htmlspecialchars($s) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </article>
                <?php endforeach; ?>
            </div>
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
        function toggleSongs(id) {
            const el = document.getElementById(id);
            if (!el) return;
            el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
        }
    </script>
</body>
</html>
