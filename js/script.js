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
    this.classList.add('clicked');
    console.log('il numero è ',event.target.innerText);

    const clickedNum = parseInt(event.target.innerText);
    console.log('clickedNum',clickedNum);

    console.log('le bombe esistono?', bombeGenerate);
    
  

    // al verifica va fatta qua
    for (let i =0; i< bombeGenerate.length ; i++){
      // console.log('elementi array',bombeGenerate[i])
    
      console.log('ogni elemento',bombeGenerate[i])

        if(bombeGenerate.includes(clickedNum)){
          console.log('questo numero fa parte dell array', clickedNum );
   
          this.classList.add('bomb');
        }

        if(clickedNum === bombeGenerate[i]){

          this.classList.add('bomb');
        }
    
    }


  
    

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
  