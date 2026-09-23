const design = {
    baggrund: "striber",
    vase: "hvid",
    ramme: "guld",
    blomst: "orange"
};

const pakker = {
    efteraar: {
        baggrund: "striber",
        vase: "hvid",
        ramme: "guld",
        blomst: "orange"
    },
    nordisk: {
        baggrund: "tern",
        vase: "blaa",
        ramme: "trae",
        blomst: "lys"
    },
    kontrast: {
        baggrund: "boelger",
        vase: "sort",
        ramme: "sort",
        blomst: "rosa"
    }
};

const navne = {
    baggrund: {
        striber: "Stribet baggrund",
        tern: "Ternet baggrund",
        boelger: "Bølget baggrund",
        prikker: "Prikket baggrund"
    },
    vase: {
        hvid: "hvid vase",
        terrakotta: "terrakotta vase",
        blaa: "blå vase",
        sort: "sort vase"
    },
    ramme: {
        guld: "guldramme",
        trae: "træramme",
        sort: "sort ramme"
    },
    blomst: {
        orange: "orange blomster",
        lys: "lyse blomster",
        rosa: "rosa blomster"
    }
};

const plakatPreview = document.querySelector("#plakatPreview");
const vasePreview = document.querySelector("#vasePreview");
const rammePreview = document.querySelector("#rammePreview");
const blomstPreview = document.querySelector("#blomstPreview");
const designTekst = document.querySelector("#designTekst");
const alleValg = document.querySelectorAll("[data-type]");
const pakkeKnapper = document.querySelectorAll(".pakke-knap");
const burgerMenu = document.querySelector("#burgerMenu");
const burgerPop = document.querySelector("#burgerPop");

function skiftKlasse(element, nyKlasse) {
    element.className = nyKlasse;
}

function opdaterTekst() {
    designTekst.textContent =
        navne.baggrund[design.baggrund] + ", " +
        navne.vase[design.vase] + ", " +
        navne.blomst[design.blomst] + " og " +
        navne.ramme[design.ramme] + ".";
}

function markerValgteKnapper() {
    alleValg.forEach(function (knap) {
        const type = knap.dataset.type;
        const value = knap.dataset.value;

        if (design[type] === value) {
            knap.classList.add("valgt");
        } else {
            knap.classList.remove("valgt");
        }
    });
}

function visDesign() {
    skiftKlasse(plakatPreview, "plakat " + design.baggrund);
    skiftKlasse(vasePreview, "vase " + design.vase);
    skiftKlasse(rammePreview, "plakat-ramme " + design.ramme);
    skiftKlasse(blomstPreview, "blomst " + design.blomst);

    markerValgteKnapper();
    opdaterTekst();
}

alleValg.forEach(function (knap) {
    knap.addEventListener("click", function () {
        const type = knap.dataset.type;
        const value = knap.dataset.value;

        design[type] = value;
        visDesign();
    });
});

pakkeKnapper.forEach(function (knap) {
    knap.addEventListener("click", function () {
        const valgtPakke = pakker[knap.dataset.package];

        design.baggrund = valgtPakke.baggrund;
        design.vase = valgtPakke.vase;
        design.ramme = valgtPakke.ramme;
        design.blomst = valgtPakke.blomst;

        visDesign();
        document.querySelector("#designer").scrollIntoView({ behavior: "smooth" });
    });
});

burgerMenu.addEventListener("click", function () {
    burgerPop.classList.toggle("show");

    const menuErAaben = burgerPop.classList.contains("show");
    burgerMenu.textContent = menuErAaben ? "✕" : "☰";
    burgerMenu.setAttribute("aria-expanded", menuErAaben);
});

burgerPop.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        burgerPop.classList.remove("show");
        burgerMenu.textContent = "☰";
        burgerMenu.setAttribute("aria-expanded", "false");
    });
});

visDesign();
