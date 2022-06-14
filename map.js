var map = L.map('map',{ zoomControl: false}).setView([ 41.42116927910374, 32.076413038340704, -0.09], 17);

L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}">OpenStreetMap</a> contributors'
}).addTo(map);

var yellowIcon = new L.Icon({
	iconUrl: 'imgs/lefleat-icon.png',
	iconSize: [100, 100],
	iconAnchor: [12, 41],
	popupAnchor: [40, -14]
});

var popup = "Site Taksi";
    

var pupupOptions =
    {
    'minWidth': '65',
    'maxWidth':'80',
    'className' : 'custom'
    };

L.marker([ 41.42116927910374, 32.076413038340704, -0.09],{icon:yellowIcon}).bindPopup(popup,pupupOptions).addTo(map).openPopup();

new L.Control.Zoom({ position: 'topright' }).addTo(map);

var pupupstyle = document.querySelector('.leaflet-popup-content-wrapper, .leaflet-pupup-tip').style;
    pupupstyle.color = 'black';
    pupupstyle.fontSize = '.9rem';
    pupupstyle.fontWeight = '600';
    

