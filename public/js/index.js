let titlesDiv = document.querySelectorAll(".artigo>div:first-child");

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  titlesDiv.forEach((div, i) => {
    if (i === 0) {
      div.style.transform = "translateY(calc(-90.5% + " + window.scrollY * 2 + "px))";
    }else{
      div.style.transform = "translateY(calc(-80% + " + window.scrollY * 2 + "px))";
    }
  });
});


let botoesNavegacao = document.getElementsByClassName('botao-navegacao');
let artigos = document.getElementsByClassName('artigo');
let main = document.querySelector('main');
let header = document.querySelector('header');


for (let i = 0; i < botoesNavegacao.length; i++) {
  botoesNavegacao[i].addEventListener("click", () => {
    if (!artigos[0].classList.contains("showArtigo") && !artigos[1].classList.contains("showArtigo")) {
      header.classList.add("smallHeader");
      main.classList.add("showMain");
      artigos[i].classList.add("showArtigo");
      setTimeout(() => main.classList.add("changeOpacityMain"), 100);
    } else if (artigos[i].classList.contains("showArtigo")) {
      main.classList.remove("changeOpacityMain");
      setTimeout(() => artigos[i].classList.remove("showArtigo"), 1000);
      setTimeout(() => main.classList.remove("showMain"), 1000);
      header.classList.remove("smallHeader");
    } else if (!artigos[i].classList.contains("showArtigo")) {
      let dist = window.scrollY;
      let counter = 0;
      while (dist > 0) {
        if (counter % 30 === 0) {
          window.scrollTo(0, dist);
          dist -= 1;
        }
        console.log("Dist: " + dist);
        console.log(window.scrollY);
        counter++;
      }
      if (i === 0) {
        artigos[1].classList.remove("showArtigo");
      } else {
        artigos[0].classList.remove("showArtigo");
      }
      artigos[i].classList.add("showArtigo");
    }
  });
}
