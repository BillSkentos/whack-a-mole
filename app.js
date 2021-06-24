const time = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const boxes = document.querySelectorAll(".square");
const score = document.getElementById("score");



//COUNTDOWN
startBtn.addEventListener('click',()=>{
  
  startBtn.disabled = true; 
  score.textContent = "0";  
  let interval = setInterval(()=>{
     
    const random = Math.floor(Math.random() * 9)+1;     
    time.textContent = decreaseCount(time.textContent);
      
    generateMole(1100);
    
    if(time.textContent==="0") {
      clearInterval(interval);
      time.textContent = "60";
      startBtn.disabled = false;
    }

  },1000)

});


//GENERATE MOLE 
async function generateMole(time){
  const random = Math.floor(Math.random() * 9)+1;
  const square = boxes[random-1];

  square.classList.add('mole');
  await sleep(time);
  square.classList.remove('mole'); 
}



//INCREASE SCORE 
boxes.forEach(box=>box.addEventListener('click',()=>{
    //if mole in box =>add point 
    if (hasClass(box,"mole")){
       console.log("mole found");
       score.textContent = parseInt(score.textContent) +1;
    }   

}));



//DECREASE COUNT 
function decreaseCount(tm){
  return tm-1;
}


function hasClass( target, className ) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}