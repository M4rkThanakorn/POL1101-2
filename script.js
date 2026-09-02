* {
    box-sizing: border-box;
    font-family: 'Sarabun', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

.container {
    max-width: 750px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 25px;
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

header h1 {
    color: #1e3c72;
    font-size: 1.6rem;
    margin-bottom: 5px;
}

header h2 {
    color: #555;
    font-size: 1rem;
    font-weight: 400;
}

.quiz-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    margin-bottom: 25px;
}

.progress-bar {
    font-weight: bold;
    color: #1e3c72;
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.question-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 20px;
}

.options-list {
    list-style: none;
}

.option-item {
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    padding: 12px 15px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.option-item:hover {
    background: #eef2f7;
    border-color: #cbd5e1;
}

.option-item.selected {
    background-color: #e2e8f0;
    border-color: #1e3c72;
    color: #1e3c72;
    font-weight: bold;
}

.actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.btn {
    background-color: #1e3c72;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s;
}

.btn:hover {
    background-color: #2a5298;
}

.btn-submit {
    background-color: #198754;
}

.btn-submit:hover {
    background-color: #146c43;
}

.btn-restart {
    background-color: #0b5ed7;
    margin-top: 15px;
}

.hidden {
    display: none !important;
}

/* สไตล์หน้าเฉลย */
.score-summary {
    text-align: center;
    padding: 10px 0 20px;
}

.score-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e3c72;
    margin: 10px 0;
}

.divider {
    border: 0;
    height: 1px;
    background: #e0e0e0;
    margin: 20px 0;
}

.review-item {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    margin-bottom: 20px;
}

.review-question {
    font-weight: bold;
    margin-bottom: 10px;
}

.user-answer-box {
    margin-bottom: 8px;
    font-size: 0.95rem;
}

.text-correct {
    color: #198754;
    font-weight: bold;
}

.text-wrong {
    color: #dc3545;
    font-weight: bold;
}

.explanation-list {
    background: #f8f9fa;
    padding: 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    margin-top: 10px;
}
