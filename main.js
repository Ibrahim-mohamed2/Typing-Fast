//arra of words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

//setting leves
const lvls = {
    "easy": 5,
    "normal": 3,
    "hard": 2
};

//default level name
let defaultlevelname = "normal";
let defaultlevelsecond = lvls[defaultlevelname];

//get all things in html page
let startbutton = document.querySelector('.start');
let levelnamespan = document.querySelector('.message .lvl');
let levelsecondspan = document.querySelector('.message .seconds');
let theword = document.querySelector('.the-word');
let theinput = document.querySelector('.input');
let uncomingwords = document.querySelector('.upcoming-words');
let time = document.querySelector('.control .time span');
let score = document.querySelector('.control .score .got');
let scoretotal = document.querySelector('.control .score .total');
let finismessage = document.querySelector('.finish');


//setting level +seconds
levelnamespan.innerHTML = defaultlevelname;
levelsecondspan.innerHTML = defaultlevelsecond;
time.innerHTML = defaultlevelsecond;
scoretotal.innerHTML = words.length;

//displed paste event
theinput.onpaste = function ()
{
    return false;
}
    

//start game
startbutton.onclick = function ()
{
    this.remove();
    theinput.focus();

    //genrate word function
    genwords();

}
function genwords()
{
    //get random word
    let randomword = words[Math.floor(Math.random() * words.length)];
    
    
//get word index
    let wordindex = words.indexOf(randomword);

    //remove word 
    words.splice(wordindex, 1);

    //show the random word 
    theword.innerHTML = randomword;

    uncomingwords.innerHTML = '';

    //create div element
    for (let i = 0; i < words.length; i++)
    {
         let div = document.createElement('div');
    let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        uncomingwords.appendChild(div);
        
    }
    
    //start play function
    playtimer();
}

function playtimer()
{
    time.innerHTML = defaultlevelsecond;
    let start = setInterval(() => {
        
        time.innerHTML--;
        if (time.innerHTML === "0")
        {
            clearInterval(start);

            //compare words
            if (theword.innerHTML.toLocaleLowerCase() === theinput.value.toLocaleLowerCase())
            {
                //empty field
                theinput.value = '';
                //increase score
                score.innerHTML++;
                if (words.length > 0)
                {
                    //call genrate function
                    genwords();
                }
                else
                {
                  let span = document.createElement("span");
                span.className = 'good';
                let spantext = document.createTextNode('congralution');
                span.appendChild(spantext);
                finismessage.appendChild(span);   
                    }

            } else
            {
                let span = document.createElement("span");
                span.className = 'bad';
                let spantext = document.createTextNode('game over');
                span.appendChild(spantext);
                finismessage.appendChild(span);

                }

            }
    },1000)
}

