const container = document.querySelector('.containerMain')



const level = document.getElementById('level')






document.getElementById('play').addEventListener('click', function(){
  play();
})



function play(){
  const level = parseInt(document.getElementById('level').value);
  const gridLevels = [100,81,49];
  const cellNumbers = gridLevels[level-1];
  const cellRow = Math.sqrt(cellNumbers);
  const BOMBS_NUMBER = 16;
  const bombeGenerate = generateBombs();

  let attempts = 0;
  const attemptsList = [];

  const MAX_ATTEMPTS = cellNumbers - BOMBS_NUMBER








  

  
  console.log('value selezionato: ',level)
  console.log('numero di celle ',cellNumbers)
  console.log('numero per dividere le celle: ',cellRow)
  /*
  altro modo per selezionare il livello
  si può fare anche con if
  let cellNumbers;
  switch(level){
    case 1:
      cellNumbers= 100;
      break;
    case 2:
      cellNumbers= 81;
      break;
    case 3:
      cellNumbers= 49;
      break;
  }
  */
  document.querySelector('main').innerHTML = '';
  generatePlayGround()

  // if()

  

  function generatePlayGround(){
    const grid = document.createElement('div');
    grid.className= 'grid';
    for (let i = 1; i <= cellNumbers; i++){
      const cell = document.createElement('div');
      cell.className= 'cell'
      cell.innerHTML= `<span>${i}</span>`;
      const cellSize = `calc(100% / ${cellRow})`;
      cell.style.width = cellSize;
      cell.style.height = cellSize;


      
    
      
      document.querySelector('main').append(grid)

        
      cell.addEventListener('click', handleClickCell)

      grid.append(cell)

      
    }

  

    
  }

 
  


  function handleClickCell(event){
    // this.classList.add('clicked');
    // console.log('il numero è ',event.target.innerText);

    const clickedNum = parseInt(event.target.innerText);
    console.log('clickedNum',clickedNum);

    // console.log('le bombe esistono?', bombeGenerate);
    
  

    // al verifica va fatta qua
    


  if(bombeGenerate.includes(clickedNum)){

    endGame();

  } else {
    //verifico se il tentativo non è già stato fatto
    // se non è presente 
    if(!attemptsList.includes(clickedNum)){
      //incremento il numero dei tenttivi
      attempts++;
      // aggiungo il numero nell'elenco
      attemptsList.push(clickedNum);
      //coloro la cella di azzurro
      this.classList.add('clicked');

      //verifico se ho completato le celle
      if(attemptsList === MAX_ATTEMPTS){
        //hai vinto
        endGame();
      }
    }

    
  }
    

  }

  function endGame(){
    /* 
    1. far colorare tutte le bombe
    2. 'congelare' il gioco
    3. generare un messaggio di output diverso se vinci o perdi
    */

    //prendo tutte le celle -> se sono bombe coloro di rosso
    const cells = document.getElementsByClassName('cell')
    for (let i = 0; i < cells.length; i++){
      // se l'indice della cella è incluso nelle bombe
      if(bombeGenerate.includes(i + 1)){
        cells[i].classList.add('bomb');
      }

      //elimino la possibilità di cliccare ancora (tolgo l'eventListener)
      cells[i].removeEventListener('click', handleClickCell);
      //altro metodo (neutralizzo il click)
      //cells[i].style.pointerEvents = 'none';

    }

    //messaggio di output
    let msg  = '';
    // se ho vinto
    if(attemptsList === MAX_ATTEMPTS){
      msg = 'Complimenti! Hai vinto!!'
    }else {
      // ho perso
      msg = `Hai perso! :-( Hai fatto ${attempts} tentativi`;
    }

    const output = document.createElement('div');
    output.innerHTML = `<h5>${msg}</h5>`
    document.querySelector('main').append(output);

    

  }

  
  


  function generateBombs(){
    const bombs = []
    //creo le bombe
    console.log('BOMBS_NUMBER',BOMBS_NUMBER)

    while(bombs.length < BOMBS_NUMBER){

      const bomb = getRandomInt(1, cellNumbers);

      if (!bombs.includes(bomb)) bombs.push(bomb);

      
    }

    //restituisco l'arrey pieno
    console.log('bombs arrey',bombs)
    return bombs;
    
  }




    



 

}

 function getRandomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  