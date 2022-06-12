console.log("CHROME EXTENSION BRUH")

let paragraphs = document.getElementsByTagName('p');

for (elem of paragraphs) {
    elem.style['background-color'] = '#FFF';
}

var allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, caption, span, td');
// var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
    if (allElements[i].innerText.toLowerCase().includes("home")) {
        console.log("SFPOEIJfPSOIF");
        console.log(allElements[i].innerHTML);
        allElements[i].innerHTML = allElements[i].innerHTML.replace("Raman", "YOYOYOY");
        allElements[i].innerHTML = "[SPOILER]";
        allElements[i].style['background-color'] =  "#F00";
        console.log("REPlaced");
    }
    // console.log(allElements[i].innerText)
}