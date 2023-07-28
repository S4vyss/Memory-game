const values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
const container = document.querySelector('.grid');
let selected = [];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(values);

for (let i = 0; i < values.length; i++) {
    let box = document.createElement('div');
    box.className = `item item${i}`;
    box.classList.add('box');
    box.innerHTML = values[i]

    box.onclick = () => {
        let ithBox = document.querySelector(`.item${i}`);
        ithBox.classList.add('boxOpen');
        selected.push(ithBox);
        console.log(selected)
        setTimeout(async () => {
            if (selected.length > 1) {
                if (selected[0].innerHTML === selected[1].innerHTML) {
                    selected[0].classList.add('match')
                    selected[1].classList.add('match')
                } else {
                    let index = selected.indexOf(ithBox)
                    if (index > -1) {
                        selected.splice(index, 1);
                    }
                    console.log(selected)
                    ithBox.classList.remove('boxOpen');
                }
            }
            ithBox.classList.remove('boxOpen');
        }, 1000);
        setTimeout(() => {
            selected = [];
            console.log(selected);
        }, 1000);
    }
    container.appendChild(box);
}