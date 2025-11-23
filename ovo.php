<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="OVO Sound" />
    <meta name="author" content="Replit AI" />
    <title>Drake - OVO</title>
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#2c2c2c">
    <link rel="icon" type="image/jpeg" href="images/baha.jpg?v=2" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
    <link href="css/modern-styles.css" rel="stylesheet" />
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            min-height: 100vh;
            padding-top: 80px;
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
                    <a class="nav-link" href="about.php" role="menuitem">About</a>
                </li>
                <li class="nav-item" role="none">
                    <a class="nav-link active" href="ovo.php" role="menuitem">OVO Artists</a>
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
                            <i class="bi bi-people" style="font-size: 2.5rem; color: var(--primary-bg);"></i>
                        </div>
                        <h1 class="fw-bolder mb-3" style="color: var(--accent-ice); font-size: 2.5rem;">OVO Sound Artists</h1>
                        <p class="mb-4" style="color: var(--text-secondary); font-size: 1.1rem;">Discover the incredible talent behind OVO Sound, Drake's legendary record label.</p>
                        <div class="creator-stats d-flex justify-content-center gap-4 mb-4 flex-wrap">
                            <div class="stat-item text-center">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Artists</div>
                            </div>
                            <div class="stat-item text-center">
                                <div class="stat-number">Multi</div>
                                <div class="stat-label">Genre</div>
                            </div>
                            <div class="stat-item text-center">
                                <div class="stat-number">Elite</div>
                                <div class="stat-label">Roster</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="bg-dark py-5" style="min-height: calc(100vh - 160px);">
        <div class="container px-4 px-lg-5 text-white">
            <header class="text-center mb-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col">
                    <div class="card bg-dark text-white h-100" style="max-height: 400px;">
                        <img src="https://ratedrnb.com/cdn/2024/04/partynextdoor-ratedrnb-scaled.jpg" class="card-img-top ovo-artist-img" alt="PartyNextDoor">
                        <div class="card-body d-flex flex-column p-3">
                            <h6 class="card-title mb-2">PartyNextDoor</h6>
                            <button class="btn btn-outline-light btn-sm mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#pndSongs">Songs</button>
                            <div class="collapse" id="pndSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Dreamin</li>
                                    <li class="list-group-item bg-dark text-white">MakeItToTheMorning</li>
                                    <li class="list-group-item bg-dark text-white">Recognize</li>
                                    <li class="list-group-item bg-dark text-white">Loyal</li>
                                    <li class="list-group-item bg-dark text-white">Break From Toronto</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/40/MajidJordanalbum.jpg" class="card-img-top ovo-artist-img" alt="Majid Jordan">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Majid Jordan</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#majidSongs">See Best Songs</button>
                            <div class="collapse" id="majidSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Hold On, We’re Going Home</li>
                                    <li class="list-group-item bg-dark text-white">My Love</li>
                                    <li class="list-group-item bg-dark text-white">Something About You</li>
                                    <li class="list-group-item bg-dark text-white">Her</li>
                                    <li class="list-group-item bg-dark text-white">Forever</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Daniel_Daley_dvsn_Summer_Sixteen_2016.jpg/1200px-Daniel_Daley_dvsn_Summer_Sixteen_2016.jpg" class="card-img-top ovo-artist-img" alt="dvsn">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">dvsn</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#dvsnSongs">See Best Songs</button>
                            <div class="collapse" id="dvsnSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Hallucinations</li>
                                    <li class="list-group-item bg-dark text-white">Too Deep</li>
                                    <li class="list-group-item bg-dark text-white">With Me</li>
                                    <li class="list-group-item bg-dark text-white">In + Out</li>
                                    <li class="list-group-item bg-dark text-white">Sept 5th</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Roy_Woods_2018.png" class="card-img-top ovo-artist-img" alt="Roy Woods">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Roy Woods</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#royWoodsSongs">See Best Songs</button>
                            <div class="collapse" id="royWoodsSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Drama</li>
                                    <li class="list-group-item bg-dark text-white">Get You Good</li>
                                    <li class="list-group-item bg-dark text-white">Jealousy</li>
                                    <li class="list-group-item bg-dark text-white">Gwan Big Up Urself</li>
                                    <li class="list-group-item bg-dark text-white">Love You</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://lastfm.freetls.fastly.net/i/u/ar0/e80fb9d98647e9e38d20e963b91528a2.jpg" class="card-img-top ovo-artist-img" alt="Baka Not Nice">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Baka Not Nice</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#bakaSongs">See Best Songs</button>
                            <div class="collapse" id="bakaSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Live Up to My Name</li>
                                    <li class="list-group-item bg-dark text-white">Money in the Bank</li>
                                    <li class="list-group-item bg-dark text-white">No Time</li>
                                    <li class="list-group-item bg-dark text-white">I Am Who I Am</li>
                                    <li class="list-group-item bg-dark text-white">Junior High</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://www.hotnewhiphop.com/imgprst/390x273-cover-81-auto/2025/01/GettyImages-1981613783.jpg" class="card-img-top ovo-artist-img" alt="Smiley">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Smiley</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#smileySongs">See Best Songs</button>
                            <div class="collapse" id="smileySongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Over the Top</li>
                                    <li class="list-group-item bg-dark text-white">Body</li>
                                    <li class="list-group-item bg-dark text-white">In My Zone</li>
                                    <li class="list-group-item bg-dark text-white">Moving Different</li>
                                    <li class="list-group-item bg-dark text-white">2 mazza</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/SDKqd5nBJt.jpg" class="card-img-top ovo-artist-img" alt="Popcaan">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Popcaan</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#popcaanSongs">See Best Songs</button>
                            <div class="collapse" id="popcaanSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Unruly Rasta</li>
                                    <li class="list-group-item bg-dark text-white">Only Man She Want</li>
                                    <li class="list-group-item bg-dark text-white">Party Shot</li>
                                    <li class="list-group-item bg-dark text-white">Everything Nice</li>
                                    <li class="list-group-item bg-dark text-white">We Never Fear Dem</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://cdn.prod.website-files.com/5cb75bcc61ced2b111495666/614e80e119a02d934946f371_Plaza%20Shadow%20.jpeg" class="card-img-top ovo-artist-img" alt="Plaza">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Plaza</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#plazaSongs">See Best Songs</button>
                            <div class="collapse" id="plazaSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Personal</li>
                                    <li class="list-group-item bg-dark text-white">All Mine</li>
                                    <li class="list-group-item bg-dark text-white">Use Me</li>
                                    <li class="list-group-item bg-dark text-white">Deep in NY</li>
                                    <li class="list-group-item bg-dark text-white">Wanting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://core.colorsxstudios.com/wp-content/uploads/2024/01/COLORSxSTUDIOS_Announcement_NaomiSharon-1200x1500.jpg" class="card-img-top ovo-artist-img" alt="Naomi Sharon">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Naomi Sharon</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#naomiSongs">See Best Songs</button>
                            <div class="collapse" id="naomiSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">Hills</li>
                                    <li class="list-group-item bg-dark text-white">Celestial</li>
                                    <li class="list-group-item bg-dark text-white">Time and Trust</li>
                                    <li class="list-group-item bg-dark text-white">Another Life</li>
                                    <li class="list-group-item bg-dark text-white">Definition of Love</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark text-white h-100">
                        <img src="https://static01.nyt.com/images/2021/12/08/arts/06drake2/06drake2-mediumSquareAt3X.jpg" class="card-img-top ovo-artist-img" alt="Drake">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Drake</h5>
                            <button class="btn btn-outline-light mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#drakeSongs">See Best Songs</button>
                            <div class="collapse" id="drakeSongs">
                                <ul class="list-group list-group-flush bg-dark text-white">
                                    <li class="list-group-item bg-dark text-white">God’s Plan</li>
                                    <li class="list-group-item bg-dark text-white">One Dance</li>
                                    <li class="list-group-item bg-dark text-white">Hotline Bling</li>
                                    <li class="list-group-item bg-dark text-white">Started From the Bottom</li>
                                    <li class="list-group-item bg-dark text-white">In My Feelings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="bg-dark py-5">
        <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright © 2025 - Drake</div></div>
    </footer>
    <script src="js/navigation.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
    <script src="js/scripts.js"></script>
</body>
</html>