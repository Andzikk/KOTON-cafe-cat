
//funkcja inicializująca google maps
function initMap() {
    let map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 51.11162 , lgn: 17.03360},
        zoom: 12
    });
    // dodanie markera na mapie
    let marker = new google.maps.Marker({
        position:{lat: 51.11162 , lgn: 17.03360},
        map: map,
        title: 'KOTON Cat Cafe'

    });
}
// funkcja dynamicznego załadowania skryptu Googlemaps
function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAXuCUUwxWJ1t2nSsTwzhPlJsh1BM9IPxw';
    script.async = true;
    document.head.appendChild(script);
}
window.onload = loadScript;


// googleMaps API key - ;