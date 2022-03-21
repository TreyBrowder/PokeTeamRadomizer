const poke1Name = document.getElementById('poke1Name');
const poke2Name = document.getElementById('poke2Name');
const poke3Name = document.getElementById('poke3Name');
const poke4Name = document.getElementById('poke4Name');
const poke5Name = document.getElementById('poke5Name');
const poke6Name = document.getElementById('poke6Name');

const poke1lvl = document.getElementById('poke1Level');
const poke2lvl = document.getElementById('poke2Level');
const poke3lvl = document.getElementById('poke3Level');
const poke4lvl = document.getElementById('poke4Level');
const poke5lvl = document.getElementById('poke5Level');
const poke6lvl = document.getElementById('poke6Level');

const generateBtn = document.querySelector('.generateBtn')
const teamLimit = 7;


generateBtn.addEventListener("click",()=>{
    for(let i = 1; i < teamLimit; i++){
        let num1 = randNum();
        let randLvl = randLevel();
        console.log(num1);
        fetch(`https://pokeapi.co/api/v2/pokemon/${num1}`)
        .then(res => res.json())
        .then(jsondata => {
            
            //set the inner text of poke 1-6 based on random number
            //set the level of poke 1-6 based on random level getter
            if(i == 1){
                poke1Name.innerHTML = `${jsondata.name}`;
                poke1lvl.innerHTML = randLvl;
            }else if(i == 2){
                poke2Name.innerHTML = `${jsondata.name}`;
                poke2lvl.innerHTML = randLvl;
            }else if(i == 3){
                poke3Name.innerHTML = `${jsondata.name}`;
                poke3lvl.innerHTML = randLvl;
            }else if(i == 4){
                poke4Name.innerHTML = `${jsondata.name}`;
                poke4lvl.innerHTML = randLvl;
            }else if(i == 5){
                poke5Name.innerHTML = `${jsondata.name}`;
                poke5lvl.innerHTML = randLvl;
            }else{
                poke6Name.innerHTML = `${jsondata.name}`;
                poke6lvl.innerHTML = randLvl;
            }
            
        })
    }
})

function randNum(){
    let randomNum = Math.round(Math.random() * 151);

    return randomNum;
}

function randLevel(){
    let randomLevel = Math.round(Math.random() * 100);
    if(randLevel == 0){
        randLevel += 10;
    }
    return randomLevel;
}