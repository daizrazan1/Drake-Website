// Drake Song Guesser Game
class SongGuesser {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 10;
        this.timePerQuestion = 15;
        this.currentTimer = this.timePerQuestion;
        this.difficulty = 'easy';
        this.questions = [];
        this.gameStartTime = null;
        this.questionStartTime = null;
        this.answerTimes = [];
        this.timerInterval = null;
        this.isAnswered = false;
        this.gameDatabase = this.initializeGameDatabase();
        this.init();
    }

    // Initialize game database with questions
    initializeGameDatabase() {
        return {
            easy: [
                {
                    type: 'lyrics',
                    question: 'Which song contains the lyric: "Started from the bottom now we\'re here"?',
                    hint: 'This is one of Drake\'s most motivational anthems from 2013',
                    options: ['Started From the Bottom', 'Headlines', 'Energy', 'No New Friends'],
                    correct: 0,
                    album: 'Nothing Was the Same'
                },
                {
                    type: 'info',
                    question: 'What was Drake\'s breakthrough mixtape released in 2009?',
                    hint: 'This mixtape featured the hit "Best I Ever Had"',
                    options: ['Room for Improvement', 'Comeback Season', 'So Far Gone', 'Care Package'],
                    correct: 2,
                    album: 'Mixtape'
                },
                {
                    type: 'lyrics',
                    question: 'Complete this lyric: "I only love my bed and my..."',
                    hint: 'This song was everywhere in 2018 and became a viral meme',
                    options: ['money', 'mama', 'music', 'team'],
                    correct: 1,
                    album: 'Scorpion'
                },
                {
                    type: 'feature',
                    question: 'Which song features Rihanna from the Views album?',
                    hint: 'This slower track showcases both artists\' R&B sides',
                    options: ['Hotline Bling', 'One Dance', 'Controlla', 'Too Good'],
                    correct: 3,
                    album: 'Views'
                },
                {
                    type: 'lyrics',
                    question: 'Which song opens with "Yeah, they wishin\' and wishin\'"?',
                    hint: 'This 2018 hit about generosity became a huge success',
                    options: ['God\'s Plan', 'Know Yourself', 'Energy', 'Legend'],
                    correct: 0,
                    album: 'Scorpion'
                },
                {
                    type: 'info',
                    question: 'What does OVO stand for?',
                    hint: 'Drake\'s record label and brand name',
                    options: ['October Very Own', 'Only Victory Official', 'Over Views Only', 'Ontario Voices Original'],
                    correct: 0,
                    album: 'Brand/Label'
                },
                {
                    type: 'lyrics',
                    question: 'Which song contains "You used to call me on my cell phone"?',
                    hint: 'This song has a very memorable dance and music video',
                    options: ['Hold On We\'re Going Home', 'Hotline Bling', 'Find Your Love', 'Take Care'],
                    correct: 1,
                    album: 'Views'
                },
                {
                    type: 'collaboration',
                    question: 'Which Future collaboration album was released in 2015?',
                    hint: 'This surprise joint mixtape dominated the charts',
                    options: ['What a Time to be Alive', 'Life is Good', 'Jumpman', 'Big Mood'],
                    correct: 0,
                    album: 'Collaborative Album'
                },
                {
                    type: 'info',
                    question: 'Drake is from which Canadian city?',
                    hint: 'The 6ix, represented in many of his songs',
                    options: ['Vancouver', 'Toronto', 'Montreal', 'Ottawa'],
                    correct: 1,
                    album: 'Biography'
                },
                {
                    type: 'lyrics',
                    question: 'Which song features the hook "I feel good, sometimes I don\'t"?',
                    hint: 'This 2018 hit was accompanied by a generous music video',
                    options: ['God\'s Plan', 'Feel No Ways', 'Passionfruit', 'In My Feelings'],
                    correct: 0,
                    album: 'Scorpion'
                }
            ],
            medium: [
                {
                    type: 'deep_cut',
                    question: 'Which Scorpion track features the line "Running through the 6 with my woes"?',
                    hint: 'This uplifting track references Drake\'s Toronto roots',
                    options: ['Mob Ties', 'Nonstop', 'Elevate', '8 Out of 10'],
                    correct: 2,
                    album: 'Scorpion'
                },
                {
                    type: 'producer',
                    question: 'Who is Drake\'s longtime producer known for the "40 sound"?',
                    hint: 'Noah Shebib\'s nickname in the music industry',
                    options: ['Boi-1da', '40', 'T-Minus', 'Nineteen85'],
                    correct: 1,
                    album: 'Production'
                },
                {
                    type: 'lyrics',
                    question: 'Complete the lyric from "Passionfruit": "Passionate from miles away..."',
                    hint: 'This smooth track is from the More Life playlist',
                    options: ['Passive with the things you say', 'Passing up on better days', 'Past the things that hold me down', 'Passing time in different ways'],
                    correct: 0,
                    album: 'More Life'
                },
                {
                    type: 'sample',
                    question: 'Which Lauryn Hill song does "Nice For What" sample?',
                    hint: 'The sample is from a classic 1998 track',
                    options: ['Ex-Factor', 'Doo Wop (That Thing)', 'Everything Is Everything', 'Ready or Not'],
                    correct: 0,
                    album: 'Scorpion'
                },
                {
                    type: 'feature',
                    question: 'Which song features 21 Savage from the "Her Loss" album?',
                    hint: 'This is the opening track from their 2022 collaboration',
                    options: ['Rich Flex', 'Major Distribution', 'Spin Bout U', 'Jimmy Cooks'],
                    correct: 0,
                    album: 'Her Loss'
                },
                {
                    type: 'album',
                    question: 'Which album features "Sandra\'s Rose," "Talk Up," and "Emotionless"?',
                    hint: 'This double album from 2018 has 25 tracks',
                    options: ['Views', 'More Life', 'Scorpion', 'Certified Lover Boy'],
                    correct: 2,
                    album: 'Scorpion'
                },
                {
                    type: 'lyrics',
                    question: 'Which song contains "Keke, do you love me?"',
                    hint: 'This song sparked a viral dance challenge',
                    options: ['Nice For What', 'In My Feelings', 'Don\'t Matter to Me', 'God\'s Plan'],
                    correct: 1,
                    album: 'Scorpion'
                },
                {
                    type: 'guest',
                    question: 'Which artist is featured on "With You" from Views?',
                    hint: 'This OVO signee is known for his Party sound',
                    options: ['PartyNextDoor', 'The Weeknd', 'Miguel', 'Bryson Tiller'],
                    correct: 0,
                    album: 'Views'
                },
                {
                    type: 'year',
                    question: 'What year was "Take Care" released?',
                    hint: 'This album featured collaborations with Rihanna and Lil Wayne',
                    options: ['2010', '2011', '2012', '2013'],
                    correct: 1,
                    album: 'Take Care'
                },
                {
                    type: 'bonus',
                    question: 'Which track from CLB samples Right Said Fred?',
                    hint: 'The sample is from "I\'m Too Sexy"',
                    options: ['Way 2 Sexy', 'Girls Want Girls', 'Fair Trade', 'Champagne Poetry'],
                    correct: 0,
                    album: 'Certified Lover Boy'
                }
            ],
            hard: [
                {
                    type: 'rare',
                    question: 'Which track was included on "Dark Lane Demo Tapes" from 2020?',
                    hint: 'This mixtape included previously unreleased material',
                    options: ['Time Flies', 'Not Around', 'Vital', 'Chicago Freestyle'],
                    correct: 0,
                    album: 'Dark Lane Demo Tapes'
                },
                {
                    type: 'reference',
                    question: 'In "6 God," Drake references which biblical figure?',
                    hint: 'The song title itself gives away the religious theme',
                    options: ['Moses', 'Jesus', 'David', 'Solomon'],
                    correct: 1,
                    album: 'If You\'re Reading This It\'s Too Late'
                },
                {
                    type: 'feature_deep',
                    question: 'Drake appears on which Jay-Z track from "The Blueprint 3"?',
                    hint: 'This collaboration discusses luxury lifestyle',
                    options: ['Off That', 'A Star Is Born', 'So Ambitious', 'Thank You'],
                    correct: 0,
                    album: 'Feature'
                },
                {
                    type: 'production_detail',
                    question: 'Which producer is known for the signature "40 sound" in Drake\'s music?',
                    hint: 'Noah Shebib has been Drake\'s main producer since the beginning',
                    options: ['Boi-1da', 'Noah "40" Shebib', 'T-Minus', 'OZ'],
                    correct: 1,
                    album: 'Production'
                },
                {
                    type: 'timeline',
                    question: 'Which was Drake\'s first solo #1 hit on the Billboard Hot 100?',
                    hint: 'This 2018 hit about generosity topped the charts',
                    options: ['Hotline Bling', 'One Dance', 'God\'s Plan', 'In My Feelings'],
                    correct: 2,
                    album: 'Scorpion'
                },
                {
                    type: 'label_history',
                    question: 'Before OVO, Drake was signed to which label first?',
                    hint: 'Lil Wayne\'s label that\'s part of Universal',
                    options: ['Cash Money', 'Young Money', 'Republic Records', 'Aspire Music'],
                    correct: 1,
                    album: 'Label History'
                },
                {
                    type: 'ghostwriting',
                    question: 'Which songwriter has been credited with helping write several Drake hits?',
                    hint: 'This became controversial during the Pusha-T feud',
                    options: ['Quentin Miller', 'PartyNextDoor', 'Kenza Samir', 'All of the above'],
                    correct: 3,
                    album: 'Songwriting'
                },
                {
                    type: 'international',
                    question: 'Drake\'s "One Dance" topped charts in how many countries?',
                    hint: 'This song was a global phenomenon',
                    options: ['15', '20', '25', '30+'],
                    correct: 3,
                    album: 'Chart History'
                },
                {
                    type: 'streaming',
                    question: 'Which Drake album broke Spotify\'s first-day streaming record in 2018?',
                    hint: 'This 25-track double album dominated streaming platforms',
                    options: ['More Life', 'Scorpion', 'Views', 'Certified Lover Boy'],
                    correct: 1,
                    album: 'Streaming Records'
                },
                {
                    type: 'business',
                    question: 'Drake has a partnership deal with which major tech company?',
                    hint: 'This deal was worth reportedly $19 million',
                    options: ['Google', 'Apple', 'Spotify', 'Amazon'],
                    correct: 1,
                    album: 'Business Deals'
                }
            ]
        };
    }

    // Initialize the game
    init() {
        this.setupEventListeners();
        this.showScreen('startScreen');
    }

    // Setup event listeners
    setupEventListeners() {
        // Start game button
        document.getElementById('startGameBtn').addEventListener('click', () => this.startGame());
        
        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectDifficulty(e));
        });
        
        // Results actions
        document.getElementById('playAgainBtn').addEventListener('click', () => this.resetGame());
        document.getElementById('shareScoreBtn').addEventListener('click', () => this.shareScore());
    }

    // Select game difficulty
    selectDifficulty(event) {
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        this.difficulty = event.target.getAttribute('data-difficulty');
    }

    // Start the game
    startGame() {
        this.resetGameState();
        this.questions = this.generateQuestions();
        this.gameStartTime = Date.now();
        this.showScreen('gameScreen');
        this.displayQuestion();
        this.startTimer();
    }

    // Reset game state
    resetGameState() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.answerTimes = [];
        this.currentTimer = this.timePerQuestion;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    // Generate questions based on difficulty
    generateQuestions() {
        const pool = this.gameDatabase[this.difficulty];
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, this.totalQuestions);
    }

    // Display current question
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        const questionContent = document.getElementById('questionContent');
        const answerOptions = document.getElementById('answerOptions');
        const questionTypeBadge = document.getElementById('questionTypeBadge');
        
        // Update progress
        document.getElementById('currentQuestionNum').textContent = this.currentQuestion + 1;
        document.getElementById('totalQuestions').textContent = this.totalQuestions;
        document.getElementById('currentScore').textContent = this.score;
        
        const progressPercent = ((this.currentQuestion) / this.totalQuestions) * 100;
        document.getElementById('gameProgressFill').style.width = `${progressPercent}%`;
        
        // Update question type badge
        const typeIcons = {
            'lyrics': 'bi-music-note-list',
            'info': 'bi-info-circle',
            'feature': 'bi-people',
            'deep_cut': 'bi-disc',
            'producer': 'bi-headphones',
            'sample': 'bi-vinyl',
            'collaboration': 'bi-person-plus',
            'album': 'bi-collection',
            'guest': 'bi-mic',
            'year': 'bi-calendar',
            'bonus': 'bi-star',
            'rare': 'bi-gem',
            'reference': 'bi-book',
            'feature_deep': 'bi-people-fill',
            'production_detail': 'bi-sliders',
            'timeline': 'bi-clock-history',
            'label_history': 'bi-building',
            'ghostwriting': 'bi-pencil',
            'international': 'bi-globe',
            'streaming': 'bi-graph-up',
            'business': 'bi-briefcase'
        };
        
        const icon = typeIcons[question.type] || 'bi-music-note-list';
        const typeLabels = {
            'lyrics': 'Lyrics',
            'info': 'Info',
            'feature': 'Feature',
            'deep_cut': 'Deep Cut',
            'producer': 'Producer',
            'sample': 'Sample',
            'collaboration': 'Collab',
            'album': 'Album',
            'guest': 'Guest',
            'year': 'Year',
            'bonus': 'Bonus',
            'rare': 'Rare Track',
            'reference': 'Reference',
            'feature_deep': 'Deep Feature',
            'production_detail': 'Production',
            'timeline': 'Timeline',
            'label_history': 'Label',
            'ghostwriting': 'Writing',
            'international': 'Global',
            'streaming': 'Streaming',
            'business': 'Business'
        };
        
        questionTypeBadge.innerHTML = `<i class="${icon}"></i> ${typeLabels[question.type] || 'Question'}`;
        
        // Display question
        questionContent.innerHTML = `
            <h3 class="question-text">${question.question}</h3>
            ${question.album ? `<div class="album-info">From: ${question.album}</div>` : ''}
        `;
        
        // Display answer options
        answerOptions.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            optionElement.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            
            optionElement.addEventListener('click', () => this.selectAnswer(index));
            answerOptions.appendChild(optionElement);
        });
        
        // Reset timer and hint
        this.currentTimer = this.timePerQuestion;
        document.getElementById('timerText').textContent = this.currentTimer;
        document.getElementById('questionHint').classList.add('d-none');
        this.questionStartTime = Date.now();
        
        // Show hint after 10 seconds
        setTimeout(() => {
            if (this.currentTimer > 5) {
                document.getElementById('hintText').textContent = question.hint;
                document.getElementById('questionHint').classList.remove('d-none');
            }
        }, 10000);
    }

    // Start question timer
    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.timerInterval = setInterval(() => {
            this.currentTimer--;
            document.getElementById('timerText').textContent = this.currentTimer;
            
            // Change timer color as time runs out
            const timerCircle = document.querySelector('.timer-circle');
            if (this.currentTimer <= 5) {
                timerCircle.classList.add('timer-warning');
            } else {
                timerCircle.classList.remove('timer-warning');
            }
            
            if (this.currentTimer <= 0) {
                clearInterval(this.timerInterval);
                this.selectAnswer(-1); // Time's up
            }
        }, 1000);
    }

    // Select answer
    selectAnswer(selectedIndex) {
        // Immediately clear timer and prevent multiple selections
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        
        // Prevent multiple answer selections
        if (this.isAnswered) return;
        this.isAnswered = true;
        
        const question = this.questions[this.currentQuestion];
        const isCorrect = selectedIndex === question.correct;
        const timeUsed = this.timePerQuestion - this.currentTimer;
        this.answerTimes.push(timeUsed);
        
        // Calculate points (more points for faster answers)
        let points = 0;
        if (isCorrect) {
            this.correctAnswers++;
            points = Math.max(50, 100 - (timeUsed * 3)); // 50-100 points based on speed
            this.score += points;
        }
        
        // Show answer feedback
        this.showAnswerFeedback(selectedIndex, isCorrect, points);
        
        // Update UI
        document.getElementById('currentScore').textContent = this.score;
        
        // Move to next question after delay
        setTimeout(() => {
            this.currentQuestion++;
            this.isAnswered = false; // Reset for next question
            if (this.currentQuestion < this.totalQuestions) {
                this.displayQuestion();
                this.startTimer();
            } else {
                this.endGame();
            }
        }, 2000);
    }

    // Show answer feedback
    showAnswerFeedback(selectedIndex, isCorrect, points) {
        const options = document.querySelectorAll('.answer-option');
        const correctIndex = this.questions[this.currentQuestion].correct;
        
        // Highlight correct answer in green
        if (options[correctIndex]) {
            options[correctIndex].classList.add('answer-correct');
        }
        
        // If wrong answer was selected, highlight it in red
        if (!isCorrect && selectedIndex >= 0 && options[selectedIndex]) {
            options[selectedIndex].classList.add('answer-wrong');
        }
        
        // Disable all options
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Show points earned
        if (points > 0) {
            const pointsDisplay = document.createElement('div');
            pointsDisplay.className = 'points-earned';
            pointsDisplay.textContent = `+${points} points!`;
            document.querySelector('.question-card-game').appendChild(pointsDisplay);
            
            setTimeout(() => {
                pointsDisplay.remove();
            }, 1500);
        }
    }

    // End the game
    endGame() {
        this.showScreen('resultsScreen');
        this.displayResults();
    }

    // Display results
    displayResults() {
        const accuracy = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        const avgTime = Math.round(this.answerTimes.reduce((a, b) => a + b, 0) / this.answerTimes.length);
        
        // Update results display
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('avgTime').textContent = `${avgTime}s`;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        
        // Determine performance badge
        const badge = this.getPerformanceBadge(accuracy, this.score);
        document.getElementById('badgeTitle').textContent = badge.title;
        document.getElementById('badgeDescription').textContent = badge.description;
        document.getElementById('resultsIcon').innerHTML = `<i class="${badge.icon}"></i>`;
        
        // Set results title based on performance
        const title = this.getResultsTitle(accuracy);
        document.getElementById('resultsTitle').textContent = title.text;
        document.getElementById('resultsSubtitle').textContent = title.subtitle;
    }

    // Get performance badge
    getPerformanceBadge(accuracy, score) {
        if (accuracy >= 90 && score >= 800) {
            return {
                title: 'Drake Expert',
                description: 'You know Drake\'s catalog like the back of your hand!',
                icon: 'bi-trophy-fill'
            };
        } else if (accuracy >= 70 && score >= 600) {
            return {
                title: 'Drake Fan',
                description: 'Impressive knowledge of Drake\'s music!',
                icon: 'bi-award-fill'
            };
        } else if (accuracy >= 50 && score >= 400) {
            return {
                title: 'Casual Listener',
                description: 'You know the hits, but dig deeper into the catalog!',
                icon: 'bi-star-fill'
            };
        } else {
            return {
                title: 'Drake Novice',
                description: 'Time to explore more of Drake\'s amazing discography!',
                icon: 'bi-heart-fill'
            };
        }
    }

    // Get results title
    getResultsTitle(accuracy) {
        if (accuracy >= 90) {
            return {
                text: 'Outstanding!',
                subtitle: 'You\'re a true Drake encyclopedia!'
            };
        } else if (accuracy >= 70) {
            return {
                text: 'Great Job!',
                subtitle: 'You really know your Drake music!'
            };
        } else if (accuracy >= 50) {
            return {
                text: 'Not Bad!',
                subtitle: 'Keep listening to improve your score!'
            };
        } else {
            return {
                text: 'Keep Practicing!',
                subtitle: 'There\'s so much more Drake to discover!'
            };
        }
    }

    // Share score
    shareScore() {
        const accuracy = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        const shareText = `I just scored ${this.score} points (${accuracy}% accuracy) on the Drake Song Guesser! Can you beat my score?`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Drake Song Guesser Score',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText + ' ' + window.location.href).then(() => {
                const shareBtn = document.getElementById('shareScoreBtn');
                const originalText = shareBtn.innerHTML;
                shareBtn.innerHTML = '<i class="bi bi-check2 me-2"></i> Copied!';
                shareBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    shareBtn.innerHTML = originalText;
                    shareBtn.classList.remove('btn-success');
                }, 2000);
            });
        }
    }

    // Reset game for play again
    resetGame() {
        this.showScreen('startScreen');
        this.resetGameState();
    }

    // Show specific screen
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.classList.add('d-none');
        });
        
        // Show requested screen
        document.getElementById(screenId).classList.remove('d-none');
        
        // Show/hide how to play section
        const howToPlay = document.getElementById('howToPlay');
        if (screenId === 'startScreen') {
            howToPlay.classList.remove('d-none');
        } else {
            howToPlay.classList.add('d-none');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SongGuesser();
});
// Drake Song Guesser Game

class SongGuesserGame {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 10;
        this.timePerQuestion = 15;
        this.currentTime = this.timePerQuestion;
        this.timer = null;
        this.difficulty = 'easy';
        this.answerTimes = [];
        this.questions = [];
        this.isAnswered = false;
        
        this.songDatabase = this.initializeSongDatabase();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showStartScreen();
    }

    setupEventListeners() {
        document.getElementById('startGameBtn').addEventListener('click', () => this.startGame());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.resetGame());
        document.getElementById('shareScoreBtn').addEventListener('click', () => this.shareScore());

        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.difficulty = e.target.getAttribute('data-difficulty');
            });
        });
    }

    initializeSongDatabase() {
        return {
            easy: [
                {
                    song: "God's Plan",
                    album: "Scorpion",
                    year: 2018,
                    lyrics: "I only love my bed and my momma, I'm sorry",
                    hint: "This song topped charts worldwide and has a famous music video where Drake gives away money"
                },
                {
                    song: "Hotline Bling",
                    album: "Views",
                    year: 2015,
                    lyrics: "You used to call me on my cell phone",
                    hint: "Famous for its dance moves in the music video"
                },
                {
                    song: "In My Feelings",
                    album: "Scorpion", 
                    year: 2018,
                    lyrics: "Kiki, do you love me? Are you riding?",
                    hint: "Started the Kiki Challenge dance craze"
                },
                {
                    song: "One Dance",
                    album: "Views",
                    year: 2016,
                    lyrics: "Baby I like your style",
                    hint: "Features Wizkid and Kyla, has Caribbean influences"
                },
                {
                    song: "Started From the Bottom",
                    album: "Nothing Was the Same",
                    year: 2013,
                    lyrics: "Started from the bottom now we're here",
                    hint: "An anthem about Drake's rise to success"
                }
            ],
            medium: [
                {
                    song: "Passionfruit",
                    album: "More Life",
                    year: 2017,
                    lyrics: "Passionate from miles away",
                    hint: "A dancehall-influenced track from More Life"
                },
                {
                    song: "Energy",
                    album: "If You're Reading This It's Too Late",
                    year: 2015,
                    lyrics: "I got enemies, got a lot of enemies",
                    hint: "From the surprise mixtape released in 2015"
                },
                {
                    song: "Nonstop",
                    album: "Scorpion",
                    year: 2018,
                    lyrics: "I just flipped the switch",
                    hint: "Known for its repetitive and catchy hook"
                },
                {
                    song: "Nice For What",
                    album: "Scorpion",
                    year: 2018,
                    lyrics: "I understand, you got a hunnid bands",
                    hint: "Samples Lauryn Hill's 'Ex-Factor'"
                },
                {
                    song: "Controlla",
                    album: "Views",
                    year: 2016,
                    lyrics: "You should let me love you",
                    hint: "Features dancehall elements and Popcaan"
                }
            ],
            hard: [
                {
                    song: "Do Not Disturb",
                    album: "More Life",
                    year: 2017,
                    lyrics: "Distance between us is not like a store",
                    hint: "The closing track from More Life playlist"
                },
                {
                    song: "Star67",
                    album: "If You're Reading This It's Too Late", 
                    year: 2015,
                    lyrics: "You're not the only one that's tryna be the only one",
                    hint: "References anonymous phone calls"
                },
                {
                    song: "Wu-Tang Forever",
                    album: "Nothing Was the Same",
                    year: 2013,
                    lyrics: "I got my eyes on you",
                    hint: "Pays homage to the legendary hip-hop group"
                },
                {
                    song: "From Time",
                    album: "Nothing Was the Same",
                    year: 2013,
                    lyrics: "I think I'd lie for you",
                    hint: "Features Jhené Aiko and has a mellow vibe"
                },
                {
                    song: "Jungle",
                    album: "If You're Reading This It's Too Late",
                    year: 2015,
                    lyrics: "Are we live? Are we live?",
                    hint: "Known for its unique vocal delivery and production"
                }
            ]
        };
    }

    showStartScreen() {
        document.getElementById('startScreen').classList.remove('d-none');
        document.getElementById('gameScreen').classList.add('d-none');
        document.getElementById('resultsScreen').classList.add('d-none');
        document.getElementById('howToPlay').classList.remove('d-none');
    }

    startGame() {
        this.resetGameData();
        this.generateQuestions();
        document.getElementById('startScreen').classList.add('d-none');
        document.getElementById('gameScreen').classList.remove('d-none');
        document.getElementById('howToPlay').classList.add('d-none');
        this.showQuestion();
    }

    resetGameData() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.answerTimes = [];
        this.questions = [];
    }

    generateQuestions() {
        const songs = this.songDatabase[this.difficulty];
        const shuffled = [...songs].sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < this.totalQuestions; i++) {
            const correctSong = shuffled[i % shuffled.length];
            const wrongOptions = shuffled.filter(s => s.song !== correctSong.song)
                                        .sort(() => 0.5 - Math.random())
                                        .slice(0, 3);
            
            const allOptions = [correctSong, ...wrongOptions]
                              .sort(() => 0.5 - Math.random());
            
            this.questions.push({
                type: Math.random() > 0.5 ? 'lyrics' : 'info',
                correct: correctSong,
                options: allOptions
            });
        }
    }

    showQuestion() {
        if (this.currentQuestion >= this.totalQuestions) {
            this.showResults();
            return;
        }

        this.isAnswered = false;
        this.currentTime = this.timePerQuestion;
        this.updateGameHeader();
        this.renderQuestion();
        this.startTimer();
    }

    updateGameHeader() {
        document.getElementById('currentQuestionNum').textContent = this.currentQuestion + 1;
        document.getElementById('totalQuestions').textContent = this.totalQuestions;
        document.getElementById('currentScore').textContent = this.score;
        
        const progress = ((this.currentQuestion) / this.totalQuestions) * 100;
        document.getElementById('gameProgressFill').style.width = `${progress}%`;
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        const questionContent = document.getElementById('questionContent');
        const answerOptions = document.getElementById('answerOptions');
        const typeBadge = document.getElementById('questionTypeBadge');

        // Clear previous question
        questionContent.innerHTML = '';
        answerOptions.innerHTML = '';
        document.getElementById('questionHint').classList.add('d-none');

        if (question.type === 'lyrics') {
            typeBadge.innerHTML = '<i class="bi bi-music-note-list"></i> Lyrics';
            questionContent.innerHTML = `
                <div class="question-text">Which Drake song contains these lyrics?</div>
                <div class="lyrics-quote">"${question.correct.lyrics}"</div>
            `;
        } else {
            typeBadge.innerHTML = '<i class="bi bi-info-circle"></i> Album Info';
            questionContent.innerHTML = `
                <div class="question-text">Which song is from the album "${question.correct.album}" (${question.correct.year})?</div>
                <div class="album-info">Album: ${question.correct.album} • Year: ${question.correct.year}</div>
            `;
        }

        // Render answer options
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option.song}</div>
            `;
            
            optionDiv.addEventListener('click', () => this.selectAnswer(option, index));
            answerOptions.appendChild(optionDiv);
        });
    }

    startTimer() {
        this.updateTimer();
        this.timer = setInterval(() => {
            this.currentTime--;
            this.updateTimer();
            
            if (this.currentTime === 10 && !this.isAnswered) {
                this.showHint();
            }
            
            if (this.currentTime <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimer() {
        const timerText = document.getElementById('timerText');
        const timerCircle = document.querySelector('.timer-circle');
        
        timerText.textContent = this.currentTime;
        
        if (this.currentTime <= 5) {
            timerCircle.classList.add('timer-warning');
        } else {
            timerCircle.classList.remove('timer-warning');
        }
    }

    showHint() {
        const hintElement = document.getElementById('questionHint');
        const hintText = document.getElementById('hintText');
        
        hintText.textContent = this.questions[this.currentQuestion].correct.hint;
        hintElement.classList.remove('d-none');
    }

    selectAnswer(selectedOption, index) {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        clearInterval(this.timer);
        
        const timeToAnswer = this.timePerQuestion - this.currentTime;
        this.answerTimes.push(timeToAnswer);
        
        const question = this.questions[this.currentQuestion];
        const isCorrect = selectedOption.song === question.correct.song;
        
        // Update UI
        const options = document.querySelectorAll('.answer-option');
        options.forEach((option, i) => {
            if (question.options[i].song === question.correct.song) {
                option.classList.add('answer-correct');
            } else if (i === index && !isCorrect) {
                option.classList.add('answer-wrong');
            }
        });

        if (isCorrect) {
            this.correctAnswers++;
            const points = Math.max(50, 100 - (timeToAnswer * 3));
            this.score += points;
            this.showPointsAnimation(points);
        }

        setTimeout(() => {
            this.currentQuestion++;
            this.showQuestion();
        }, 2000);
    }

    timeUp() {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        clearInterval(this.timer);
        this.answerTimes.push(this.timePerQuestion);
        
        // Show correct answer
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.answer-option');
        options.forEach((option, i) => {
            if (question.options[i].song === question.correct.song) {
                option.classList.add('answer-correct');
            }
        });

        setTimeout(() => {
            this.currentQuestion++;
            this.showQuestion();
        }, 2000);
    }

    showPointsAnimation(points) {
        const pointsDiv = document.createElement('div');
        pointsDiv.className = 'points-earned';
        pointsDiv.textContent = `+${points}`;
        
        document.querySelector('.question-card-game').appendChild(pointsDiv);
        
        setTimeout(() => {
            pointsDiv.remove();
        }, 1500);
    }

    showResults() {
        document.getElementById('gameScreen').classList.add('d-none');
        document.getElementById('resultsScreen').classList.remove('d-none');
        
        this.displayResults();
    }

    displayResults() {
        const accuracy = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        const avgTime = Math.round(this.answerTimes.reduce((a, b) => a + b, 0) / this.answerTimes.length);
        
        // Update results display
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('avgTime').textContent = `${avgTime}s`;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        
        // Determine performance badge
        const badge = this.getPerformanceBadge(accuracy, this.score);
        document.getElementById('badgeTitle').textContent = badge.title;
        document.getElementById('badgeDescription').textContent = badge.description;
        document.getElementById('resultsIcon').innerHTML = `<i class="${badge.icon}"></i>`;
        
        // Set results title based on performance
        const title = this.getResultsTitle(accuracy);
        document.getElementById('resultsTitle').textContent = title.text;
        document.getElementById('resultsSubtitle').textContent = title.subtitle;
    }

    getPerformanceBadge(accuracy, score) {
        if (accuracy >= 90 && score >= 800) {
            return {
                title: "Drake Expert",
                description: "You know Drake's catalog inside and out!",
                icon: "bi bi-trophy-fill"
            };
        } else if (accuracy >= 70 && score >= 600) {
            return {
                title: "Drake Fan",
                description: "Solid knowledge of Drake's music!",
                icon: "bi bi-star-fill"
            };
        } else if (accuracy >= 50) {
            return {
                title: "Drake Apprentice", 
                description: "You're getting there, keep listening!",
                icon: "bi bi-music-note"
            };
        } else {
            return {
                title: "Drake Novice",
                description: "Time to dive deeper into Drake's discography!",
                icon: "bi bi-heart"
            };
        }
    }

    getResultsTitle(accuracy) {
        if (accuracy >= 90) {
            return {
                text: "Outstanding!",
                subtitle: "You're a true Drake connoisseur"
            };
        } else if (accuracy >= 70) {
            return {
                text: "Great Job!",
                subtitle: "Your Drake knowledge is impressive"
            };
        } else if (accuracy >= 50) {
            return {
                text: "Not Bad!",
                subtitle: "Keep exploring Drake's music"
            };
        } else {
            return {
                text: "Keep Trying!",
                subtitle: "There's always room to learn more"
            };
        }
    }

    shareScore() {
        const text = `I just scored ${this.score} points on the Drake Song Guesser! Got ${this.correctAnswers}/${this.totalQuestions} correct. Think you can beat me? 🎵`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Drake Song Guesser Score',
                text: text,
                url: window.location.href
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
                alert('Score copied to clipboard!');
            });
        }
    }

    resetGame() {
        this.showStartScreen();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('startScreen')) {
        new SongGuesserGame();
    }
});
