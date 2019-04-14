var suiv = document.getElementById("suivant");
var avant = document.getElementById("avant");
var prec = document.getElementById("precedent");
var apres = document.getElementById("apres");
var deb = document.getElementById("deb");
var fin = document.getElementById("fin");
var max = document.getElementById("maxVIP").value;

var debut = 0;
document.getElementById("debut").value = debut;
suiv.onclick = function suiv() {
    if (debut <= max - 12) {
        debut = debut + 12;
    }

    document.getElementById("debut").value = debut;
    var i = debut;
    while (i < debut + 12 && i != max) {
        var element = document.getElementById(i);
        element.style.display = "inline-block";
        i++;
    }
    var j = debut - 12;
    while (j < debut) {
        var element = document.getElementById(j);
        element.style.display = "none";
        j++;
    }

};

prec.onclick = function prec() {
    if (debut > 0) {
        debut = debut - 12;
    }

    document.getElementById("debut").value = debut;
    var i = debut;
    while (i < debut + 12 && i != max) {
        var element = document.getElementById(i);
        element.style.display = "inline-block";
        i++;
    }
    var j = debut + 12;
    while (j < debut + 24 && j != max) {
        var element = document.getElementById(j);
        element.style.display = "none";
        j++;
    }

};

deb.onclick = function deb() {
    debut = 0;
    document.getElementById("debut").value = debut;
    var i = debut;
    while (i < debut + 12 && i != max) {
        var element = document.getElementById(i);
        element.style.display = "inline-block";
        i++;
    }
    var j = debut + 12;
    while (j < max) {
        var element = document.getElementById(j);
        element.style.display = "none";
        j++;
    }
};

fin.onclick = function fin() {
    debut = max - (max % 12);
    document.getElementById("debut").value = debut;
    var i = debut;
    while (i < debut + 12 && i != max) {
        var element = document.getElementById(i);
        element.style.display = "inline-block";
        i++;
    }
    var j = 0;
    while (j < 36) {
        var element = document.getElementById(j);
        element.style.display = "none";
        j++;
    }
};


avant.onclick = function avant() {
    if (debut > 0) {
        debut = debut - 12;
    }

    document.getElementById("debut").value = debut;
    var i = debut;
    while (i < debut + 12 && i != max) {
        var element = document.getElementById(i);
        element.style.display = "inline-block";
        i++;
    }
    var j = debut + 12;
    while (j < debut + 24 && j != max) {
        var element = document.getElementById(j);
        element.style.display = "none";
        j++;
    }
};