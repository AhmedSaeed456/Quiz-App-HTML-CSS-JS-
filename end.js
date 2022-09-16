const username=document.getElementById('username');
const saveScoreBtn=document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore=document.getElementById('finalScore');

const hightScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})
saveHeighScore = e => {
   
    e.preventDefault();
   
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    hightScores.push(score);
    
    hightScores.sort((a, b) => b.score - a.score);
    hightScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(hightScores));
    window.location.assign('/');
    console.log(hightScores);
}