//navigation scipts
var path = window.location.pathname;
var page = path.split("/").pop();
console.log(window.location.pathname);

function openNavigation() {
    document.getElementById("teaHouseSlideshow").style.width = "100%";
    document.getElementById("teaHouseSlideshow").style.display = "block";
}

function closeNavigation() {
    document.getElementById("teaHouseSlideshow").style.width = "0";
}

function navigationOnTrigger() {
    var navigation = document.getElementById("teaHouseSlideshow");
    var properties = window.getComputedStyle(navigation, null);
    if (properties.width == "0px") {
        openNavigation();
        document.getElementById("teaHouseSlideshow").style.display = "block";
    } else {
        closeNavigation();
    }
}

let check_window = window.matchMedia("(min-width: 1200px)");

function reset_to_mobileView(format) {
    if (check_window.matches) {
        document.getElementById("teaHouseSlideshow").style.width = "auto";
        document.getElementById("teaHouseSlideshow").style.display = "block";
    } else {
        closeNavigation();
    }
}
reset_to_mobileView(check_window);
check_window.addListener(reset_to_mobileView);

var slideIndex = 1;
var timer = null;
getSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    getSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    getSlides(slideIndex = n);
}

function getSlides(n) {

    if (page == "") {
        var i;
        var slides_img = document.getElementsByClassName("homepage_slides");
        var slide_dot_icons = document.getElementsByClassName("dot");
        if (n == undefined) {
            n = ++slideIndex
        }
        if (n > slides_img.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides_img.length
        }
        for (i = 0; i < slides_img.length; i++) {
            slides_img[i].style.display = "none";
        }
        for (i = 0; i < slide_dot_icons.length; i++) {
            slide_dot_icons[i].className = slide_dot_icons[i].className.replace(" active", "");
        }
        slides_img[slideIndex - 1].style.display = "block";
        slide_dot_icons[slideIndex - 1].className = slide_dot_icons[slideIndex - 1].className + " active";
        timer = setTimeout(getSlides, 5000);
    }
}

function scrollToTypesofTea() {
    window.scrollTo(0, 650);
}

function scrollToBenefitsofTea() {
    window.scrollTo(0, 3700);
}

function scrollToTopManufacturers(move) {
    window.scrollTo(0, 1640);
}


function openURI(uri_link) {
    window.location.href = uri_link;
}

function openNewTab(link) {
    window.open(link);
}

//index slideshow scripts