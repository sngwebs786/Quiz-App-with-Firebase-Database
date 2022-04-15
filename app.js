//writing questions

var quizQues = [
    {
        num: 1,
        ques: "Q1: HTML stands for ",
        option: {
            a: "a. Hyper Text Markup Language",
            b: "b. Hyper Tool Markup Language",
            c: "c. Hyper Text Modeling Language",
            d: "d. High Text Markup Language"
        },
        answer: "a. Hyper Text Markup Language"
    },

    {
        num: 2,
        ques: "Q2: Golf player Vijay Singh belongs to which country?",
        option: {
            a: "a. USA",
            b: "b. Fiji",
            c: "c. UK",
            d: "d. India"
        },
        answer: "b. Fiji"
    },

    {
        num: 3,
        ques: "Q3: First China War was fought between",
        option: {
            a: "a. China and Britain",
            b: "b. China and France",
            c: "c. China and Egypt",
            d: "d. China and Greek"
        },
        answer: "a. China and Britain"
    },

   
	
    {
        num: 4,
        ques: "Q4: The ozone layer restricts",
        option: {
            a: "a.  Visible light",
            b: "b. Infrared radiation",
            c: "c. X-rays and gamma rays",
            d: "d. Ultraviolet radiation"
        },
        answer: "d. Ultraviolet radiation"
    },

    {
        num: 5,
        ques: "Q5: Eugenics is the study of",
        option: {
            a: "a. altering human beings by changing their genetic components",
            b: "b. people of European origin",
            c: "c. different races of mankind",
            d: "d. genetic of plants"
        },
        answer: "a. altering human beings by changing their genetic components"
    },
    
   	
]










//get start button
var startBtn = document.getElementById('startBtn');

//get next button
var nextBtn = document.getElementById('nextBtn');

//get submit button
var submitBtn = document.getElementById('submitBtn');
//get submit button2
var submitBtn2 = document.getElementById('submitBtn2');

//get the whole div1
var quizBox1 = document.getElementById('quizBox1');

//get the whole div2
var quizBox2 = document.getElementById('quizBox2');

//get the whole div3
var quizBox3 = document.getElementById('quizBox3');

//get question
var question = document.getElementById('question');

//get options
var options = document.getElementsByClassName('option')


//Start Quiz Function

function start() {
    startTimer();
    var dispName=document.getElementById('dispName')
    var dispRoll=document.getElementById('dispRoll')

    var getName = document.getElementById('name')
    var getrollno = document.getElementById('rollno')

dispName.innerHTML +=getName.value;
dispRoll.innerHTML +=getrollno.value;

    quizBox1.setAttribute("class", " hide");
    quizBox2.classList.remove("hide");
    next();
}

//Next Que Function
var count = 0;

function next() {
    question.innerHTML = quizQues[count].ques
    options[0].innerHTML = quizQues[count].option.a
    options[1].innerHTML = quizQues[count].option.b
    options[2].innerHTML = quizQues[count].option.c
    options[3].innerHTML = quizQues[count].option.d
    
    for(var i=0;i<4;i++){
        options[i].classList.remove("disabled")
        
    }
    
    nextBtn.classList.add("hide")
    //remove red and green colors
    for (var i = 0; i < 4; i++) {
        options[i].classList.remove("right")
        options[i].classList.remove("wrong")
    }
    if (!(count == quizQues.length - 1)) {
        count++;
    }
}

// The Option selected by user
var counter = 0
var correctCounter=0;
var check=0
function select(list) {
    check++;
    if(check == 5){
        //adding submit btn
        nextBtn.classList.add("hide")
        submitBtn.classList.remove("hide")
    }
    else{
        nextBtn.classList.remove("hide")
    }   
    if (list.innerHTML === quizQues[counter].answer) {
        list.classList.add("right")
        correctCounter++
        console.log(correctCounter)
    }
    else {
        list.classList.add("wrong")
    }
    for(var i=0;i<4;i++){
        options[i].classList.add("disabled")
    }
    counter++
}


//Submit function

function submit(){
    quizBox1.setAttribute("class", " hide");
    quizBox2.setAttribute("class", " hide");
    quizBox3.classList.remove("hide");
    stopTimer()

    
    // WRITING RES

//Inputs

var fname = document.getElementById('name')
var email = document.getElementById('email')
var rollno = document.getElementById('rollno')
var section = document.getElementById('section')

//headings

var nameH=document.getElementById('nameH')
var emailH=document.getElementById('emailH')
var rollnoH=document.getElementById('rollnoH')
var sectionH=document.getElementById('sectionH')
var correctH=document.getElementById('correctH')
var wrongH=document.getElementById('wrongH')
var allqueH=document.getElementById('allqueH')
var totalH=document.getElementById('totalH')

nameH.innerHTML = "Name: " + fname.value;
emailH.innerHTML = "Email: " + email.value;
rollnoH.innerHTML = "Roll no: " + rollno.value;
sectionH.innerHTML = "Section: " + section.value;
allqueH.innerHTML = "Overall Questions: 5";
correctH.innerHTML = "Correct Answers: " + correctCounter;
wrongH.innerHTML += 5-correctCounter;
totalH.innerHTML += correctCounter*10;
}

function submit2(){
    // quizBox1.setAttribute("class", " hide");
    // quizBox2.setAttribute("class", " hide");
    quizBox3.classList.remove("hide");
    quizBox4.classList.add("hide");
    stopTimer()
    // WRITING RES

//Inputs

var fname = document.getElementById('name')
var email = document.getElementById('email')
var rollno = document.getElementById('rollno')
var section = document.getElementById('section')

//headings

var nameH=document.getElementById('nameH')
var emailH=document.getElementById('emailH')
var rollnoH=document.getElementById('rollnoH')
var sectionH=document.getElementById('sectionH')
var correctH=document.getElementById('correctH')
var wrongH=document.getElementById('wrongH')
var allqueH=document.getElementById('allqueH')
var totalH=document.getElementById('totalH')

nameH.innerHTML = "Name: " + fname.value;
emailH.innerHTML = "Email: " + email.value;
rollnoH.innerHTML = "Roll no: " + rollno.value;
sectionH.innerHTML = "Section: " + section.value;
allqueH.innerHTML = "Overall Questions: 5";
correctH.innerHTML = "Correct Answers: " + correctCounter;
wrongH.innerHTML += 5-correctCounter;
totalH.innerHTML += correctCounter*10;

}



//Timer
var minHeading = document.getElementById("minHeading");
var secHeading = document.getElementById("secHeading");
var min = 0;
var sec = 0;
var msec = 0;
function timer() {
    msec++;
    if (msec >= 100) {
        sec++;
        if (sec < 10) {
            secHeading.innerHTML = "0" + sec;
        } 
        else
        {
            secHeading.innerHTML = sec;
        }
        msec = 0;
    } else if (sec == 60)
    {
        min++;
        if (min < 10) {
            minHeading.innerHTML = "0" + min;
        } 
        else {
            minHeading.innerHTML = min;
        }
        sec = 0;
    } 
    else if (min==1){
        stopTimer();
        timesUp();
    }
}

function startTimer() {
    interval = setInterval(timer, 10)
}
function stopTimer() {
    clearInterval(interval)
}

function timesUp(){
    quizBox1.classList.add("hide")
    quizBox2.classList.add("hide")
    quizBox3.classList.add("hide")
    quizBox4.classList.remove("hide");
    
}


function read(){
    var quizBox5 = document.getElementById('quizBox5')
    quizBox5.classList.remove('hide')
    quizBox1.classList.add('hide')
    quizBox2.classList.add('hide')
    quizBox3.classList.add('hide')
    quizBox4.classList.add('hide')
}

function back(){
    quizBox5.classList.add('hide')
    quizBox1.classList.remove('hide')
}