// Song Creator AI System
class SongCreator {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.questions = this.initializeQuestions();
        this.songElements = this.initializeSongElements();
        this.init();
    }

    // Initialize question data
    initializeQuestions() {
        return [
            {
                id: 'vibe',
                title: "What's your song's main vibe?",
                subtitle: "Choose the overall mood and energy level for your track",
                icon: 'bi-music-note',
                type: 'single',
                options: [
                    { id: 'melodic', text: 'Melodic & Smooth', description: 'Emotional, R&B-influenced sound' },
                    { id: 'hype', text: 'High Energy & Hype', description: 'Club bangers and party anthems' },
                    { id: 'introspective', text: 'Deep & Introspective', description: 'Personal, reflective lyrics' },
                    { id: 'romantic', text: 'Romantic & Sensual', description: 'Love songs and intimate vibes' }
                ]
            },
            {
                id: 'tempo',
                title: 'What tempo gets you moving?',
                subtitle: 'Select the rhythm that matches your energy',
                icon: 'bi-speedometer2',
                type: 'single',
                options: [
                    { id: 'slow', text: 'Slow & Steady', description: '60-80 BPM - Perfect for ballads' },
                    { id: 'medium', text: 'Mid-Tempo', description: '80-110 BPM - Versatile groove' },
                    { id: 'uptempo', text: 'Uptempo', description: '110-130 BPM - Dance-worthy energy' },
                    { id: 'fast', text: 'Fast & Aggressive', description: '130+ BPM - High intensity' }
                ]
            },
            {
                id: 'theme',
                title: 'What theme resonates with you?',
                subtitle: 'Pick the main subject matter for your lyrics',
                icon: 'bi-heart',
                type: 'single',
                options: [
                    { id: 'success', text: 'Success & Achievement', description: 'Celebrating wins and ambition' },
                    { id: 'love', text: 'Love & Relationships', description: 'Romance, heartbreak, connections' },
                    { id: 'lifestyle', text: 'Lifestyle & Flexing', description: 'Luxury, wealth, and status' },
                    { id: 'personal', text: 'Personal Growth', description: 'Self-reflection and evolution' }
                ]
            },
            {
                id: 'collaboration',
                title: 'Who would you feature?',
                subtitle: 'Choose your dream collaboration style',
                icon: 'bi-people',
                type: 'single',
                options: [
                    { id: 'solo', text: 'Solo Drake', description: 'Pure Drake vocals and style' },
                    { id: 'female', text: 'Female Vocalist', description: 'R&B singer or pop star feature' },
                    { id: 'rapper', text: 'Another Rapper', description: 'Hip-hop collaboration' },
                    { id: 'producer', text: 'Producer Focus', description: 'Highlighting the beat maker' }
                ]
            },
            {
                id: 'production',
                title: 'What production style?',
                subtitle: 'Select the instrumental vibe you prefer',
                icon: 'bi-disc',
                type: 'single',
                options: [
                    { id: 'trap', text: 'Modern Trap', description: '808s, hi-hats, and modern sound' },
                    { id: 'rnb', text: 'R&B Soul', description: 'Smooth, soulful instrumentals' },
                    { id: 'pop', text: 'Pop-Influenced', description: 'Radio-friendly, catchy melodies' },
                    { id: 'experimental', text: 'Experimental', description: 'Unique, innovative sounds' }
                ]
            },
            {
                id: 'era',
                title: 'Which Drake era inspires you?',
                subtitle: 'Pick the time period that matches your vision',
                icon: 'bi-clock-history',
                type: 'single',
                options: [
                    { id: 'early', text: 'Early Drake (2009-2013)', description: 'So Far Gone, Take Care era' },
                    { id: 'peak', text: 'Peak Drake (2014-2018)', description: 'Views, Scorpion dominance' },
                    { id: 'recent', text: 'Recent Drake (2019-2023)', description: 'CLB, Honestly Nevermind style' },
                    { id: 'current', text: 'Current Drake (2024-2025)', description: 'Latest evolution and sound' }
                ]
            },
            {
                id: 'length',
                title: 'How long should your song be?',
                subtitle: 'Choose the ideal duration for your track',
                icon: 'bi-stopwatch',
                type: 'single',
                options: [
                    { id: 'short', text: 'Short & Sweet', description: '2-3 minutes - TikTok ready' },
                    { id: 'standard', text: 'Standard Length', description: '3-4 minutes - Radio friendly' },
                    { id: 'extended', text: 'Extended Version', description: '4-5 minutes - Album deep cut' },
                    { id: 'epic', text: 'Epic Length', description: '5+ minutes - Musical journey' }
                ]
            },
            {
                id: 'release',
                title: 'How would you release this?',
                subtitle: 'Pick your ideal release strategy',
                icon: 'bi-rocket',
                type: 'single',
                options: [
                    { id: 'single', text: 'Lead Single', description: 'Major promotional push' },
                    { id: 'album', text: 'Album Track', description: 'Part of a larger project' },
                    { id: 'surprise', text: 'Surprise Drop', description: 'Unexpected release' },
                    { id: 'mixtape', text: 'Mixtape Cut', description: 'Casual, experimental release' }
                ]
            }
        ];
    }

    // Initialize song generation elements
    initializeSongElements() {
        return {
            titles: {
                melodic: ['Midnight Confessions', 'Golden Hour', 'Velvet Dreams', 'Smooth Operator'],
                hype: ['Energy Rising', 'Party Mode', 'Turn Up Time', 'Club Anthem'],
                introspective: ['Inner Thoughts', 'Deep Waters', 'Soul Search', 'Quiet Storm'],
                romantic: ['Love Language', 'Intimate Moments', 'Heart to Heart', 'Private Dancer']
            },
            hooks: {
                success: ['Started from the bottom now we\'re here', 'Money talks, everything else whispers', 'Success is the best revenge'],
                love: ['You\'re the one that I\'ve been searching for', 'Love me like you mean it', 'Heart on my sleeve'],
                lifestyle: ['Living life in the fast lane', 'Champagne dreams and caviar wishes', 'Luxury is my lifestyle'],
                personal: ['Growing into who I\'m meant to be', 'Learning lessons along the way', 'Evolution of my soul']
            },
            collaborators: {
                female: ['Rihanna', 'SZA', 'Summer Walker', 'H.E.R.', 'Ariana Grande'],
                rapper: ['J. Cole', 'Kendrick Lamar', 'Future', 'Travis Scott', 'Lil Baby'],
                producer: ['Noah "40" Shebib', 'Boi-1da', 'T-Minus', 'OZ', 'Nineteen85']
            },
            genres: {
                trap: 'Hip-Hop/Trap',
                rnb: 'R&B/Soul',
                pop: 'Pop/Contemporary',
                experimental: 'Experimental/Alternative'
            }
        };
    }

    // Initialize the song creator
    init() {
        this.updateQuestion();
        this.setupEventListeners();
    }

    // Setup event listeners
    setupEventListeners() {
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('shareBtn').addEventListener('click', () => this.shareSong());
    }

    // Update current question display
    updateQuestion() {
        const question = this.questions[this.currentQuestion];
        const totalQuestions = this.questions.length;
        
        // Update progress
        const progressPercent = ((this.currentQuestion + 1) / totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progressPercent}%`;
        document.getElementById('progressText').textContent = `Question ${this.currentQuestion + 1} of ${totalQuestions}`;
        
        // Update question content
        document.getElementById('questionIcon').className = `bi ${question.icon}`;
        document.getElementById('questionTitle').textContent = question.title;
        document.getElementById('questionSubtitle').textContent = question.subtitle;
        
        // Update options
        this.updateOptions(question);
        
        // Update navigation buttons
        document.getElementById('prevBtn').disabled = this.currentQuestion === 0;
        document.getElementById('nextBtn').disabled = !this.answers[question.id];
        document.getElementById('nextBtn').textContent = this.currentQuestion === totalQuestions - 1 ? 'Generate Song' : 'Next';
        
        if (this.currentQuestion === totalQuestions - 1) {
            document.getElementById('nextBtn').innerHTML = 'Generate Song <i class="bi bi-stars ms-2"></i>';
        } else {
            document.getElementById('nextBtn').innerHTML = 'Next <i class="bi bi-arrow-right ms-2"></i>';
        }
    }

    // Update question options
    updateOptions(question) {
        const optionsContainer = document.getElementById('questionOptions');
        optionsContainer.innerHTML = '';
        
        question.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-card';
            optionElement.innerHTML = `
                <div class="option-content">
                    <div class="option-header">
                        <h5 class="option-title">${option.text}</h5>
                    </div>
                    <p class="option-description">${option.description}</p>
                </div>
            `;
            
            // Check if this option is already selected
            if (this.answers[question.id] === option.id) {
                optionElement.classList.add('selected');
            }
            
            // Add click handler
            optionElement.addEventListener('click', () => {
                // Remove selected from all options
                optionsContainer.querySelectorAll('.option-card').forEach(card => {
                    card.classList.remove('selected');
                });
                
                // Add selected to clicked option
                optionElement.classList.add('selected');
                
                // Store answer
                this.answers[question.id] = option.id;
                
                // Enable next button
                document.getElementById('nextBtn').disabled = false;
                
                // Auto-advance after short delay (except on last question)
                if (this.currentQuestion < this.questions.length - 1) {
                    setTimeout(() => {
                        this.nextQuestion();
                    }, 800);
                }
            });
            
            optionsContainer.appendChild(optionElement);
        });
    }

    // Go to next question
    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.updateQuestion();
        } else {
            // Generate and show results
            this.generateSong();
        }
    }

    // Go to previous question
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.updateQuestion();
        }
    }

    // Generate song based on answers
    generateSong() {
        const song = this.createSongFromAnswers();
        this.displayResults(song);
    }

    // Create song object from user answers
    createSongFromAnswers() {
        const answers = this.answers;
        const elements = this.songElements;
        
        // Generate title based on vibe
        const vibe = answers.vibe || 'melodic';
        const possibleTitles = elements.titles[vibe] || elements.titles.melodic;
        const title = possibleTitles[Math.floor(Math.random() * possibleTitles.length)];
        
        // Generate hook based on theme
        const theme = answers.theme || 'success';
        const hooks = elements.hooks[theme] || elements.hooks.success;
        const hook = hooks[Math.floor(Math.random() * hooks.length)];
        
        // Generate collaborator
        let collaborator = 'Solo Drake';
        if (answers.collaboration && answers.collaboration !== 'solo') {
            const collabType = answers.collaboration;
            const collabs = elements.collaborators[collabType];
            if (collabs) {
                collaborator = collabs[Math.floor(Math.random() * collabs.length)];
            }
        }
        
        // Generate genre
        const production = answers.production || 'trap';
        const genre = elements.genres[production] || elements.genres.trap;
        
        // Generate additional details
        const tempo = this.getTempoDescription(answers.tempo);
        const era = this.getEraDescription(answers.era);
        const length = this.getLengthDescription(answers.length);
        const release = this.getReleaseDescription(answers.release);
        
        return {
            title,
            hook,
            collaborator,
            genre,
            tempo,
            era,
            length,
            release,
            vibe: answers.vibe,
            theme: answers.theme
        };
    }

    // Helper methods for descriptions
    getTempoDescription(tempo) {
        const tempos = {
            slow: '70 BPM - Slow & Emotional',
            medium: '95 BPM - Mid-Tempo Groove',
            uptempo: '120 BPM - Danceable Energy',
            fast: '140 BPM - High-Energy Anthem'
        };
        return tempos[tempo] || tempos.medium;
    }

    getEraDescription(era) {
        const eras = {
            early: 'Classic Drake Sound (2009-2013)',
            peak: 'Commercial Peak Era (2014-2018)',
            recent: 'Modern Drake (2019-2023)',
            current: 'Latest Evolution (2024-2025)'
        };
        return eras[era] || eras.recent;
    }

    getLengthDescription(length) {
        const lengths = {
            short: '2:45 - Perfect for streaming',
            standard: '3:30 - Radio ready',
            extended: '4:15 - Album deep cut',
            epic: '5:30 - Epic journey'
        };
        return lengths[length] || lengths.standard;
    }

    getReleaseDescription(release) {
        const releases = {
            single: 'Major Single Release',
            album: 'Album Track Placement',
            surprise: 'Surprise Drop Strategy',
            mixtape: 'Mixtape/Playlist Addition'
        };
        return releases[release] || releases.single;
    }

    // Display song results
    displayResults(song) {
        // Hide question card
        document.getElementById('questionCard').classList.add('d-none');
        
        // Show results card
        const resultsCard = document.getElementById('resultsCard');
        resultsCard.classList.remove('d-none');
        
        // Populate song details
        const songResult = document.getElementById('songResult');
        songResult.innerHTML = `
            <div class="song-details">
                <div class="song-header text-center mb-4">
                    <h2 class="song-title">"${song.title}"</h2>
                    <p class="song-artist">by Drake${song.collaborator !== 'Solo Drake' ? ` ft. ${song.collaborator}` : ''}</p>
                    <div class="song-genre">${song.genre}</div>
                </div>
                
                <div class="song-info-grid">
                    <div class="info-item">
                        <div class="info-label">Hook</div>
                        <div class="info-value">"${song.hook}"</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Tempo</div>
                        <div class="info-value">${song.tempo}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Era Style</div>
                        <div class="info-value">${song.era}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Duration</div>
                        <div class="info-value">${song.length}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Release Strategy</div>
                        <div class="info-value">${song.release}</div>
                    </div>
                </div>
            </div>
        `;
        
        // Animate in the results
        setTimeout(() => {
            resultsCard.classList.add('fade-in');
        }, 100);
    }

    // Share song functionality
    shareSong() {
        const songTitle = document.querySelector('.song-title').textContent;
        const songArtist = document.querySelector('.song-artist').textContent;
        
        if (navigator.share) {
            navigator.share({
                title: `${songTitle} ${songArtist}`,
                text: `Check out this Drake-style song I created: ${songTitle} ${songArtist}`,
                url: window.location.href
            });
        } else {
            // Fallback to copy to clipboard
            const shareText = `Check out this Drake-style song I created: ${songTitle} ${songArtist} - ${window.location.href}`;
            navigator.clipboard.writeText(shareText).then(() => {
                // Show feedback
                const shareBtn = document.getElementById('shareBtn');
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

    // Reset to start over
    reset() {
        this.currentQuestion = 0;
        this.answers = {};
        
        // Hide results and show questions
        document.getElementById('resultsCard').classList.add('d-none');
        document.getElementById('questionCard').classList.remove('d-none');
        
        // Reset to first question
        this.updateQuestion();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SongCreator();
});
// Drake Song Creator - AI-powered song generation

class SongCreator {
    constructor() {
        this.currentQuestion = 0;
        this.totalQuestions = 8;
        this.answers = {};
        this.questions = [
            {
                id: 'vibe',
                icon: 'bi-music-note',
                title: "What's your song's main vibe?",
                subtitle: "Choose the overall mood and energy level for your track",
                options: [
                    { value: 'emotional', title: 'Emotional & Deep', description: 'Raw feelings and personal storytelling' },
                    { value: 'hype', title: 'Hype & Energetic', description: 'High energy club bangers and pump-up tracks' },
                    { value: 'chill', title: 'Chill & Melodic', description: 'Smooth vibes and laid-back melodies' },
                    { value: 'romantic', title: 'Romantic & Intimate', description: 'Love songs and intimate moments' }
                ]
            },
            {
                id: 'tempo',
                icon: 'bi-speedometer2',
                title: "What tempo feels right?",
                subtitle: "Set the pace and rhythm for your song",
                options: [
                    { value: 'slow', title: 'Slow & Steady', description: '60-80 BPM - Perfect for ballads and emotional tracks' },
                    { value: 'medium', title: 'Mid-Tempo', description: '80-110 BPM - Versatile and radio-friendly' },
                    { value: 'fast', title: 'Up-Tempo', description: '110+ BPM - Dance-ready and high energy' },
                    { value: 'variable', title: 'Dynamic Tempo', description: 'Mix of tempos throughout the song' }
                ]
            },
            {
                id: 'theme',
                icon: 'bi-heart',
                title: "What's your song about?",
                subtitle: "Choose the main theme or subject matter",
                options: [
                    { value: 'love', title: 'Love & Relationships', description: 'Romance, heartbreak, or passion' },
                    { value: 'success', title: 'Success & Ambition', description: 'Making it, grinding, achieving goals' },
                    { value: 'lifestyle', title: 'Lifestyle & Flexing', description: 'Living good, luxury, and status' },
                    { value: 'personal', title: 'Personal Growth', description: 'Self-reflection, overcoming challenges' }
                ]
            },
            {
                id: 'collaboration',
                icon: 'bi-people',
                title: "Who's featured on the track?",
                subtitle: "Select your ideal collaboration style",
                options: [
                    { value: 'solo', title: 'Solo Drake', description: 'Just Drake doing his thing' },
                    { value: 'rapper', title: 'Featured Rapper', description: 'Collaboration with another hip-hop artist' },
                    { value: 'singer', title: 'R&B Singer', description: 'Smooth vocals and harmonies' },
                    { value: 'producer', title: 'Producer Feature', description: 'Known producer with signature sound' }
                ]
            },
            {
                id: 'production',
                icon: 'bi-sliders',
                title: "What's the production style?",
                subtitle: "Choose the sound and instrumentation",
                options: [
                    { value: 'minimal', title: 'Minimalist', description: 'Clean, simple beats with space to breathe' },
                    { value: 'lush', title: 'Lush & Layered', description: 'Rich instrumentation and complex arrangements' },
                    { value: 'trap', title: 'Trap Influenced', description: 'Heavy 808s, hi-hats, and modern trap elements' },
                    { value: 'sample', title: 'Sample-Based', description: 'Built around classic soul, R&B, or hip-hop samples' }
                ]
            },
            {
                id: 'hook',
                icon: 'bi-mic',
                title: "How should the hook sound?",
                subtitle: "Define the most memorable part of your song",
                options: [
                    { value: 'catchy', title: 'Catchy & Melodic', description: 'Sing-along worthy with memorable melodies' },
                    { value: 'aggressive', title: 'Hard & Aggressive', description: 'Powerful delivery with attitude' },
                    { value: 'smooth', title: 'Smooth & Silky', description: 'Laid-back delivery with Drake\'s signature flow' },
                    { value: 'anthemic', title: 'Anthemic & Big', description: 'Stadium-ready with big energy' }
                ]
            },
            {
                id: 'length',
                icon: 'bi-clock',
                title: "How long should your song be?",
                subtitle: "Choose the ideal track length",
                options: [
                    { value: 'short', title: 'Short & Sweet', description: '2:30-3:00 - Concise and radio-friendly' },
                    { value: 'standard', title: 'Standard Length', description: '3:00-4:00 - Classic song format' },
                    { value: 'extended', title: 'Extended Version', description: '4:00-5:00 - Room for extra verses/bridges' },
                    { value: 'epic', title: 'Epic Length', description: '5:00+ - Album deep cut with multiple sections' }
                ]
            },
            {
                id: 'era',
                icon: 'bi-calendar3',
                title: "Which Drake era inspires you?",
                subtitle: "Choose the period that matches your vision",
                options: [
                    { value: 'early', title: 'Early Drake', description: 'So Far Gone / Thank Me Later era' },
                    { value: 'classic', title: 'Classic Drake', description: 'Take Care / NWTS era' },
                    { value: 'peak', title: 'Peak Drake', description: 'Views / More Life era' },
                    { value: 'modern', title: 'Modern Drake', description: 'CLB / Honestly Nevermind era' }
                ]
            }
        ];
        this.init();
    }

    init() {
        this.updateProgress();
        this.renderQuestion();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `Question ${this.currentQuestion + 1} of ${this.totalQuestions}`;
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        
        document.getElementById('questionIcon').className = `bi ${question.icon}`;
        document.getElementById('questionTitle').textContent = question.title;
        document.getElementById('questionSubtitle').textContent = question.subtitle;

        const optionsContainer = document.getElementById('questionOptions');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.setAttribute('data-value', option.value);
            
            if (this.answers[question.id] === option.value) {
                optionCard.classList.add('selected');
            }

            optionCard.innerHTML = `
                <div class="option-content">
                    <div class="option-title">${option.title}</div>
                    <div class="option-description">${option.description}</div>
                </div>
            `;

            optionCard.addEventListener('click', () => this.selectOption(question.id, option.value));
            optionsContainer.appendChild(optionCard);
        });

        // Update navigation buttons
        document.getElementById('prevBtn').disabled = this.currentQuestion === 0;
        document.getElementById('nextBtn').disabled = !this.answers[question.id];
        
        if (this.currentQuestion === this.totalQuestions - 1) {
            document.getElementById('nextBtn').innerHTML = 'Create Song <i class="bi bi-stars ms-2"></i>';
        } else {
            document.getElementById('nextBtn').innerHTML = 'Next <i class="bi bi-arrow-right ms-2"></i>';
        }
    }

    selectOption(questionId, value) {
        this.answers[questionId] = value;
        
        // Update UI
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        document.querySelector(`[data-value="${value}"]`).classList.add('selected');
        document.getElementById('nextBtn').disabled = false;
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions - 1) {
            this.currentQuestion++;
            this.updateProgress();
            this.renderQuestion();
        } else {
            this.generateSong();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.updateProgress();
            this.renderQuestion();
        }
    }

    generateSong() {
        const songData = this.createSongFromAnswers();
        this.displayResults(songData);
    }

    createSongFromAnswers() {
        // Generate song based on answers
        const titles = this.generateTitle();
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        
        return {
            title: randomTitle,
            artist: "Drake",
            genre: this.getGenre(),
            bpm: this.getBPM(),
            duration: this.getDuration(),
            description: this.getDescription(),
            lyrics: this.generateLyrics(),
            production: this.getProductionNotes()
        };
    }

    generateTitle() {
        const themes = {
            love: ['Midnight Confessions', 'Heart on My Sleeve', 'Digital Love', 'After Hours'],
            success: ['Gold Standard', 'Making Moves', 'Level Up', 'New Heights'],
            lifestyle: ['Living Right', 'Champagne Dreams', 'Top Floor', 'Million Dollar'],
            personal: ['Growing Pains', 'Self Made', 'Inner Circle', 'Real Talk']
        };
        return themes[this.answers.theme] || ['Untitled Track'];
    }

    getGenre() {
        const vibeToGenre = {
            emotional: 'Alternative R&B',
            hype: 'Hip-Hop/Trap',
            chill: 'Contemporary R&B',
            romantic: 'Slow Jam'
        };
        return vibeToGenre[this.answers.vibe] || 'Hip-Hop';
    }

    getBPM() {
        const tempoToBPM = {
            slow: '75 BPM',
            medium: '95 BPM',
            fast: '120 BPM',
            variable: '80-110 BPM'
        };
        return tempoToBPM[this.answers.tempo] || '95 BPM';
    }

    getDuration() {
        const lengthToDuration = {
            short: '2:45',
            standard: '3:30',
            extended: '4:15',
            epic: '5:30'
        };
        return lengthToDuration[this.answers.length] || '3:30';
    }

    getDescription() {
        return `A ${this.answers.vibe} track with ${this.answers.production} production, featuring ${this.answers.collaboration === 'solo' ? 'Drake solo' : 'a ' + this.answers.collaboration + ' collaboration'}. The song explores themes of ${this.answers.theme} with a ${this.answers.hook} hook that captures the ${this.answers.era} Drake sound.`;
    }

    generateLyrics() {
        return `[Intro]
Yeah, yeah
Started from the bottom now we here
${this.answers.vibe === 'emotional' ? 'Feeling all these emotions' : 'Ready for whatever'}

[Verse 1]
${this.generateVerse()}

[Hook]
${this.generateHook()}

[Verse 2]  
${this.generateVerse()}

[Hook]
${this.generateHook()}

[Outro]
${this.answers.theme === 'success' ? 'We made it this far' : 'That\'s how we do it'}`;
    }

    generateVerse() {
        const themes = {
            love: "Late nights, thinking \'bout you / Can't get you off my mind",
            success: "Started with a dream, now I'm living proof / Money don't change me",
            lifestyle: "Living like a king, champagne in my glass / Success on my mind",
            personal: "Looking in the mirror, seeing who I am / Growth through the pain"
        };
        return themes[this.answers.theme] || "Writing bars, living large / This is just the start";
    }

    generateHook() {
        const hooks = {
            catchy: "Can't stop, won't stop, living my dreams",
            aggressive: "I'm ready for war, bring all the smoke",
            smooth: "Take it easy, life's been good to me",
            anthemic: "We're rising up, nothing can stop us now"
        };
        return hooks[this.answers.hook] || "Living life, making hits";
    }

    getProductionNotes() {
        const production = {
            minimal: "Clean 808s, sparse hi-hats, lots of space for vocals",
            lush: "Full orchestra, layered harmonies, rich instrumentation", 
            trap: "Heavy 808 kicks, rapid hi-hats, dark synthesizers",
            sample: "Classic soul sample, chopped and screwed, vintage feel"
        };
        return production[this.answers.production] || "Modern hip-hop production";
    }

    displayResults(songData) {
        document.getElementById('questionCard').classList.add('d-none');
        document.getElementById('resultsCard').classList.remove('d-none');
        
        setTimeout(() => {
            document.getElementById('resultsCard').classList.add('fade-in');
        }, 100);

        document.getElementById('songResult').innerHTML = `
            <div class="song-header text-center mb-4">
                <div class="song-title">${songData.title}</div>
                <div class="song-artist">by ${songData.artist}</div>
                <div class="song-genre">${songData.genre}</div>
            </div>
            
            <div class="song-details">
                <div class="song-info-grid">
                    <div class="info-item">
                        <div class="info-label">BPM</div>
                        <div class="info-value">${songData.bpm}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Duration</div>
                        <div class="info-value">${songData.duration}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Production Style</div>
                        <div class="info-value">${songData.production}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Description</div>
                        <div class="info-value">${songData.description}</div>
                    </div>
                </div>
                
                <div class="lyrics-section mt-4">
                    <h5>Generated Lyrics</h5>
                    <div class="lyrics-content p-3" style="background: var(--secondary-bg); border-radius: var(--radius-md); white-space: pre-line; font-family: monospace; color: var(--text-secondary);">
                        ${songData.lyrics}
                    </div>
                </div>
            </div>
        `;
    }

    reset() {
        this.currentQuestion = 0;
        this.answers = {};
        document.getElementById('resultsCard').classList.add('d-none');
        document.getElementById('questionCard').classList.remove('d-none');
        this.updateProgress();
        this.renderQuestion();
    }
}

// Initialize Song Creator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('questionCard')) {
        new SongCreator();
    }
});
