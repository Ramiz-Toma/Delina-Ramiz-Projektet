// script.js

// Lägg till händelselyssnare för länkarna
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    fetchData('home.html');
});

document.getElementById('info-link').addEventListener('click', function(event) {
    event.preventDefault();
    fetchData('information.html');
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    fetchData('contact.html');
});

// Funktion för att hämta data från servern
function fetchData(url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Lyckad förfrågan, uppdatera innehållet på sidan
                document.getElementById('content').innerHTML = xhr.responseText;
            } else {
                // Felhantering om förfrågan misslyckas
                console.error('Det uppstod ett fel: ' + xhr.status);
            }
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}
// script.js

// Funktion för att lägga till i kundvagnen
function addToCart(productName) {
    alert('Du har lagt till ' + productName + ' i din kundvagn.');
}
