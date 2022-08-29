

// 1st modal
const modal = document.querySelector(".modal");
const close = document.querySelector(".closing");
const close11 = document.querySelector(".btn-close");

// 2nd modal
const modal2 = document.querySelector(".m_1");
const close2 = document.querySelector(".clse");
const close22 = document.querySelector("#clse_");

// 3rd modal
const modalJs = document.querySelector(".m_2");
const close3 = document.querySelector(".cle");
const close33 = document.querySelector(".clos");

// 4th modal

const modalA = document.querySelector(".m_3");
const close4 = document.querySelector(".cle-ang");
const close44 = document.querySelector(".clos-ang");

// 5th modal

const modalR = document.querySelector(".m_4");
const close5 = document.querySelector(".clo-react");
const close55 = document.querySelector(".clos-react");


// 6th modal

const modalDot = document.querySelector(".m_5");
const close6 = document.querySelector(".clo-dotnet");
const close66 = document.querySelector(".clos-dotnet");

// 7th modal

const modalspring = document.querySelector(".m_6");
const close7 = document.querySelector(".clo-spring");
const close77 = document.querySelector(".clos-spring");

// 8th modal
const modalnode = document.querySelector(".m_7");
const close8 = document.querySelector(".clo-node");
const close88 = document.querySelector(".clos-node");

// 9th modal
const modalflutter = document.querySelector(".m_8");
const close9 = document.querySelector(".clo-flutter");
const close99 = document.querySelector(".clos-flutter");



// 10th modal//

const modalkotlin = document.querySelector(".m_9");
const close10 = document.querySelector(".clo-kotlin");
const close100 = document.querySelector(".clos-kotlin");

// 11th modal
const modalnative = document.querySelector(".m_10");
const close20 = document.querySelector(".clo-native");
const close120 = document.querySelector(".clos-native");

//12th modal
const modalsketch = document.querySelector(".m_11");
const close30 = document.querySelector(".clo-sketch");
const close130 = document.querySelector(".clos-sketch");

//13th modal
const modalAdobe = document.querySelector(".m_12");
const close40 = document.querySelector(".clo-Adobe");
const close140 = document.querySelector(".clos-Adobe");

//14th modal
const modalFigma = document.querySelector(".m_13");
const close50 = document.querySelector(".clo-Figma");
const close150 = document.querySelector(".clos-Figma");


//15th modal
const modalWebflow = document.querySelector(".m_14");
const close60 = document.querySelector(".clo-Webflow");
const close160 = document.querySelector(".clos-Webflow");

//16th modal
const modalBalsamiq = document.querySelector(".m_15");
const close70 = document.querySelector(".clo-Balsamiq");
const close170 = document.querySelector(".clos-Balsamiq");

var blur = document.querySelector("#blur");

function html() {

    modal.style.display = "block";
    blur.classList.toggle('active');
    modal.classList.toggle('active');

    close.addEventListener('click', () => {
        modal.style.display = "none";
        blur.classList.remove('active');
    })
    close11.addEventListener('click', () => {
        modal.style.display = "none";
        blur.classList.remove('active');
    })
}


function css() {
    modal2.style.display = "block";
    blur.classList.toggle('active');
    modal2.classList.toggle('active');

    close2.addEventListener('click', () => {
        modal2.style.display = "none";
        blur.classList.remove('active');
    })

    close22.addEventListener('click', () => {
        modal2.style.display = "none";
        blur.classList.remove('active');
    })

}


function js() {
    modalJs.style.display = "block";
    blur.classList.toggle('active');
    modalJs.classList.toggle('active');

    close3.addEventListener('click', () => {
        modalJs.style.display = "none";
        blur.classList.remove('active');
    })

    close33.addEventListener('click', () => {
        modalJs.style.display = "none";
        blur.classList.remove('active');
    })
}


function angular() {
    modalA.style.display = "block";
    blur.classList.toggle('active');
    modalA.classList.toggle('active');

    close4.addEventListener('click', () => {
        modalA.style.display = "none";
        blur.classList.remove('active');
    })

    close44.addEventListener('click', () => {
        modalA.style.display = "none";
        blur.classList.remove('active');
    })
}


function react() {
    modalR.style.display = "block";
    blur.classList.toggle('active');
    modalR.classList.toggle('active');

    close5.addEventListener('click', () => {
        modalR.style.display = "none";
        blur.classList.remove('active');
    })

    close55.addEventListener('click', () => {
        modalR.style.display = "none";
        blur.classList.remove('active');
    })
}

// --------------------------------------------------------------------//

function dotNet() {

    modalDot.style.display = "block";
    blur.classList.toggle('active');
    modalDot.classList.toggle("active");


    close6.addEventListener('click', () => {
        modalDot.style.display = "none";
        blur.classList.remove('active');
    })

    close66.addEventListener('click', () => {
        modalDot.style.display = "none";
        blur.classList.remove('active');
    })
}

function spring() {

    modalspring.style.display = "block";
    blur.classList.toggle('active');
    modalspring.classList.toggle("active");


    close7.addEventListener('click', () => {
        modalspring.style.display = "none";
        blur.classList.remove('active');
    })

    close77.addEventListener('click', () => {
        modalspring.style.display = "none";
        blur.classList.remove('active');
    })
}

function node() {

    modalnode.style.display = "block";
    blur.classList.toggle('active');
    modalnode.classList.toggle("active");


    close8.addEventListener('click', () => {
        modalnode.style.display = "none";
        blur.classList.remove('active');
    })

    close88.addEventListener('click', () => {
        modalnode.style.display = "none";
        blur.classList.remove('active');
    })
}


function flutter() {

    modalflutter.style.display = "block";
    blur.classList.toggle('active');
    modalflutter.classList.toggle("active");


    close9.addEventListener('click', () => {
        modalflutter.style.display = "none";
        blur.classList.remove('active');
    })

    close99.addEventListener('click', () => {
        modalflutter.style.display = "none";
        blur.classList.remove('active');
    })
}


function kotlin() {

    modalkotlin.style.display = "block";
    blur.classList.toggle('active');
    modalkotlin.classList.toggle("active");


    close10.addEventListener('click', () => {
        modalkotlin.style.display = "none";
        blur.classList.remove('active');
    })

    close100.addEventListener('click', () => {
        modalkotlin.style.display = "none";
        blur.classList.remove('active');
    })
}



function native() {

    modalnative.style.display = "block";
    blur.classList.toggle('active');
    modalnative.classList.toggle("active");


    close20.addEventListener('click', () => {
        modalnative.style.display = "none";
        blur.classList.remove('active');
    })

    close120.addEventListener('click', () => {
        modalnative.style.display = "none";
        blur.classList.remove('active');
    })
}


//----------------------------------------------------------------------//

function sketch() {

    modalsketch.style.display = "block";
    blur.classList.toggle('active');
    modalsketch.classList.toggle("active");


    close30.addEventListener('click', () => {
        modalsketch.style.display = "none";
        blur.classList.remove('active');
    })

    close130.addEventListener('click', () => {
        modalsketch.style.display = "none";
        blur.classList.remove('active');
    })
}



function Adobe() {

    modalAdobe.style.display = "block";
    blur.classList.toggle('active');
    modalAdobe.classList.toggle("active");


    close40.addEventListener('click', () => {
        modalAdobe.style.display = "none";
        blur.classList.remove('active');
    })

    close140.addEventListener('click', () => {
        modalAdobe.style.display = "none";
        blur.classList.remove('active');
    })
}

function Figma() {

    modalFigma.style.display = "block";
    blur.classList.toggle('active');
    modalFigma.classList.toggle("active");


    close50.addEventListener('click', () => {
        modalFigma.style.display = "none";
        blur.classList.remove('active');
    })

    close150.addEventListener('click', () => {
        modalFigma.style.display = "none";
        blur.classList.remove('active');
    })
}


function Webflow() {

    modalWebflow.style.display = "block";
    blur.classList.toggle('active');
    modalWebflow.classList.toggle("active");


    close60.addEventListener('click', () => {
        modalWebflow.style.display = "none";
        blur.classList.remove('active');
    })

    close160.addEventListener('click', () => {
        modalWebflow.style.display = "none";
        blur.classList.remove('active');
    })
}

function Balsamiq() {

    modalBalsamiq.style.display = "block";
    blur.classList.toggle('active');
    modalBalsamiq.classList.toggle("active");


    close70.addEventListener('click', () => {
        modalBalsamiq.style.display = "none";
        blur.classList.remove('active');
    })

    close170.addEventListener('click', () => {
        modalBalsamiq.style.display = "none";
        blur.classList.remove('active');
    })
}