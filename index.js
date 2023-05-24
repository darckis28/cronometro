let hr=min=sec=ms= "0" + 0,setTimer;
const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");
const inicoCron = ()=>{
    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");
    const millisecond = document.querySelector(".millisecond");
    hour.innerHTML=hr;
    minute.innerHTML=min;
    second.innerHTML=sec;
    millisecond.innerHTML=ms;
}
startBtn.addEventListener("click",()=>{
    startBtn.classList.add("active")
    stopBtn.classList.remove("active")
    resetBtn.classList.remove("active")
    startBtn.disabled=true;
    setTimer=setInterval(()=>{
        ms++;
        ms = ms <10?"0"+ms:ms;
        if(ms == 100){
            sec++;
            sec = sec <10?"0"+sec:sec;
            ms="0"+0;
        }
        if(sec == 60){
            min++;
            min = min <10?"0"+min:min;
            sec="0"+0;
        }
        if(min == 60){
            hr++;
            hr = hr <10?"0"+hr:hr;
            min="0"+0;
        }
        inicoCron();
    },10); 
    
})
stopBtn.addEventListener("click",()=>{
    startBtn.classList.remove("active")
    stopBtn.classList.add("active")
    resetBtn.classList.remove("active")
    startBtn.disabled=false;
    clearInterval(setTimer);
})
resetBtn.addEventListener("click",()=>{
    startBtn.classList.remove("active")
    stopBtn.classList.remove("active")
    resetBtn.classList.add("active")
    startBtn.disabled=false;
    hr=min=sec=ms= "0" + 0;
    clearInterval(setTimer)
    inicoCron();
})