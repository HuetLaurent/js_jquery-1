//ex 1

$("#btn").click(function () {
    let element1 = document.createElement("h1");
    document.body.appendChild(element1);
    element1.textContent = "Hello World"
});

//ex 2

$("#textHover").hover(function () {
    let textHover = document.getElementById("textHover");
    textHover.classList.add("textHover");
});

//ex 3

$("#boiteDialogue").click(function () {
    let boiteDialogue = confirm("Vous allez être dirigés vers un autre site, continuez ?")
    if (boiteDialogue == true) {
        window.location.href = "https://github.com/";
    }
});

//ex 4

$("#btn2").click(function () {
    $("#div1").animate({
        opacity: '0.0',
    });
});

//ex 5 (skip)

//ex 6

$("#div2 h2").hover(function () {
    $("#div2 h2").animate({
        opacity: '0.5',
    });
});

//ex 7

$("#btn").bind('click', function() {
    alert("nouvelle div crée")
});

//ex 8

$("#carouselJS").car