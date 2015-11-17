
var map_component = L.map('map').setView([60.160, 24.942], 10);



mapLink = 
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map_component);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
    
}).addTo(map_component);


// add geocoder for searching locations
var osmGeocoder = new L.Control.OSMGeocoder();

map_component.addControl(osmGeocoder);


L.marker([60.160, 24.942]).addTo(map_component)
        .bindPopup("<b>Example of popup in Helsinki </b>").openPopup();

L.marker([62.96944, 23.008]).addTo(map_component)
        .bindPopup("<b> Service location in Lapua </b>").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
            .setLatLng(e.latlng)
            .setContent("Coordinates are: " + e.latlng.toString())
            .openOn(map_component);
}

map_component.on('click', onMapClick);







