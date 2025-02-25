const container = document.querySelector('#container');

function createGrid(size) {
  container.innerHTML = ''; 
  for(let i=0; i<size*size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
  }
}

createGrid(16);

container.addEventListener('mouseover', (e) => {
  if(e.target.classList.contains('grid')) {
    e.target.style.backgroundColor = 'pink';
  }
});

const newGridbtn = document.querySelector('#newGrid');
newGridbtn.addEventListener('click', () => {
  const size = prompt('Enter the size of the grid');
  if(isNaN(size)) {
    alert('Please enter a number');
  } else{
    createGrid(size);
    const h1 = document.querySelector('h1');
    h1.textContent = size + 'x' + size + ' Grid';
    adjustContainerSize(size);
  }
});

function adjustContainerSize(size) {
  
  //adjust the size of the container without gridtemplate but width and height
  container.style.width = `${size*25}px`;
  container.style.height = `${size*25}px`;
}
