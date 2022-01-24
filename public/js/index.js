let cursor = document.querySelector(".cursor");
let cursorText = document.querySelector(".cursor p");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
}

let imagesDiv = document.querySelector(".artigo:first-child>div:nth-child(2)");

let titlesDiv = document.querySelectorAll(".artigo>div:first-child");

document.addEventListener("scroll", () => {
  let ratio = window.innerWidth / window.innerHeight;
  imagesDiv.style.transform = "translate(calc(50vw - " + (window.scrollY * ratio) + "px), 0)";
  titlesDiv.forEach((div, i) => {
    if (window.innerWidth > 768) {
      if (i === 0) {
        div.style.transform = "translateY(calc(-94% + " + window.scrollY * 2 + "px))";
      } else {
        div.style.transform = "translateY(calc(-86% + " + window.scrollY * 2 + "px))";
      }
    } else {
      if (i === 0) {
        div.style.transform = "translateY(calc(-95.5% + " + window.scrollY * 2 + "px))";
      } else {
        div.style.transform = "translateY(calc(-89% + " + window.scrollY * 2 + "px))";
      }
    }
  });
});


let botoesNavegacao = document.getElementsByClassName('botao-navegacao');
let artigos = document.getElementsByClassName('artigo');
let main = document.querySelector('main');
let header = document.querySelector('header');
let video = document.querySelector('.menu-flex-item:last-child');
let actualVideo = document.querySelector('.menu-flex-item:last-child video');
let presentationText = document.querySelector('.menu-flex-item:last-child p');
let showPresentation = false;

function togglePresentationVisibility() {
  showPresentation = !showPresentation;
  if (showPresentation) {
    presentationText.style.opacity = "1";
    actualVideo.style.opacity = "0";
    presentationText.style.transform = "translateY(0)";
    actualVideo.style.transform = "translateY(-100vh)";
  } else {
    presentationText.style.opacity = "0";
    actualVideo.style.opacity = "1";
    presentationText.style.transform = "translateY(100vh)";
    actualVideo.style.transform = "translateY(0)";
  }
}

function changeCursor(color) {
  if (color === "#0AA3E4") {
    cursor.style.borderColor = color;
    cursor.style.width = "2.5rem";
    cursor.style.height = "2.5rem";
  } else {
    cursor.style.borderColor = color;
    cursor.style.width = "2rem";
    cursor.style.height = "2rem";
  }
}

video.addEventListener("click", () => {
  togglePresentationVisibility();
});
actualVideo.addEventListener("mouseover", () => {
  changeCursor("#0AA3E4");
  cursorText.innerText = "Click to show/hide presentation text";
});
actualVideo.addEventListener("mouseout", () => {
  changeCursor("black");
  if (video.style.opacity !== "0") {
    cursorText.innerText = "Pick an article";
  }
});
presentationText.addEventListener("mouseover", () => {
  changeCursor("#0AA3E4");
  cursorText.innerText = "Click to show/hide presentation text";
});
presentationText.addEventListener("mouseout", () => {
  changeCursor("black");
  if (video.style.opacity !== "0") {
    cursorText.innerText = "Pick an article";
  }
});

function showArticleName(i) {
  if (i === 0) {
    cursorText.innerText = "Thirteen Ways of Looking at a Typeface";
    cursorText.style.transform = "translateX(60%)";
    cursorText.style.textAlign = "left";
  } else {
    cursorText.innerText = "TypEm - Adapting a Typeface to Text Emotions";
    cursorText.style.transform = "translateX(-60%)";
    cursorText.style.textAlign = "right";
  }
}

function resetCursor(text) {
  cursorText.innerText = text;
  cursorText.style.transform = "translateX(0)";
  cursorText.style.textAlign = "center";
}

for (let i = 0; i < botoesNavegacao.length; i++) {
  botoesNavegacao[i].addEventListener("mouseover", () => {
    changeCursor("#0AA3E4");
    showArticleName(i);
  });
  botoesNavegacao[i].addEventListener("mouseout", () => {
    changeCursor("black");
    if (video.style.opacity === "0") {
      resetCursor("Now just scroll");
    } else {
      resetCursor("Pick an article");
    }
  });
  botoesNavegacao[i].addEventListener("click", () => {
    let titleDivs = document.querySelectorAll(".artigo>div:first-child");
    let textDivs = document.querySelectorAll(".artigo>div:last-child");
    if (!artigos[0].classList.contains("showArtigo") && !artigos[1].classList.contains("showArtigo")) {
      if (actualVideo.style.transform === "translateY(-100vh)") {
        togglePresentationVisibility();
      }
      if (i === 0) {
        $(".artigo:first-child>div:nth-child(2)").animate({
          transform: "translate(50vw,0)"
        }, 1000);
        imagesDiv.style.transform = "translate(50vw,0)";
      }
      //abrir um artigo quando ambos estão fechados
      video.style.opacity = "0";
      //cursorText.innerText = "Now just scroll";
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
        textDivs[i].style.top = "20vh";
      }, 100);
    } else if (artigos[i].classList.contains("showArtigo")) { //fechar um artigo com o seu botão
      if (i === 0) {
        $(".artigo:first-child>div:first-child").animate({
          top: "-100vh"
        }, 1000);
        $(".artigo:first-child>div:nth-child(2)").animate({
          transform: "translate(100vw,0)"
        }, 1000);
        imagesDiv.style.transform = "translate(100vw,0)";
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
      cursorText.innerText = "Pick an article";
      video.style.opacity = "1";
    } else if (!artigos[i].classList.contains("showArtigo")) { //abrir um artigo com o seu botão e fechar o outro
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
          $(".artigo:first-child>div:first-child").animate({
            top: "0"
          }, 1000);
          $(".artigo:first-child>div:last-child").animate({
            top: "20vh"
          }, 1000);
          artigos[0].classList.add("showArtigo");
          $(".artigo:first-child>div:nth-child(2)").animate({
            transform: "translate(50vw,0)"
          }, 1000);
          imagesDiv.style.transform = "translate(50vw,0)";
          setTimeout(() => {
            titleDivs[0].style.top = "0";
            textDivs[0].style.top = "20vh";
          }, 1000);
        }, 1000);
      } else {
        $(".artigo:first-child>div:first-child").animate({
          top: "-100vh"
        }, 1000);
        $(".artigo:first-child>div:last-child").animate({
          top: "100vh"
        }, 1000);
        $(".artigo:first-child>div:nth-child(2)").animate({
          transform: "translate(100vw,0)"
        }, 1000);
        imagesDiv.style.transform = "translate(100vw,0)";
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
