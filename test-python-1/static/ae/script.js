window.onload = () => {

  const arr = document.getElementsByClassName('img-background')
  for (let x of arr) {
    let rnd = 1 + Math.floor(Math.random() * 77);
    x.style.backgroundImage = `url(/ae/api/random-crab/${rnd})`;
  }

}
