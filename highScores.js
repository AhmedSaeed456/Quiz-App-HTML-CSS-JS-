const highScoresList = document.getElementById('highScoresList');
const hightScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML= (
hightScores.map(score => {
   return (`<li class="high-score">${score.name} - ${score.score}</li>`); 
}).join('')
);