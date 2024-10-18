window.onload = () => {

  const arr = document.getElementsByClassName('img-background')
  for (let x of arr) {
    let rnd = 1 + Math.floor(Math.random() * 77);
    x.style.backgroundImage = `url(/ae/i/crab/${rnd}.jpg)`;
  }

}

function playsound(number){
  let item = document.getElementById(`music${number}`);
  item.paused ? item.play() : item.pause();
}
