//Inicializa o wow.js
new WOW ().init();

//botao para voltar ao topo
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Zoom para as imagens
$('.zoom').imagezoomsl({
    zoomrange: [1, 15],
    cursorshadeborder: '10px solid #000',
    magnifiereffectanimate: 'fadeIn',
    magnifierpos: 'left',
    innerzoommagnifier: true
});

$('.zoom-destaque').imagezoomsl({
    zoomrange: [1, 20],
    cursorshadeborder: '10px solid #000',
    magnifiereffectanimate: 'fadeIn',
    magnifierpos: 'left',
    innerzoommagnifier: true
});





