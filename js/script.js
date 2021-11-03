const container = document.querySelector('.containerMain')

const listNumber = []

const level = document.getElementById('level')
console.log(level)





document.getElementById('play').addEventListener('click', function(){
  play()
})



function play(){
  const level = parseInt(document.getElementById('level').value);
  const gridLevels = [100,81,49];
  const cellNumbers = gridLevels[level-1];
  const cellRow = Math.sqrt(cellNumbers);

  console.log('numero per dividere le celle: ',cellRow)
  console.log('value selezionato: ',level)
  console.log('numero di celle ',cellNumbers)
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


      grid.append(cell)
      
      document.querySelector('main').append(grid)

    }


  }

}

