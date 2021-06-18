const container = document.querySelector('#container');

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add('grid');
      container.appendChild(div);
      container.setAttribute('style', `grid-template-columns: 1fr repeat(${size}, 1fr);`)
    }
  }
}

function addHover() {
  const divs = document.querySelectorAll('.grid');
  divs.forEach(div  => 
    div.addEventListener('mouseenter', () => {
      div.classList.add('black');
    })
  )
}
createGrid(16);
addHover();

const clear =  document.querySelector('#clear');
clear.addEventListener('click', () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  let size =parseInt(prompt('How many squares per side?'));
  createGrid(size);
  addHover();
})
