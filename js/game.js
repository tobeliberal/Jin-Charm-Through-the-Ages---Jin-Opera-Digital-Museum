
const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameOverText = document.getElementById("gameOver");
const rows = 8, cols = 8;
let score = 0;
let timeLeft = 30;
let gameActive = true;
const elements = ['🎭', '🥁', '🎵', '👘', '🎤']; // 晋剧元素
let board = [];

function createBoard() {
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            let randomElement = elements[Math.floor(Math.random() * elements.length)];
            board[i][j] = randomElement;
        }
    }
    updateBoard();
}

function updateBoard() {
    grid.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = board[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            grid.appendChild(cell);
        }
    }
}

function getMatchingGroup(row, col, symbol, visited = new Set()) {
    let matches = [];
    let stack = [[row, col]];
    while (stack.length) {
        let [r, c] = stack.pop();
        let key = `${r},${c}`;
        if (visited.has(key) || r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== symbol) {
            continue;
        }
        visited.add(key);
        matches.push([r, c]);
        stack.push([r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]);
    }
    return matches;
}

function removeMatches(matches) {
    if (matches.length < 3) return;
    matches.forEach(([r, c]) => {
        let cell = document.querySelector(`[data-row='${r}'][data-col='${c}']`);
        if (cell) cell.classList.add("matched");
        board[r][c] = '';
    });
    score += matches.length * 10;
    scoreDisplay.textContent = score;
}

function dropElements() {
    for (let j = 0; j < cols; j++) {
        let emptySpots = 0;
        for (let i = rows - 1; i >= 0; i--) {
            if (board[i][j] === '') {
                emptySpots++;
            } else if (emptySpots > 0) {
                board[i + emptySpots][j] = board[i][j];
                board[i][j] = '';
            }
        }
        for (let i = 0; i < emptySpots; i++) {
            board[i][j] = elements[Math.floor(Math.random() * elements.length)];
        }
    }
}

grid.addEventListener("click", (e) => {
    if (!gameActive) return;
    if (e.target.classList.contains("cell")) {
        let row = parseInt(e.target.dataset.row);
        let col = parseInt(e.target.dataset.col);
        let symbol = board[row][col];
        let matches = getMatchingGroup(row, col, symbol);
        if (matches.length >= 3) {
            removeMatches(matches);
            setTimeout(() => {
                dropElements();
                updateBoard();
            }, 300);
        }
    }
});

function startTimer() {
    let timer = setInterval(() => {
        if (!gameActive) {
            clearInterval(timer);
            return;
        }
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameActive = false;
    gameOverText.style.display = "block";
}

createBoard();
startTimer();

document.addEventListener('DOMContentLoaded', function() {
    // 确保所有导航链接使用正确的相对路径
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        // 移除之前的点击事件监听
        link.onclick = null;
        
        // 添加新的点击处理
        link.addEventListener('click', function(e) {
            // 阻止默认行为（如果使用a标签）
            e.preventDefault();
            
            // 获取目标URL
            const targetUrl = this.getAttribute('href');
            
            // 添加页面过渡效果
            document.body.style.opacity = '0.5';
            document.body.style.transition = 'opacity 0.3s ease';
            
            // 延迟跳转以显示过渡效果
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
    'use strict';

// 页面加载时的过渡效果
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

});
// 导航菜单点击跳转
document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetUrl = this.getAttribute('href');
    
    // 添加页面过渡效果
    document.body.style.opacity = '0.5';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 300);
});
});
});