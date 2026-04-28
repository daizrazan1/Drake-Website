<?php
$data = json_decode(file_get_contents(__DIR__ . '/data.json'), true);
$albums = $data['artist']['albums'] ?? [];

$covers = [
    'Some Sexy Songs 4 U' => 'https://upload.wikimedia.org/wikipedia/en/6/6a/PartyNextDoor_and_Drake_-_Some_Sexy_Songs_4_U.png',
    'For All the Dogs' => 'https://upload.wikimedia.org/wikipedia/en/0/05/Drake_-_For_All_The_Dogs.png',
    '100 Gigs' => 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Drake_-_100_Gigs.png',
    'Her Loss' => 'https://upload.wikimedia.org/wikipedia/en/3/3a/Drake_and_21_Savage_-_Her_Loss.png',
    'Honestly, Nevermind' => 'https://upload.wikimedia.org/wikipedia/en/c/c7/Honestly%2C_Nevermind_-_Drake.png',
    'Certified Lover Boy' => 'https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png',
    'Scary Hours 2' => 'https://upload.wikimedia.org/wikipedia/en/1/1a/Drake_-_Scary_Hours_2.png',
    'Dark Lane Demo Tapes' => 'https://upload.wikimedia.org/wikipedia/en/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png',
    'Care Package' => 'https://upload.wikimedia.org/wikipedia/en/8/8b/Drake_Care_Package_cover.jpg',
    'Scorpion' => 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg',
    'More Life' => 'https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg',
    'Views' => 'https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg',
    'What A Time To Be Alive' => 'https://upload.wikimedia.org/wikipedia/en/9/94/Drake_and_Future_-_What_a_Time_to_Be_Alive_cover.jpg',
    'If You\'re Reading This It\'s Too Late' => 'https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png',
    'Nothing Was the Same' => 'https://upload.wikimedia.org/wikipedia/en/4/42/Drake_-_Nothing_Was_the_Same_cover.png',
    'Take Care' => 'https://upload.wikimedia.org/wikipedia/en/0/04/Drake_-_Take_Care_cover.png',
    'Thank Me Later' => 'https://upload.wikimedia.org/wikipedia/en/6/63/Drake_-_Thank_Me_Later.png',
    'So Far Gone' => 'https://upload.wikimedia.org/wikipedia/en/c/c3/Drake_-_So_Far_Gone.png',
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Drake's complete album discography." />
    <meta name="author" content="Drake Fan" />
    <title>Drake — Albums</title>

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
            <h1 class="chromatic-strong">Albums</h1>
            <p>Studio albums, mixtapes, EPs, and collaborations — every chapter from 2009 to today.</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="album-grid">
                <?php foreach ($albums as $i => $album):
                    $title = $album['title'];
                    $year  = $album['release_year'];
                    $type  = ucfirst($album['type']);
                    $songs = $album['all_songs'] ?? [];
                    $cover = $covers[$title] ?? '';
                    $aid   = 'album-' . $i;
                ?>
                <article class="album-card">
                    <?php if ($cover): ?>
                        <img src="<?= htmlspecialchars($cover) ?>" alt="<?= htmlspecialchars($title) ?>" loading="lazy" onerror="this.style.display='none'">
                    <?php endif; ?>
                    <div class="album-year"><?= htmlspecialchars($type) ?> · <?= htmlspecialchars((string)$year) ?></div>
                    <h3><?= htmlspecialchars($title) ?></h3>
                    <?php if (!empty($album['collaborator'])): ?>
                        <p style="font-style: italic; color: var(--ink-soft); font-size: 0.9rem; margin: 0;">with <?= htmlspecialchars($album['collaborator']) ?></p>
                    <?php endif; ?>

                    <div class="album-actions">
                        <button class="btn btn-sm btn-outline" type="button" onclick="toggleSongs('<?= $aid ?>')">
                            <i class="bi bi-list-ul"></i> Tracklist
                        </button>
                        <button class="btn btn-sm btn-outline favorite-btn" data-album="<?= htmlspecialchars($title, ENT_QUOTES) ?>">
                            <i class="bi bi-heart"></i>
                        </button>
                        <span class="like-count" data-album="<?= htmlspecialchars($title, ENT_QUOTES) ?>">0</span>
                    </div>

                    <ul class="album-songs" id="<?= $aid ?>" style="display: none;">
                        <?php foreach ($songs as $song): ?>
                            <li><?= htmlspecialchars($song) ?></li>
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

        // Likes (localStorage based)
        const LIKES_KEY = 'drake_album_likes_v1';
        function loadLikes() {
            try { return JSON.parse(localStorage.getItem(LIKES_KEY)) || {}; } catch (_) { return {}; }
        }
        function saveLikes(likes) { localStorage.setItem(LIKES_KEY, JSON.stringify(likes)); }

        function renderLikes() {
            const likes = loadLikes();
            document.querySelectorAll('.like-count').forEach(el => {
                const a = el.dataset.album;
                el.textContent = (likes[a] || 0) + ' ❤';
            });
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                const a = btn.dataset.album;
                if (likes[a] && likes[a] > 0) {
                    btn.querySelector('i').classList.remove('bi-heart');
                    btn.querySelector('i').classList.add('bi-heart-fill');
                }
            });
        }

        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const likes = loadLikes();
                const album = btn.dataset.album;
                likes[album] = (likes[album] || 0) + 1;
                saveLikes(likes);
                renderLikes();
            });
        });

        renderLikes();
    </script>
</body>
</html>
