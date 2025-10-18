// IQArena Application JavaScript

// Application State
let appState = {
  currentView: 'landingPage',
  theme: 'light',
  testConfig: {
    type: 'standard',
    focus: 'mixed',
    userName: 'Guest User'
  },
  testData: {
    questions: [],
    currentQuestion: 0,
    answers: [],
    startTime: null,
    timeLimit: 0,
    timeRemaining: 0,
    timer: null
  },
  results: {
    score: 0,
    iqScore: 0,
    percentile: 0,
    accuracy: 0,
    timeEfficiency: 'Average',
    categoryBreakdown: {}
  }
};

// Question Bank
const questionBank = {
  logic: [
    {
      question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
      options: ["Yes, definitely", "No, not necessarily", "Only sometimes", "Cannot be determined"],
      correct: 0,
      difficulty: "medium",
      category: "logic"
    },
    {
      question: "What comes next in the sequence: 2, 6, 12, 20, 30, ___?",
      options: ["40", "42", "44", "38"],
      correct: 1,
      difficulty: "medium",
      category: "logic"
    },
    {
      question: "Sarah is taller than Mike. Mike is taller than John. John is taller than Emma. Who is the shortest?",
      options: ["Sarah", "Mike", "John", "Emma"],
      correct: 3,
      difficulty: "easy",
      category: "logic"
    },
    {
      question: "Book is to Reading as Fork is to ___?",
      options: ["Eating", "Cooking", "Kitchen", "Plate"],
      correct: 0,
      difficulty: "easy",
      category: "logic"
    },
    {
      question: "Which word does NOT belong: Circle, Square, Triangle, Rectangle, Sphere?",
      options: ["Circle", "Square", "Sphere", "Triangle"],
      correct: 2,
      difficulty: "medium",
      category: "logic"
    },
    {
      question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
      options: ["100 minutes", "5 minutes", "20 minutes", "10 minutes"],
      correct: 1,
      difficulty: "hard",
      category: "logic"
    },
    {
      question: "J F M A M J J A S O N ___. What comes next?",
      options: ["J", "D", "M", "P"],
      correct: 1,
      difficulty: "medium",
      category: "logic"
    },
    {
      question: "All roses are flowers. Some flowers fade quickly. Therefore:",
      options: ["All roses fade quickly", "Some roses fade quickly", "No roses fade quickly", "Cannot be determined"],
      correct: 3,
      difficulty: "hard",
      category: "logic"
    },
    {
      question: "If you rearrange the letters 'CIFAIPC' you would have the name of a(n):",
      options: ["City", "Animal", "Ocean", "Country"],
      correct: 2,
      difficulty: "medium",
      category: "logic"
    },
    {
      question: "What is the opposite of 'found'?",
      options: ["Lost", "Hidden", "Missing", "Absent"],
      correct: 0,
      difficulty: "easy",
      category: "logic"
    }
  ],
  patterns: [
    {
      question: "⭐⭐⚪ ⭐⭐⚪ ⭐⭐___ What comes next?",
      options: ["⭐", "⚪", "⭐⭐", "⚪⚪"],
      correct: 1,
      difficulty: "easy",
      category: "patterns"
    },
    {
      question: "🔵🔴🔵 🔴🔵🔴 🔵🔴___ What completes the pattern?",
      options: ["🔵", "🔴", "🔵🔴", "🔴🔵"],
      correct: 0,
      difficulty: "easy",
      category: "patterns"
    },
    {
      question: "What number comes next: 1, 4, 9, 16, 25, ___?",
      options: ["30", "36", "49", "35"],
      correct: 1,
      difficulty: "easy",
      category: "patterns"
    },
    {
      question: "△ ▢ ○ △ ▢ ___ What shape comes next?",
      options: ["△", "▢", "○", "◇"],
      correct: 2,
      difficulty: "easy",
      category: "patterns"
    },
    {
      question: "2, 3, 5, 7, 11, 13, ___. What's the next number?",
      options: ["15", "17", "19", "21"],
      correct: 1,
      difficulty: "medium",
      category: "patterns"
    },
    {
      question: "A B D G K P ___. What letter comes next?",
      options: ["Q", "T", "V", "W"],
      correct: 3,
      difficulty: "hard",
      category: "patterns"
    },
    {
      question: "1, 1, 2, 3, 5, 8, 13, ___. What's next?",
      options: ["18", "19", "21", "24"],
      correct: 2,
      difficulty: "medium",
      category: "patterns"
    },
    {
      question: "Z, Y, X, W, V, ___. What comes next?",
      options: ["U", "T", "S", "R"],
      correct: 0,
      difficulty: "easy",
      category: "patterns"
    },
    {
      question: "Complete: 3, 6, 12, 24, 48, ___",
      options: ["72", "84", "96", "108"],
      correct: 2,
      difficulty: "easy",
      category: "patterns"
    },
    {
      question: "🌙⭐🌙 ⭐🌙⭐ 🌙⭐___ What comes next?",
      options: ["🌙", "⭐", "🌙⭐", "⭐🌙"],
      correct: 0,
      difficulty: "easy",
      category: "patterns"
    }
  ],
  math: [
    {
      question: "If 5 workers can paint a house in 6 days, how many days will 3 workers take?",
      options: ["8 days", "9 days", "10 days", "12 days"],
      correct: 2,
      difficulty: "medium",
      category: "math"
    },
    {
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      correct: 1,
      difficulty: "easy",
      category: "math"
    },
    {
      question: "If x + 7 = 15, what is x?",
      options: ["6", "7", "8", "9"],
      correct: 2,
      difficulty: "easy",
      category: "math"
    },
    {
      question: "A train travels 60 km in 45 minutes. What is its speed in km/h?",
      options: ["70", "75", "80", "85"],
      correct: 2,
      difficulty: "medium",
      category: "math"
    },
    {
      question: "What is the next prime number after 17?",
      options: ["18", "19", "21", "23"],
      correct: 1,
      difficulty: "easy",
      category: "math"
    },
    {
      question: "If a shirt costs $40 after a 20% discount, what was the original price?",
      options: ["$48", "$50", "$52", "$60"],
      correct: 1,
      difficulty: "medium",
      category: "math"
    },
    {
      question: "What is 7 × 8 + 12 ÷ 4?",
      options: ["59", "60", "61", "62"],
      correct: 0,
      difficulty: "medium",
      category: "math"
    },
    {
      question: "A rectangular garden is 12m long and 8m wide. What is its area?",
      options: ["86 sq m", "92 sq m", "96 sq m", "100 sq m"],
      correct: 2,
      difficulty: "easy",
      category: "math"
    },
    {
      question: "If 3x - 5 = 16, what is x?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      difficulty: "medium",
      category: "math"
    },
    {
      question: "What is 25% of 80?",
      options: ["15", "18", "20", "22"],
      correct: 2,
      difficulty: "easy",
      category: "math"
    }
  ],
  spatial: [
    {
      question: "How many faces does a cube have?",
      options: ["4", "6", "8", "12"],
      correct: 1,
      difficulty: "easy",
      category: "spatial"
    },
    {
      question: "If you fold a piece of paper in half 3 times and cut a hole through all layers, how many holes will there be when unfolded?",
      options: ["3", "6", "8", "9"],
      correct: 2,
      difficulty: "hard",
      category: "spatial"
    },
    {
      question: "Which 2D shape has exactly 5 sides?",
      options: ["Pentagon", "Hexagon", "Octagon", "Heptagon"],
      correct: 0,
      difficulty: "easy",
      category: "spatial"
    },
    {
      question: "Looking at a clock, what is the angle between hour and minute hands at 3:00?",
      options: ["60 degrees", "75 degrees", "90 degrees", "120 degrees"],
      correct: 2,
      difficulty: "medium",
      category: "spatial"
    },
    {
      question: "How many edges does a triangular pyramid have?",
      options: ["4", "5", "6", "8"],
      correct: 2,
      difficulty: "medium",
      category: "spatial"
    }
  ]
};

// Test configurations
const testConfigs = {
  quick: { questions: 10, time_minutes: 8, description: "Quick assessment" },
  standard: { questions: 20, time_minutes: 15, description: "Comprehensive test" },
  advanced: { questions: 30, time_minutes: 25, description: "Full evaluation" }
};

// IQ Ranges
const iqRanges = [
  { min: 145, max: 200, label: "Genius", description: "Exceptionally gifted" },
  { min: 130, max: 144, label: "Very Superior", description: "Highly gifted" },
  { min: 120, max: 129, label: "Superior", description: "Well above average" },
  { min: 110, max: 119, label: "High Average", description: "Above average intelligence" },
  { min: 90, max: 109, label: "Average", description: "Normal intelligence" },
  { min: 80, max: 89, label: "Low Average", description: "Below average" },
  { min: 0, max: 79, label: "Below Average", description: "Significantly below average" }
];

// Mock leaderboard data
const leaderboardData = [
  { rank: 1, name: "Alex Chen", score: 142, test_type: "Advanced", date: "2025-10-18" },
  { rank: 2, name: "Priya Sharma", score: 138, test_type: "Standard", date: "2025-10-17" },
  { rank: 3, name: "Mohammed Ali", score: 135, test_type: "Advanced", date: "2025-10-18" },
  { rank: 4, name: "Emily Wang", score: 132, test_type: "Standard", date: "2025-10-16" },
  { rank: 5, name: "Rahul Verma", score: 128, test_type: "Quick", date: "2025-10-18" },
  { rank: 6, name: "Sofia Martinez", score: 125, test_type: "Standard", date: "2025-10-15" },
  { rank: 7, name: "David Kim", score: 122, test_type: "Advanced", date: "2025-10-17" },
  { rank: 8, name: "Aisha Patel", score: 120, test_type: "Standard", date: "2025-10-16" },
  { rank: 9, name: "Lucas Silva", score: 118, test_type: "Quick", date: "2025-10-18" },
  { rank: 10, name: "Nina Ivanova", score: 115, test_type: "Standard", date: "2025-10-14" }
];

// Utility Functions
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

function animateNumber(element, start, end, duration = 2000) {
  const startTime = performance.now();
  
  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOut);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }
  
  requestAnimationFrame(updateNumber);
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage?.getItem?.('iqarena-theme') || 'light';
  appState.theme = savedTheme;
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
  
  try {
    localStorage?.setItem?.('iqarena-theme', theme);
  } catch (e) {
    // Silent fail for localStorage restrictions
  }
}

function toggleTheme() {
  const newTheme = appState.theme === 'light' ? 'dark' : 'light';
  appState.theme = newTheme;
  applyTheme(newTheme);
}

// View Management
function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Show target view
  const targetView = document.getElementById(viewName);
  if (targetView) {
    targetView.classList.add('active');
    appState.currentView = viewName;
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// Test Setup Functions
function generateTestQuestions() {
  const config = testConfigs[appState.testConfig.type];
  const questionCount = config.questions;
  const focus = appState.testConfig.focus;
  
  let selectedQuestions = [];
  
  if (focus === 'mixed') {
    // Get questions from all categories
    const allQuestions = [...questionBank.logic, ...questionBank.patterns, ...questionBank.math, ...questionBank.spatial];
    selectedQuestions = shuffleArray(allQuestions).slice(0, questionCount);
  } else {
    // Get questions from specific category
    const categoryQuestions = questionBank[focus] || questionBank.logic;
    selectedQuestions = shuffleArray(categoryQuestions).slice(0, Math.min(questionCount, categoryQuestions.length));
    
    // Fill remaining with random questions if needed
    if (selectedQuestions.length < questionCount) {
      const allQuestions = [...questionBank.logic, ...questionBank.patterns, ...questionBank.math, ...questionBank.spatial];
      const remaining = shuffleArray(allQuestions.filter(q => !selectedQuestions.includes(q)));
      selectedQuestions.push(...remaining.slice(0, questionCount - selectedQuestions.length));
    }
  }
  
  // Shuffle options for each question
  selectedQuestions.forEach(question => {
    const correctAnswer = question.options[question.correct];
    question.options = shuffleArray([...question.options]);
    question.correct = question.options.indexOf(correctAnswer);
  });
  
  return selectedQuestions;
}

function startTest() {
  appState.testData.questions = generateTestQuestions();
  appState.testData.currentQuestion = 0;
  appState.testData.answers = new Array(appState.testData.questions.length).fill(null);
  appState.testData.startTime = Date.now();
  appState.testData.timeLimit = testConfigs[appState.testConfig.type].time_minutes * 60;
  appState.testData.timeRemaining = appState.testData.timeLimit;
  
  showView('testPage');
  setupTestInterface();
  startTimer();
  displayCurrentQuestion();
}

function setupTestInterface() {
  const totalQuestions = appState.testData.questions.length;
  
  // Setup question indicators
  const indicatorsContainer = document.getElementById('questionIndicators');
  indicatorsContainer.innerHTML = '';
  
  for (let i = 0; i < totalQuestions; i++) {
    const dot = document.createElement('div');
    dot.className = 'indicator-dot';
    if (i === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
  }
  
  // Setup progress bar
  updateProgress();
}

function displayCurrentQuestion() {
  const questionData = appState.testData.questions[appState.testData.currentQuestion];
  const questionIndex = appState.testData.currentQuestion;
  
  document.getElementById('questionNumber').textContent = `Question ${questionIndex + 1}`;
  document.getElementById('questionText').textContent = questionData.question;
  document.getElementById('progressText').textContent = `Question ${questionIndex + 1} of ${appState.testData.questions.length}`;
  
  // Update answer options
  const answerElements = ['answerA', 'answerB', 'answerC', 'answerD'];
  answerElements.forEach((elementId, index) => {
    document.getElementById(elementId).textContent = questionData.options[index];
  });
  
  // Clear previous selections
  document.querySelectorAll('.answer-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  // Restore previous answer if exists
  const previousAnswer = appState.testData.answers[questionIndex];
  if (previousAnswer !== null) {
    document.querySelector(`[data-answer="${previousAnswer}"]`).classList.add('selected');
    document.getElementById('nextBtn').disabled = false;
  } else {
    document.getElementById('nextBtn').disabled = true;
  }
  
  // Update next button text
  const nextBtn = document.getElementById('nextBtn');
  if (questionIndex === appState.testData.questions.length - 1) {
    nextBtn.innerHTML = 'Finish Test <span class="btn-icon">✓</span>';
  } else {
    nextBtn.innerHTML = 'Next Question <span class="btn-icon">→</span>';
  }
  
  updateProgress();
  updateIndicators();
}

function updateProgress() {
  const progress = ((appState.testData.currentQuestion + 1) / appState.testData.questions.length) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
}

function updateIndicators() {
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active', 'completed');
    
    if (index === appState.testData.currentQuestion) {
      dot.classList.add('active');
    } else if (index < appState.testData.currentQuestion || appState.testData.answers[index] !== null) {
      dot.classList.add('completed');
    }
  });
}

function startTimer() {
  const timerElement = document.getElementById('timerText');
  const timerFill = document.getElementById('timerFill');
  
  appState.testData.timer = setInterval(() => {
    appState.testData.timeRemaining--;
    
    // Update timer display
    timerElement.textContent = formatTime(appState.testData.timeRemaining);
    
    // Update timer visual
    const progress = (appState.testData.timeRemaining / appState.testData.timeLimit) * 100;
    timerFill.style.strokeDashoffset = 100 - progress;
    
    // Change color when time is running low
    if (appState.testData.timeRemaining <= 60) {
      timerFill.style.stroke = '#ef4444'; // Red
    } else if (appState.testData.timeRemaining <= 300) {
      timerFill.style.stroke = '#f59e0b'; // Orange
    }
    
    // Auto-submit when time runs out
    if (appState.testData.timeRemaining <= 0) {
      clearInterval(appState.testData.timer);
      finishTest();
    }
  }, 1000);
}

function selectAnswer(answerIndex) {
  // Clear previous selection
  document.querySelectorAll('.answer-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  // Select new answer
  document.querySelector(`[data-answer="${answerIndex}"]`).classList.add('selected');
  
  // Store answer
  appState.testData.answers[appState.testData.currentQuestion] = answerIndex;
  
  // Enable next button
  document.getElementById('nextBtn').disabled = false;
  
  updateIndicators();
}

function nextQuestion() {
  if (appState.testData.currentQuestion < appState.testData.questions.length - 1) {
    appState.testData.currentQuestion++;
    displayCurrentQuestion();
  } else {
    finishTest();
  }
}

function skipQuestion() {
  appState.testData.answers[appState.testData.currentQuestion] = null;
  nextQuestion();
}

function finishTest() {
  clearInterval(appState.testData.timer);
  
  // Show loading overlay
  document.getElementById('loadingOverlay').classList.add('active');
  
  setTimeout(() => {
    calculateResults();
    displayResults();
    showView('resultsPage');
    document.getElementById('loadingOverlay').classList.remove('active');
    
    // Trigger confetti if high score
    if (appState.results.iqScore >= 130) {
      triggerConfetti();
    }
  }, 2000);
}

function calculateResults() {
  const questions = appState.testData.questions;
  const answers = appState.testData.answers;
  const timeSpent = appState.testData.timeLimit - appState.testData.timeRemaining;
  const timeLimit = appState.testData.timeLimit;
  
  // Calculate raw score
  let correctAnswers = 0;
  let categoryScores = { logic: 0, patterns: 0, math: 0, spatial: 0 };
  let categoryCounts = { logic: 0, patterns: 0, math: 0, spatial: 0 };
  
  questions.forEach((question, index) => {
    const category = question.category;
    categoryCounts[category]++;
    
    if (answers[index] === question.correct) {
      correctAnswers++;
      categoryScores[category]++;
    }
  });
  
  // Calculate accuracy
  const accuracy = (correctAnswers / questions.length) * 100;
  
  // Calculate time efficiency
  let timeEfficiency = 'Average';
  const timeRatio = timeSpent / timeLimit;
  if (timeRatio < 0.5) timeEfficiency = 'Excellent';
  else if (timeRatio < 0.75) timeEfficiency = 'Good';
  else if (timeRatio < 0.9) timeEfficiency = 'Average';
  else timeEfficiency = 'Slow';
  
  // Time bonus calculation
  let timeBonus = 0;
  if (timeRatio < 0.5) timeBonus = 5;
  else if (timeRatio < 0.75) timeBonus = 3;
  
  // Difficulty multiplier
  let weightedScore = 0;
  let maxPossibleScore = 0;
  
  questions.forEach((question, index) => {
    let multiplier = 1.0;
    switch (question.difficulty) {
      case 'easy': multiplier = 1.0; break;
      case 'medium': multiplier = 1.2; break;
      case 'hard': multiplier = 1.5; break;
    }
    
    maxPossibleScore += multiplier;
    
    if (answers[index] === question.correct) {
      weightedScore += multiplier;
    }
  });
  
  // Calculate final IQ score
  const rawIQScore = 85 + (weightedScore / maxPossibleScore) * 40 + timeBonus;
  const iqScore = Math.min(145, Math.round(rawIQScore));
  
  // Calculate percentile
  let percentile = 50;
  if (iqScore >= 145) percentile = 99;
  else if (iqScore >= 130) percentile = 98;
  else if (iqScore >= 120) percentile = 91;
  else if (iqScore >= 115) percentile = 84;
  else if (iqScore >= 110) percentile = 75;
  else if (iqScore >= 105) percentile = 63;
  else if (iqScore >= 100) percentile = 50;
  else if (iqScore >= 95) percentile = 37;
  else if (iqScore >= 90) percentile = 25;
  else if (iqScore >= 85) percentile = 16;
  else percentile = 10;
  
  // Store results
  appState.results = {
    score: correctAnswers,
    totalQuestions: questions.length,
    iqScore: iqScore,
    percentile: percentile,
    accuracy: Math.round(accuracy),
    timeEfficiency: timeEfficiency,
    timeSpent: timeSpent,
    categoryBreakdown: {
      logic: categoryCounts.logic > 0 ? `${categoryScores.logic}/${categoryCounts.logic}` : '0/0',
      patterns: categoryCounts.patterns > 0 ? `${categoryScores.patterns}/${categoryCounts.patterns}` : '0/0',
      math: categoryCounts.math > 0 ? `${categoryScores.math}/${categoryCounts.math}` : '0/0',
      spatial: categoryCounts.spatial > 0 ? `${categoryScores.spatial}/${categoryCounts.spatial}` : '0/0'
    }
  };
}

function displayResults() {
  const results = appState.results;
  
  // Animate IQ score
  const iqScoreElement = document.getElementById('iqScore');
  animateNumber(iqScoreElement, 0, results.iqScore, 2000);
  
  // Set IQ label
  const iqRange = iqRanges.find(range => results.iqScore >= range.min && results.iqScore <= range.max);
  document.getElementById('iqLabel').textContent = iqRange ? iqRange.label : 'Average';
  
  // Set percentile
  document.getElementById('percentileValue').textContent = results.percentile;
  
  // Set breakdown values
  document.getElementById('accuracyValue').textContent = `${results.accuracy}%`;
  document.getElementById('timeEfficiency').textContent = results.timeEfficiency;
  document.getElementById('correctAnswers').textContent = `${results.score}/${results.totalQuestions}`;
  
  // Display category scores
  const categoryContainer = document.getElementById('categoryScores');
  categoryContainer.innerHTML = '';
  
  Object.entries(results.categoryBreakdown).forEach(([category, score]) => {
    if (score !== '0/0') {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category-score';
      categoryDiv.innerHTML = `
        <div class="category-score-label">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
        <div class="category-score-value">${score}</div>
      `;
      categoryContainer.appendChild(categoryDiv);
    }
  });
  
  // Update share text
  const shareText = `I scored ${results.iqScore} on IQArena! Can you beat my score? 🧠`;
  document.getElementById('shareText').textContent = shareText;
}

function setupLeaderboard() {
  const tbody = document.getElementById('leaderboardBody');
  tbody.innerHTML = '';
  
  leaderboardData.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'table-row';
    
    let rankClass = '';
    if (entry.rank === 1) rankClass = 'gold';
    else if (entry.rank === 2) rankClass = 'silver';
    else if (entry.rank === 3) rankClass = 'bronze';
    
    row.innerHTML = `
      <span class="rank ${rankClass}">${entry.rank}</span>
      <span>${entry.name}</span>
      <span>${entry.score}</span>
      <span>${entry.test_type}</span>
      <span>${entry.date}</span>
    `;
    
    tbody.appendChild(row);
  });
}

// Confetti Animation
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confetti = [];
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
  
  // Create confetti pieces
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: -10,
      dx: (Math.random() - 0.5) * 3,
      dy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 5 + 5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }
  
  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confetti.forEach((piece, index) => {
      piece.x += piece.dx;
      piece.y += piece.dy;
      piece.rotation += piece.rotationSpeed;
      
      ctx.save();
      ctx.translate(piece.x + piece.size / 2, piece.y + piece.size / 2);
      ctx.rotate(piece.rotation * Math.PI / 180);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
      ctx.restore();
      
      if (piece.y > canvas.height) {
        confetti.splice(index, 1);
      }
    });
    
    if (confetti.length > 0) {
      requestAnimationFrame(animateConfetti);
    }
  }
  
  animateConfetti();
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  // Navigation buttons
  document.getElementById('startTestBtn').addEventListener('click', () => showView('configPage'));
  document.getElementById('backToHomeBtn').addEventListener('click', () => showView('landingPage'));
  document.getElementById('beginTestBtn').addEventListener('click', () => {
    // Get user configuration
    appState.testConfig.userName = document.getElementById('userName').value || 'Guest User';
    appState.testConfig.focus = document.getElementById('testType').value;
    
    startTest();
  });
  
  // Test configuration options
  document.querySelectorAll('.config-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.config-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      appState.testConfig.type = option.dataset.config;
    });
  });
  
  // Answer selection
  document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', () => {
      const answerIndex = parseInt(option.dataset.answer);
      selectAnswer(answerIndex);
    });
  });
  
  // Test navigation
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('skipBtn').addEventListener('click', skipQuestion);
  
  // Results actions
  document.getElementById('retakeTestBtn').addEventListener('click', () => showView('configPage'));
  document.getElementById('viewLeaderboardBtn').addEventListener('click', () => {
    setupLeaderboard();
    showView('leaderboardPage');
  });
  document.getElementById('backToHomeBtn2').addEventListener('click', () => showView('landingPage'));
  
  // Share functionality
  document.getElementById('copyShareBtn').addEventListener('click', () => {
    const shareText = document.getElementById('shareText').textContent;
    navigator.clipboard?.writeText(shareText).then(() => {
      showToast('Copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Unable to copy to clipboard', 'error');
    });
  });
  
  document.getElementById('downloadCertBtn').addEventListener('click', () => {
    showToast('Premium feature - Coming soon!', 'info');
  });
  
  // Leaderboard navigation
  document.getElementById('backFromLeaderboardBtn').addEventListener('click', () => showView('resultsPage'));
  
  // About navigation
  document.getElementById('backFromAboutBtn').addEventListener('click', () => showView('landingPage'));
  
  // Leaderboard filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Filter logic would go here
    });
  });
}

// Initialize Application
function initApp() {
  // Set initial theme
  try {
    initTheme();
  } catch (e) {
    // Fallback to light theme if localStorage fails
    applyTheme('light');
  }
  
  // Setup event listeners
  setupEventListeners();
  
  // Show landing page
  showView('landingPage');
  
  console.log('🧠 IQArena initialized successfully!');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}