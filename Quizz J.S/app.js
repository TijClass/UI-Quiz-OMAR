const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');
const contain = document.getElementById('container');
const divs = document.querySelectorAll('div');
/* A node list in Javascript is an array it can be iterative */

const correctAnswers = ["B","B","B","B"]

//FORM SUBMITTING

formi.addEventListener('submit', e => { 
     e.preventDefault(); //to stop the event normal behavior and refreshing the page    
    var answer = document.querySelector('#answer');
    var btn1 = document.querySelector('.quiz-form')
    var pattern = /^[a-zA-Z]{6,12}$/
    if (pattern.test(answer.value)){
        btn1.setAttribute("disabled",true);
        answer.setAttribute("disabled",true);
        var newElement = document.createElement('input');
        newElement.setAttribute("type","text")
        newElement.setAttribute("disabled",true);
        newElement.setAttribute('value',answer.value);
        newElement.setAttribute('id',"nameans");
        newElement.classList.add("req_box")
        document.querySelector('.req').append(newElement)
        answer.value=""
        alert("Koolchi is ok");

    }else {
        alert("you didnt respect the regex");
    }
    
    });
function getCheckedValue(radios) {
        
}
document.querySelector(".btn.btn-light").addEventListener('click', e => {
    let nameans = document.querySelector("#nameans");
    if(nameans.value == "")
    return false;
    e.preventDefault();
    var checkedRadios = document.querySelectorAll('[type="radio"]:checked');
    var corectAnswerCount = 0
    checkedRadios.forEach((radio,index)=>{
        if(radio.value == correctAnswers[index]) corectAnswerCount +=25;
    })
    annimateScore(corectAnswerCount)
});

function annimateScore(corectAnswerCount) {
    let step = 0;
    scrollTo(0,0);
    document.querySelector(".result").classList.remove('d-none');
        setInterval(() => {
            if(step >= corectAnswerCount){return false;}
            step++;
            document.querySelector(".result").querySelector('span').innerText = " "+step+"% ";
        }, 50);
}