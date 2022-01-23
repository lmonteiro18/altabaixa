let open = false;

let imagesDiv = document.querySelector(".artigo:first-child>div:nth-child(2)");

let titlesDiv = document.querySelectorAll(".artigo>div:first-child");

document.addEventListener("scroll", () => {
  let ratio = window.innerWidth / window.innerHeight;
  imagesDiv.style.transform = "translate(calc(50vw - " + (window.scrollY * ratio) + "px), 0)";
  titlesDiv.forEach((div, i) => {
    if (i === 0) {
      div.style.transform = "translateY(calc(-94% + " + window.scrollY * 2 + "px))";
    } else {
      div.style.transform = "translateY(calc(-86% + " + window.scrollY * 2 + "px))";
    }
  });
});


let botoesNavegacao = document.getElementsByClassName('botao-navegacao');
let artigos = document.getElementsByClassName('artigo');
let main = document.querySelector('main');
let header = document.querySelector('header');


for (let i = 0; i < botoesNavegacao.length; i++) {
  botoesNavegacao[i].addEventListener("click", () => {
    let titleDivs = document.querySelectorAll(".artigo>div:first-child");
    let textDivs = document.querySelectorAll(".artigo>div:last-child");
    if (!artigos[0].classList.contains("showArtigo") && !artigos[1].classList.contains("showArtigo")) {
      //abrir um artigo quando ambos estão fechados
      open = true;
      header.classList.add("smallHeader");
      main.classList.add("showMain");
      artigos[i].classList.add("showArtigo");
      setTimeout(() => {
        main.classList.add("changeOpacityMain");
        if (i === 0) {
          $(".artigo:first-child>div:first-child").animate({
            top: "0"
          }, 1000);
        } else {
          $(".artigo:last-child>div:first-child").animate({
            top: "0"
          }, 1000);
        }
        setTimeout(() => titleDivs[i].style.top = "0", 1000);
        textDivs[i].style.top = "0";
      }, 100);
    } else if (artigos[i].classList.contains("showArtigo")) { //fechar um artigo com o seu botão
      if (i === 0) {
        $(".artigo:first-child>div:first-child").animate({
          top: "-100vh"
        }, 1000);
      } else {
        $(".artigo:last-child>div:first-child").animate({
          top: "-100vh"
        }, 1000);
      }
      setTimeout(() => titleDivs[i].style.top = "-100vh", 1000);
      textDivs[i].style.top = "100vh";
      main.classList.remove("changeOpacityMain");
      setTimeout(() => artigos[i].classList.remove("showArtigo"), 1000);
      setTimeout(() => main.classList.remove("showMain"), 1000);
      header.classList.remove("smallHeader");
    } else if (!artigos[i].classList.contains("showArtigo")) { //abrir um artigo com o seu botão e fechar o outro
      open = true;
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
        $(".artigo:last-child>div:first-child").animate({
          top: "-100vh"
        }, 1000);
        $(".artigo:last-child>div:last-child").animate({
          top: "100vh"
        }, 1000);
        artigos[1].classList.remove("showArtigo");
        setTimeout(() => {
          titleDivs[1].style.top = "-100vh";
          textDivs[1].style.top = "100vh";
          $(".artigo:first-child>div").animate({
            top: "0"
          }, 1000);
          artigos[0].classList.add("showArtigo");
          setTimeout(() => {
            titleDivs[0].style.top = "0";
            textDivs[0].style.top = "0";
          }, 1000);
        }, 1000);
      } else {
        $(".artigo:first-child>div:first-child").animate({
          top: "-100vh"
        }, 1000);
        $(".artigo:first-child>div:last-child").animate({
          top: "100vh"
        }, 1000);
        artigos[0].classList.remove("showArtigo");
        setTimeout(() => {
          titleDivs[0].style.top = "-100vh";
          textDivs[0].style.top = "100vh";
          $(".artigo:last-child>div").animate({
            top: "0"
          }, 1000);
          artigos[1].classList.add("showArtigo");
          setTimeout(() => {
            titleDivs[1].style.top = "0";
            textDivs[1].style.top = "0";
          }, 1000);
        }, 1000);
      }
    }
  });
}

function getViewportHeight(elem) {
  let distance = elem.getBoundingClientRect();
  console.log(distance.top);

  return distance.top;
}

function isInViewport(elem) {
  let distance = elem.getBoundingClientRect();
  console.log(distance.top - vpHeight);
  return (
    distance.top >= 0 &&
    //distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) //&&
    //distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
