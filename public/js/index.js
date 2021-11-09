let titulosArtigos = document.getElementsByClassName('titulo-artigo');
let listaSubtitulos = document.getElementsByClassName('lista-subtitulos');

titulosArtigos[0].addEventListener('click', function() {
  listaSubtitulos[0].style.display = "inline-block";

  setTimeout(function() {
    listaSubtitulos[0].style.bottom = "-10%";
    titulosArtigos[1].style.transform = "translate(10%, -200%)";
    setTimeout(function(){
      titulosArtigos[1].style.display = "none";
    }, 3000);
  }, 1);
});

titulosArtigos[1].addEventListener('click', function() {
  listaSubtitulos[1].style.display = "inline-block";

  setTimeout(function() {
    listaSubtitulos[1].style.bottom = "-27%";
  }, 1);
});
