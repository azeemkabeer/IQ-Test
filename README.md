<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IQArena - Discover Your IQ in 10 Minutes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <div class="nav-brand">
                <h2>🧠 IQArena</h2>
            </div>
            <div class="nav-actions">
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                    <span class="theme-icon">🌙</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Landing Page -->
    <div id="landingPage" class="view active">
        <div class="hero">
            <div class="hero-content">
                <h1 class="hero-title">Discover Your IQ in <span class="accent">10 Minutes</span></h1>
                <p class="hero-subtitle">Take our scientifically designed test and get instant results with detailed analysis</p>
                <button class="btn btn--primary btn--hero" id="startTestBtn">
                    Start IQ Test
                    <span class="btn-icon">→</span>
                </button>
                <div class="hero-stats">
                    <span class="stat">📊 Join 10,000+ test takers</span>
                </div>
            </div>
        </div>
        
        <div class="features">
            <div class="container">
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Instant Results</h3>
                        <p>Get your IQ score and detailed analysis immediately after completing the test</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔬</div>
                        <h3>Scientific Method</h3>
                        <p>Based on proven cognitive assessment techniques used by professionals</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Track Progress</h3>
                        <p>Compare your performance and see how you rank against other test takers</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🏆</div>
                        <h3>Share Results</h3>
                        <p>Generate shareable certificates and challenge friends to beat your score</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Test Configuration Page -->
    <div id="configPage" class="view">
        <div class="config-container">
            <div class="config-header">
                <h1>Configure Your IQ Test</h1>
                <p>Choose your test preferences to get started</p>
            </div>
            
            <div class="config-form">
                <div class="form-group">
                    <label class="form-label">Test Length</label>
                    <div class="config-options">
                        <div class="config-option" data-config="quick">
                            <div class="config-option-header">
                                <h3>Quick</h3>
                                <span class="config-time">8 minutes</span>
                            </div>
                            <p>10 questions • Perfect for a quick assessment</p>
                        </div>
                        <div class="config-option selected" data-config="standard">
                            <div class="config-option-header">
                                <h3>Standard</h3>
                                <span class="config-time">15 minutes</span>
                            </div>
                            <p>20 questions • Comprehensive evaluation</p>
                        </div>
                        <div class="config-option" data-config="advanced">
                            <div class="config-option-header">
                                <h3>Advanced</h3>
                                <span class="config-time">25 minutes</span>
                            </div>
                            <p>30 questions • Full cognitive assessment</p>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Test Focus</label>
                    <select class="form-control" id="testType">
                        <option value="mixed">Mixed (All Categories)</option>
                        <option value="logic">Logic Focus</option>
                        <option value="patterns">Pattern Focus</option>
                        <option value="math">Math Focus</option>
                        <option value="spatial">Spatial Focus</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="userName" class="form-label">Your Name (Optional)</label>
                    <input type="text" id="userName" class="form-control" placeholder="Guest User" maxlength="30">
                </div>
                
                <div class="config-actions">
                    <button class="btn btn--secondary" id="backToHomeBtn">← Back</button>
                    <button class="btn btn--primary" id="beginTestBtn">
                        Begin Test
                        <span class="btn-icon">🚀</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Test Taking Page -->
    <div id="testPage" class="view">
        <div class="test-header">
            <div class="test-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <span class="progress-text" id="progressText">Question 1 of 20</span>
            </div>
            <div class="test-timer">
                <div class="timer-circle">
                    <svg class="timer-svg" viewBox="0 0 36 36">
                        <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path class="timer-fill" id="timerFill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    </svg>
                    <div class="timer-text" id="timerText">15:00</div>
                </div>
            </div>
        </div>
        
        <div class="test-content">
            <div class="question-container">
                <div class="question-number" id="questionNumber">Question 1</div>
                <div class="question-text" id="questionText">Loading question...</div>
            </div>
            
            <div class="answers-container">
                <div class="answer-option" data-answer="0">
                    <span class="answer-letter">A</span>
                    <span class="answer-text" id="answerA">Option A</span>
                </div>
                <div class="answer-option" data-answer="1">
                    <span class="answer-letter">B</span>
                    <span class="answer-text" id="answerB">Option B</span>
                </div>
                <div class="answer-option" data-answer="2">
                    <span class="answer-letter">C</span>
                    <span class="answer-text" id="answerC">Option C</span>
                </div>
                <div class="answer-option" data-answer="3">
                    <span class="answer-letter">D</span>
                    <span class="answer-text" id="answerD">Option D</span>
                </div>
            </div>
            
            <div class="test-actions">
                <button class="btn btn--secondary" id="skipBtn">Skip Question</button>
                <button class="btn btn--primary" id="nextBtn" disabled>
                    Next Question
                    <span class="btn-icon">→</span>
                </button>
            </div>
        </div>
        
        <div class="question-indicators" id="questionIndicators">
            <!-- Dots will be generated by JavaScript -->
        </div>
    </div>

    <!-- Results Page -->
    <div id="resultsPage" class="view">
        <div class="results-container">
            <div class="results-hero">
                <div class="iq-score-display">
                    <div class="iq-score" id="iqScore">0</div>
                    <div class="iq-label" id="iqLabel">Calculating...</div>
                </div>
                <div class="percentile-badge" id="percentileBadge">
                    You scored better than <span id="percentileValue">0</span>% of test takers
                </div>
            </div>
            
            <div class="results-breakdown">
                <h3>Detailed Breakdown</h3>
                <div class="breakdown-grid">
                    <div class="breakdown-item">
                        <div class="breakdown-icon">🧠</div>
                        <div class="breakdown-content">
                            <div class="breakdown-label">Overall Accuracy</div>
                            <div class="breakdown-value" id="accuracyValue">0%</div>
                        </div>
                    </div>
                    <div class="breakdown-item">
                        <div class="breakdown-icon">⏱️</div>
                        <div class="breakdown-content">
                            <div class="breakdown-label">Time Efficiency</div>
                            <div class="breakdown-value" id="timeEfficiency">Average</div>
                        </div>
                    </div>
                    <div class="breakdown-item">
                        <div class="breakdown-icon">🎯</div>
                        <div class="breakdown-content">
                            <div class="breakdown-label">Questions Correct</div>
                            <div class="breakdown-value" id="correctAnswers">0/0</div>
                        </div>
                    </div>
                </div>
                
                <div class="category-scores" id="categoryScores">
                    <!-- Category breakdown will be generated by JavaScript -->
                </div>
            </div>
            
            <div class="results-share">
                <h3>Share Your Score</h3>
                <div class="share-text" id="shareText">
                    I scored 120 on IQArena! Can you beat my score? 🧠
                </div>
                <div class="share-actions">
                    <button class="btn btn--secondary" id="copyShareBtn">
                        📋 Copy to Share
                    </button>
                    <button class="btn btn--outline" id="downloadCertBtn">
                        📄 Download Certificate
                    </button>
                </div>
            </div>
            
            <div class="results-actions">
                <button class="btn btn--secondary" id="viewLeaderboardBtn">
                    🏆 View Leaderboard
                </button>
                <button class="btn btn--primary" id="retakeTestBtn">
                    🔄 Retake Test
                </button>
                <button class="btn btn--outline" id="backToHomeBtn2">
                    🏠 Back to Home
                </button>
            </div>
        </div>
    </div>

    <!-- Leaderboard Page -->
    <div id="leaderboardPage" class="view">
        <div class="leaderboard-container">
            <div class="leaderboard-header">
                <h1>🏆 Leaderboard</h1>
                <p>Top performers on IQArena</p>
            </div>
            
            <div class="leaderboard-filters">
                <button class="filter-btn active" data-filter="all">All Time</button>
                <button class="filter-btn" data-filter="week">This Week</button>
                <button class="filter-btn" data-filter="today">Today</button>
            </div>
            
            <div class="leaderboard-table">
                <div class="table-header">
                    <span>Rank</span>
                    <span>Name</span>
                    <span>IQ Score</span>
                    <span>Test Type</span>
                    <span>Date</span>
                </div>
                <div class="table-body" id="leaderboardBody">
                    <!-- Leaderboard entries will be generated by JavaScript -->
                </div>
            </div>
            
            <div class="leaderboard-actions">
                <button class="btn btn--primary" id="backFromLeaderboardBtn">
                    ← Back to Results
                </button>
            </div>
        </div>
    </div>

    <!-- About Page -->
    <div id="aboutPage" class="view">
        <div class="about-container">
            <div class="about-header">
                <h1>How IQArena Works</h1>
                <p>Understanding your cognitive assessment</p>
            </div>
            
            <div class="about-content">
                <div class="about-section">
                    <h3>🧠 What is IQ?</h3>
                    <p>Intelligence Quotient (IQ) is a measure of cognitive abilities including reasoning, problem-solving, pattern recognition, and mathematical skills. Our test evaluates multiple aspects of intelligence to provide a comprehensive assessment.</p>
                </div>
                
                <div class="about-section">
                    <h3>🎯 Question Categories</h3>
                    <div class="category-list">
                        <div class="category-item">
                            <strong>Logic:</strong> Tests reasoning and deductive thinking
                        </div>
                        <div class="category-item">
                            <strong>Patterns:</strong> Evaluates pattern recognition and sequence completion
                        </div>
                        <div class="category-item">
                            <strong>Mathematics:</strong> Assesses numerical and computational abilities
                        </div>
                        <div class="category-item">
                            <strong>Spatial:</strong> Measures spatial reasoning and visualization
                        </div>
                    </div>
                </div>
                
                <div class="about-section">
                    <h3>📊 Scoring Method</h3>
                    <p>Your IQ score is calculated using a scientifically-based formula that considers:</p>
                    <ul>
                        <li>Number of correct answers</li>
                        <li>Question difficulty levels</li>
                        <li>Time efficiency</li>
                        <li>Statistical normalization</li>
                    </ul>
                    <p>Scores are mapped to standard IQ ranges with percentile rankings.</p>
                </div>
                
                <div class="about-section">
                    <h3>⚠️ Important Disclaimer</h3>
                    <p>This test provides an estimate of cognitive abilities for entertainment and educational purposes. For official psychological assessment, please consult a qualified professional.</p>
                </div>
            </div>
            
            <div class="about-actions">
                <button class="btn btn--primary" id="backFromAboutBtn">
                    ← Back to Home
                </button>
            </div>
        </div>
    </div>

    <!-- Confetti Canvas -->
    <canvas id="confettiCanvas"></canvas>
    
    <!-- Loading Overlay -->
    <div class="loading-overlay" id="loadingOverlay">
        <div class="loading-spinner"></div>
        <p>Calculating your IQ score...</p>
    </div>

    <script src="app.js"></script>
</body>
</html>
